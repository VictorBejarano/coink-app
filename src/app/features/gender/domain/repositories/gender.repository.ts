import { Observable } from "rxjs";
import { Gender } from "../entities/gender.model";
/**
 * Repositorio de genero.
 */
export abstract class GenderRepository {
  /**
   * Obtiene todos los genero.
   * @returns - Observable.
   */
  public abstract getAllGenders(): Observable<Gender[]>;
}
