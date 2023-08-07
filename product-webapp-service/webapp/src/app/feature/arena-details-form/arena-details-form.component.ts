import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
  presenter!: ArenaDetailPresenter;
  constructor(
    groundDetailService: GroundDetailService
  ) {
    this.presenter = new ArenaDetailPresenterImpl(groundDetailService, this);
  }
  showError(message: string): void {
    throw new Error('Method not implemented.');
  }
  showData(ground: Ground): void {
    throw new Error('Method not implemented.');
  }
  showSuccess(message: string): void {
    throw new Error('Method not implemented.');
  }
  showLoader(): void {
    this.isLoaderVisible = true;
  }
  hideLoader(): void {
    this.isLoaderVisible = false;
  }
  reset(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {

  }
  onSumit() {

  }
}
