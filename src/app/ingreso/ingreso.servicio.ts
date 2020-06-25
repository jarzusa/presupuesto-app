import { Ingreso } from './ingreso.model';
import { Injectable } from "@angular/core";

@Injectable()
export class IngresoServicio {
    constructor() {

    }
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 4000),
        new Ingreso("Venta Coche", 500)
    ]
}