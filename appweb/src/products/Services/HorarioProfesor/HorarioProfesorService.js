import http from "../env";

class Consultas {
  //materias
  getAllHorarioProfesor() {
    return http.get("/HorarioProfesor");
  }

  CreateRoles(){
    return http.post("/HorarioProfesor");
  }

  
}

export default new Consultas();