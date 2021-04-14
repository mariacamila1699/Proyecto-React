import http from "../env";

class Consultas {
  //materias
  getAllHorarioEstudiante() {
    return http.get("/HorarioEstudiante");
  }

  CreateRoles(){
    return http.post("/HorarioEstudiante");
  }

  
}

export default new Consultas();