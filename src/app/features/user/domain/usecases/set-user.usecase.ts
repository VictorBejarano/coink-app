import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.model";

/**
 * Caso de uso enviar usuario.
 */
@Injectable()
export class SetUserUsecase implements UseCase<Params, User> {
  /**
   * Crea una instancia de SetUserUsecase.
   * @param userRepository - Repositorio de usuario.
   */
  public constructor(private userRepository: UserRepository) {}
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametros de entrada.
   * @returns - Observable.
   */
  public execute(params: Params): Observable<User> {
    return this.userRepository.setUser(params.user);
  }
}
/**
 * Parametros de caso uso.
 */
interface Params {
  /**
   * Usuario.
   */
  user: User;
}
