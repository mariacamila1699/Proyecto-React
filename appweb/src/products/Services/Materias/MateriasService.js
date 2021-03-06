import http from "../env";

class Consultas {
  //materias
  getAllMaterias() {
    return http.get("/Materia");
  }

  CreateMaterias(nombre,creditos,usuarios){
    return http.post("/Materia",nombre,creditos,usuarios);
  }

  EditarMaterias(id,nombre,creditos,usuarios){
    return http.put(`/Materia/${id}`, nombre,creditos,usuarios);
  }

  EliminarMateria(id){
    return http.delete(`/Materia/${id}`);
  }

  
}

export default new Consultas();