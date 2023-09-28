import { Component, OnInit } from '@angular/core';
import { Pregunta, Opcion } from './quiz.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'presentation1-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  preguntas: Pregunta[] = [
    {
      pregunta: '1.	Plataforma que facilita la construcción de aplicaciones IoT, ofreciendo una forma sencilla y segura de conectar dispositivos al mundo del Internet de las Cosas.',
      respuesta: 'IoT (Internet de las Cosas)',
      id: 1,
      status: false,
    },
    {
      pregunta: '2.	Se refiere al creciente número de dispositivos que están conectados a Internet y que comunican datos entre sí o a la nube.',
      respuesta: 'Arduino IoT Cloud',
      id: 8,
      status: false,
    },
    {
      pregunta: '3.	Servicio que permite a los usuarios crear cadenas de declaraciones condicionales simples, llamadas "applets".',
      respuesta: 'Webhooks',
      id: 4,
      status: false,
    },
    {
      pregunta: '4.	Herramienta que permite a las aplicaciones comunicarse automáticamente cuando ocurre un evento.',
      respuesta: 'IFTTT (If This Then That)',
      id: 10,
      status: false,
    },
    {
      pregunta: '5.	Placa que puede usarse para medir temperatura y humedad y que puede conectarse al Internet de las Cosas.',
      respuesta: 'Autenticación de Dos Factores',
      id: 5,
      status: false,
    },
    {
      pregunta: '6.	Es la práctica de requerir dos o más tipos de identificación antes de conceder acceso a la información.',
      respuesta: 'Arduino MKR WiFi 1010',
      id: 3,
      status: false,
    },
    {
      pregunta: '7.	Código que escribe y carga programas en placas, como las de Arduino.',
      respuesta: 'Arduino',
      id: 2,
      status: false,
    },
    {
      pregunta: '8.	Una plataforma de hardware y software de código abierto, diseñada para hacer la electrónica y programación más accesibles.',
      respuesta: 'Arduino IDE',
      id: 6,
      status: false,
    },
    {
      pregunta: '9.	Proteger la información transmitida entre el dispositivo y la nube.',
      respuesta: 'Autenticación de Dispositivos',
      id: 9,
      status: false,
    },
    {
      pregunta: '10.	Medida que garantiza que solo los dispositivos confiables se conecten a tu red o plataforma.',
      respuesta: 'Comunicación Encriptada',
      id: 7,
      status: false,
    }
  ]

  opciones: Opcion[] = [
    { opcion: 'a. IoT (Internet de las Cosas)', id: 1 },
    { opcion: 'b. Arduino', id: 2 },
    { opcion: 'c. Arduino MKR WiFi 1010', id: 3 },
    { opcion: 'd. Webhooks', id: 4 },
    { opcion: 'e. Autenticación de Dos Factores', id: 5 },
    { opcion: 'f. Arduino IDE', id: 6 },
    { opcion: 'g. Comunicación Encriptada', id: 7 },
    { opcion: 'h. Arduino IoT Cloud', id: 8 },
    { opcion: 'i. Autenticación de Dispositivos', id: 9 },
    { opcion: 'j. IFTTT (If This Then That)', id: 10 },
  ]

  respuestasSeleccionadas: { [key: number]: string } = {};

  comprobarRespuestas() {
    let num_correctas = 0,
      num_incorrectas = 0;
    if (Object.keys(this.respuestasSeleccionadas).length < this.preguntas.length) {
      Swal.fire(
        "Cuestionario incompleto",
        "Debe escoger un termino para cada descripción",
        'error'
      )
      return;
    };
    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.preguntas[i].id === parseInt(this.respuestasSeleccionadas[i])) {
        num_correctas++;
        this.preguntas[i].status = true;
      } else {
        num_incorrectas++;
      }
    }
    if (num_correctas != this.preguntas.length) {
      Swal.fire(
        "Lo sentimos no haz aprobado el cuestionario",
        `Haz obtenido ${num_correctas} respuestas correctas
          y ${num_incorrectas} respuestas incorrectas.
          ¡No te desanimes! Sigue practicando y mejorarás
        `,
        'error'
      )
      return;
    } else {
      Swal.fire(
        "Felicidades haz aprobado las preguntas",
        "¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas",
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/security']);
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
