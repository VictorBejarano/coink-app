import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { GenderDataService } from "./gender-data.service";
import { Gender } from "../domain/entities/gender.model";
/**
 * Servicio Entidad Genero.
 */
@Injectable()
export class GenderEntityService extends EntityCollectionServiceBase<Gender> {
  /**
   * Crea una instancia de GenderEntityService.
   * @param serviceElementsFactory - Servicio de ServiceElementsFactory.
   */
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(GenderDataService.ENTITY_NAME, serviceElementsFactory);
  }
}
