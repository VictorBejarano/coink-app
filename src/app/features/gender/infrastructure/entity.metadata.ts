import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";
import { GenderDataService } from "./gender-data.service";
/**
 * Metadata.
 */
const entityMetadata: EntityMetadataMap = {
  Gender: {},
};
/**
 * Nombre plural.
 */
const pluralNames = {
  Gender: GenderDataService.ENTITY_PLURAL_NAME,
};
/**
 * Configuracion.
 */
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
