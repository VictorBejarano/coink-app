import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GenderRepository } from "../../domain/repositories/gender.repository";
import { Gender } from "../../domain/entities/gender.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
/**
 * Fuente de datos de generos.
 */
@Injectable()
export class GenderDataSourceImpl implements GenderRepository {
  private environment = environment;
  /**
   * Crea una instancia de GenderDataSourceImpl.
   * @param http - Instancia de HttpClient.
   */
  public constructor(private http: HttpClient) {}
  /**
   * Obtiene todos los generos.
   * @returns - Observable.
   */
  public getAllGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(
      `${this.environment.url}/genders?apiKey=${this.environment.apiKey}`
    );
  }
}
