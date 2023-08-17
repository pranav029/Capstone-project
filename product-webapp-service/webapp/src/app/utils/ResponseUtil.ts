import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ApiResponse } from "../models/ApiResponse";
import { Ground } from "../models/Ground";
import { Failure, Loading, Resource, Success } from "../models/Resource";

export namespace ResponseUtil {
    const API_ERROR_MESSAGE = "Something went wrong";

    export function handleResponseAndExceptions<T>(response: Observable<HttpResponse<ApiResponse<T>>>): Observable<Resource<T>> {
        return new Observable((observer) => {
            observer.next(new Loading());
            response
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        if (error.error instanceof Error) {
                            observer.next(new Failure(error.error.message))
                        } else {
                            let res: ApiResponse<Ground> = error.error
                            let errorMessage: string
                            if (res.error != null) errorMessage = res.error
                            else if (res.message != null) errorMessage = res.message
                            else errorMessage = API_ERROR_MESSAGE
                            observer.next(new Failure(errorMessage))
                        }
                        return throwError(() => error)
                    })
                )
                .subscribe((item: HttpResponse<ApiResponse<T>>) => {
                    if (isResponseOk(item)) {
                        observer.next(new Success(item.body?.data))
                    } else {
                        let errorMessage: string
                        if (item.body?.error != null) errorMessage = item.body?.error
                        else if (item.body?.message != null) errorMessage = item.body?.message
                        else errorMessage = API_ERROR_MESSAGE
                        observer.next(new Failure(errorMessage))
                    }
                })
        })
    }

    export function isResponseOk<T>(response: HttpResponse<ApiResponse<T>>) {
        return response.status >= 200 && response.status < 300 && response.body?.success
    }
}