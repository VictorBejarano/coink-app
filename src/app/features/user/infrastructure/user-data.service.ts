import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ValidatePhoneUsecase } from "../domain/usecases/validate-phone.usecase";
import { User } from "../domain/entities/user.model";
/**
 * Servicio Data para Usuario.
 */
@Injectable()
export class UserDataService extends DefaultDataService<User> {
  /**
   * Nombre entidad.
   */
  public static ENTITY_NAME = "User";
  /**
   * Nombre plural entidad.
   */
  public static ENTITY_PLURAL_NAME = "Users";
  /**
   * Crea una instancia de UserDataService.
   * @param http - Servicio HttpClient.
   * @param httpUrlGenerator - Servicio HttpUrlGenerator.
   * @param validatePhoneUsecase - Instancia validatePhoneUsecase.
   */
  public constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private validatePhoneUsecase: ValidatePhoneUsecase
  ) {
    super(UserDataService.ENTITY_NAME, http, httpUrlGenerator);
  }
  /**
   * Valida el telefono.
   * @param phone - Telefono.
   * @returns - Observer.
   */
  validatePhone(phone: string): Observable<boolean> {
    return this.validatePhoneUsecase.execute({ phone });
  }
}
