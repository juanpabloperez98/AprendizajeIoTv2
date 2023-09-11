import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // CODIGO 1
  CODE1:string=
  `const int botonAumentar = 2;
  const int botonDisminuir = 3;
  const int pinSenal = 13;
  void setup() {
    pinMode(botonAumentar, INPUT_PULLUP);
    pinMode(botonDisminuir, INPUT_PULLUP);
    pinMode(pinSenal, OUTPUT);
  }
  void loop() {
    if (digitalRead(botonAumentar) == LOW) {
      enviarSenal("AUMENTAR");
      delay(500);
    }
    if (digitalRead(botonDisminuir) == LOW) {
      enviarSenal("DISMINUIR");
      delay(500);
    }
  }
  void enviarSenal(String comando) {
    if (comando == "AUMENTAR") {
      digitalWrite(pinSenal, HIGH);
      delay(100);
      digitalWrite(pinSenal, LOW);
    } else if (comando == "DISMINUIR") {
      digitalWrite(pinSenal, HIGH);
      delay(200);
      digitalWrite(pinSenal, LOW);
    }
  }`;
  LINE_CODE1:string[]= [
    "const int botonAumentar = 2;",
    "const int botonDisminuir = 3;",
    "const int pinSenal = 13;",
    "void setup() {",
    "  pinMode(botonAumentar, INPUT_PULLUP);",
    "  pinMode(botonDisminuir, INPUT_PULLUP);",
    "  pinMode(pinSenal, OUTPUT);",
    "}",
    "void loop() {",
    "  if (digitalRead(botonAumentar) == LOW) {",
    "    enviarSenal('AUMENTAR');",
    "    delay(500);",
    "  }",
    "  if (digitalRead(botonDisminuir) == LOW) {",
    "    enviarSenal('DISMINUIR');",
    "    delay(500);",
    "  }",
    "}",
    "void enviarSenal(String comando) {",
    "  if (comando == 'AUMENTAR') {",
    "    digitalWrite(pinSenal, HIGH);",
    "    delay(100);",
    "    digitalWrite(pinSenal, LOW);",
    "  } else if (comando == 'DISMINUIR') {",
    "    digitalWrite(pinSenal, HIGH);",
    "    delay(200);",
    "    digitalWrite(pinSenal, LOW);",
    "  }",
    "}",
  ];
  top:number = 16;
  explain1:string[] = [
    "Define el pin 2 del Arduino como el pin para el botón 'Aumentar'.",
    "Define el pin 3 del Arduino como el pin para el botón 'Disminuir'.",
    "Define el pin 13 del Arduino, que probablemente sea un LED o un pin de señalización.",
    "Inicio de la función setup() que se ejecuta una vez al arrancar el Arduino.",
    "Configura el pin 2 como entrada con resistencia pull-up interna activada.",
    "Configura el pin 3 de la misma manera que el pin 2.",
    "Configura el pin 13 como salida.",
    "Finaliza la función setup().",
    "Inicio de la función loop() que se ejecuta repetidamente.",
    "Comprueba si el botón 'Aumentar' está presionado.",
    "Si está presionado, se llama a la función enviarSenal con el argumento 'AUMENTAR'.",
    "Espera 500 milisegundos (0.5 segundos).",
    "Finaliza la condición if.",
    "Comprueba si el botón 'Disminuir' está presionado.",
    "Si está presionado, se llama a la función enviarSenal con el argumento 'DISMINUIR'.",
    "Espera 500 milisegundos (0.5 segundos).",
    "Finaliza la condición if.",
    "Finaliza la función loop().",
    "Inicio de la función enviarSenal que toma una cadena (String) como argumento.",
    "Comprueba si el argumento es 'AUMENTAR'.",
    "Si es 'AUMENTAR', activa (HIGH) el pin 13.",
    "Espera 100 milisegundos (0.1 segundos).",
    "Desactiva (LOW) el pin 13.",
    "Finaliza la condición if y Comprueba si el argumento es 'DISMINUIR'.",
    "Si es 'DISMINUIR', activa (HIGH) el pin 13.",
    "Espera 200 milisegundos (0.2 segundos).",
    "Desactiva (LOW) el pin 13.",
    "Finaliza la condición else if.",
    "Finaliza la función enviarSenal.",
  ];
  max_line1:number = 29;

  //-------------------------------------------------------------------------------------------------

  // CODIGO 2
  CODE2:string = `const int pinVoltaje = A0;
  void setup() {
    Serial.begin(9600);
  }
  void loop() {
    int valorADC = analogRead(pinVoltaje);
    float voltaje = (valorADC / 1023.0) * 5.0;
    Serial.println(voltaje);
    delay(1000);
  }`
  LINE_CODE2:string[]= [
    "const int pinVoltaje = A0;",
    "void setup() {",
    "  Serial.begin(9600);",
    "}",
    "void loop() {",
    "  int valorADC = analogRead(pinVoltaje);",
    "  float voltaje = (valorADC / 1023.0) * 5.0;",
    "  Serial.println(voltaje);",
    "  delay(1000);",
    "}",
  ];
  explain2:string[] = [
    "Esta línea declara una constante llamada pinVoltaje y le asigna el valor A0. En placas Arduino, A0 generalmente se refiere al primer pin de entrada analógica. Como es una constante, su valor no puede cambiar durante la ejecución del programa.",
    "es una función que se ejecuta una vez cuando el Arduino se enciende o se reinicia. Es parte de la estructura estándar de un sketch de Arduino.",
    "esta línea inicia la comunicación serial a una tasa de 9600 baudios. Esto permite que el Arduino envíe datos a la computadora a través del puerto serial.",
    "Esta línea cierra el bloque de código de la función setup().",
    "es otra función estándar en un sketch de Arduino que se ejecuta repetidamente después de que setup() ha terminado. Funciona de manera continua mientras el Arduino esté encendido.",
    "Esta línea declara una variable llamada valorADC y le asigna el valor que se lee desde el pin especificado por pinVoltaje (en este caso, A0). La función analogRead() lee el valor analógico (que estará entre 0 y 1023) del pin especificado.",
    "Aquí, se declara una variable de tipo float llamada voltaje. La fórmula convierte el valor leído desde el pin analógico (valorADC) a un valor de voltaje entre 0 y 5V. Esto asume que la referencia de voltaje del ADC es de 5V. Si el ADC lee el valor máximo (1023), voltaje sería 5V.",
    "Esta línea envía el valor de voltaje al puerto serial para que pueda ser leído por la computadora. El valor se envía como un texto seguido por un salto de línea.",
    "La función delay(1000) pausa la ejecución del programa durante 1000 milisegundos, o 1 segundo. Esto significa que el programa esperará 1 segundo antes de continuar con la siguiente iteración del loop().",
    "Esta línea cierra el bloque de código de la función loop().",
  ];
  max_line2:number = 10;

   //-------------------------------------------------------------------------------------------------

  // CODIGO 3
  CODE3:string = `const int pinPWM = 3;
  const int dutycycle = 127;
  void setup() {
    pinMode(pinPWM, OUTPUT);
    analogWrite(pinPWM, dutycycle);
  }
  void loop() {
    // Nada aquí, ya que solo estamos estableciendo el PWM una vez
  }`
  LINE_CODE3:string[]= [
    "const int pinPWM = 3;",
    "const int dutycycle = 127;",
    "void setup() {",
    "  pinMode(pinPWM, OUTPUT);",
    "  analogWrite(pinPWM, dutycycle);",
    "}",
    "void loop() {",
    "  // Nada aquí, ya que solo estamos estableciendo el PWM una vez",
    "}",
  ];
  explain3:string[] = [
    "Esta línea declara una constante de tipo entero llamada pinPWM y le asigna el valor 3. Indica que el pin al que quieres enviar una señal PWM (Modulación de Ancho de Pulso) es el pin número 3 del Arduino.",
    "Aquí, se declara otra constante de tipo entero llamada dutycycle y se le asigna el valor 127. El 'duty cycle' es una medida de cuánto tiempo está 'encendido' la señal en comparación con el tiempo que está 'apagado' en un solo ciclo. En el caso de Arduino, el valor del duty cycle para analogWrite() varía entre 0 (siempre apagado) y 255 (siempre encendido). El valor 127 representaría un duty cycle de aproximadamente el 50%.",
    "es una función que se ejecuta una sola vez cuando el Arduino se enciende o se reinicia. Es parte de la estructura estándar de un sketch de Arduino.",
    "dentro de la función setup(), esta línea configura el pin cuyo número es almacenado en la variable pinPWM (en este caso, el pin 3) como un pin de salida (OUTPUT). Esto es necesario para que el pin pueda enviar señales, como la señal PWM que se configurará en la siguiente línea.",
    "esta línea envía una señal PWM al pin especificado por pinPWM (pin 3) con el duty cycle especificado en la variable dutycycle (127, o aproximadamente el 50%).",
    "esta línea cierra el bloque de código de la función setup().",
    "void loop() es otra función estándar en un sketch de Arduino que se ejecuta repetidamente después de que setup() ha terminado. Funciona de manera continua mientras el Arduino esté encendido.",
    "Esta línea es un comentario (indicado por //), lo que significa que no afecta la ejecución del programa. El comentario aclara que no hay operaciones que se lleven a cabo en el loop() porque solo queremos establecer la señal PWM una vez y no necesitamos hacer nada repetidamente en este caso.",
    "Esta línea cierra el bloque de código de la función loop().",
  ];
  max_line3:number = 9;

  //-------------------------------------------------------------------------------------------------

  // CODIGO 4
  CODE4:string = `#include <iostream>
  double calcularVoltaje(double corriente, double resistencia) {
      return corriente * resistencia;
  }
  int main() {
      double I, R, V;
      std::cout << "Introduce la corriente (en amperios): ";
      std::cin >> I;
      std::cout << "Introduce la resistencia (en ohmios): ";
      std::cin >> R;
      V = calcularVoltaje(I, R);
      std::cout << "El voltaje es: " << V << " voltios" << std::endl;
      return 0;
  }`
  LINE_CODE4:string[]= [
    "#include <iostream>",
    "double calcularVoltaje(double corriente, double resistencia) {",
    "    return corriente * resistencia;",
    "}",
    "int main() {",
    "    double I, R, V;",
    "    std::cout << 'Introduce la corriente (en amperios): ';",
    "    std::cin >> I;",
    "    std::cout << 'Introduce la resistencia (en ohmios): ';",
    "    std::cin >> R;",
    "    V = calcularVoltaje(I, R);",
    "    std::cout << 'El voltaje es: ' << V << ' voltios' << std::endl;",
    "    return 0;",
    "}",
  ];
  explain4:string[] = [
    "#include <iostream>: Esta línea incluye la biblioteca de entrada/salida estándar, la cual es necesaria para usar funciones y objetos como std::cin, std::cout y std::endl",
    "double calcularVoltaje(double corriente, double resistencia) {: Aquí se está definiendo una función llamada calcularVoltaje que toma dos parámetros de tipo double (corriente y resistencia) y retorna un valor de tipo double.",
    "return corriente * resistencia;: Dentro de la función calcularVoltaje, esta línea calcula el producto de corriente y resistencia y retorna ese valor. Esto es una representación de la Ley de Ohm.",
    "}: Esta línea cierra el bloque de código de la función calcularVoltaje.",
    "int main() {: Esta es la función principal main donde comienza la ejecución del programa. Esta función retorna un valor entero (int).",
    "double I, R, V;: Se declaran tres variables de tipo double para almacenar la corriente (I), resistencia (R) y voltaje (V) respectivamente.",
    "std::cout << 'Introduce la corriente (en amperios): ': Se imprime un mensaje en la consola pidiendo al usuario que introduzca un valor para la corriente.",
    "std::cin >> I;: Se lee el valor introducido por el usuario desde la consola y se almacena en la variable I.",
    "std::cout << 'Introduce la resistencia (en ohmios): ': Se imprime otro mensaje en la consola pidiendo al usuario que introduzca un valor para la resistencia.",
    "std::cin >> R;: Se lee el valor introducido por el usuario desde la consola y se almacena en la variable R.",
    "V = calcularVoltaje(I, R);: Se llama a la función calcularVoltaje con los valores I y R como argumentos y se almacena el resultado retornado en la variable V.",
    "std::cout << 'El voltaje es: ' << V << ' voltios' << std::endl;: Se imprime el resultado en la consola, mostrando el valor calculado para el voltaje.",
    "return 0;: La función main retorna un valor de 0, lo cual generalmente indica que el programa se ejecutó exitosamente.",
    "}: Esta línea cierra el bloque de código de la función main.",
  ];
  max_line4:number = 14;



  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
