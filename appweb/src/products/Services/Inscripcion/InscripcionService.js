import http from "../env";

class Consultas {
  //materias
  getAllInscripcion() {
    return http.get("/Inscripcion");
  }

  CreateInscripcion(fecha_inscripcion,usuarios){
    return http.post("/Inscripcion",fecha_inscripcion,usuarios);
  }

  EditarInscripcion(id,fecha_inscripcion,user){
    return http.put(`/Inscripcion/${id}`, fecha_inscripcion,user);
  }

  EliminarInscripcion(id){
    return http.delete(`/Inscripcion/${id}`);
  }



  
}

export default new Consultas();