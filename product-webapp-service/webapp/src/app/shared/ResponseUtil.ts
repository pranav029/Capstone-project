import { HttpResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ApiResponse } from "../core/models/ApiResponse";
import { Ground } from "../core/models/Ground";
import { Failure, Loading, Resource, Success } from "../core/models/Resource";

export namespace ResponseUtil {
    const API_ERROR_MESSAGE = "Something went wrong";

    export function handleResponseAndExceptions<T>(response: Observable<HttpResponse<ApiResponse<T>>>): Observable<Resource<T>> {
        return new Observable((observer) => {
            observer.next(new Loading());
            response
                .pipe(
                    catchError((error: { message: string; }) => {
                        observer.next(new Failure(error.message))
                        return throwError(() => error)
                    })
                )
                .subscribe((item: HttpResponse<ApiResponse<T>>) => {
                    if (isResponseOk(item)) {
                        observer.next(new Success(item))
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