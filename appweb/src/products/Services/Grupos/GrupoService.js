import http from "../env";

class Consultas {
  //materias
  getAllGrupo() {
    return http.get("/Grupo");
  }

  CreateGrupo(nombre,capacidad){
    return http.post("/Grupo",nombre,capacidad);
  }

  EditarGrupo(id,nombre,capacidad){
    return http.put(`/Grupo/${id}`, nombre,capacidad);
  }

  EliminarGrupo(id){
    return http.delete(`/Grupo/${id}`);
  }

  
}

export default new Consultas();