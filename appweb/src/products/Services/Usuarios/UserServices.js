import http from "../env";

class Consultas {
  //usuario
  getAllUsuario() {
    return http.get("/Usuario");
  }

  CreateUsuario(){
    return http.post("/Usuario");
  }

  
}

export default new Consultas();