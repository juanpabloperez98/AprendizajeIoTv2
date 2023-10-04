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




  //CODE 3 ----------------------------------------------------------------


  CODE3: string = `def evaluarConsumoEnergia(hardware):
  consumos = {
      'MicrocontroladorA': 15,  # mA/h
      'MicrocontroladorB': 20,  # mA/h
      # ... otros microcontroladores y sus consumos
  }
  return consumos.get(hardware, -1)  # Devuelve -1 si el hardware no se encuentra
  # Test de la función
  hardware_seleccionado = 'MicrocontroladorA'
  consumo = evaluarConsumoEnergia(hardware_seleccionado)
  if consumo != -1:
    print(f'El {hardware_seleccionado} tiene un consumo de {consumo} mA/h')
  else:
    print(f'Hardware {hardware_seleccionado} no encontrado')`;

  LINE_CODE3: string[] = [
    'def evaluarConsumoEnergia(hardware):',
    '    consumos = {',
    '        "MicrocontroladorA": 15,  # mA/h',
    '        "MicrocontroladorB": 20,  # mA/h',
    '        # ... otros microcontroladores y sus consumos',
    '    }',
    '    return consumos.get(hardware, -1)  # Devuelve -1 si el hardware no se encuentra',
    '# Test de la función',
    'hardware_seleccionado = "MicrocontroladorA"',
    'consumo = evaluarConsumoEnergia(hardware_seleccionado)',
    'if consumo != -1:',
    '    print(f"El {hardware_seleccionado} tiene un consumo de {consumo} mA/h")',
    'else:',
    '    print(f"Hardware {hardware_seleccionado} no encontrado")',
  ];

  EXPLAIN3: string[] = [
    'Aquí estamos definiendo una función llamada evaluarConsumoEnergia que toma un parámetro llamado hardware.',
    'Dentro de la función, estamos inicializando un diccionario llamado consumos.',
    'Esta línea está agregando una entrada al diccionario consumos donde la clave es "MicrocontroladorA" y el valor asociado es 15 (que representa el consumo de energía en mA/h).',
    'Similar a la línea anterior, aquí se agrega otra entrada al diccionario con la clave "MicrocontroladorB" y un valor de 20.',
    'Esta línea es simplemente un comentario que indica que podrías agregar más microcontroladores y sus respectivos consumos de energía al diccionario.',
    'Esta línea cierra el diccionario consumos.',
    'Aquí, estamos utilizando el método get de los diccionarios de Python. Este método intenta recuperar el valor asociado con la clave que se le pasa como primer parámetro (en este caso, hardware). Si la clave no se encuentra en el diccionario, en lugar de lanzar un error, el método devuelve el valor que se le pasa como segundo parámetro (en este caso, -1). Por lo tanto, esta línea devolverá el consumo del hardware si se encuentra en el diccionario, o -1 si no se encuentra.',
    'Esto es un comentario que indica que las líneas siguientes probarán la función que acabamos de definir.',
    'Aquí estamos asignando el string "MicrocontroladorA" a la variable hardware_seleccionado.',
    'En esta línea, llamamos a la función evaluarConsumoEnergia con hardware_seleccionado como argumento y almacenamos el resultado en la variable consumo.',
    'Esta línea inicia una sentencia condicional. Estamos comprobando si el valor de consumo es diferente de -1.',
    'Si el valor de consumo es diferente de -1, entonces ejecutamos esta línea, que imprime un mensaje informando del consumo del microcontrolador.',
    'Si el valor de consumo es -1, entonces las instrucciones después de este else serán ejecutadas.',
    'Esta línea imprime un mensaje indicando que el microcontrolador especificado no fue encontrado en el diccionario consumos.',
  ];

  max_line3: number = this.LINE_CODE3.length;


  //CODE 4 ----------------------------------------------------------------


  CODE4: string = `def evaluarCompatibilidadConectividad(hardware):
  compatibilidades = {
      'MicrocontroladorA': ['Wi-Fi', 'Bluetooth'],
      'MicrocontroladorB': ['Zigbee', 'LoRaWAN'],
      # ... otros microcontroladores y sus compatibilidades
  }
  return compatibilidades.get(hardware, None)  # Devuelve None si el hardware no se encuentra
# Test de la función
hardware_seleccionado = 'MicrocontroladorA'
conectividades = evaluarCompatibilidadConectividad(hardware_seleccionado)
if conectividades:
  print(f'El {hardware_seleccionado} es compatible con: {", ".join(conectividades)}')
else:
  print(f'Hardware {hardware_seleccionado} no encontrado')`;

  LINE_CODE4: string[] = [
    'def evaluarCompatibilidadConectividad(hardware):',
    '  compatibilidades = {',
    '      "MicrocontroladorA": ["Wi-Fi", "Bluetooth"],',
    '      "MicrocontroladorB": ["Zigbee", "LoRaWAN"],',
    '      # ... otros microcontroladores y sus compatibilidades',
    '  }',
    '  return compatibilidades.get(hardware, None)  # Devuelve None si el hardware no se encuentra',
    '# Test de la función',
    'hardware_seleccionado = "MicrocontroladorA"',
    'conectividades = evaluarCompatibilidadConectividad(hardware_seleccionado)',
    'if conectividades:',
    '  print(f"El {hardware_seleccionado} es compatible con: {", ".join(conectividades)}")',
    'else:',
    '  print(f"Hardware {hardware_seleccionado} no encontrado")'
  ];

  EXPLAIN4: string[] = [
    'Aquí estamos definiendo una función llamada evaluarConsumoEnergia que toma un parámetro llamado hardware.',
    'Dentro de la función, estamos inicializando un diccionario llamado consumos.',
    'Esta línea está agregando una entrada al diccionario consumos donde la clave es "MicrocontroladorA" y el valor asociado es 15 (que representa el consumo de energía en mA/h).',
    'Similar a la línea anterior, aquí se agrega otra entrada al diccionario con la clave "MicrocontroladorB" y un valor de 20.',
    'Esta línea es simplemente un comentario que indica que podrías agregar más microcontroladores y sus respectivos consumos de energía al diccionario.',
    'Esta línea cierra el diccionario consumos.',
    'Aquí, estamos utilizando el método get de los diccionarios de Python. Este método intenta recuperar el valor asociado con la clave que se le pasa como primer parámetro (en este caso, hardware). Si la clave no se encuentra en el diccionario, en lugar de lanzar un error, el método devuelve el valor que se le pasa como segundo parámetro (en este caso, -1). Por lo tanto, esta línea devolverá el consumo del hardware si se encuentra en el diccionario, o -1 si no se encuentra.',
    'Esto es un comentario que indica que las líneas siguientes probarán la función que acabamos de definir.',
    'Aquí estamos asignando el string "MicrocontroladorA" a la variable hardware_seleccionado.',
    'En esta línea, llamamos a la función evaluarConsumoEnergia con hardware_seleccionado como argumento y almacenamos el resultado en la variable consumo.',
    'Esta línea inicia una sentencia condicional. Estamos comprobando si el valor de consumo es diferente de -1.',
    'Si el valor de consumo es diferente de -1, entonces ejecutamos esta línea, que imprime un mensaje informando del consumo del microcontrolador.',
    'Si el valor de consumo es -1, entonces las instrucciones después de este else serán ejecutadas.',
    'Esta línea imprime un mensaje indicando que el microcontrolador especificado no fue encontrado en el diccionario consumos.',
  ];

  max_line4: number = this.LINE_CODE4.length;



  //CODE 5 ----------------------------------------------------------------


  CODE5: string = `# Este código es un ejemplo simplificado que representa cómo podrías leer datos de un sensor y enviarlos a través de Wi-Fi usando un ESP32.
  # Utilizaremos un paquete ficticio llamado "esp32lib" para representar las funciones del ESP32.
  import esp32lib
  def conectar_wifi(SSID, password):
      if esp32lib.wifi_connect(SSID, password):
          print("Conectado al WiFi!")
      else:
          print("Error al conectar al WiFi.")
  def leer_sensor_ambiente():
      # Supongamos que este método lee un sensor de temperatura y humedad.
      temperatura, humedad = esp32lib.read_ambient_sensor()
      return temperatura, humedad
  def enviar_datos_a_servidor(temperatura, humedad):
      server_url = "http://mi-servidor-de-hogar-inteligente.com/api/data"
      data = {
          "temperatura": temperatura,
          "humedad": humedad
      }
      esp32lib.post_data_to_server(server_url, data)
  SSID = "Nombre_de_tu_red_WiFi"
  password = "Contraseña_de_tu_red_WiFi"
  conectar_wifi(SSID, password)
  temperatura, humedad = leer_sensor_ambiente()
  enviar_datos_a_servidor(temperatura, humedad)`;

  LINE_CODE5: string[] = [
    '# Este código es un ejemplo simplificado que representa cómo podrías leer datos de un sensor y enviarlos a través de Wi-Fi usando un ESP32.',
    '# Utilizaremos un paquete ficticio llamado "esp32lib" para representar las funciones del ESP32.',
    'import esp32lib',
    'def conectar_wifi(SSID, password):',
    '    if esp32lib.wifi_connect(SSID, password):',
    '        print("Conectado al WiFi!")',
    '    else:',
    '        print("Error al conectar al WiFi.")',
    'def leer_sensor_ambiente():',
    '    # Supongamos que este método lee un sensor de temperatura y humedad.',
    '    temperatura, humedad = esp32lib.read_ambient_sensor()',
    '    return temperatura, humedad',
    'def enviar_datos_a_servidor(temperatura, humedad):',
    '    server_url = "http://mi-servidor-de-hogar-inteligente.com/api/data"',
    '    data = {',
    '        "temperatura": temperatura,',
    '        "humedad": humedad',
    '    }',
    '    esp32lib.post_data_to_server(server_url, data)',
    'SSID = "Nombre_de_tu_red_WiFi"',
    'password = "Contraseña_de_tu_red_WiFi"',
    'conectar_wifi(SSID, password)',
    'temperatura, humedad = leer_sensor_ambiente()',
    'enviar_datos_a_servidor(temperatura, humedad)',
  ];

  EXPLAIN5: string[] = [
    'Describe la finalidad general del código.',
    'Se aclara que se hará uso de un módulo ficticio para representar las funciones del hardware ESP32.',
    'Se importa el módulo ficticio llamado "esp32lib".',
    'Inicio de la definición de una función para conectarse al WiFi.',
    'Se intenta conectar al WiFi usando la función del módulo ficticio.',
    'Si se conecta exitosamente, imprime un mensaje de éxito.',
    'Si la función anterior falla, se procede con el siguiente bloque.',
    'Si hay un error en la conexión, se imprime un mensaje de error.',
    'Inicio de la definición de una función para leer datos del sensor.',
    'Explica que la siguiente función simula la lectura de un sensor.',
    'Llamada a la función ficticia que simula la lectura del sensor.',
    'La función devuelve dos valores: temperatura y humedad.',
    'Inicio de la definición de una función para enviar datos al servidor.',
    'Se define una URL de servidor ficticia.',
    'Inicio de la definición de un diccionario llamado data',
    'Se agrega la clave "temperatura" al diccionario con su respectivo valor.',
    'Se agrega la clave "humedad" al diccionario con su respectivo valor.',
    'Fin de la definición del diccionario.',
    'Se envían los datos al servidor usando una función ficticia del módulo "esp32lib".',
    'Se asigna una cadena de texto a la variable SSID.',
    'Se asigna una cadena de texto a la variable password.',
    'Se intenta conectar al WiFi usando la función previamente definida y los valores SSID y password.',
    'Se leen los valores del sensor utilizando la función previamente definida.',
    'Se envían los valores de temperatura y humedad al servidor con la función previamente definida.',
  ];

  max_line5: number = this.LINE_CODE5.length;




  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }

}
