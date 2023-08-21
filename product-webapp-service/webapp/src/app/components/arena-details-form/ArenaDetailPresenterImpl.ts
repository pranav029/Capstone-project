import { Ground } from "src/app/models/Ground";
import { Failure, Loading, Resource, Success } from "src/app/models/Resource";
import { GroundDetailService } from "src/app/services/groundDetails/GroundDetailService";
import { ImageUploaderService } from "src/app/services/groundDetails/ImageUploaderService";
import { RegionService } from "src/app/services/groundDetails/RegionService";
import { ArenaDetailPresenter } from "./ArenaDetailPresenter";
import { ArenaView } from "./ArenaView";

export class ArenaDetailPresenterImpl implements ArenaDetailPresenter {
    view?: ArenaView | null
    constructor(
        private regionService: RegionService,
        private groundDetailService: GroundDetailService,
        private imageUploadService: ImageUploaderService,
        view: ArenaView
    ) {
        this.view = view
    }
    updateGround(ground: Ground, file: File | null): void {
        this.view?.reset();
        this.groundDetailService.updateGround(ground).subscribe((resource: Resource<Ground>) => {
            if (resource instanceof Success) {
                this.view?.showSuccess("Ground updated successfully")
                const data = resource.data as Ground
                console.log(data)
                this.view?.showData(data)
                if (file) this.uploadImage(file, resource.data.groundId)
                else {
                    this.view?.hideLoader()
                    this.view?.navigate()
                }
            }
            if (resource instanceof Failure) {
                this.view?.hideLoader()
                this.view?.showError(resource.message)
            }
            if (resource instanceof Loading) {
                this.view?.showLoader()
            }
        })
    }
    fetchGround(groundId: string): void {
        console.log('fetching called...')
        this.groundDetailService.fetchGround(groundId).subscribe((resource: Resource<Ground>) => {
            if (resource instanceof Loading) {
                this.view?.showFetchingRegion()
            }
            if (resource instanceof Failure) {
                this.view?.hideFetchingRegion()
                this.view?.showError("Something went wrong.Please try after sometime..")
            }
            if (resource instanceof Success) {
                this.view?.hideFetchingRegion()
                this.view?.showData(resource.data)
            }
        })
    }
    fetchCountries(): void {
        console.log('fetch called')
        this.regionService.fetchCountries().subscribe((resource: Resource<string[]>) => {
            if (resource instanceof Loading) {
                this.view?.showFetchingRegion()
            }
            if (resource instanceof Failure) {
                this.view?.hideFetchingRegion()
                this.view?.showError("Something went wrong.Please try after sometime..")
            }
            if (resource instanceof Success) {
                this.view?.hideFetchingRegion()
                this.view?.updateCountry(resource.data)
            }
        })
    }
    fetchState(countryName: string): void {
        this.regionService.fetchStates(countryName).subscribe((resource: Resource<string[]>) => {
            if (resource instanceof Loading) {
                this.view?.showFetchingRegion()
            }
            if (resource instanceof Failure) {
                this.view?.hideFetchingRegion()
                this.view?.showError("Something went wrong.Please try after sometime..")
            }
            if (resource instanceof Success) {
                this.view?.hideFetchingRegion()
                this.view?.updateState(resource.data)
            }
        })
    }
    fetchCity(countryName: string, stateName: string): void {
        this.regionService.fetchCities(countryName, stateName).subscribe((resource: Resource<string[]>) => {
            if (resource instanceof Loading) {
                this.view?.showFetchingRegion()
            }
            if (resource instanceof Failure) {
                this.view?.hideFetchingRegion()
                this.view?.showError("Something went wrong.Please try after sometime..")
            }
            if (resource instanceof Success) {
                this.view?.hideFetchingRegion()
                this.view?.updateCity(resource.data)
            }
        })
    }

    submitForm(ground: Ground, file: File | null): void {
        this.view?.reset();
        this.groundDetailService.addGround(ground).subscribe((resource: Resource<Ground>) => {
            if (resource instanceof Success) {
                this.view?.showSuccess("Ground added successfully")
                const data = resource.data as Ground
                console.log(data)
                if (file) this.uploadImage(file, resource.data.groundId)
                else {
                    this.view?.hideLoader()
                    this.view?.navigate()
                }
            }
            if (resource instanceof Failure) {
                this.view?.hideLoader()
                this.view?.showError(resource.message)
            }
            if (resource instanceof Loading) {
                this.view?.showLoader()
            }
        })
    }

    private uploadImage(file: File, groundId: string) {
        this.imageUploadService.upload(file, groundId).subscribe((resource: Resource<Ground>) => {
            if (resource instanceof Success) {
                this.view?.hideLoader()
                this.view?.navigate()
            }
            if (resource instanceof Failure) {
                this.view?.hideLoader()
                this.view?.showError(resource.message)
            }
        })
    }

    unbind(): void {
        this.view = null
    }
}
