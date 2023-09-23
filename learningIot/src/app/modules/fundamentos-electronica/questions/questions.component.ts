import { Component, OnInit } from '@angular/core';
import { Pregunta, Opcion } from './quiz.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {


  num_correctas: number = 0;
  num_incorrectas: number = 0;



  preguntas: Pregunta[] = [
    { pregunta: 'Fluctúa en dirección y magnitud con el tiempo.', respuesta: 'Corriente Alterna', id: 3 },
    { pregunta: 'Representado por una línea en zigzag.', respuesta: 'Símbolo para resistencia en un diagrama', id: 7 },
    { pregunta: 'Flujo de electrones a través de un conductor.', respuesta: 'Corriente eléctrica', id: 1 },
    { pregunta: 'Suma de todas las resistencias individuales.', respuesta: 'Resistencias en serie', id: 8 },
    { pregunta: 'Medido en voltios.', respuesta: 'Unidad para medir el voltaje', id: 5 },
    { pregunta: 'Medida de oposición al flujo de corriente eléctrica.', respuesta: 'Resistencia', id: 6 },
    { pregunta: 'Punto de referencia en un circuito.', respuesta: 'Símbolo de tierra en diagramas', id: 10 },
    { pregunta: 'Componentes conectados en ramas separadas.', respuesta: 'Circuitos en paralelo', id: 9 },
    { pregunta: 'Fluye constantemente en una sola dirección.', respuesta: 'Corriente Continua', id: 2 },
    { pregunta: '"Fuerza" que impulsa a los electrones en un circuito.', respuesta: 'Voltaje', id: 4 },
  ]

  opciones: Opcion[] = [
    { opcion: 'Corriente eléctrica', id: 1 },
    { opcion: 'Corriente Continua.', id: 2 },
    { opcion: 'Corriente Alterna.', id: 3 },
    { opcion: 'Voltaje.', id: 4 },
    { opcion: 'Unidad para medir el voltaje.', id: 5 },
    { opcion: 'Resistencia.', id: 6 },
    { opcion: 'Símbolo para resistencia en un diagrama', id: 7 },
    { opcion: 'Resistencias en serie', id: 8 },
    { opcion: 'Circuitos en paralelo', id: 9 },
    { opcion: 'Símbolo de tierra en diagramas', id: 10 },
  ]

  respuestasSeleccionadas :{ [key: number]: string } = {};

  comprobarRespuestas() {
    if(Object.keys(this.respuestasSeleccionadas).length < this.preguntas.length){
      Swal.fire(
        "Cuestionario incompleto",
        "Debe escoger un termino para cada descripción",
        'error'
      )
      return;
    };
    console.log(this.respuestasSeleccionadas);
    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.preguntas[i].id === parseInt(this.respuestasSeleccionadas[i])) {
        this.num_correctas ++;
      } else {
        this.num_incorrectas ++;
      }
    }
    if(this.num_correctas < this.num_incorrectas){
      Swal.fire(
        "Lo sentimos no haz aprobado el cuestionario",
        `Haz obtenido ${this.num_correctas} respuestas correctas
          y ${this.num_incorrectas} respuestas incorrectas.
          ¡No te desanimes! Sigue practicando y mejorarás
        `,
        'error'
      ).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
