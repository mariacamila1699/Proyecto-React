import http from "../env";

class Consultas {
  //materias
  getAllHorarioProfesor() {
    return http.get("/HorarioProfesor");
  }

  CreateHorarioProfesor(dia,hora_inicio,hora_final){
    return http.post("/HorarioProfesor",dia,hora_inicio,hora_final);
  }

  EditarHorarioProfesor(id,dia,hora_inicio,hora_final){
    return http.put(`/HorarioProfesor/${id}`, dia,hora_inicio,hora_final);
  }

  EliminarHorarioProfesor(id){
    console.log(id)
    return http.delete(`/HorarioProfesor/${id}`);
  }

  
}

export default new Consultas();