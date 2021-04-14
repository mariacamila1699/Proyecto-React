import http from "../env";

class Consultas {
  //usuario
  getAllRoles() {
    return http.get("/Roles");
  }

  CreateRoles(){
    return http.post("/Roles");
  }

  
}

export default new Consultas();