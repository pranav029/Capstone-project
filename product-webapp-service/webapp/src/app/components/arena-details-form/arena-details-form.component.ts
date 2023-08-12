import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ground } from 'src/app/models/Ground';
import { GroundDetailService } from 'src/app/services/GroundDetailService';
import { ImageUploaderService } from 'src/app/services/ImageUploaderService';
import { RegionService } from 'src/app/services/RegionService';
import { TimeUtils } from 'src/app/utils/TimeUtils';
import { ArenaDetailPresenter } from './ArenaDetailPresenter';
import { ArenaDetailPresenterImpl } from './ArenaDetailPresenterImpl';
import { ArenaView } from './ArenaView';

namespace SnacbarType {
  export const SUCCESS = 'successful'
  export const FAILURE = "fail"
}
@Component({
  selector: 'app-arena-details-form',
  templateUrl: './arena-details-form.component.html',
  styleUrls: ['./arena-details-form.component.css'],
})
export class ArenaDetailsFormComponent implements ArenaView, OnInit {
  countries: string[] = []
  states: string[] = []
  cities: string[] = []
  startTimes: TimeUtils.TimesInfo[] = []
  endTimes: TimeUtils.TimesInfo[] = []
  isFetchingRegion: boolean = false
  isLoaderVisible: boolean = false
  isErrorMessageVisible: boolean = false
  errorMessage: string = ''
  fileError: string = ''
  detailFormGroup!: FormGroup
  file!: File
  ground: Ground = {
    ownerEmail: '',
    groundType: '',
    groundName: '',
    address: {
      streetName: '',
      city: '',
      state: '',
      country: '',
    },
    slot: {
      openingTime: '',
      closingTime: '',
    },
    amenities: '',
    rating: 0
  }
  presenter!: ArenaDetailPresenter;
  constructor(
    groundDetailService: GroundDetailService,
    imageUploadService: ImageUploaderService,
    regionService: RegionService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.presenter = new ArenaDetailPresenterImpl(regionService, groundDetailService, imageUploadService, this);
  }

  ngOnInit(): void {
    this.startTimes = TimeUtils.getTimes('')
    this.presenter.fetchCountries()
    this.initForm()
  }

  showFetchingRegion(): void {
    this.isFetchingRegion = true
  }
  hideFetchingRegion(): void {
    this.isFetchingRegion = false
  }
  updateCountry(countries: string[]): void {
    this.countries = countries
    console.log(this.countries)
  }
  updateState(states: string[]): void {
    this.states = states
    console.log(this.states)
  }
  updateCity(cities: string[]): void {
    this.cities = cities
  }
  showError(message: string): void {
    this.errorMessage = message
    this.isErrorMessageVisible = true
  }
  showData(ground: Ground): void {
    throw new Error('Method not implemented.');
  }
  showSuccess(message: string): void {
    this.showSnackBar(message, SnacbarType.SUCCESS)
    this.detailFormGroup.reset()
  }
  showLoader(): void {
    this.isLoaderVisible = true;
  }
  hideLoader(): void {
    this.isLoaderVisible = false;
  }
  reset(): void {
    this.isErrorMessageVisible = false
    this.isLoaderVisible = false
    this.errorMessage = ''
    this.detailFormGroup.reset()
  }

  onSubmit() {
    if (this.detailFormGroup.valid && this.fileError.length == 0) {
      this.saveData()
    }
  }

  private saveData() {
    this.prepareData()
    this.presenter.submitForm(this.ground, this.file);
  }

  private prepareData() {
    this.detailFormGroup.get('ownerEmail')?.touched
    this.ground = {
      ownerEmail: this.detailFormGroup.value.ownerEmail,
      groundType: this.detailFormGroup.value.groundType,
      groundName: this.detailFormGroup.value.groundName,
      address: {
        streetName: this.detailFormGroup.value.streetName,
        city: this.detailFormGroup.value.city,
        state: this.detailFormGroup.value.state,
        country: this.detailFormGroup.value.country,
      },
      slot: {
        openingTime: TimeUtils.getTime(this.detailFormGroup.value.openingTime),
        closingTime: TimeUtils.getTime(this.detailFormGroup.value.closingTime),
      },
      amenities: this.detailFormGroup.value.amenities,
      groundImageUrl: null,
      rating: 0
    }
  }

  onChange(event: Event): void {
    const element: HTMLInputElement = event.target as HTMLInputElement
    if (element.files != null) {
      console.log(element.files[0].size)
      if (element.files[0].size > 2000000) {
        this.fileError = 'Max allowed file size is 2MB'
        return;
      } else this.fileError = ''
      this.file = element.files[0]
      console.log(this.file.name)
    }
  }

  private initForm() {
    this.detailFormGroup = this.formBuilder.group({
      ownerEmail: ['', [Validators.required, Validators.email]],
      groundType: ['', Validators.required],
      groundName: ['', Validators.required],
      streetName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      openingTime: ['', Validators.required],
      closingTime: ['', Validators.required],
      amenities: ['', Validators.required],
      description: ['']
    });
  }

  selectCountry(event: string) {
    this.detailFormGroup.get('ownerEmail')?.invalid
    if (event.length == 0) {
      this.states = []
      this.cities = []
      return
    }
    console.log(event)
    this.presenter.fetchState(event)
  }

  selectState(event: string) {
    const country = this.detailFormGroup.value.country
    this.presenter.fetchCity(country, event)
  }

  selectStartTime(event: string) {
    console.log(event)
    this.endTimes = TimeUtils.getTimes(event)
  }

  private showSnackBar(message: string, panelClass: string) {
    this.snackBar.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-success']
    })
  }
}
