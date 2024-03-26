import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { EntityDataService, EntityDefinitionService } from "@ngrx/data";
import { entityConfig } from "./infrastructure/entity.metadata";
import { UserDataService } from "./infrastructure/user-data.service";
import { UserEntityService } from "./infrastructure/user-entity.service";
import { UserRepository } from "./domain/repositories/user.repository";
import { UserMockDataSourceImpl } from "./data/datasource/gender-mock-datasource.service";
import { ValidatePhoneUsecase } from "./domain/usecases/validate-phone.usecase";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    UserMockDataSourceImpl,
    UserDataService,
    UserEntityService,
    ValidatePhoneUsecase,
    {
      provide: UserRepository,
      useClass: UserMockDataSourceImpl,
    },
  ],
})
export class UserModule {
  /**
   * Crea una instancia de UserModule.
   * @param eds - Servicio definicion de entidad.
   * @param entityDataService - Servicio datos de entidad
   * @param userDataService - Servicio de UserDataService.
   */
  public constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private userDataService: UserDataService
  ) {
    this.eds.registerMetadataMap(entityConfig.entityMetadata);
    this.entityDataService.registerService(
      UserDataService.ENTITY_NAME,
      this.userDataService
    );
  }
}
