import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  // CODE1 ----------------------------------------------------------------

  CODE: string = `#include <WiFiNINA.h>
  #include <ArduinoIoTCloud.h>
  #include <Arduino_ConnectionHandler.h>
  const char THING_ID[] = "YOUR_THING_ID";
  const char DEVICE_LOGIN_NAME[] = "YOUR_DEVICE_LOGIN_NAME";
  const char DEVICE_LOGIN_PASSWORD[] = "YOUR_DEVICE_LOGIN_PASSWORD";
  const char SSID[] = "YOUR_NETWORK_NAME";
  const char PASS[] = "YOUR_NETWORK_PASSWORD";
  float humedad_suelo;
  void initProperties() {
      ArduinoCloud.setThingId(THING_ID);
      ArduinoCloud.addProperty(humedad_suelo, READ, 60 * SECONDS, NULL);
  }
  WiFiConnectionHandler conection_handler(SSID, PASS);
  void setup() {
      pinMode(A1, INPUT);
      Serial.begin(9600);
      delay(1500);
      initProperties();
      conection_handler.init();
      ArduinoCloud.begin(ArduinoIoTPreferredConnection);
  }
  void loop() {
      ArduinoCloud.update();
      humedad_suelo = analogRead(A1);
      if (humedad_suelo < 300) {
          Serial.println("Suelo seco, necesita riego.");
          // Aquí puedes agregar la lógica para activar un sistema de riego automático
      }
  }`;

  LINE_CODE: string[] = [
    '#include <WiFiNINA.h>',
    '#include <ArduinoIoTCloud.h>',
    '#include <Arduino_ConnectionHandler.h>',
    'const char THING_ID[] = "YOUR_THING_ID";',
    'const char DEVICE_LOGIN_NAME[] = "YOUR_DEVICE_LOGIN_NAME";',
    'const char DEVICE_LOGIN_PASSWORD[] = "YOUR_DEVICE_LOGIN_PASSWORD";',
    'const char SSID[] = "YOUR_NETWORK_NAME";',
    'const char PASS[] = "YOUR_NETWORK_PASSWORD";',
    'float humedad_suelo;',
    'void initProperties() {',
    '    ArduinoCloud.setThingId(THING_ID);',
    '    ArduinoCloud.addProperty(humedad_suelo, READ, 60 * SECONDS, NULL);',
    '}',
    'WiFiConnectionHandler conection_handler(SSID, PASS);',
    'void setup() {',
    '    pinMode(A1, INPUT);',
    '    Serial.begin(9600);',
    '    delay(1500);',
    '    initProperties();',
    '    conection_handler.init();',
    '    ArduinoCloud.begin(ArduinoIoTPreferredConnection);',
    '}',
    'void loop() {',
    '    ArduinoCloud.update();',
    '    humedad_suelo = analogRead(A1);',
    '    if (humedad_suelo < 300) {',
    '        Serial.println("Suelo seco, necesita riego.");',
    '        // Aquí puedes agregar la lógica para activar un sistema de riego automático',
    '    }',
    '}',
  ];

  EXPLAIN: string[] = [
    'Incluye la biblioteca WiFiNINA, que proporciona funcionalidad para conectar a redes WiFi.',
    'Incluye la biblioteca ArduinoIoTCloud, que permite interactuar con la plataforma de IoT de Arduino.',
    'Incluye la biblioteca Arduino_ConnectionHandler, que facilita la gestión de conexiones de red.',
    'Define una constante para almacenar el ID de tu "cosa" en la plataforma Arduino IoT.',
    'Define una constante para almacenar el nombre de inicio de sesión de tu dispositivo en la plataforma Arduino IoT.',
    'Define una constante para almacenar la contraseña de inicio de sesión de tu dispositivo en la plataforma Arduino IoT.',
    'Define una constante para almacenar el nombre de tu red WiFi.',
    'Define una constante para almacenar la contraseña de tu red WiFi.',
    'Declara una variable de tipo flotante para almacenar el valor de la humedad del suelo.',
    'Define una función llamada initProperties.',
    'Establece el ID de tu "cosa" en la instancia ArduinoCloud.',
    'Añade la propiedad humedad_suelo a la instancia ArduinoCloud, indicando que se puede leer cada 60 segundos.',
    'Finaliza la definición de la función initProperties.',
    'Crea un objeto llamado conection_handler de la clase WiFiConnectionHandler usando tu SSID y contraseña WiFi.',
    'Define la función de configuración (setup) que se ejecuta una vez al iniciar el Arduino.',
    'Configura el pin A1 como una entrada.',
    'Inicia la comunicación serie a una tasa de 9600 baudios.',
    'Crea una pausa de 1.5 segundos.',
    'Llama a la función initProperties definida anteriormente.',
    'Inicializa la conexión WiFi usando el objeto conection_handler.',
    'Inicia la conexión con Arduino IoT Cloud usando la conexión preferida.',
    'Finaliza la definición de la función setup.',
    'Define la función principal (loop) que se ejecuta de forma repetida en el Arduino.',
    'Actualiza el estado y las propiedades asociadas con ArduinoCloud.',
    'Lee el valor analógico del pin A1 y lo asigna a la variable humedad_suelo.',
    'Si el valor de humedad_suelo es menor a 300, ejecuta el código dentro de este bloque condicional.',
    'Imprime un mensaje indicando que el suelo está seco y necesita riego.',
    'Un comentario que sugiere un lugar para agregar código para controlar un sistema de riego.',
    'Finaliza el bloque condicional if.',
    'Finaliza la definición de la función loop.'
  ];

  max_line: number = this.LINE_CODE.length;

  top: number = 16;

  //CODE 2 ----------------------------------------------------------------


  CODE2: string = `#include <WiFiNINA.h>
  #include <ArduinoIoTCloud.h>
  #include <Arduino_ConnectionHandler.h>
  const char THING_ID[] = "YOUR_THING_ID";
  const char DEVICE_LOGIN_NAME[] = "YOUR_DEVICE_LOGIN_NAME";
  const char DEVICE_LOGIN_PASSWORD[] = "YOUR_DEVICE_LOGIN_PASSWORD";
  const char SSID[] = "YOUR_NETWORK_NAME";
  const char PASS[] = "YOUR_NETWORK_PASSWORD";
  float temperatura_actual;
  bool presencia = false;
  float temperatura_deseada = 22.0; // Temperatura por defecto
  void initProperties() {
      ArduinoCloud.setThingId(THING_ID);
      ArduinoCloud.addProperty(temperatura_actual, READ, 60 * SECONDS, NULL);
      ArduinoCloud.addProperty(presencia, READ, 10 * SECONDS, NULL);
      ArduinoCloud.addProperty(temperatura_deseada, WRITE, ON_CHANGE, NULL);
  }
  WiFiConnectionHandler conection_handler(SSID, PASS);
  void setup() {
      pinMode(A2, INPUT);
      Serial.begin(9600);
      delay(1500);
      initProperties();
      conection_handler.init();
      ArduinoCloud.begin(ArduinoIoTPreferredConnection);
  }
  void loop() {
      ArduinoCloud.update();
      temperatura_actual = analogRead(A2);
      presencia = digitalRead(7); // Supongamos que el pin 7 está conectado a un sensor de presencia

      if (presencia && temperatura_actual < temperatura_deseada) {
          Serial.println("Encendiendo calefacción.");
          // Aquí puedes agregar la lógica para activar un sistema de calefacción
      } else {
          Serial.println("Apagando calefacción.");
          // Aquí puedes agregar la lógica para desactivar un sistema de calefacción
      }
  }`;

  LINE_CODE2: string[] = [
    '#include <WiFiNINA.h>',
    '#include <ArduinoIoTCloud.h>',
    '#include <Arduino_ConnectionHandler.h>',
    'const char THING_ID[] = "YOUR_THING_ID";',
    'const char DEVICE_LOGIN_NAME[] = "YOUR_DEVICE_LOGIN_NAME";',
    'const char DEVICE_LOGIN_PASSWORD[] = "YOUR_DEVICE_LOGIN_PASSWORD";',
    'const char SSID[] = "YOUR_NETWORK_NAME";',
    'const char PASS[] = "YOUR_NETWORK_PASSWORD";',
    'float temperatura_actual;',
    'bool presencia = false;',
    'float temperatura_deseada = 22.0; // Temperatura por defecto',
    'void initProperties() {',
    '    ArduinoCloud.setThingId(THING_ID);',
    '    ArduinoCloud.addProperty(temperatura_actual, READ, 60 * SECONDS, NULL);',
    '    ArduinoCloud.addProperty(presencia, READ, 10 * SECONDS, NULL);',
    '    ArduinoCloud.addProperty(temperatura_deseada, WRITE, ON_CHANGE, NULL);',
    '}',
    'WiFiConnectionHandler conection_handler(SSID, PASS);',
    'void setup() {',
    '    pinMode(A2, INPUT);',
    '    Serial.begin(9600);',
    '    delay(1500);',
    '    initProperties();',
    '    conection_handler.init();',
    '    ArduinoCloud.begin(ArduinoIoTPreferredConnection);',
    '}',
    'void loop() {',
    '    ArduinoCloud.update();',
    '    temperatura_actual = analogRead(A2);',
    '    presencia = digitalRead(7); // Supongamos que el pin 7 está conectado a un sensor de presencia',
    '    ',
    '    if (presencia && temperatura_actual < temperatura_deseada) {',
    '        Serial.println("Encendiendo calefacción.");',
    '        // Aquí puedes agregar la lógica para activar un sistema de calefacción',
    '    } else {',
    '        Serial.println("Apagando calefacción.");',
    '        // Aquí puedes agregar la lógica para desactivar un sistema de calefacción',
    '    }',
    '}',
  ];

  EXPLAIN2: string[] = [
    'Incluye la biblioteca WiFiNINA, que proporciona funcionalidad para conectar a redes WiFi.',
    'Incluye la biblioteca ArduinoIoTCloud, que permite la interacción con la plataforma de IoT de Arduino.',
    'Incorpora la biblioteca Arduino_ConnectionHandler, que facilita la gestión de conexiones de red.',
    'Declara una constante para el ID de tu "cosa" en la plataforma Arduino IoT.',
    'Declara una constante para el nombre de inicio de sesión de tu dispositivo en la plataforma Arduino IoT.',
    'Declara una constante para la contraseña de tu dispositivo en la plataforma Arduino IoT.',
    'Declara una constante para el nombre de tu red WiFi.',
    'Declara una constante para la contraseña de tu red WiFi.',
    'Declara una variable flotante para almacenar la temperatura actual leída.',
    'Declara e inicializa una variable booleana para determinar la presencia o ausencia de alguien.',
    'Declara e inicializa una variable flotante para la temperatura deseada con un valor por defecto de 22.0 grados.',
    'Define una función para inicializar propiedades con la nube de Arduino.',
    'Define una función para inicializar propiedades con Arduino Cloud.',
    'Establece el ID de tu "cosa" en la instancia ArduinoCloud.',
    'Añade temperatura_actual como propiedad para ser leída cada 60 segundos en Arduino Cloud.',
    'Añade presencia como propiedad para ser leída cada 10 segundos.',
    'Añade temperatura_deseada como propiedad que se puede modificar desde la nube cuando haya cambios.',
    'Cierra la función initProperties.',
    'Crea un objeto para gestionar la conexión WiFi usando el SSID y la contraseña.',
    'Define la función setup que se ejecuta una vez al encender el Arduino.',
    'Configura el pin A2 como entrada.',
    'Inicia la comunicación serie a 9600 baudios.',
    'Pausa la ejecución durante 1.5 segundos.',
    'Llama a la función initProperties.',
    'Inicializa la conexión WiFi.',
    'Inicia la conexión con Arduino IoT Cloud.',
    'Cierra la función setup.',
    'Define la función loop que se ejecuta repetidamente.',
    'Actualiza la conexión con Arduino IoT Cloud.',
    'Lee el valor analógico del pin A2 y lo asigna a temperatura_actual.',
    'Lee el valor digital del pin 7 (suponiendo un sensor de presencia) y lo asigna a presencia.',
    'Comprueba si hay presencia y si la temperatura actual es menor que la deseada.',
    'Imprime un mensaje indicando que se está encendiendo la calefacción.',
    'Comentario para indicar donde agregar el código para encender la calefacción.',
    'Caso contrario al condicional anterior.',
    'Imprime un mensaje indicando que la calefacción se está apagando.',
    'Comentario para indicar donde agregar el código para apagar la calefacción.',
    'Cierra el bloque condicional.',
    'Cierra la función loop.',
    'Cierra el programa.'
  ];

  max_line2: number = this.LINE_CODE2.length;




  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }

}
