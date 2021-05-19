import http from "../env";

class Consultas {
  //materias
  getAllMaterias() {
    return http.get("/Materia");
  }

  CreateRoles(){
    return http.post("/Materia");
  }

  EditarMaterias(id,nombre,){
    return http.put(`/Materia/${id}`, nombre);
  }

  
}

export default new Consultas();