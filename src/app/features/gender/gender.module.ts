import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { GenderDataSourceImpl } from "./data/datasource/gender-datasource.service";
import { EntityDataService, EntityDefinitionService } from "@ngrx/data";
import { entityConfig } from "./infrastructure/entity.metadata";
import { environment } from "src/environments/environment";
import { GenderDataService } from "./infrastructure/gender-data.service";
import { GenderEntityService } from "./infrastructure/gender-entity.service";
import { GetAllGendersUsecase } from "./domain/usecases/get-all-genders.usecase";
import { GenderRepository } from "./domain/repositories/gender.repository";
import { GenderMockDataSourceImpl } from "./data/datasource/gender-mock-datasource.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    GenderDataSourceImpl,
    GenderDataService,
    GenderEntityService,
    GetAllGendersUsecase,
    {
      provide: GenderRepository,
      useClass: GenderMockDataSourceImpl,
      // useClass: environment.production
      //   ? GenderDataSourceImpl
      //   : GenderMockDataSourceImpl,
    },
  ],
})
export class GenderModule {
  /**
   * Cre una instancia de GenderModule.
   * @param eds - Servicio definicion de entidad.
   * @param entityDataService - Servicio datos de entidad
   * @param genderDataService - Servicio de GenderDataService.
   */
  public constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private genderDataService: GenderDataService
  ) {
    this.eds.registerMetadataMap(entityConfig.entityMetadata);
    this.entityDataService.registerService(
      GenderDataService.ENTITY_NAME,
      this.genderDataService
    );
  }
}
