import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";
import { UserDataService } from "./user-data.service";
/**
 * Metadata.
 */
const entityMetadata: EntityMetadataMap = {
  User: { selectId: (user) => user.phone },
};
/**
 * Nombre plural.
 */
const pluralNames = {
  User: UserDataService.ENTITY_PLURAL_NAME,
};
/**
 * Configuracion.
 */
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
