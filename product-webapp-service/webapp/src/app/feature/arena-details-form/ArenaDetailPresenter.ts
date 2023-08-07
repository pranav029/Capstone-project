import { Ground } from "src/app/core/models/Ground";

export interface ArenaDetailPresenter {
    submitForm(ground: Ground): void
    unbind(): void
}