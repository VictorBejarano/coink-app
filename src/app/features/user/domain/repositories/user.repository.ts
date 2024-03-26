import { Observable } from "rxjs";
import { User } from "../entities/user.model";
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
  /**
   * Enviar usuario.
   * @param user - Usuario.
   * @returns - Observable.
   */
  public abstract setUser(user: User): Observable<User>;
}
