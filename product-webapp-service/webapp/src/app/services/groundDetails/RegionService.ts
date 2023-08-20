import { HttpClient } from "@angular/common/http";
import { Resource } from "../../models/Resource";
import { Observable } from 'rxjs';
import { ApiResponse } from "../../models/ApiResponse";
import { ResponseUtil } from "../../utils/ResponseUtil";
import { Injectable } from "@angular/core";
import { THRIVE_BASE_URL } from "../../models/Constants";

const BASE_URL = THRIVE_BASE_URL + '/api/v1/region/'

@Injectable({
    providedIn: 'root'
})
export class RegionService {
    constructor(private httpClient: HttpClient) { }
    fetchCountries(): Observable<Resource<string[]>> {
        const response = this.httpClient.get<ApiResponse<string[]>>(`${BASE_URL}country`, { observe: 'response' });
        return ResponseUtil.handleResponseAndExceptions(response)
    }

    fetchStates(countryName: string): Observable<Resource<string[]>> {
        const response = this.httpClient.get<ApiResponse<string[]>>(`${BASE_URL}state/${countryName}`, { observe: 'response' });
        return ResponseUtil.handleResponseAndExceptions(response)
    }

    fetchCities(countryName: string, stateName: string): Observable<Resource<string[]>> {
        const response = this.httpClient.get<ApiResponse<string[]>>(`${BASE_URL}city/${countryName}/${stateName}`, { observe: 'response' });
        return ResponseUtil.handleResponseAndExceptions(response)
    }
}