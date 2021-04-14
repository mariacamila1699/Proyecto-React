import http from "../env";

class Consultas {
  //materias
  getAllInscripcion() {
    return http.get("/Inscripcion");
  }

  CreateRoles(){
    return http.post("/Inscripcion");
  }

  
}

export default new Consultas();