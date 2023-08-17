import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Ground } from 'src/app/models/Ground';
import { GroundDetailService } from 'src/app/services/GroundDetailService';
import { ImageUploaderService } from 'src/app/services/ImageUploaderService';
import { RegionService } from 'src/app/services/RegionService';
import { SnacbarType } from 'src/app/utils/common/SnackbarType';
import { TimeUtils } from 'src/app/utils/TimeUtils';
import { ArenaDetailPresenter } from './ArenaDetailPresenter';
import { ArenaDetailPresenterImpl } from './ArenaDetailPresenterImpl';
import { ArenaView } from './ArenaView';

const ADD_FLOW = 'add-ground'
const UPDATE_FLOW = 'update-ground'

@Component({
  selector: 'app-arena-details-form',
  templateUrl: './arena-details-form.component.html',
  styleUrls: ['./arena-details-form.component.css'],
})
export class ArenaDetailsFormComponent implements ArenaView, OnInit {
  isInfoFetched!: boolean | null
  isAddFlow!: boolean | null
  groundId: string | null = null
  countries: string[] = []
  states: string[] = []
  cities: string[] = []
  startTimes: string[] = []
  endTimes: string[] = []
  isFetchingRegion: boolean = false
  isLoaderVisible: boolean = false
  isErrorMessageVisible: boolean = false
  errorMessage: string = ''
  fileError: string = ''
  detailFormGroup!: FormGroup
  file: File | null = null
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
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.presenter = new ArenaDetailPresenterImpl(regionService, groundDetailService, imageUploadService, this);
  }

  ngOnInit(): void {
    this.getParamsAndSetFlow()
    this.startTimes = TimeUtils.getTimes('')
    this.presenter.fetchCountries()
    if (this.isAddFlow)
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
    console.log(ground)
    // this.detailFormGroup.reset()
    this.ground = ground
    this.presenter.fetchState(ground.address.country)
    this.presenter.fetchCity(ground.address.country, ground.address.state)
    this.endTimes = TimeUtils.getTimes(ground.slot.openingTime)
    this.initForm()
    this.detailFormGroup.controls['openingTime']?.setValue(ground.slot.openingTime)
    console.log(this.detailFormGroup.value.openingTime)
    this.isInfoFetched = true
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
    if (this.isAddFlow) this.presenter.submitForm(this.ground, this.file);
    else this.presenter.updateGround(this.ground, this.file)
  }

  private prepareData() {
    this.ground = {
      groundId: this.groundId,
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
        openingTime: this.detailFormGroup.value.openingTime,
        closingTime: this.detailFormGroup.value.closingTime,
      },
      amenities: this.detailFormGroup.value.amenities,
      groundImageUrl: this.ground.groundImageUrl,
      rating: 0,
      description: this.detailFormGroup.value.description
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
      ownerEmail: [this.ground.ownerEmail, [Validators.required, Validators.email]],
      groundType: [this.ground.groundType, Validators.required],
      groundName: [this.ground.groundName, Validators.required],
      streetName: [this.ground.address.streetName, Validators.required],
      city: [this.ground.address.city, Validators.required],
      state: [this.ground.address.state, Validators.required],
      country: [this.ground.address.country, Validators.required],
      openingTime: [this.ground.slot.openingTime, Validators.required],
      closingTime: [this.ground.slot.closingTime, Validators.required],
      amenities: [this.ground.amenities, Validators.required],
      description: [this.ground.description]
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

  private getParamsAndSetFlow() {
    this.groundId = this.route.snapshot.paramMap.get('groundId')
    const flow = this.route.snapshot.paramMap.get('flow')
    if (flow)
      this.isAddFlow = flow === ADD_FLOW ? true : false
    if (flow && flow == UPDATE_FLOW) {
      if (this.groundId != null)
        this.presenter.fetchGround(this.groundId)
      else this.isAddFlow = null
    }
  }

  getButtonText(): string {
    if (this.isAddFlow) return 'Submit'
    return 'Update'
  }

  getTime(time: string): string {
    return TimeUtils.getTime(time)
  }

  compareTimes(x: string, y: string): boolean {
    return new Date(Date.parse(x)).toTimeString() == new Date(Date.parse(y)).toTimeString()
  }

  getFormHeading(): string {
    if (this.isAddFlow) return 'Arena Details Information'
    return 'Arena Details Information Update'
  }
}
