import http from "../env";

class Consultas {
  //materias
  getAllAula() {
    return http.get("/Aula");
  }

  CreateAula(nombre,bloque){
    return http.post("/Aula",nombre,bloque);
  }

  EditarAula(id,nombre,bloque){
    return http.put(`/Aula/${id}`, nombre,bloque);
  }

  
}

export default new Consultas();