import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Gender } from "../domain/entities/gender.model";
import { GetAllGendersUsecase } from "../domain/usecases/get-all-genders.usecase";
/**
 * Servicio Data para Generos.
 */
@Injectable()
export class GenderDataService extends DefaultDataService<Gender> {
  /**
   * Nombre entidad.
   */
  public static ENTITY_NAME = "Gender";
  /**
   * Nombre plural entidad.
   */
  public static ENTITY_PLURAL_NAME = "Genders";
  /**
   * Crea una instancia de GenderDataService.
   * @param http - Servicio HttpClient.
   * @param httpUrlGenerator - Servicio HttpUrlGenerator.
   * @param getAllGendersUsecase - Instancia getAllGendersUsecase.
   */
  public constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private getAllGendersUsecase: GetAllGendersUsecase
  ) {
    super(GenderDataService.ENTITY_NAME, http, httpUrlGenerator);
  }
  /**
   * Obtiene los generos
   * @returns - Observer.
   */
  override getAll(): Observable<Gender[]> {
    return this.getAllGendersUsecase.execute();
  }
}
