import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadreadsServiceService {

  readonly badReadsAPIUrl = "https://localhost:7020/api";

  constructor(private http:HttpClient) { }
}
