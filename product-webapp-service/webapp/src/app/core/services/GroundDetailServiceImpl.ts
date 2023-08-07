import { HttpClient, HttpResponse } from "@angular/common/http";
import { Ground } from "../models/Ground";
import { GroundDetailService } from "./GroundDetailService";
import { Observable } from 'rxjs';
import { Resource } from "../models/Resource";
import { ApiResponse } from "../models/ApiResponse";
import { ResponseUtil } from "src/app/shared/ResponseUtil";
import { Injectable } from "@angular/core";

const BASE_URL = ""

@Injectable({
    providedIn: 'root'
})
export class GroundDetailServiceImpl implements GroundDetailService {
    constructor(private httpClient: HttpClient) { }

    addGround(ground: Ground): Observable<Resource<Ground>> {
        const response: Observable<HttpResponse<any>> = this.httpClient.post(BASE_URL, ground, { observe: 'response' });
        return ResponseUtil.handleResponseAndExceptions(response);
    }
    fetchGround(groundId: String): Observable<Resource<Ground>> {
        throw new Error("Method not implemented.");
    }
    updateGround(ground: Ground): Observable<Resource<Ground>> {
        throw new Error("Method not implemented.");
    }

}