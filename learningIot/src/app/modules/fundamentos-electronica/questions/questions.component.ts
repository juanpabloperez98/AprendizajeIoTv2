import { Component, OnInit } from '@angular/core';
import { Pregunta, Opcion } from './quiz.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {



  preguntas: Pregunta[] = [
    { pregunta: '1. Fluctúa en dirección y magnitud con el tiempo.', respuesta: 'Corriente Alterna', id: 3, status: false },
    { pregunta: '2. Representado por una línea en zigzag.', respuesta: 'Símbolo para resistencia en un diagrama', id: 7, status: false },
    { pregunta: '3. Flujo de electrones a través de un conductor.', respuesta: 'Corriente eléctrica', id: 1, status: false },
    { pregunta: '4. Suma de todas las resistencias individuales.', respuesta: 'Resistencias en serie', id: 8, status: false },
    { pregunta: '5. Medido en voltios.', respuesta: 'Unidad para medir el voltaje', id: 5, status: false },
    { pregunta: '6. Medida de oposición al flujo de corriente eléctrica.', respuesta: 'Resistencia', id: 6, status: false },
    { pregunta: '7. Punto de referencia en un circuito.', respuesta: 'Símbolo de tierra en diagramas', id: 10, status: false },
    { pregunta: '8. Componentes conectados en ramas separadas.', respuesta: 'Circuitos en paralelo', id: 9, status: false },
    { pregunta: '9. Fluye constantemente en una sola dirección.', respuesta: 'Corriente Continua', id: 2, status: false },
    { pregunta: '10. "Fuerza" que impulsa a los electrones en un circuito.', respuesta: 'Voltaje', id: 4, status: false },
  ]

  opciones: Opcion[] = [
    { opcion: 'a. Corriente eléctrica', id: 1 },
    { opcion: 'b. Corriente Continua.', id: 2 },
    { opcion: 'c. Corriente Alterna.', id: 3 },
    { opcion: 'd. Voltaje.', id: 4 },
    { opcion: 'e. Unidad para medir el voltaje.', id: 5 },
    { opcion: 'f. Resistencia.', id: 6 },
    { opcion: 'g. Símbolo para resistencia en un diagrama', id: 7 },
    { opcion: 'h. Resistencias en serie', id: 8 },
    { opcion: 'i. Circuitos en paralelo', id: 9 },
    { opcion: 'j. Símbolo de tierra en diagramas', id: 10 },
  ]

  respuestasSeleccionadas :{ [key: number]: string } = {};

  comprobarRespuestas() {
    let num_correctas = 0,
    num_incorrectas = 0;
    if(Object.keys(this.respuestasSeleccionadas).length < this.preguntas.length){
      Swal.fire(
        "Cuestionario incompleto",
        "Debe escoger un termino para cada descripción",
        'error'
      )
      return;
    };
    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.preguntas[i].id === parseInt(this.respuestasSeleccionadas[i])) {
        num_correctas ++;
        this.preguntas[i].status = true;
      } else {
        num_incorrectas ++;
      }
    }
    if(num_correctas != this.preguntas.length){
      Swal.fire(
        "Lo sentimos no haz aprobado el cuestionario",
        `Haz obtenido ${num_correctas} respuestas correctas
          y ${num_incorrectas} respuestas incorrectas.
          ¡No te desanimes! Sigue practicando y mejorarás
        `,
        'error'
      )
      // ).then((result) => {
      //   if (result.isConfirmed) {
      //     this.location.back();
      //   }
      // })
      return;
    }else{
      Swal.fire(
        "Felicidades haz aprobado las preguntas",
        "¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas",
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/microcontroller']);
        }
      });
    }
  }

  back = (): void => {
    this.location.back();
  }

  constructor(
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

}
