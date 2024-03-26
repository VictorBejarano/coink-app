import { Observable } from "rxjs";
/**
 * Repositorio de usuario.
 */
export abstract class UserRepository {
  /**
   * Valida el telefono.
   * @param phone - Telefono.
   * @returns - Observable.
   */
  public abstract validatePhone(phone: string): Observable<boolean>;
}
