import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core";
import { UserRepository } from "../repositories/user.repository";

/**
 * Caso de uso validar telefono.
 */
@Injectable()
export class ValidatePhoneUsecase implements UseCase<Params, boolean> {
  /**
   * Crea una instancia de ValidatePhoneUsecase.
   * @param userRepository - Repositorio de usuario.
   */
  public constructor(private userRepository: UserRepository) {}
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametros de entrada.
   * @returns - Observable.
   */
  public execute(params: Params): Observable<boolean> {
    return this.userRepository.validatePhone(params.phone);
  }
}
/**
 * Parametros del caso de uso.
 */
interface Params {
  /**
   * Telefono.
   */
  phone: string;
}
