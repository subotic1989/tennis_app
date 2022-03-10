import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor(private http: HttpClient) {}

  testService(request: any) {
    const url = 'environment.apiUrl';
    return this.http.post(url + '/users/login', request);
  }
}
