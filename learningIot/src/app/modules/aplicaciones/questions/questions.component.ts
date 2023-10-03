import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HighlightService } from '../../../services/highlight.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'presentation2-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @ViewChild('questionNum1', { static: false }) questionNum1!: ElementRef;
  @ViewChild('questionNum2', { static: false }) questionNum2!: ElementRef;
  @ViewChild('questionNum3', { static: false }) questionNum3!: ElementRef;
  @ViewChild('questionNum4', { static: false }) questionNum4!: ElementRef;
  @ViewChild('questionNum5', { static: false }) questionNum5!: ElementRef;
  @ViewChild('finalSection', { static: false }) finalSection!: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;

  questionsAnswer: string[] = [
    "answer3",
    "answer2",
    "answer3",
    "answer1",
    "answer2",
  ]
  selectedAnswer: string[] = ['answer1','answer1','answer1','answer1','answer1'];
  selectedQuestion1: string = 'answer1';
  selectedQuestion2: string = 'answer1';
  selectedQuestion3: string = 'answer1';
  selectedQuestion4: string = 'answer1';
  selectedQuestion5: string = 'answer1';

  progressValue: number = 33;

  cuarto1:boolean=false;
  cuarto2:boolean=false;
  bano:boolean=false;
  cocina:boolean=false;
  sala:boolean=false;
  comedor:boolean=false;


  berenjena: boolean = false;
  berenjena1: boolean = false;
  berenjena2: boolean = false;
  berenjena21: boolean = false;

  flor1: boolean = false;
  flor12: boolean = false;
  flor2: boolean = false;
  flor21: boolean = false;

  zanaoria1: boolean = false;
  zanaoria11: boolean = false;
  zanaoria2: boolean = false;
  zanaoria21: boolean = false;




  ActivarMensajeError:boolean=true;
  ActivarEstiloError:boolean=true;

  botonSiguienteDisabled:boolean=true;

  // Final Secion variables
  imagePath = 'assets/logos/correct.png';
  titleMsg = 'Felicidades haz aprobado las preguntas';
  bodyMsg = '¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas';
  correctAnswer = 0;
  incorrectAnswer = 0;
  ROUTE_PATH_INTRODUCTION = "/aplicaciones/main";




  constructor(
    private highlightService: HighlightService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    // this.questionNum1.nativeElement.style.display = 'none';
    this.highlightService.highlightAll();
    this.progressBar.nativeElement.style.display = 'none';
    this.finalSection.nativeElement.style.display = 'none';
    this.questionNum2.nativeElement.style.display = 'none';
    this.questionNum3.nativeElement.style.display = 'none';
    this.questionNum4.nativeElement.style.display = 'none';
    this.questionNum5.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
  }

  getAnswers = (): void => {
    this.selectedAnswer.forEach( (item, index) => {
      let elem1 = item,
          elem2 = this.questionsAnswer[index];
      if(elem1 == elem2){
        this.correctAnswer ++;
      }else{
        this.incorrectAnswer ++;
      }
    })
  }

  showMessage = (): void => {
    this.getAnswers();
    /* if(this.correctAnswer < this.incorrectAnswer){
      this.titleMsg = 'Lo sentimos no haz aprobado las preguntas';
      this.bodyMsg = '¡No te desanimes! Sigue practicando y mejorarás';
      this.imagePath = 'assets/logos/incorrect.png';
    }
    this.finalSection.nativeElement.style.display = ''; */
    Swal.fire(
      '🎉 ¡Perfecto!',
      `Has completado con éxito todos los módulos de esta aplicación. ¡Excelente trabajo!
      Aunque has llegado al final de nuestro programa, la jornada en el amplio mundo del Internet de las Cosas (IoT) apenas comienza. Hay un océano de información y oportunidades esperando por ti. Te animamos a seguir profundizando y explorando en línea para ampliar tu conocimiento y habilidades. El futuro de IoT es brillante, y tú eres ahora parte de él.
      ¡Continúa explorando y nunca dejes de aprender!`,
      'success'
    ).then((response) => {
      if(response.isConfirmed){
        this.router.navigate(['/']);
      }
    })
  }

  onClick = (question: number): void => {
    switch(question){
      case 0:{
        this.botonSiguienteDisabled=true;
        this.ActivarMensajeError=true;
        this.selectedAnswer[question] = this.selectedQuestion1;
        this.questionNum1.nativeElement.style.display = 'none';
        this.questionNum2.nativeElement.style.display = '';
        this.progressValue += 33;
        break;
      }
      case 1:{
        this.botonSiguienteDisabled=true;
        this.ActivarMensajeError=true;
        this.selectedAnswer[question] = this.selectedQuestion2;
        this.questionNum2.nativeElement.style.display = 'none';
        this.questionNum3.nativeElement.style.display = '';
        this.progressValue += 33;
        break;
      }
      case 2:{
        this.botonSiguienteDisabled=true;
        this.ActivarMensajeError=true;
        this.selectedAnswer[question] = this.selectedQuestion3;
        this.questionNum3.nativeElement.style.display = 'none';
        this.questionNum4.nativeElement.style.display = '';
        this.progressValue += 33;
        break;
      }

      case 3:{
        this.botonSiguienteDisabled=true;
        this.ActivarMensajeError=true;
        this.selectedAnswer[question] = this.selectedQuestion4;
        this.questionNum4.nativeElement.style.display = 'none';
        this.questionNum5.nativeElement.style.display = '';
        this.progressValue += 33;
        break;
      }

      case 4:{
        this.botonSiguienteDisabled=true;
        this.ActivarMensajeError=true;
        this.selectedAnswer[question] = this.selectedQuestion5;
        this.progressValue += 1;
        this.questionNum5.nativeElement.style.display = 'none';
        this.progressBar.nativeElement.style.display = 'none';
        this.showMessage();
        break;
      }
    }
    this.scrollToTop();
  }


  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  onClickEnviar = (question: number): void => {
    switch(question){
      case 0:{
        if (this.selectedQuestion1=="answer3"){
            this.cuarto1=true;
            this.cuarto2=true;
            this.botonSiguienteDisabled=false;
            if(this.ActivarMensajeError==false){
              this.ActivarMensajeError=true;
            }
            this.scrollToTop();
            Swal.fire(
              '✅ ¡Bien hecho',
              '¡Felicitaciones! Has respondido correctamente, dale siguiente para continuar',
              'success'
            );
        }else{
          this.cuarto1=false;
          this.cuarto2=false;
          this.ActivarMensajeError=false;
          this.botonSiguienteDisabled=true;
        }
        break;
      }
      case 1:{
        if (this.selectedQuestion2=="answer2"){
          this.sala=true;
          this.cocina=true;
          this.botonSiguienteDisabled=false;
          if(this.ActivarMensajeError==false){
            this.ActivarMensajeError=true;

          }
          this.scrollToTop();
            Swal.fire(
              '✅ ¡Bien hecho',
              '¡Felicitaciones! Has respondido correctamente, dale siguiente para continuar',
              'success'
            );
        }else{
          this.sala=false;
          this.cocina=false;
          this.ActivarMensajeError=false;
          this.botonSiguienteDisabled=true;

        }
        break;
      }
      case 2:{
        if (this.selectedQuestion3=="answer3"){
          this.bano=true
          this.botonSiguienteDisabled=false;
          if(this.ActivarMensajeError==false){
            this.ActivarMensajeError=true;
          }
          this.scrollToTop();
          Swal.fire(
            '✅ ¡Bien hecho',
            '¡Felicitaciones! Has respondido correctamente, dale siguiente para continuar',
            'success'
          );
        }else{
          this.bano=false
          this.ActivarMensajeError=false;
          this.botonSiguienteDisabled=true;

        }
        break;
      }

      case 3:{
        if (this.selectedQuestion4=="answer1"){
          this.berenjena=true;
          this.berenjena1=true;
          this.berenjena2=true;
          this.berenjena21=true;
          this.flor1=true;
          this.flor12=true;
          this.flor2=true;
          this.flor21=true;
          this.botonSiguienteDisabled=false;
          if(this.ActivarMensajeError==false){
            this.ActivarMensajeError=true;
          }
          this.scrollToTop();
            Swal.fire(
              '✅ ¡Bien hecho',
              '¡Felicitaciones! Has respondido correctamente, dale siguiente para continuar',
              'success'
            );
        }else{
          this.berenjena=false;
          this.berenjena1=false;
          this.berenjena2=false;
          this.berenjena21=false;
          this.flor1=false;
          this.flor12=false;
          this.flor2=false;
          this.flor21=false;
          this.ActivarMensajeError=false;
          this.botonSiguienteDisabled=true;

        }
        break;
      }

      case 4:{
        if (this.selectedQuestion5=="answer2"){

          this.zanaoria1=true;
          this.zanaoria11= true;
          this.zanaoria2 = true;
          this.zanaoria21 = true;

          this.botonSiguienteDisabled=false;
          if(this.ActivarMensajeError==false){
            this.ActivarMensajeError=true;
          }

          this.scrollToTop();
            Swal.fire(
              '✅ ¡Bien hecho',
              '¡Felicitaciones! Has respondido correctamente, dale siguiente para continuar',
              'success'
            );
        }else{
          this.zanaoria1=false;
          this.zanaoria11= false;
          this.zanaoria2 = false;
          this.zanaoria21 = false;

          this.ActivarMensajeError=false;
          this.botonSiguienteDisabled=true;

        }
        break;
      }



    }
  }

  CODE1:string=
  `
  void setup() {
    // Configuración inicial
    pinMode(13, INPUT);
  }
  void loop() {
    int horaDeseada = 18; // Hora deseada (6 PM) en formato de hora militar
    int horaLimite=23;// Hora deseada (11 PM) en formato de hora militar

    if (hour() >= horaDeseada && hour() < horaDeseada ) {
      digitalWrite(13, HIGH); // Enciende la luz
    } else {
      digitalWrite(13, LOW); // Apaga la luz
    }
  }
`;

CODE2:string=
`
Adafruit_TSL2591 tsl = Adafruit_TSL2591(2591); // Sensor de luz
int pinLuzCocina = 9; // Pin para la luz Cocina
int pinLuzSala = 10; // Pin para la luz Sala

void setup() {
  pinMode(pinLuzCocina, OUTPUT);
  pinMode(pinLuzSala, OUTPUT);

  // Inicializa el sensor de luz
  if (tsl.begin()) {
    Serial.begin(9600);
    tsl.setGain(TSL2591_GAIN_LOW);
  } else {
    Serial.println("No se pudo inicializar el sensor de luz");
    while (1); /*Entra en un bucle infinito en
                llegeado caso que el sesonr no pudo inicializar*/
  }
}
void loop() {
  uint16_t luminosidad = tsl.getLuminosity(TSL2591_VISIBLE);
  // Verifica si es hora de encender la luz (por ejemplo, al atardecer)
  if (luminosidad < 100) { // Ajusta este umbral según la sensibilidad
    digitalWrite(pinLuzCocina, LOW);
    digitalWrite(pinLuzSala, LOW); // Enciende la luz
  } else {
    digitalWrite(pinLuzCocina, HIGH);
    digitalWrite(pinLuzSala, HIGH); // Apaga la luz
  }
  // Espera 1 segundo antes de volver a verificar la luminosidad
  delay(1000);
}
`;

CODE3:string=
`
int pinSensorMovimiento = 2;// Pin conectado al sensor de movimiento
int pinLuzBano = 3;      // Pin conectado al relé de la luz del baño

void setup() {
  pinMode(pinSensorMovimiento, INPUT);
  pinMode(pinLuzBano, OUTPUT);
}

void loop() {
  int movimiento = digitalRead(pinSensorMovimiento);

  if (movimiento == HIGH) {
    digitalWrite(pinLuzBano, HIGH);
  }


}`

CODE4:string=
`
int sensorHumedad = A0;  // Pin analógico para el sensor de humedad
int valHumedad;    // Variable para almacenar la lectura de humedad

void setup() {
  pinMode(sensorHumedad, INPUT);
  Serial.begin(9600);
}

void loop() {
  valHumedad = analogRead(sensorHumedad);

  if (valHumedad < 300) {
    // ¡Agrega código aquí para encender el sistema de riego!
    Serial.println("Riego activado");
  } else {
    // ¡Agrega código aquí para apagar el sistema de riego!
    Serial.println("Riego desactivado");
  }

  delay(1000);
}
`

CODE5:string=
`
#include <ESP8266WiFi.h>
#include <Wire.h>
const char* ssid = "TU_SSID";
const char* password = "TU_CLAVE_WIFI";
const char* host = "api.thingspeak.com";
const String apiKey = "TU_API_KEY";

float humedadSuelo; // Variable para almacenar la lectura de humedad

// Pin analógico para el sensor de humedad del suelo
const int sensorHumedad = A0;
void setup() {
  Serial.begin(115200);
  delay(10);
  // Conectar a Wi-Fi
  Serial.println();
  Serial.println();
  Serial.print("Conectando a ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Conexión WiFi establecida");
}
void loop() {

  // Construir la URL para enviar los datos a ThingSpeak
  String url = "/update?api_key=" + apiKey + "&field1="
  + String(humedadSuelo);
  // Conectar al servidor ThingSpeak
  WiFiClient client;
  if (client.connect(host, 80)) {
    Serial.println("Conectado a ThingSpeak");
    client.print("GET " + url + " HTTP/1.1\r\n");
    client.print("Host: " + String(host) + "\r\n");
    client.print("Connection: close\r\n\r\n");
    delay(1000);
    client.stop();
    Serial.println("Datos enviados a ThingSpeak");
  } else {
    Serial.println("Error al conectar a ThingSpeak");
  }
  // Esperar un tiempo antes de la siguiente lectura
  delay(900000);  // 15 minutos en milisegundos
}
`
}
