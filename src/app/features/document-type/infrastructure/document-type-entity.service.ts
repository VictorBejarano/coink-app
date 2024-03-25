import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { DocumentTypeDataService } from "./document-type-data.service";
import { DocumentType } from "../domain/entities/document-type.model";
/**
 * Servicio Entidad Vehiculo.
 */
@Injectable()
export class DocumentTypeEntityService extends EntityCollectionServiceBase<DocumentType> {
  /**
   * Crea una instancia de DocumentTypeEntityService.
   * @param serviceElementsFactory - Servicio de ServiceElementsFactory.
   */
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(DocumentTypeDataService.ENTITY_NAME, serviceElementsFactory);
  }
}
