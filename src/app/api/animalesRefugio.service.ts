/**
 * ARCA
 * Aqui descripcion de la api
 *
 * OpenAPI spec version: 0.0.1
 * Contact: no hay
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PageAnimalRefugioResponse } from '../model/pageAnimalRefugioResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AnimalesRefugioService {

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
     * actualizarAnimal
     * 
     * @param colorCaracteristicas 
     * @param especie 
     * @param idAnimal idAnimal
     * @param lugarEstancia 
     * @param nombre 
     * @param observacionesProcedencia 
     * @param procedencia 
     * @param raza 
     * @param sexo 
     * @param adoptado 
     * @param edad 
     * @param fechaNacimiento 
     * @param peso 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public actualizarAnimalUsingPUT(colorCaracteristicas: string, especie: string, idAnimal: number, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public actualizarAnimalUsingPUT(colorCaracteristicas: string, especie: string, idAnimal: number, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public actualizarAnimalUsingPUT(colorCaracteristicas: string, especie: string, idAnimal: number, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public actualizarAnimalUsingPUT(colorCaracteristicas: string, especie: string, idAnimal: number, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (colorCaracteristicas === null || colorCaracteristicas === undefined) {
            throw new Error('Required parameter colorCaracteristicas was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (especie === null || especie === undefined) {
            throw new Error('Required parameter especie was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (idAnimal === null || idAnimal === undefined) {
            throw new Error('Required parameter idAnimal was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (lugarEstancia === null || lugarEstancia === undefined) {
            throw new Error('Required parameter lugarEstancia was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (nombre === null || nombre === undefined) {
            throw new Error('Required parameter nombre was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (observacionesProcedencia === null || observacionesProcedencia === undefined) {
            throw new Error('Required parameter observacionesProcedencia was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (procedencia === null || procedencia === undefined) {
            throw new Error('Required parameter procedencia was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (raza === null || raza === undefined) {
            throw new Error('Required parameter raza was null or undefined when calling actualizarAnimalUsingPUT.');
        }

        if (sexo === null || sexo === undefined) {
            throw new Error('Required parameter sexo was null or undefined when calling actualizarAnimalUsingPUT.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (adoptado !== undefined && adoptado !== null) {
            queryParameters = queryParameters.set('adoptado', <any>adoptado);
        }
        if (colorCaracteristicas !== undefined && colorCaracteristicas !== null) {
            queryParameters = queryParameters.set('colorCaracteristicas', <any>colorCaracteristicas);
        }
        if (edad !== undefined && edad !== null) {
            queryParameters = queryParameters.set('edad', <any>edad);
        }
        if (especie !== undefined && especie !== null) {
            queryParameters = queryParameters.set('especie', <any>especie);
        }
        if (fechaNacimiento !== undefined && fechaNacimiento !== null) {
            queryParameters = queryParameters.set('fechaNacimiento', <any>fechaNacimiento.toISOString());
        }
        if (lugarEstancia !== undefined && lugarEstancia !== null) {
            queryParameters = queryParameters.set('lugarEstancia', <any>lugarEstancia);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (observacionesProcedencia !== undefined && observacionesProcedencia !== null) {
            queryParameters = queryParameters.set('observacionesProcedencia', <any>observacionesProcedencia);
        }
        if (peso !== undefined && peso !== null) {
            queryParameters = queryParameters.set('peso', <any>peso);
        }
        if (procedencia !== undefined && procedencia !== null) {
            queryParameters = queryParameters.set('procedencia', <any>procedencia);
        }
        if (raza !== undefined && raza !== null) {
            queryParameters = queryParameters.set('raza', <any>raza);
        }
        if (sexo !== undefined && sexo !== null) {
            queryParameters = queryParameters.set('sexo', <any>sexo);
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
            'multipart/form-data'
        ];

        return this.httpClient.request<any>('put',`${this.basePath}/animalesrefugio/${encodeURIComponent(String(idAnimal))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * eliminarAnimal
     * 
     * @param idAnimal idAnimal
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public eliminarAnimalUsingDELETE(idAnimal?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public eliminarAnimalUsingDELETE(idAnimal?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public eliminarAnimalUsingDELETE(idAnimal?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public eliminarAnimalUsingDELETE(idAnimal?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idAnimal !== undefined && idAnimal !== null) {
            queryParameters = queryParameters.set('idAnimal', <any>idAnimal);
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
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/animalesrefugio/${encodeURIComponent(String(idAnimal))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllAnimales
     * 
     * @param page page
     * @param size size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllAnimalesUsingGET(page: number, size: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAllAnimalesUsingGET(page: number, size: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAllAnimalesUsingGET(page: number, size: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAllAnimalesUsingGET(page: number, size: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllAnimalesUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling getAllAnimalesUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
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
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/animalesrefugio/all`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAnimalPorId
     * 
     * @param idAnimal idAnimal
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAnimalPorIdUsingGET(idAnimal: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAnimalPorIdUsingGET(idAnimal: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAnimalPorIdUsingGET(idAnimal: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAnimalPorIdUsingGET(idAnimal: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idAnimal === null || idAnimal === undefined) {
            throw new Error('Required parameter idAnimal was null or undefined when calling getAnimalPorIdUsingGET.');
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
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/animalesrefugio/${encodeURIComponent(String(idAnimal))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAnimalesNoAdoptados
     * 
     * @param page page
     * @param size size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAnimalesNoAdoptadosUsingGET(page: number, size: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAnimalesNoAdoptadosUsingGET(page: number, size: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAnimalesNoAdoptadosUsingGET(page: number, size: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAnimalesNoAdoptadosUsingGET(page: number, size: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAnimalesNoAdoptadosUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling getAnimalesNoAdoptadosUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
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
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/animalesrefugio/all/noadoptados`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAnimalesRefugioPages
     * 
     * @param page page
     * @param size size
     * @param isDeleted isDeleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAnimalesRefugioPagesUsingGET(page: number, size: number, isDeleted?: any, observe?: 'body', reportProgress?: boolean): Observable<PageAnimalRefugioResponse>;
    public getAnimalesRefugioPagesUsingGET(page: number, size: number, isDeleted?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageAnimalRefugioResponse>>;
    public getAnimalesRefugioPagesUsingGET(page: number, size: number, isDeleted?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageAnimalRefugioResponse>>;
    public getAnimalesRefugioPagesUsingGET(page: number, size: number, isDeleted?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAnimalesRefugioPagesUsingGET.');
        }

        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling getAnimalesRefugioPagesUsingGET.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (isDeleted !== undefined && isDeleted !== null) {
            queryParameters = queryParameters.set('isDeleted', <any>isDeleted);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
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
        ];

        return this.httpClient.request<PageAnimalRefugioResponse>('get',`${this.basePath}/animalesrefugio/pageable`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * guardarAnimal
     * 
     * @param colorCaracteristicas 
     * @param especie 
     * @param lugarEstancia 
     * @param nombre 
     * @param observacionesProcedencia 
     * @param procedencia 
     * @param raza 
     * @param sexo 
     * @param multipartFile 
     * @param adoptado 
     * @param edad 
     * @param fechaNacimiento 
     * @param peso 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public guardarAnimalUsingPOSTForm(colorCaracteristicas: string, especie: string, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, multipartFile?: Blob, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public guardarAnimalUsingPOSTForm(colorCaracteristicas: string, especie: string, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, multipartFile?: Blob, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public guardarAnimalUsingPOSTForm(colorCaracteristicas: string, especie: string, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, multipartFile?: Blob, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public guardarAnimalUsingPOSTForm(colorCaracteristicas: string, especie: string, lugarEstancia: string, nombre: string, observacionesProcedencia: string, procedencia: string, raza: string, sexo: string, multipartFile?: Blob, adoptado?: boolean, edad?: number, fechaNacimiento?: Date, peso?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (colorCaracteristicas === null || colorCaracteristicas === undefined) {
            throw new Error('Required parameter colorCaracteristicas was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (especie === null || especie === undefined) {
            throw new Error('Required parameter especie was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (lugarEstancia === null || lugarEstancia === undefined) {
            throw new Error('Required parameter lugarEstancia was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (nombre === null || nombre === undefined) {
            throw new Error('Required parameter nombre was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (observacionesProcedencia === null || observacionesProcedencia === undefined) {
            throw new Error('Required parameter observacionesProcedencia was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (procedencia === null || procedencia === undefined) {
            throw new Error('Required parameter procedencia was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (raza === null || raza === undefined) {
            throw new Error('Required parameter raza was null or undefined when calling guardarAnimalUsingPOST.');
        }

        if (sexo === null || sexo === undefined) {
            throw new Error('Required parameter sexo was null or undefined when calling guardarAnimalUsingPOST.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (adoptado !== undefined && adoptado !== null) {
            queryParameters = queryParameters.set('adoptado', <any>adoptado);
        }
        if (colorCaracteristicas !== undefined && colorCaracteristicas !== null) {
            queryParameters = queryParameters.set('colorCaracteristicas', <any>colorCaracteristicas);
        }
        if (edad !== undefined && edad !== null) {
            queryParameters = queryParameters.set('edad', <any>edad);
        }
        if (especie !== undefined && especie !== null) {
            queryParameters = queryParameters.set('especie', <any>especie);
        }
        if (fechaNacimiento !== undefined && fechaNacimiento !== null) {
            queryParameters = queryParameters.set('fechaNacimiento', <any>fechaNacimiento.toISOString());
        }
        if (lugarEstancia !== undefined && lugarEstancia !== null) {
            queryParameters = queryParameters.set('lugarEstancia', <any>lugarEstancia);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (observacionesProcedencia !== undefined && observacionesProcedencia !== null) {
            queryParameters = queryParameters.set('observacionesProcedencia', <any>observacionesProcedencia);
        }
        if (peso !== undefined && peso !== null) {
            queryParameters = queryParameters.set('peso', <any>peso);
        }
        if (procedencia !== undefined && procedencia !== null) {
            queryParameters = queryParameters.set('procedencia', <any>procedencia);
        }
        if (raza !== undefined && raza !== null) {
            queryParameters = queryParameters.set('raza', <any>raza);
        }
        if (sexo !== undefined && sexo !== null) {
            queryParameters = queryParameters.set('sexo', <any>sexo);
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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (multipartFile !== undefined) {
            formParams = formParams.append('multipartFile', <any>multipartFile) as any || formParams;
        }

        return this.httpClient.request<any>('post',`${this.basePath}/animalesrefugio/`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
