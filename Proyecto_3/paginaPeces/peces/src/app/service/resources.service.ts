import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('https://origin-east-01-drupal-fishwatch.woc.noaa.gov/api/species')
  }
}
