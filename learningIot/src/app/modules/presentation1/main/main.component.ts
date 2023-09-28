
import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../../services/highlight.service';


@Component({
  selector: 'Presentation-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  CODE1:string=
  `#include <WiFiNINA.h>
  char ssid[] = "nombre_de_tu_red";
  char pass[] = "contraseña_de_tu_red";
  void setup() {
    Serial.begin(9600);
    while (!Serial); // Espera hasta que el puerto serie esté listo
    Serial.print("Conectando a: ");
    Serial.println(ssid);
    if (WiFi.begin(ssid, pass) == WL_CONNECTED) {
      Serial.println("Conectado al WiFi!");
      Serial.print("Dirección IP: ");
      Serial.println(WiFi.localIP());
    } else {
      Serial.println("Fallo al conectarse :(");
    }
  }
  void loop() {
    // Tu código principal aquí
  }`;

  LINE_CODE1:string[]= [
    "#include <WiFiNINA.h>",
    "char ssid[] = 'nombre_de_tu_red';",
    "char pass[] = 'contraseña_de_tu_red';",
    "void setup() {",
    "  Serial.begin(9600);",
    "  while (!Serial); // Espera hasta que el puerto serie esté listo",
    "  Serial.print('Conectando a: ');",
    "  Serial.println(ssid);",
    "  if (WiFi.begin(ssid, pass) == WL_CONNECTED) {",
    "    Serial.println('Conectado al WiFi!');",
    "    Serial.print('Dirección IP: ');",
    "    Serial.println(WiFi.localIP());",
    "  } else {",
    "    Serial.println('Fallo al conectarse :(');",
    "  }",
    "}",
    "void loop() {",
    "  // Tu código principal aquí",
    "}",
  ];
  top:number = 16;
  explain1:string[] = [
    "Esta línea incluye la biblioteca WiFiNINA, que proporciona herramientas para trabajar con el módulo WiFi Nina en placas compatibles, como Arduino MKR WiFi 1010.",
    "Declara un arreglo de caracteres ssid que almacenará el nombre de tu red WiFi.",
    "Declara un arreglo de caracteres pass que almacenará la contraseña de tu red WiFi.",
    "Define la función setup(), que se ejecutará una vez al inicio del programa. Es una función estándar de Arduino.",
    "Inicializa la comunicación serie a una velocidad de 9600 baudios. Esto permite la comunicación entre la placa Arduino y el ordenador a través del puerto serie.",
    "Este bucle se mantendrá ejecutando hasta que el puerto serie esté listo. Es útil para asegurar que la comunicación serie ha comenzado antes de continuar.",
    "Envía el mensaje 'Conectando a: ' al puerto serie, típicamente para ser visualizado en el monitor serie del IDE de Arduino.",
    "Envía el nombre de la red WiFi (contenido en la variable ssid) al puerto serie y luego un salto de línea.",
    "Intenta conectar la placa Arduino a la red WiFi especificada con el nombre y la contraseña. Si la conexión es exitosa (indicada por WL_CONNECTED), ejecuta el bloque de código dentro de las llaves { }.",
    "Si la conexión fue exitosa, envía el mensaje 'Conectado al WiFi!' al puerto serie.",
    "Envía el mensaje 'Dirección IP: ' al puerto serie sin un salto de línea al final.",
    "Obtiene la dirección IP asignada a la placa Arduino en la red WiFi y la envía al puerto serie.",
    "Comienza el bloque de código que se ejecutará si la conexión WiFi no fue exitosa.",
    "Si la conexión falló, envía el mensaje 'Fallo al conectarse :(' al puerto serie.",
    "Final del bloque de código if-else.",
    "Final de la función setup().",
    "Define la función loop(), que se ejecuta repetidamente después de que setup() haya finalizado. Es otra función estándar de Arduino.",
    "Un comentario indicando que puedes colocar el código que quieras ejecutar repetidamente aquí.",
    "Final de la función loop().",
  ];
  max_line1:number = 19;



  CODE2:string=
  `#include <WiFiNINA.h>
  #include <PubSubClient.h>
  char ssid[] = "nombre_de_tu_red";
  char pass[] = "contraseña_de_tu_red";
  char server[] = "direccion_del_servidor_mqtt";
  WiFiClient wifiClient;
  PubSubClient client(wifiClient);
  void setup() {
    Serial.begin(9600);
    WiFi.begin(ssid, pass);
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Conectando al WiFi...");
    }
    client.setServer(server, 1883);
    client.setCallback(callback);
  }
  void callback(char* topic, byte* payload, unsigned int length) {
    // Función para manejar mensajes recibidos (si es necesario)
  }
  void loop() {
    if (!client.connected()) {
      while (!client.connect("arduinoClient")) {
        delay(2000);
      }
    }
    if (client.connected()) {
      char msg[50];
      sprintf(msg, "Valor del sensor: %d", analogRead(A0));
      client.publish("sensor/temperatura", msg);
    }
    client.loop();
  }`;

  LINE_CODE2:string[]= [
    "#include <WiFiNINA.h>",
    "#include <PubSubClient.h>",
    "char ssid[] = 'nombre_de_tu_red';",
    "char pass[] = 'contraseña_de_tu_red';",
    "char server[] = 'direccion_del_servidor_mqtt';",
    "WiFiClient wifiClient;",
    "PubSubClient client(wifiClient);",
    "void setup() {",
    "  Serial.begin(9600);",
    "  WiFi.begin(ssid, pass);",
    "  while (WiFi.status() != WL_CONNECTED) {",
    "    delay(1000);",
    "    Serial.println('Conectando al WiFi...');",
    "  } ",
    "  client.setServer(server, 1883);",
    "  client.setCallback(callback);",
    "}",
    "void callback(char* topic, byte* payload, unsigned int length) {",
    "  // Función para manejar mensajes recibidos (si es necesario)",
    "}",
    "void loop() {",
    "  if (!client.connected()) {",
    "    while (!client.connect('arduinoClient')) {",
    "      delay(2000);",
    "    }",
    "  }",
    "  if (client.connected()) {",
    "    char msg[50];",
    "    sprintf(msg, 'Valor del sensor: %d', analogRead(A0));",
    "    client.publish('sensor/temperatura', msg);",
    "  }",
    "  client.loop();",
    "}",
  ];
  explain2:string[] = [
    "Incluye la biblioteca WiFiNINA para trabajar con el módulo WiFi Nina en placas compatibles, como Arduino MKR WiFi 1010.",
    "Incluye la biblioteca PubSubClient, que proporciona herramientas para conectarse y trabajar con servidores MQTT.",
    "Declara un arreglo de caracteres para el nombre de tu red WiFi.",
    "Declara un arreglo de caracteres para la contraseña de tu red WiFi.",
    "Declara un arreglo de caracteres para la dirección del servidor MQTT.",
    "Crea una instancia de cliente WiFi.",
    "Crea una instancia del cliente MQTT, utilizando el cliente WiFi previamente creado.",
    "Define la función setup(), que se ejecutará una vez al inicio del programa.",
    "Inicia la comunicación serie a 9600 baudios.",
    "Inicia una conexión WiFi utilizando el nombre y contraseña proporcionados.",
    "Este bucle se mantendrá ejecutando hasta que la placa esté conectada al WiFi.",
    "Pausa la ejecución durante 1000 milisegundos (1 segundo).",
    "Envía un mensaje al puerto serie informando que está intentando conectarse al WiFi.",
    "Finaliza el bucle while.",
    "Configura el servidor MQTT y el puerto (1883 es el puerto por defecto para MQTT).",
    "Establece la función que se llamará cuando se reciba un mensaje del servidor MQTT.",
    "Finaliza la función setup().",
    "Define la función de callback que se llamará cuando se reciba un mensaje del servidor MQTT.",
    "Un comentario indicativo de que este lugar es donde iría el código para manejar los mensajes recibidos.",
    "Finaliza la función callback.",
    "Define la función loop(), que se ejecutará continuamente después de setup().",
    "Si el cliente no está conectado al servidor MQTT...",
    "Intenta conectarse al servidor MQTT con el ID 'arduinoClient'. Si no logra conectarse, se quedará en este bucle.",
    "Pausa la ejecución durante 2000 milisegundos (2 segundos).",
    "Finaliza el bucle while.",
    "Finaliza el bloque if.",
    "Si el cliente está conectado al servidor MQTT...",
    "Declara un arreglo de caracteres para almacenar un mensaje.",
    "Lee un valor analógico del pin A0 y lo formatea en una cadena que se almacena en msg.",
    "Publica el valor del sensor en el tema 'sensor/temperatura' del servidor MQTT.",
    "Finaliza el bloque if.",
    "Ejecuta las rutinas internas de manejo de la biblioteca PubSubClient para mantener la conexión con el servidor MQTT.",
    "Finaliza la función loop().",
  ];
  max_line2:number = 33;




  CODE3:string=`
  #include "ArduinoIoTCloud.h"
  #include "WiFiConnectionManager.h"
  const char THING_ID[] = "YOUR_THING_ID";
  const char DEVICE_LOGIN_NAME[] = "YOUR_LOGIN_NAME";
  const char DEVICE_LOGIN_PASS[] = "YOUR_LOGIN_PASS";
  float temperature = 0.0;
  void onTemperatureChange() {
    if(temperature > THRESHOLD) {
      // Aquí, podrías hacer una llamada HTTP para activar el webhook en IFTTT
      // Esto es solo un pseudocódigo
      activateIFTTTWebhook();
    }
  }
  void setup() {
    ...
    ArduinoCloud.addProperty(temperature, READ, ON_CHANGE, onTemperatureChange);
    ...
  }
  void loop() {
    ArduinoCloud.update();
    ...
  }`;

  LINE_CODE3:string[]= [
    "#include 'ArduinoIoTCloud.h'",
    "#include 'WiFiConnectionManager.h'",
    "const char THING_ID[] = 'YOUR_THING_ID';",
    "const char DEVICE_LOGIN_NAME[] = 'YOUR_LOGIN_NAME';",
    "const char DEVICE_LOGIN_PASS[] = 'YOUR_LOGIN_PASS';",
    "float temperature = 0.0;",
    "void onTemperatureChange() {",
    "  if(temperature > THRESHOLD) {",
    "    // Aquí, podrías hacer una llamada HTTP para activar el webhook en IFTTT",
    "    // Esto es solo un pseudocódigo",
    "    activateIFTTTWebhook();",
    "  }",
    "}",
    "void setup() {",
    "  ...",
    "  ArduinoCloud.addProperty(temperature, READ, ON_CHANGE, onTemperatureChange);",
    "  ...",
    "}",
    "void loop() {",
    "  ArduinoCloud.update();",
    "  ...",
    "}",
  ];
  explain3:string[] = [
    "Esta línea incluye (o importa) la biblioteca ArduinoIoTCloud. Esta biblioteca proporciona las funciones y clases necesarias para interactuar con el Arduino IoT Cloud.",
    "Importa la biblioteca WiFiConnectionManager, que proporciona funciones y clases para gestionar la conexión Wi-Fi del dispositivo.",
    "Declara una constante de tipo carácter llamada THING_ID que representaría el identificador único de tu 'objeto' (Thing) en el Arduino IoT Cloud. El valor 'YOUR_THING_ID' es un marcador de posición que se debería reemplazar por el ID real.",
    "Declara una constante para el nombre de inicio de sesión del dispositivo en el Arduino IoT Cloud.",
    "Declara otra constante que representaría la contraseña del dispositivo para iniciar sesión en el Arduino IoT Cloud.",
    "Inicializa una variable de punto flotante llamada temperature con el valor 0.0. Esta variable se usará para almacenar y monitorear el valor del sensor de temperatura.",
    "Comienza la definición de una función llamada onTemperatureChange. Esta función se invocará cuando el valor de la temperatura cambie.",
    "Es una estructura condicional que verifica si el valor de la variable temperature excede un cierto THRESHOLD (umbral) no definido en este fragmento.",
    "Es un comentario, no tiene efecto en el código. Indica un lugar donde podrías agregar una llamada HTTP para interactuar con un webhook de IFTTT.",
    "Otro comentario que aclara que la instrucción siguiente es un pseudocódigo o representación y no necesariamente código funcional.",
    "Llamada a una función que, presumiblemente, activará el webhook de IFTTT. Esta función no está definida en el fragmento proporcionado.",
    "Cierra el bloque condicional if.",
    "Cierra la definición de la función onTemperatureChange.",
    "Inicio de la función setup(), que se ejecuta una vez al encender el Arduino o reiniciarlo.",
    "Elipsis indicando que hay código en la función setup() que no se muestra.",
    "Agrega la variable temperature como una propiedad al Arduino IoT Cloud, configura la propiedad para que se pueda leer y establece que la función onTemperatureChange debe ser llamada cuando el valor de la temperatura cambie.",
    "Nuevamente, elipsis que indican que hay más código en setup() que no se muestra.",
    "Cierra la función setup().",
    "Inicio de la función loop(), que se ejecuta repetidamente después de que setup() se ha completado.",
    "Actualiza la conexión con Arduino IoT Cloud y procesa cualquier cambio o evento relacionado con las propiedades.",
    "Nuevamente, elipsis que indican que hay más código en loop() que no se muestra.",
    "Cierra la función loop().",
  ];
  max_line3:number = 22;


  CODE4:string=`
  #include <WiFi.h>
  #include <HTTPClient.h>
  const char* ssid = "YOUR_SSID";
  const char* password = "YOUR_PASSWORD";
  const char* serverUrl = "http://your-server.com/webhook-endpoint";
  void setup() {
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");
  }
  void loop() {
    float sensorData = analogRead(A0);
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");
    String httpRequestData = "sensorValue=" + String(sensorData);
    int httpResponseCode = http.POST(httpRequestData);
    if (httpResponseCode>0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    }
    else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }
    http.end();
    delay(60000);
  }
  `;
  LINE_CODE4:string[]= [
    "#include <WiFi.h>",
    "#include <HTTPClient.h>",
    "const char* ssid = 'YOUR_SSID';",
    "const char* password = 'YOUR_PASSWORD';",
    "const char* serverUrl = 'http://your-server.com/webhook-endpoint';",
    "void setup() {",
    "  WiFi.begin(ssid, password);",
    "  while (WiFi.status() != WL_CONNECTED) {",
    "    delay(1000);",
    "    Serial.println('Connecting to WiFi...');",
    "  }",
    "  Serial.println('Connected to WiFi');",
    "}",
    "void loop() {",
    "  float sensorData = analogRead(A0);",
    "  HTTPClient http;",
    "  http.begin(serverUrl);",
    "  http.addHeader('Content-Type', 'application/x-www-form-urlencoded');",
    "  String httpRequestData = 'sensorValue=' + String(sensorData);",
    "  int httpResponseCode = http.POST(httpRequestData);",
    "  if (httpResponseCode>0) {",
    "    Serial.print('HTTP Response code: ');",
    "    Serial.println(httpResponseCode);",
    "  }",
    "  else {",
    "    Serial.print('Error on sending POST: ');",
    "    Serial.println(httpResponseCode);",
    "  }",
    "  http.end();",
    "  delay(60000);",
    "}",
  ];
  explain4:string[] = [
    "Incluye la biblioteca WiFi, que proporciona funciones para gestionar la conexión WiFi en dispositivos compatibles, como el ESP32 o el ESP8266.",
    "Incluye la biblioteca HTTPClient, que facilita la realización de solicitudes HTTP (como GET y POST) desde dispositivos compatibles.",
    "Declara una constante de tipo puntero a carácter que contiene el SSID (nombre) de tu red WiFi.",
    "Declara una constante que contiene la contraseña de tu red WiFi.",
    "Declara una constante que contiene la URL del servidor o endpoint al que deseas hacer la solicitud POST.",
    "Inicio de la función setup(), que se ejecuta una vez al encender o reiniciar el dispositivo.",
    "Inicia un intento de conexión WiFi utilizando el SSID y la contraseña proporcionados.",
    "Un bucle while que continúa ejecutándose mientras el dispositivo no esté conectado a la WiFi.",
    "Introduce un retraso de 1 segundo (1000 milisegundos).",
    "Envía un mensaje 'Connecting to WiFi...' al monitor serial.",
    "Cierra el bucle while.",
    "Una vez que el dispositivo está conectado a la WiFi, envía el mensaje 'Connected to WiFi' al monitor serial.",
    "Cierra la función setup().",
    "Inicio de la función loop(), que se ejecuta repetidamente.",
    "Lee el valor analógico del pin A0 (por ejemplo, de un sensor) y lo almacena en la variable sensorData.",
    "Crea una instancia del objeto HTTPClient llamado http.",
    "Inicia la conexión HTTP al serverUrl proporcionado.",
    "Agrega un encabezado HTTP al request, especificando que los datos enviados serán codificados en formato x-www-form-urlencoded (común para los datos de formulario).",
    "Crea una cadena de datos para enviar en la solicitud POST, que contiene el valor del sensor.",
    "Realiza una solicitud POST al serverUrl con los datos httpRequestData y almacena el código de respuesta HTTP en httpResponseCode.",
    "Verifica si el código de respuesta HTTP es positivo, lo que generalmente indica una respuesta exitosa.",
    "Envía el texto 'HTTP Response code: ' al monitor serial.",
    "Envía el código de respuesta HTTP actual al monitor serial.",
    "Cierra el bloque if",
    "Inicio de un bloque else, que se ejecutará si la condición en el if anterior no se cumple.",
    "Envía el texto 'Error on sending POST: ' al monitor serial.",
    "Envía el código de respuesta HTTP (que en este caso sería un código de error) al monitor serial.",
    "Cierra el bloque else.",
    "Finaliza y cierra la conexión HTTP.",
    "Introduce un retraso de 60 segundos (60000 milisegundos) antes de que el código en loop() se ejecute nuevamente.",
    "Cierra la función loop().",
  ];
  max_line4:number = 22;


  CODE5:string=`const char DEVICE_KEY[] = "YOUR_UNIQUE_DEVICE_KEY";
  void setup() {
    ArduinoCloud.begin(DEVICE_KEY);
    // ... resto de configuración
  }
  void loop() {
    ArduinoCloud.update();
    // ... lógica principal del programa
  }`;
  LINE_CODE5:string[]= [
    "const char DEVICE_KEY[] = 'YOUR_UNIQUE_DEVICE_KEY';",
    "void setup() {",
    "  ArduinoCloud.begin(DEVICE_KEY); ",
    "  // ... resto de configuración",
    "}",
    "void loop() {",
    "  ArduinoCloud.update(); ",
    "  // ... lógica principal del programa",
    "}",
  ];
  explain5:string[] = [
    "Declara un arreglo constante de caracteres llamado DEVICE_KEY. Este contiene una clave única para tu dispositivo. Las constantes son, por definición, inmutables, lo que significa que su valor no puede cambiar una vez que se ha establecido.",
    "Define la función setup(). Esta función se utiliza en el entorno de Arduino para inicializar variables, configuración de pins, iniciar bibliotecas, etc. Se ejecuta una vez cuando reinicias o enciendes la placa.",
    "Llama a la función begin() de la clase ArduinoCloud y le pasa el DEVICE_KEY como parámetro. Esto inicializa la conexión con el Arduino Cloud usando la clave del dispositivo proporcionada.",
    "Un comentario indicativo que puedes agregar más configuraciones o inicializaciones después de la inicialización de Arduino Cloud en la función setup().",
    "Cierra el bloque de código de la función setup().",
    "Define la función loop(). En el entorno de Arduino, esta función se ejecuta continuamente después de la función setup(). Es el núcleo de la mayoría de los programas de Arduino y donde ocurre la lógica principal.",
    "Llama a la función update() de la clase ArduinoCloud. Esta función se utiliza para mantener la comunicación con Arduino Cloud y para manejar las operaciones internas de la biblioteca, como enviar y recibir datos.",
    "Un comentario indicativo que puedes agregar la lógica principal de tu programa después de la actualización de Arduino Cloud en la función loop().",
    "Cierra el bloque de código de la función loop().",
  ];
  max_line5:number = 9;


  CODE6:string=`#include <DHT.h>
  #include <ArduinoIoTCloud.h>
  #include <WiFiConnectionManager.h>
  #define DHTPIN 2
  #define DHTTYPE DHT22
  DHT dht(DHTPIN, DHTTYPE);
  float temperature = 0.0;
  float humidity = 0.0;
  void setup() {
    dht.begin();
    ArduinoCloud.begin(ArduinoIoTPreferredConnection);
    ArduinoCloud.addProperty(temperature, READ, 60 * SECONDS, NULL);
    ArduinoCloud.addProperty(humidity, READ, 60 * SECONDS, NULL);
  }
  void loop() {
    ArduinoCloud.update();
    temperature = dht.readTemperature();
    humidity = dht.readHumidity();
    delay(2000);
  }`;
  LINE_CODE6:string[]= [
    "#include <DHT.h>",
    "#include <ArduinoIoTCloud.h>",
    "#include <WiFiConnectionManager.h>",
    "#define DHTPIN 2 ",
    "#define DHTTYPE DHT22 ",
    "DHT dht(DHTPIN, DHTTYPE);",
    "float temperature = 0.0;",
    "float humidity = 0.0;",
    "void setup() {",
    "  dht.begin();",
    "  ArduinoCloud.begin(ArduinoIoTPreferredConnection);",
    "  ArduinoCloud.addProperty(temperature, READ, 60 * SECONDS, NULL);",
    "  ArduinoCloud.addProperty(humidity, READ, 60 * SECONDS, NULL);",
    "}",
    "void loop() {",
    "  ArduinoCloud.update();",
    "  temperature = dht.readTemperature();",
    "  humidity = dht.readHumidity();",
    "  delay(2000);",
    "}",
  ];
  explain6:string[] = [
    "Se incluye la biblioteca DHT.h que proporciona funciones y métodos para interactuar con sensores de temperatura y humedad DHT (como DHT22).",
    "Se incluye la biblioteca ArduinoIoTCloud.h que facilita la conexión y comunicación con la plataforma Arduino IoT Cloud.",
    "Se incluye la biblioteca WiFiConnectionManager.h que ayuda a gestionar las conexiones WiFi.",
    "Se define una constante llamada DHTPIN con el valor 2, lo que indica que el sensor DHT22 está conectado al pin 2 de la placa Arduino.",
    "Se define una constante llamada DHTTYPE para especificar el tipo de sensor DHT que se está utilizando, en este caso, DHT22.",
    "Se crea una instancia del objeto DHT llamado dht. Esta instancia se inicializa con el pin y el tipo de sensor definidos anteriormente.",
    "Se declara e inicializa una variable de punto flotante llamada temperature con un valor de 0.0. Esta variable almacenará la lectura de la temperatura.",
    "Similar a la línea anterior, se declara e inicializa una variable llamada humidity para almacenar la lectura de la humedad.",
    "Se define la función setup(). Esta función se ejecuta una vez al inicio del programa.",
    "Se inicializa el sensor DHT22 usando el método begin() de la instancia dht.",
    "Se inicializa la conexión con Arduino IoT Cloud utilizando la conexión preferida (por ejemplo, WiFi).",
    "Se agrega la propiedad temperature a Arduino IoT Cloud para ser leída. La propiedad se actualizará cada 60 segundos.",
    "Similar a la línea anterior, se agrega la propiedad humidity a Arduino IoT Cloud para ser leída.",
    "Finaliza la definición de la función setup().",
    "Se define la función loop(), que se ejecuta continuamente después de la función setup().",
    "Se actualiza la conexión y las propiedades de Arduino IoT Cloud.",
    "Se lee el valor de la temperatura del sensor DHT22 y se asigna a la variable temperature.",
    "Se lee el valor de la humedad del sensor DHT22 y se asigna a la variable humidity.",
    "Se introduce un retraso de 2000 milisegundos (2 segundos) antes de que el ciclo loop() vuelva a ejecutarse.",
    "Finaliza la definición de la función loop().",
  ];
  max_line6:number = 11;


  CODE7:string=`#include <DHT.h>
  #include <ArduinoIoTCloud.h>
  #include <WiFiConnectionManager.h>
  #define DHTPIN 2
  #define DHTTYPE DHT22
  DHT dht(DHTPIN, DHTTYPE);
  float temperature = 0.0;
  float humidity = 0.0;
  void setup() {
    dht.begin();
    ArduinoCloud.begin(ArduinoIoTPreferredConnection);
    ArduinoCloud.addProperty(temperature, READ, 60 * SECONDS, NULL);
    ArduinoCloud.addProperty(humidity, READ, 60 * SECONDS, NULL);
  }
  void loop() {
    ArduinoCloud.update();
    temperature = dht.readTemperature();
    humidity = dht.readHumidity();
    delay(2000);
  }`;
  LINE_CODE7:string[]= [
    "#include <DHT.h>",
    "#include <ArduinoIoTCloud.h>",
    "#include <WiFiConnectionManager.h>",
    "#define DHTPIN 2 ",
    "#define DHTTYPE DHT22 ",
    "DHT dht(DHTPIN, DHTTYPE);",
    "float temperature = 0.0;",
    "float humidity = 0.0;",
    "void setup() {",
    "  dht.begin();",
    "  ArduinoCloud.begin(ArduinoIoTPreferredConnection);",
    "  ArduinoCloud.addProperty(temperature, READ, 60 * SECONDS, NULL);",
    "  ArduinoCloud.addProperty(humidity, READ, 60 * SECONDS, NULL);",
    "}",
    "void loop() {",
    "  ArduinoCloud.update();",
    "  temperature = dht.readTemperature();",
    "  humidity = dht.readHumidity();",
    "  delay(2000);",
    "}",
  ];
  explain7:string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  max_line7:number = 20;



  QUESTION_PATH = "/presentationTwo/questions";

  constructor(private HighlightService: HighlightService,) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    this.HighlightService.highlightAll();
  }

}
