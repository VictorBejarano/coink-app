import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { DocumentTypeDataSourceImpl } from "./data/datasource/document-type-datasource.service";
import { EntityDataService, EntityDefinitionService } from "@ngrx/data";
import { entityConfig } from "./infrastructure/entity.metadata";
import { DocumentTypeDataService } from "./infrastructure/document-type-data.service";
import { DocumentTypeRepository } from "./domain/repositories/document-type.repository";
import { environment } from "src/environments/environment";
import { DocumentTypeMockDataSourceImpl } from "./data/datasource/document-type-mock-datasource.service";
import { DocumentTypeEntityService } from "./infrastructure/document-type-entity.service";
import { GetAllDocumentTypesUsecase } from "./domain/usecases/get-all-document-types.usecase";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    DocumentTypeDataSourceImpl,
    DocumentTypeDataService,
    DocumentTypeEntityService,
    GetAllDocumentTypesUsecase,
    {
      provide: DocumentTypeRepository,
      useClass: environment.production
        ? DocumentTypeDataSourceImpl
        : DocumentTypeMockDataSourceImpl,
    },
  ],
})
export class DocumentTypeModule {
  /**
   * Cre una instancia de MenuFeatureModule.
   * @param eds - Servicio definicion de entidad.
   * @param entityDataService - Servicio datos de entidad
   * @param menuDataService - Servicio de menu.
   */
  public constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private documentTypeDataService: DocumentTypeDataService
  ) {
    this.eds.registerMetadataMap(entityConfig.entityMetadata);
    this.entityDataService.registerService(
      DocumentTypeDataService.ENTITY_NAME,
      this.documentTypeDataService
    );
  }
}
