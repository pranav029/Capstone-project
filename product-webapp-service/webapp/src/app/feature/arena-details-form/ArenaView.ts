import { Ground } from "src/app/core/models/Ground";

export interface ArenaView {
    showError(message: string): void
    showData(ground: Ground): void
    showSuccess(message: string): void
    showLoader(): void
    hideLoader(): void
    reset(): void
}