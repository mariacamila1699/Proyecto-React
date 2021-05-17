import http from "../env";

class Consultas {
  //usuario
  getAllRoles() {
    return http.get("/Roles");
  }

  CreateRoles(tipo){
    return http.post("/Roles",tipo);
  }

  EditarRoles(id,tipo){
    return http.put(`/Roles/${id}`, tipo);
  }

  
}

export default new Consultas();