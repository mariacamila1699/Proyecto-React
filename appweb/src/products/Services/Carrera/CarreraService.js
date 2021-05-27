import http from "../env";

class Consultas {
  //carreras
  getAllCarrera() {
    return http.get("/Carrera");
  }

  CreateCarrera(nombre,semestre){
    return http.post("/Carrera",nombre,semestre);
  }

  EditarCarrera(id,nombre,semestre){
    return http.put(`/Carrera/${id}`, nombre,semestre);
  }

  EliminarCarrera(id){
    return http.delete(`/Carrera/${id}`);
  }

  
}

export default new Consultas();