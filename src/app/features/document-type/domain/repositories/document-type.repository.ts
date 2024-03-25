import { Observable } from "rxjs";
import { DocumentType } from "../entities/document-type.model";
/**
 * Repositorio de tipos de documento.
 */
export abstract class DocumentTypeRepository {
  /**
   * Obtiene todos los tipos de documento.
   * @returns - Observable.
   */
  public abstract getAllDocumentTypes(): Observable<DocumentType[]>;
}
