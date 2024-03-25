import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as mock from "../mock/gender.mock.json";
import { GenderRepository } from "../../domain/repositories/gender.repository";
import { Gender } from "../../domain/entities/gender.model";
/**
 * Fuente de datos falsos de Generos.
 */
@Injectable()
export class GenderMockDataSourceImpl implements GenderRepository {
  /**
   * Crea una instancia de GenderMockDataSourceImpl.
   */
  public constructor() {}
  /**
   * Obtiene todos los generos.
   * @returns - Observable.
   */
  public getAllGenders(): Observable<Gender[]> {
    return of(JSON.parse(JSON.stringify(mock)).default as Array<Gender>);
  }
}
