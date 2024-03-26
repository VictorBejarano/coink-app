import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityOp,
} from "@ngrx/data";
import { UserDataService } from "./user-data.service";
import { Observable, tap } from "rxjs";
import { User } from "../domain/entities/user.model";
/**
 * Servicio Entidad Usuario.
 */
@Injectable()
export class UserEntityService extends EntityCollectionServiceBase<User> {
  /**
   * Crea una instancia de UserEntityService.
   * @param serviceElementsFactory - Servicio de ServiceElementsFactory.
   */
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private userDataService: UserDataService
  ) {
    super(UserDataService.ENTITY_NAME, serviceElementsFactory);
  }
  /**
   * Valida el telephono.
   * @param type - Tipo de menu.
   * @returns - Observable.
   */
  public validatePhone(phone: string): Observable<boolean> {
    return this.userDataService.validatePhone(phone).pipe(
      tap((isValid) => {
        this.createAndDispatch(EntityOp.ADD_ONE, {
          phone,
          isValid,
        });
      })
    );
  }
}
