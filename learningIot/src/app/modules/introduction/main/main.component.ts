import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  // CODIGO 1
  CODE1:string = `int SensorPin = A0;
  void setup() {
      Serial.begin(9600);
  }
  void loop() {
      int humedad = analogRead(SensorPin);
      Serial.println(humedad);
      delay(1000);
  }`
  top1:number = 16;
  explain1:string[] = [
    "Se declara una variable llamada 'SensorPin' y se le asigna el valor del pin analógico 'A0'. Se utiliza el tipo de datos int para indicar que es un número entero.",
    "La función 'setup()' se ejecuta una vez al inicio del programa. Se utiliza principalmente para realizar configuraciones iniciales y preparar el entorno de ejecución antes de que comience el bucle principal.",
    "Se inicia la comunicación con el monitor serial. Esto establece una velocidad de comunicación de 9600 baudios.",
    "Cierre de la función 'setup()'.",
    "La función 'loop()' es el bucle principal del programa, que se ejecuta continuamente después de que la función 'setup()' haya finalizado.",
    "Se declara una variable llamada 'humedad' y se le asigna el valor de la lectura analógica del pin 'SensorPin' utilizando la función 'analogRead()'.",
    "Se imprime el valor de humedad en el monitor serial utilizando 'Serial.println(humedad)'. Esto mostrará el valor de humedad en la consola del entorno de desarrollo de Arduino.",
    "Se agrega un retraso de 1 segundo utilizando 'delay(1000)'. Esto hace que el programa espere durante 1 segundo antes de continuar con la siguiente iteración del bucle",
    "Cierre de la función 'loop()'.",
  ];
  max_line1:number = 9;


  // CODIGO 2
  CODE2:string = `#include SoftwareSerial.h
  SoftwareSerial BT1(10, 11);
  void setup(){
      pinMode(8, OUTPUT);
      pinMode(9, OUTPUT);
      digitalWrite(9, HIGH);
      delay (500) ;
      Serial.begin(9600);
      Serial.println("Levantando el modulo HC-06");
      digitalWrite (8, HIGH);
      Serial.println("Esperando comandos AT:");
      BT1.begin(38400);
      }
      void loop(){
      if (BT1.available())
          Serial.write(BT1.read());
      if (Serial.available())
          BT1.write(Serial.read());
      }`
  top2:number = 16;
  explain2:string[] = [
    "Esta línea incluye la biblioteca 'SoftwareSerial' en el programa. Esta biblioteca permite crear puertos seriales virtuales en pines digitales específicos.",
    "Se declara un objeto de la clase 'SoftwareSerial' llamado 'BT1'. Los pines 10 y 11 se utilizan para establecer la comunicación con el módulo Bluetooth HC-06.",
    "La función 'setup()' se ejecuta una vez al inicio del programa. Se utiliza principalmente para realizar configuraciones iniciales y preparar el entorno de ejecución antes de que comience el bucle principal.",
    "Se configuran el pin 8 como salida mediante 'pinMode()'.",
    "Se configuran el pin 9 como salida mediante 'pinMode()'.",
    "Se establece el pin 9 en estado alto (HIGH) mediante 'digitalWrite()'.",
    "Se espera medio segundo utilizando 'delay()' para permitir que el módulo Bluetooth se estabilice.",
    "Se inicia la comunicación serial a una velocidad de 9600 baudios mediante 'Serial.begin()'.",
    "Se imprime un mensaje en el monitor serial para indicar que el módulo HC-06 se está inicializando.",
    "Se establece el pin 8 en estado alto para activar el módulo Bluetooth.",
    "Se imprime mensaje en el monitor serial para indicar que el programa está esperando comandos AT.",
    "Se inicia la comunicación serial con el módulo Bluetooth a una velocidad de 38400 baudios mediante 'BT1.begin()'.",
    "Cierre de la función 'setup()'.",
    "La función 'loop()' es el bucle principal del programa, que se ejecuta continuamente después de que la función 'setup()' haya finalizado.",
    "Se verifica si hay datos disponibles en la comunicación serial del módulo Bluetooth 'BT1.available()'.",
    "Si hay datos disponibles, se leen y se escriben en la comunicación serial del Arduino 'Serial.write(BT1.read())'. Esto permite enviar los datos recibidos a través del módulo Bluetooth al monitor serial.",
    "Se verifica si hay datos disponibles en la comunicación serial del Arduino 'Serial.available()'",
    "Si hay datos disponibles, se leen y se escriben en la comunicación serial del módulo Bluetooth 'BT1.write(Serial.read())'. Esto permite enviar los datos recibidos a través del monitor serial al módulo Bluetooth.",
    "Cierre de la función 'loop()'.",
  ];
  max_line2:number = 19;


  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
