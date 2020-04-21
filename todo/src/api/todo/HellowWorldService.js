import axios from "axios";

class HellowWorldService {
  executeHelloWordService() {
    console.log("execute service hello");
    return axios.get("http://localhost:8080/hello-world");
  }
  executeHelloWordBeanService() {
    console.log("execute service hello");
    return axios.get("http://localhost:8080/hello-world-bean");
  }
  executeHelloWordPathVariableService(name) {
    console.log("execute service hello");
    let username = "in28minutes";
    let password = "dummy";
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

    return axios.get(
      `http://localhost:8080/hello-world-bean/path-variable/${name}`,

      {
        headers: {
          authorization: basicAuthHeader
        },
      }
    );
  }
}

export default new HellowWorldService();
