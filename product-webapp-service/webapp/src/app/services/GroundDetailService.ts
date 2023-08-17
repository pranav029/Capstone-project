import { Ground } from "../models/Ground";
import { Resource } from "../models/Resource";
import { Observable } from "rxjs"

export abstract class GroundDetailService {
    abstract addGround(ground: Ground): Observable<Resource<Ground>>;
    abstract fetchGround(groundId: String): Observable<Resource<Ground>>;
    abstract updateGround(ground: Ground): Observable<Resource<Ground>>;
}