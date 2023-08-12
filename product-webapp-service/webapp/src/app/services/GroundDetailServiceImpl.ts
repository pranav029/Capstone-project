import { HttpClient, HttpResponse } from "@angular/common/http";
import { Ground } from "../models/Ground";
import { GroundDetailService } from "./GroundDetailService";
import { Observable } from 'rxjs';
import { Resource } from "../models/Resource";
import { ResponseUtil } from "src/app/utils/ResponseUtil";
import { Injectable } from "@angular/core";
import { ApiResponse } from "../models/ApiResponse";

const BASE_URL = "http://localhost:8085/api/v1/arena/details/add"

@Injectable({
    providedIn: 'root'
})
export class GroundDetailServiceImpl implements GroundDetailService {
    constructor(private httpClient: HttpClient) { }

    addGround(ground: Ground): Observable<Resource<Ground>> {
        const response: Observable<HttpResponse<ApiResponse<Ground>>> = this.httpClient.post<ApiResponse<Ground>>(BASE_URL, ground, { observe: 'response' });
        return ResponseUtil.handleResponseAndExceptions(response);
    }
    fetchGround(groundId: String): Observable<Resource<Ground>> {
        throw new Error("Method not implemented.");
    }
    updateGround(ground: Ground): Observable<Resource<Ground>> {
        throw new Error("Method not implemented.");
    }

}