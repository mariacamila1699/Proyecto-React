import http from "../env";

class Consultas {
  //materias
  getAllMaterias() {
    return http.get("/Materia");
  }

  CreateRoles(){
    return http.post("/Materia");
  }

  
}

export default new Consultas();