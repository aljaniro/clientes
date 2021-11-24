
export class Persona {
  nombre: string
  apellido:string
  email:string
  telefono:number
  ciudad:string
  fecha:Date
  constructor(nombre:string,apellido:string,email:string,telefono:number,ciudad:string,fecha:Date){
    this.nombre=nombre
    this.apellido=apellido
    this.email=email
    this.telefono=telefono
    this.ciudad=ciudad
    this.fecha=fecha
  }
}
