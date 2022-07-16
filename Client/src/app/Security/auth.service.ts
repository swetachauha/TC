import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn()
  {
    return !!localStorage.getItem('username');
  }
  getToken()
  {
    return localStorage.getItem('username')
  }
}
