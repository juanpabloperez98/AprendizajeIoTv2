import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public pasos: string[] = [
    'Manejo de interrupciones (si es necesario)',
    'Escritura y lectura de datos',
    'Inicialización del periférico',
    'Selección del microcontrolador',
    'Configuración de niveles lógicos',
    'Configuración de pull-up/pull-down (si es necesario)',
    'Configuración del registro de control',
    'Gestión de errores y depuración',
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
    'Optimización y eficiencia',
    'Documentación',
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

  public pasos4: string[] = [
    'Selección del microcontrolador',
    'Determinación del protocolo de comunicación (SPI, UART, I2C)',
    'Inicialización de módulo de comunicación serial',
    'Validación y corrección de errores',
    'Gestión de interrupciones de comunicación',
    'Escritura y lectura de datos seriales',
    'Configuración de parámetros de comunicación (baud rate, paridad, bits de parada)',
    'Finalización y cierre de la comunicación',
    'Sincronización de transmisión/recepción',
    'Documentación',
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

  constructor() { }

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

}
