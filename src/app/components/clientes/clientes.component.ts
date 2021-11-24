import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../persona/persona.module';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
form:FormGroup
  constructor(private fb:FormBuilder,private clienser:ClientesService) {
    this.form=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      telefono:['',Validators.required],
      ciudad:['',Validators.required],
      fecha:new Date
    })


  }

  ngOnInit(): void {
  }
 agregar(){
   console.log(this.form)
   const cliente:Persona={
    nombre:this.form.get('nombre')?.value,
    apellido:this.form.get('apellido')?.value,
    email:this.form.get('email')?.value,
    telefono:this.form.get('telefono')?.value,
    ciudad:this.form.get('ciudad')?.value,
    fecha:new Date
   }
   console.log(cliente)
   this.clienser.enviar(cliente)
 }
}
