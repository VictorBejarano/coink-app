import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as mock from "../mock/document-type.mock.json";
import { DocumentTypeRepository } from "../../domain/repositories/document-type.repository";
import { DocumentType } from "../../domain/entities/document-type.model";
/**
 * Fuente de datos falsos de Tipo de documento.
 */
@Injectable()
export class DocumentTypeMockDataSourceImpl implements DocumentTypeRepository {
  /**
   * Crea una instancia de DocumentTypeMockDataSourceImpl.
   */
  public constructor() {}
  /**
   * Obtiene todos los tipos de documento.
   * @returns - Observable.
   */
  public getAllDocumentTypes(): Observable<DocumentType[]> {
    return of(JSON.parse(JSON.stringify(mock)).default as Array<DocumentType>);
  }
}
