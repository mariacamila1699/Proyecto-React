import http from "../env";

class Consultas {
  //materias
  getAllHorarioEstudiante() {
    return http.get("/HorarioEstudiante");
  }

  CreateHorarioEstudiante(dia,hora_inicio,hora_final){
    return http.post("/HorarioEstudiante",dia,hora_inicio,hora_final);
  }

  EditarHorarioEstudiante(id,dia,hora_inicio,hora_final){
    return http.put(`/HorarioEstudiante/${id}`, dia,hora_inicio,hora_final);
  }

  EliminarHorarioEstudiante(id){
    console.log(id)
    return http.delete(`/HorarioEstudiante/${id}`);
  }

  
}

export default new Consultas();