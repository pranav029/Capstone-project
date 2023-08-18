import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ground } from "../models/Ground";
import { Resource } from "../models/Resource";
import { Observable } from 'rxjs';
import { ApiResponse } from "../models/ApiResponse";
import { ResponseUtil } from "src/app/utils/ResponseUtil";

const UPLOAD_URL = 'http://localhost:8085/api/v1/arena/details/upload/image/'
@Injectable({
    providedIn: 'root'
})
export class ImageUploaderService {
    constructor(private httpClient: HttpClient) { }
    upload(file: File, groundId: string): Observable<Resource<Ground>> {
        const formData: FormData = new FormData();
        formData.append('image', file,file.name);
        console.log(`${UPLOAD_URL}${groundId}`)
        const response = this.httpClient.post<ApiResponse<Ground>>(`${UPLOAD_URL}${groundId}`, formData, {
            observe: 'response',
            headers: {}
        });
        return ResponseUtil.handleResponseAndExceptions(response);
    }
}