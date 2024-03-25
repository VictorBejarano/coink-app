import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DocumentTypeRepository } from "../../domain/repositories/document-type.repository";
import { DocumentType } from "../../domain/entities/document-type.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
/**
 * Fuente de datos de tipos de documento.
 */
@Injectable()
export class DocumentTypeDataSourceImpl implements DocumentTypeRepository {
  private environment = environment;
  /**
   * Crea una instancia de DocumentTypeDataSourceImpl.
   * @param http - Instancia de HttpClient.
   */
  public constructor(private http: HttpClient) {}
  /**
   * Obtiene todos los tipos de documento.
   * @returns - Observable.
   */
  public getAllDocumentTypes(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(
      `${this.environment.url}/documentTypes?apiKey=${this.environment.apiKey}`
    );
  }
}
