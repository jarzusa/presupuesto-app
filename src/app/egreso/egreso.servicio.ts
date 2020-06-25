import { Egreso } from './egreso.model';
import { Injectable } from "@angular/core";

@Injectable()
export class EgresoServicio {
    constructor() {

    }
    egresos: Egreso[] = [
        new Egreso("Renta Depto", 900),
        new Egreso("Ropa", 200)
    ]
}