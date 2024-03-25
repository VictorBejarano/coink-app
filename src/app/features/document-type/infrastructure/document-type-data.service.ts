import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DocumentType } from "../domain/entities/document-type.model";
import { GetAllDocumentTypesUsecase } from "../domain/usecases/get-all-document-types.usecase";
/**
 * Servicio Data para Vehiculos.
 */
@Injectable()
export class DocumentTypeDataService extends DefaultDataService<DocumentType> {
  /**
   * Nombre entidad.
   */
  public static ENTITY_NAME = "DocumentType";
  /**
   * Nombre plural entidad.
   */
  public static ENTITY_PLURAL_NAME = "DocumentTypes";
  /**
   * Crea una instancia de DocumentTypeDataService.
   * @param http - Servicio HttpClient.
   * @param httpUrlGenerator - Servicio HttpUrlGenerator.
   * @param getAllDocumentTypesUsecase - Instancia getAllDocumentTypesUsecase.
   */
  public constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private getAllDocumentTypesUsecase: GetAllDocumentTypesUsecase
  ) {
    super(DocumentTypeDataService.ENTITY_NAME, http, httpUrlGenerator);
  }

  override getAll(): Observable<DocumentType[]> {
    return this.getAllDocumentTypesUsecase.execute();
  }
}
