export const backendUsers = {
    'josenelle': {
      password: '12345',
      token: '123'
    },
    'phillipe': {
      password: '12345',
      token: '123'
    }
  };
  
  export class AuthService {
    constructor() {
      this._isAuthenticated = false;
    }
    isValidPassword(user, password) {
      if (backendUsers[user] && backendUsers[user].password === password) {
        return true
      }
      return false
    }
  
    isValidToken(user, token) {
      if (backendUsers[user] && backendUsers[user].token === token) {
        return true
      }
      return false
    }
    setIsAuthenticated() {
      this._isAuthenticated = true;
    }
    isAuthenticated() {
      return this._isAuthenticated;
    }
  }
  
  export default new AuthService();
  