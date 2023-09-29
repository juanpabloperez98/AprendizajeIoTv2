import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  flag: boolean = true;

  public pasos: string[] = [
    'Manejo de interrupciones (si es necesario)',
    'Escritura y lectura de datos',
    'Inicialización del periférico',
    'Selección del microcontrolador',
    'Configuración de niveles lógicos',
    'Gestión de errores y depuración',
    'Configuración de pull-up/pull-down (si es necesario)',
    'Configuración del registro de control',
  ];

  private response: string[] = [
    'Selección del microcontrolador',
    'Inicialización del periférico',
    'Configuración del registro de control',
    'Configuración de pull-up/pull-down (si es necesario)',
    'Manejo de interrupciones (si es necesario)',
    'Configuración de niveles lógicos',
    'Escritura y lectura de datos',
    'Gestión de errores y depuración',
  ]

  public correct: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]

  public pasos2: string[] = [
    'Optimización y eficiencia',
    'Lectura y escritura de datos',
    'Inicialización de periféricos',
    'Identificación de periféricos',
    'Temporización y sincronización',
    'Manejo de interrupciones',
    'Documentación',
  ];

  private response2: string[] = [
    'Identificación de periféricos',
    'Inicialización de periféricos',
    'Lectura y escritura de datos',
    'Temporización y sincronización',
    'Manejo de interrupciones',
    'Documentación',
    'Optimización y eficiencia',
  ]

  public correct2: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]

  public pasos3: string[] = [
    'Identificación de requisitos de consumo',
    'Configuración de wake-up sources (fuentes de activación)',
    'Selección del microcontrolador',
    'Selección del modo de bajo consumo adecuado',
    'Testeo y validación del consumo',
    'Gestión de interrupciones relacionadas con el ahorro de energía',
    'Configuración de periféricos en modos de ahorro de energía',
    'Implementación de transiciones de modos de energía',
    'Documentación',
    'Gestión de errores y depuración',
  ];

  private response3: string[] = [
    'Selección del microcontrolador',
    'Identificación de requisitos de consumo',
    'Selección del modo de bajo consumo adecuado',
    'Configuración de periféricos en modos de ahorro de energía',
    'Configuración de wake-up sources (fuentes de activación)',
    'Implementación de transiciones de modos de energía',
    'Gestión de interrupciones relacionadas con el ahorro de energía',
    'Testeo y validación del consumo',
    'Gestión de errores y depuración',
    'Documentación',
  ]

  public correct3: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]

  public pasos4: string[] = [
    'Escritura y lectura de datos seriales',
    'Selección del microcontrolador',
    'Validación y corrección de errores',
    'Gestión de interrupciones de comunicación',
    'Determinación del protocolo de comunicación (SPI, UART, I2C)',
    'Configuración de parámetros de comunicación (baud rate, paridad, bits de parada)',
    'Inicialización de módulo de comunicación serial',
    'Finalización y cierre de la comunicación',
    'Documentación',
    'Sincronización de transmisión/recepción',
  ];

  private response4: string[] = [
    'Selección del microcontrolador',
    'Determinación del protocolo de comunicación (SPI, UART, I2C)',
    'Inicialización de módulo de comunicación serial',
    'Configuración de parámetros de comunicación (baud rate, paridad, bits de parada)',
    'Escritura y lectura de datos seriales',
    'Gestión de interrupciones de comunicación',
    'Sincronización de transmisión/recepción',
    'Validación y corrección de errores',
    'Finalización y cierre de la comunicación',
    'Documentación',
  ]

  public correct4: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]

  constructor(
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pasos, event.previousIndex, event.currentIndex);
  }

  onDrop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pasos2, event.previousIndex, event.currentIndex);
  }

  onDrop3(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pasos3, event.previousIndex, event.currentIndex);
  }

  onDrop4(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pasos4, event.previousIndex, event.currentIndex);
  }

  comprobarRespuestas() {
    var corrects1 = 0, corrects2 = 0, corrects3 = 0, corrects4 = 0;

    //Validamos el tema 1
    for (let i = 0; i < this.pasos.length; i++) {
      const element1 = this.pasos[i],
            element2 = this.response[i];
      if(element1 === element2){
        corrects1++;
        this.correct[i] = true;
      }else{
        this.correct[i] = false;
      }
    }

    //Validamos el tema 2
    for (let i = 0; i < this.pasos2.length; i++) {
      const element1 = this.pasos2[i],
            element2 = this.response2[i];
      if(element1 === element2){
        corrects2++;
        this.correct2[i] = true;
      }else{
        this.correct2[i] = false;
      }
    }

    //Validamos el tema 3
    for (let i = 0; i < this.pasos3.length; i++) {
      const element1 = this.pasos3[i],
            element2 = this.response3[i];
      if(element1 === element2){
        corrects3++;
        this.correct3[i] = true;
      }else{
        this.correct3[i] = false;
      }
    }

    //Validamos el tema 4
    for (let i = 0; i < this.pasos4.length; i++) {
      const element1 = this.pasos4[i],
            element2 = this.response4[i];
      if(element1 === element2){
        corrects4++;
        this.correct4[i] = true;
      }else{
        this.correct4[i] = false;
      }
    }

    if(corrects1 == 8 && corrects2 == 7 && corrects3 == 10 && corrects4 == 10){
      Swal.fire(
        "Felicidades haz aprobado las preguntas",
        "¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas",
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/redes/main']);
        }
      });
    }else{
      Swal.fire(
        "Lo sentimos aun no haz aprobado el cuestionario",
        `Tema 1 tienes ${corrects1} correctas y ${this.pasos.length - corrects1} incorrectas.<br>
        Tema 2 tienes ${corrects2} correctas y ${this.pasos2.length - corrects2} incorrectas.<br>
        Tema 3 tienes ${corrects3} correctas y ${this.pasos3.length - corrects3} incorrectas..<br>
        Tema 4 tienes ${corrects4} correctas y ${this.pasos4.length - corrects4} incorrectas..<br>
        `,
        'error'
      )
    }

  }

  back = (): void => {
    // this.location.back();
    this.router.navigate(['/microcontroller']);
  }

}
