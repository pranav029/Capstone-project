import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ground } from 'src/app/core/models/Ground';
import { GroundDetailService } from 'src/app/core/services/GroundDetailService';
import { ArenaDetailPresenter } from './ArenaDetailPresenter';
import { ArenaDetailPresenterImpl } from './ArenaDetailPresenterImpl';
import { ArenaView } from './ArenaView';

@Component({
  selector: 'app-arena-details-form',
  templateUrl: './arena-details-form.component.html',
  styleUrls: ['./arena-details-form.component.css'],
})
export class ArenaDetailsFormComponent implements ArenaView, OnInit {
  isLoaderVisible: boolean = false
  isErrorMessageVisible: boolean = false
  isSuccessMessageVisible: boolean = false
  errorMessage: string = ''
  successMessage: string = ''
  detailFormGroup!: FormGroup
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
  }
  presenter!: ArenaDetailPresenter;
  constructor(
    groundDetailService: GroundDetailService,
    private formBuilder: FormBuilder
  ) {
    this.presenter = new ArenaDetailPresenterImpl(groundDetailService, this);
  }
  showError(message: string): void {
    this.errorMessage = message
    this.isErrorMessageVisible = true
  }
  showData(ground: Ground): void {
    throw new Error('Method not implemented.');
  }
  showSuccess(message: string): void {
    this.successMessage = message
    this.isSuccessMessageVisible = true
  }
  showLoader(): void {
    this.isLoaderVisible = true;
  }
  hideLoader(): void {
    this.isLoaderVisible = false;
  }
  reset(): void {
    this.isErrorMessageVisible = false
    this.isSuccessMessageVisible = false
    this.isLoaderVisible = false
    this.errorMessage = ''
    this.successMessage = ''
    this.detailFormGroup.reset()
  }
  ngOnInit(): void {
    this.detailFormGroup = this.formBuilder.group({
      ownerEmail: ['', Validators.required],
      groundType: ['', Validators.required],
      groundName: ['', Validators.required],
      streetName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      openingTime: ['', Validators.required],
      closingTime: ['', Validators.required],
      amenities: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.detailFormGroup.valid) {
      this.saveData()
    } 
  }

  private saveData() {
    this.prepareData()
    this.presenter.submitForm(this.ground);
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
        openingTime: this.detailFormGroup.value.openingTime,
        closingTime: this.detailFormGroup.value.closingTime,
      },
      amenities: this.detailFormGroup.value.amenities,
      groundImageUrl: null,
      rating: 0
    }
  }
}
