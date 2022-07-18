import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CarnetVacunacion } from '../model/carnetVacunacion';

import { Cita } from '../model/cita';
import { CitaDto } from '../model/citaDto';
import { DetalleCita } from '../model/detalleCita';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CarnetVacunasService {

    protected basePath = 'https://vinculation.herokuapp.com/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * create
     * 
     * @param body animal
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
     public createcarnetvacunaUsingPOST(body: CarnetVacunacion, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public createcarnetvacunaUsingPOST(body: CarnetVacunacion, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public createcarnetvacunaUsingPOST(body: CarnetVacunacion, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public createcarnetvacunaUsingPOST(body: CarnetVacunacion, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling createUsingPOST.');
         }
 
         let headers = this.defaultHeaders;
 
         // authentication (JWT) required
         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
         }
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<any>('post',`${this.basePath}/animales/`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }

    

}