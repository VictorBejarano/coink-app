import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";
import { DocumentTypeDataService } from "./document-type-data.service";
/**
 * Metadata.
 */
const entityMetadata: EntityMetadataMap = {
  DocumentType: {},
};
/**
 * Nombre plural.
 */
const pluralNames = {
  DocumentType: DocumentTypeDataService.ENTITY_PLURAL_NAME,
};
/**
 * Configuracion.
 */
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
