import { Component, OnInit } from '@angular/core';
import { Question } from './quiz.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [
    {
      sentence: "1) Las plataformas IoT son soluciones integradas que facilitan la conexión, gestión, y __ de dispositivos en el Internet de las Cosas.",
      options: [
        "a) visualización",
        "b) desactivación",
        "c) análisis",
        "d) programación"
      ],
      correctAnswerIndex: 2,
      correct: false,
    },
    {
      sentence: "2) Estas plataformas funcionan como el __ o intermediario entre el hardware (dispositivos y sensores) y las aplicaciones de usuario.",
      options: [
        "a) software",
        "b) middleware",
        "c) hardlink",
        "d) bridge"
      ],
      correctAnswerIndex: 1,
      correct: false,
    },
    {
      sentence: "3) Las plataformas IoT deben ser capaces de comunicarse con una variedad de dispositivos, cada uno de los cuales puede usar diferentes __ y estándares de comunicación.",
      options: [
        "a) cables",
        "b) lenguajes",
        "c) protocolos",
        "d) medios"
      ],
      correctAnswerIndex: 2,
      correct: false,
    },
    {
      sentence: "4) Una vez que los dispositivos están en línea, necesitan ser __ y gestionados",
      options: [
        "a) programados",
        "b) monitoreados",
        "c) activados",
        "d) cargados"
      ],
      correctAnswerIndex: 1,
      correct: false,
    },
    {
      sentence: "5) Las plataformas de IoT proporcionan mecanismos robustos para garantizar la __ de los dispositivos, los datos y las interacciones de los usuarios.",
      options: [
        "a) visibilidad",
        "b) programación",
        "c) seguridad",
        "d) activación"
      ],
      correctAnswerIndex: 2,
      correct: false,
    },
    {
      sentence: "6) Las plataformas IoT actúan como el __ del Internet de las Cosas.",
      options: [
        "a) corazón",
        "b) cerebro",
        "c) mano",
        "d) ojo"
      ],
      correctAnswerIndex: 1,
      correct: false,
    },
    {
      sentence: "7) Las plataformas IoT están diseñadas para facilitar la implementación y gestión de __ basadas en el Internet de las Cosas.",
      options: [
        "a) aplicaciones",
        "b) conexiones",
        "c) redes",
        "d) interacciones"
      ],
      correctAnswerIndex: 0,
      correct: false,
    },
    {
      sentence: "8) La capacidad de conectar una multitud de dispositivos es fundamental para cualquier __ .",
      options: [
        "a) red",
        "b) programa",
        "c) sistema operativo",
        "d) plataforma IoT"
      ],
      correctAnswerIndex: 3,
      correct: false,
    },
    {
      sentence: "9) Protocolos Múltiples: Las plataformas deben soportar diferentes __ de comunicación, desde HTTP/HTTPS, MQTT, CoAP, hasta WebSockets y otros.",
      options: [
        "a) lenguajes",
        "b) estándares",
        "c) protocolos",
        "d) técnicas"
      ],
      correctAnswerIndex: 3,
      correct: false,
    },
    {
      sentence: "10) Event Stream Processing: Procesamiento en tiempo real de __ de datos para tomar decisiones instantáneas basadas en la información entrante.",
      options: [
        "a) arreglos",
        "b) flujos",
        "c) cargas",
        "d) conjuntos"
      ],
      correctAnswerIndex: 1,
      correct: false,
    },
  ];

  userAnswers: string[] = [];
  score: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkAnswers() {
    this.score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (parseInt(this.userAnswers[i]) === this.questions[i].correctAnswerIndex) {
        this.score++;
        this.questions[i].correct = true;
      }
    }
    if(this.score === 10){
      Swal.fire(
        "Felicidades haz aprobado las preguntas",
        "¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas",
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/presentationOne/main']);
        }
      });
    }else{
      let incorrect = 10 - this.score;
      Swal.fire(
        "Lo sentimos no haz aprobado el cuestionario",
        `Tienes ${this.score} respuestas correctas y ${incorrect} respuestas incorrectas.
        ¡No te desanimes! Sigue practicando y mejorarás
        `,
        'error'
      )
    }
  }

}
