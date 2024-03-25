import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core";
import { DocumentTypeRepository } from "../repositories/document-type.repository";
import { DocumentType } from "../entities/document-type.model";

/**
 * Caso de uso obtener tipos de documento.
 */
@Injectable()
export class GetAllDocumentTypesUsecase implements UseCase<void, DocumentType[]> {
  /**
   * Crea una instancia de GetAllDocumentTypesUsecase.
   * @param documentTypeRepository - Repositorio de tipos de documento.
   */
  public constructor(private documentTypeRepository: DocumentTypeRepository) {}
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametros de entrada.
   * @returns - Observable.
   */
  public execute(): Observable<DocumentType[]> {
    return this.documentTypeRepository.getAllDocumentTypes();
  }
}
