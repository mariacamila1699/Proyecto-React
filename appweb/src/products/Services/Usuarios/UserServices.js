import http from "../env";

class Consultas {
  //usuario
  getAllUsuario() {
    return http.get("/Usuario");
  }

  CreateUsuario(nombre,apellido,correo,roles){
    return http.post("/Usuario",nombre,apellido,correo,roles);
  }

  EditarUsuario(id,nombre,apellido,correo,roles){
    return http.put(`/Usuario/${id}`, nombre,apellido,correo,roles);
  }

  EliminarUsuario(id){
    return http.delete(`/Usuario/${id}`);
  }

  
}

export default new Consultas();