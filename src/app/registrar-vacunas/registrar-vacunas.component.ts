import { Component, OnInit } from '@angular/core';
import { VacunasService } from 'app/api/vacunas.service';
import { Vacuna } from 'app/model/vacuna';
import { VacunaDTO } from 'app/model/vacunaDTO';
import { data } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'registrar-vacunas',
  templateUrl: './registrar-vacunas.component.html',
  styleUrls: ['./registrar-vacunas.component.css']
})
export class RegistrarVacunasComponent implements OnInit {

  vacunas: VacunaDTO = {};
  constructor(private vacunaService: VacunasService) { }

  ngOnInit(): void {
  }

  createVacunas(){
if(this.vacunas.nombre === undefined || this.vacunas.tipo === undefined || this.vacunas.descripcion === undefined
  || this.vacunas.nombre === '' || this.vacunas.tipo === '' || this.vacunas.descripcion === ''){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ingrese todos los datos!',
  })
}else{
  Swal.fire({
    title: 'Seguro quiere realizar esta acción?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Registrar',
    denyButtonText: `No registrar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.vacunaService.createUsingPOST8(this.vacunas).subscribe(data =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Vacuna registrada exitosamente',
          showConfirmButton: false,
          timer: 1500
        })
            location.reload();
      })
    } else if (result.isDenied) {
      Swal.fire('Acción cancelada', '', 'info')
    }
  })

 
}

   
  }
}
