import { Observable } from "rxjs";
/**
 * Modelo de caso de uso en Observables.
 */
export interface UseCase<S, T> {
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametro de entrada.
   * @returns - Observable.
   */
  execute(params: S): Observable<T>;
}
