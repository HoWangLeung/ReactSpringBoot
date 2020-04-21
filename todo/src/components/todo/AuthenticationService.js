import axios from "axios";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log(username,"pppppp");
    sessionStorage.setItem("authenticatedUser", username);
    console.log('sdffdsdffsf');
    this.setupAxiosInterceptors();
  }



  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIN() {


    
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return "";
    return user;
  }

  setupAxiosInterceptors() {
    console.log('ss');
    console.log(this.isUserLoggedIN());
    

    
    let username = "in28minutes";
    let password = "dummy";
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    axios.interceptors.request.use((config) => {
     
      if (this.isUserLoggedIN()) {
     
        
        config.headers.authorization = basicAuthHeader;
      }
      console.log( config.headers.authorization);
      
      return config;
    });
  }
}

export default new AuthenticationService();
