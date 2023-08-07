import { Ground } from "src/app/core/models/Ground";
import { Failure, Loading, Resource, Success } from "src/app/core/models/Resource";
import { GroundDetailService } from "src/app/core/services/GroundDetailService";
import { ArenaDetailPresenter } from "./ArenaDetailPresenter";
import { ArenaView } from "./ArenaView";

export class ArenaDetailPresenterImpl implements ArenaDetailPresenter {
    view?: ArenaView | null
    constructor(
        private groundDetailService: GroundDetailService,
        view: ArenaView
    ) {
        this.view = view
    }

    submitForm(ground: Ground): void {
        this.view?.reset();
        this.groundDetailService.addGround(ground).subscribe((resource: Resource<Ground>) => {
            if (resource instanceof Success) {
                this.view?.hideLoader()
                this.view?.showSuccess("Ground added successfully")
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
    unbind(): void {
        this.view = null
    }
}