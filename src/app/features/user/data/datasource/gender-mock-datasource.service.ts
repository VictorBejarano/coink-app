import { Injectable } from "@angular/core";
import { Observable, delay, map, of } from "rxjs";
import { UserRepository } from "../../domain/repositories/user.repository";
import { User } from "../../domain/entities/user.model";

/**
 * Fuente de datos falsos de Usuario.
 */
@Injectable()
export class UserMockDataSourceImpl implements UserRepository {
  /**
   * Crea una instancia de UserMockDataSourceImpl.
   */
  public constructor() {}
  /**
   * Valida el telefono.
   * @param phone - telefono.
   * @returns - Observable.
   */
  public validatePhone(phone: string): Observable<boolean> {
    return of(phone).pipe(
      delay(2000),
      map(() => true)
    );
  }
  /**
   * Enviar usuario.
   * @param user - telefono.
   * @returns - Observable.
   */
  public setUser(user: User): Observable<User> {
    return of(user).pipe(delay(2000));
  }
}
