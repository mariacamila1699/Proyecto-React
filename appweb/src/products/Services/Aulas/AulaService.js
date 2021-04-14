import http from "../env";

class Consultas {
  //materias
  getAllAula() {
    return http.get("/Aula");
  }

  CreateRoles(){
    return http.post("/Aula");
  }

  
}

export default new Consultas();