import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core";
import { GenderRepository } from "../repositories/user.repository";
import { Gender } from "../entities/gender.model";

/**
 * Caso de uso obtener generos.
 */
@Injectable()
export class GetAllGendersUsecase implements UseCase<void, Gender[]> {
  /**
   * Crea una instancia de GetAllGendersUsecase.
   * @param genderRepository - Repositorio de generos.
   */
  public constructor(private genderRepository: GenderRepository) {}
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametros de entrada.
   * @returns - Observable.
   */
  public execute(): Observable<Gender[]> {
    return this.genderRepository.getAllGenders();
  }
}
