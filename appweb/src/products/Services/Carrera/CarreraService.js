import http from "../env";

class Consultas {
  //carreras
  getAllCarrera() {
    return http.get("/Carrera");
  }

  CreateRoles(){
    return http.post("/Carrera");
  }

  
}

export default new Consultas();