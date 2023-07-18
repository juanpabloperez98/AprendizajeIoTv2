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
  `
     /* Toma de muestras */
  int SensorPin = A0;
  void setup() {
      Serial.begin(9600);
  }
  void loop() {
      int humedad = analogRead(SensorPin);
      Serial.println(humedad);
      delay(1000);
  }`;
  LINE_CODE1:string[]= [
    " ",
    "int SensorPin = A0;",
    "void setup() {",
    "Serial.begin(9600);",
    "}",
    "void loop() {",
    "int humedad = analogRead(SensorPin);",
    "Serial.println(humedad);",
    "delay(1000);",
    "}",
  ];
  top:number = 16;
  explain1:string[] = [
    " ",
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
  max_line1:number = 10;


  // CODIGO 2
  CODE2:string = `
  /* Migración De Datos */
  #include SoftwareSerial.h
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

    LINE_CODE2:string[]= [
      " ",
      "#include SoftwareSerial.h",
      "SoftwareSerial BT1(10, 11);",
      "void setup(){",
          "pinMode(8, OUTPUT);",
          "pinMode(9, OUTPUT);",
          "digitalWrite(9, HIGH);",
          "delay (500) ;",
          "Serial.begin(9600);",
          "Serial.println('Levantando el modulo HC-06');",
          "digitalWrite (8, HIGH);",
          "Serial.println('Esperando comandos AT:'');",
          "BT1.begin(38400);",
          "}",
          "void loop(){",
          "if (BT1.available())",
              "Serial.write(BT1.read());",
          "if (Serial.available())",
              "BT1.write(Serial.read());",
          "}",
      ];

  explain2:string[] = [
    " ",
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
  max_line2:number = 20;

    // CODIGO 3
    CODE3:string = `
    /* Procesamiento De Datos */
    int lectura = analogRead(A0);
    void setup() {
      Serial.begin(9600);
    }
    void loop() {
      int lecturaPorcentaje = map(lectura, 1023, 0, 0, 100);
      Serial.print(lecturaPorcentaje);
      Serial.println(" %");
      delay(1000);
    }`

    LINE_CODE3:string[]= [
      " ",
      "int lectura = analogRead(A0);",
      "void setup() {",
        "Serial.begin(9600);",
      "}",
      "void loop() {",
        "int lecturaPorcentaje = map(lectura, 1023, 0, 0, 100);",
        "Serial.print(lecturaPorcentaje);",
        "Serial.println('%');",
        "delay(1000);",
      "}",
      ];

    explain3:string[] = [
      " ",
      "Esta línea declara una variable llamada lectura de tipo int y la inicializa con el valor leído del pin analógico A0 utilizando la función analogRead(). La función analogRead() convierte la entrada analógica en un valor digital entre 0 y 1023",
      "Aquí comienza la definición de la función 'setup()'. Esta función se ejecuta una vez al inicio del programa y se utiliza para realizar cualquier configuración inicial necesaria.",
      "Inicializa la comunicación serial a una velocidad de transmisión de datos de 9600 baudios. Esto establece la conexión entre el Arduino y el monitor serial de la computadora, lo que permite enviar datos desde el Arduino al monitor serial para su visualización.",
      "Aquí termina la definición de la función 'setup()'.",
      "Comienza la definición de la función 'loop()'. Esta función se ejecuta continuamente después de que finaliza la función 'setup()' y se encarga de ejecutar el código principal del programa en un bucle infinito.",
      "Declara una nueva variable llamada 'lecturaPorcentaje' de tipo int y la inicializa con el valor mapeado de la variable 'lectura'. La función 'map()' toma un valor de entrada y lo mapea a un rango diferente. En este caso, está mapeando el valor de lectura que va de 0 a 1023 a un rango de 0 a 100.",
      "Imprime el valor de 'lecturaPorcentaje' en el monitor serial utilizando la función 'Serial.print()'. Esto mostrará el valor mapeado en la ventana del monitor serial.",
      "Imprime un espacio y el símbolo de porcentaje (%) en una nueva línea del monitor serial utilizando la función 'Serial.println()'. Esto se utiliza para indicar que el valor mostrado anteriormente representa un porcentaje.",
      "Su funcion es que el programa se detenga durante 1000 milisegundos (1 segundo) utilizando la función 'delay()'. Después de este retraso, el programa vuelve a la parte superior del bucle 'loop()' y repite el proceso nuevamente.",
      "Aquí termina la definición de la función 'loop()'.",
    ];
    max_line3:number = 11;


      // CODIGO 4
      CODE4:string = `
      /* Toma De Decisiones */
      int lectura = analogRead(A0);
      int bomba = 3;
      void setup() {
        pinMode(bomba,OUTPUT);
        Serial.begin(9600);
      }
      void loop() {
        int lecturaPorcentaje = map(lectura, 1023, 0, 0, 100);
        Serial.print(lecturaPorcentaje);
        Serial.println(" %");
        if (lecturaPorcentaje <= 50){
          digitalWrite(bomba, HIGH);
          Serial.println('Estado Bomba = ENCENDIDO');
        }
        else{
          digitalWrite(bomba, LOW);
          Serial.println('Estado Bomba = APAGADO');
        }
        delay(1000);
      }`
      LINE_CODE4:string[]= [
        " ",
        "int lectura = analogRead(A0);",
        "int bomba = 3;",
        "void setup() {",
          "pinMode(bomba,OUTPUT);",
          "Serial.begin(9600);",
        "}",
        "void loop() {",
          "int lecturaPorcentaje = map(lectura, 1023, 0, 0, 100);",
          "Serial.print(lecturaPorcentaje);",
          "Serial.println(' %');",
          "if (lecturaPorcentaje <= 50){",
            "digitalWrite(bomba, HIGH);",
            "Serial.println('Estado Bomba = ENCENDIDO');",
          "}",
          "else{",
            "digitalWrite(bomba, LOW);",
            "Serial.println('Estado Bomba = APAGADO');",
          "}",
          "delay(1000);",
        "}",
        ];

      explain4:string[] = [
        " ",
        "Declara una variable llamada 'lectura' de tipo 'int' y la inicializa con el valor leído del pin analógico A0 utilizando la función 'analogRead()'. Esto se hace para obtener una lectura analógica del pin A0.",
        "Esta línea declara una variable llamada 'bomba' de tipo 'int' y la inicializa con el valor 3. Esta variable se utiliza para representar el pin al que está conectada la bomba.",
        "Comienza la definición de la función 'setup()'. Esta función se ejecuta una vez al inicio del programa y se utiliza para realizar cualquier configuración inicial necesaria.",
        "Se configura el pin 'bomba' como una salida utilizando la función 'pinMode()'. Esto indica que el pin se utilizará para proporcionar una señal de salida.",
        "Se inicia la comunicación serial con una velocidad de transmisión de datos de 9600 baudios utilizando la función 'Serial.begin()'. ",
        "Aquí termina la definición de la función 'setup()'.",
        "Comienza la definición de la función 'loop()'. Al igual que en el código anterior, esta función se ejecuta continuamente después de que finaliza la función 'setup()' y se encarga de ejecutar el código principal del programa en un bucle infinito.",
        "Declara una nueva variable llamada 'lecturaPorcentaje' de tipo 'int' y la inicializa con el valor mapeado de la variable 'lectura'. La función 'map()' toma un valor de entrada y lo mapea a un rango diferente. En este caso, está mapeando el valor de 'lectura' que va de 0 a 1023 a un rango de 0 a 100.",
        "Imprime el valor de 'lecturaPorcentaje' en el monitor serial utilizando la función 'Serial.print()'. Esto mostrará el valor mapeado en la ventana del monitor serial. ",
        "Imprime un espacio y el símbolo de porcentaje (%) en una nueva línea del monitor serial utilizando la función 'Serial.println()'. Esto se utiliza para indicar que el valor mostrado anteriormente representa un porcentaje.",
        "Inicia una estructura condicional 'if'. Comprueba si el valor de 'lecturaPorcentaje' es menor o igual a 50. ",
        "Si la condición del 'if' anterior es verdadera, se establece el pin 'bomba' en estado alto (encendido) utilizando la función 'digitalWrite()'. Esto activa la bomba.",
        "Imprime el mensaje 'Estado Bomba = ENCENDIDO' en el monitor serial utilizando la función 'Serial.println()'. Esto muestra el estado actual de la bomba.",
        "Aquí termina el bloque del 'if'.",
        "Inicia un bloque 'else' que se ejecuta si la condición del 'if' en el paso 11 es falsa.",
        "Si la condición del 'if' anterior es falsa, se establece el pin 'bomba' en estado bajo (apagado) utilizando la función 'digitalWrite()'. Esto desactiva la bomba.",
        "Imprime el mensaje 'Estado Bomba = APAGADO' en el monitor serial utilizando la función 'Serial.println()'. Esto muestra el estado actual de la bomba.",
        "Aquí termina el bloque 'else'.",
        "Hace que el programa se detenga durante 1000 milisegundos (1 segundo) utilizando la función 'delay()'. Después de este retraso, el programa vuelve a la parte superior del bucle 'loop()' y repite el proceso nuevamente.",
        "Aquí termina la definición de la función 'loop()'.",
      ];
      max_line4:number = 21;



  QUESTION_PATH = "/introduccion/questions";

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
