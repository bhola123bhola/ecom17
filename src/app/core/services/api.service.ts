import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Use lowercase 'headers' here to match Angular's expectations
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
  };

  constructor(private http: HttpClient) { }

  // Improved error formatting (optional logging can be added here)
  private formatErrors(error: any) {
    // You can log the error or do further handling here
    console.error('API Error:', error);
    return throwError(error.error || 'An unknown error occurred');
  }

  // GET method with params support
  // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http.get(path, { headers: this.httpOptions.headers, params }).pipe(
  //     catchError(this.formatErrors)
  //   );
  // }
  get(path:string, params:HttpParams =new HttpParams()):Observable<any>{
    return this.http.get(path,{params})
    .pipe(catchError(this.formatErrors))
  }

  // PUT method
  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(path, body, this.httpOptions).pipe(
      catchError(this.formatErrors)
    );
  }

  // POST method
  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(path, body).pipe(
      catchError(this.formatErrors)
    );
  }

  // DELETE method
  delete(path: string): Observable<any> {
    return this.http.delete(path, { headers: this.httpOptions.headers }).pipe(
      catchError(this.formatErrors)
    );
  }
}
