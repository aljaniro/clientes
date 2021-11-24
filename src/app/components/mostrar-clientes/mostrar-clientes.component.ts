import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientesService } from '../../services/clientes.service';
import { Persona } from '../../persona/persona.module';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit {
  listapersona:Persona[]=[]
  total:number=0
  suscription:Subscription
  constructor(private clientser:ClientesService) {
    this.suscription=this.clientser.getcliente().subscribe(valor=>{
     this.listapersona.push(valor)
     console.log(this.listapersona)
     this.total= this.listapersona.length

    })
  }

  ngOnInit(): void {
    this.suscription=this.clientser.getcliente().subscribe(valor=>{
      console.log(valor)
    })
  }

}
