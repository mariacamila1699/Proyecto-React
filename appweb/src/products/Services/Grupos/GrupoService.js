import http from "../env";

class Consultas {
  //materias
  getAllGrupo() {
    return http.get("/Grupo");
  }

  CreateRoles(){
    return http.post("/Grupo");
  }

  
}

export default new Consultas();