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
  `import paho.mqtt.client as mqtt
  MQTT_BROKER = "direccion_del_broker"
  MQTT_TOPIC = "ciudad/calidad_aire"
  def on_connect(client, userdata, flags, rc):
      print(f"Conectado con el código: {rc}")
      client.subscribe(MQTT_TOPIC)
  def on_message(client, userdata, msg):
      print(f"Mensaje recibido: {msg.payload.decode()}")
  client = mqtt.Client()
  client.on_connect = on_connect
  client.on_message = on_message
  client.connect(MQTT_BROKER, 1883, 60)
  client.loop_forever()`;
  LINE_CODE1:string[]= [
    "import paho.mqtt.client as mqtt",
    "MQTT_BROKER = 'direccion_del_broker'",
    "MQTT_TOPIC = 'ciudad/calidad_aire'",
    "def on_connect(client, userdata, flags, rc):",
    "    print(f'Conectado con el código: {rc}'')",
    "    client.subscribe(MQTT_TOPIC)",
    "def on_message(client, userdata, msg):",
    "    print(f'Mensaje recibido: {msg.payload.decode()}')",
    "client = mqtt.Client()",
    "client.on_connect = on_connect",
    "client.on_message = on_message",
    "client.connect(MQTT_BROKER, 1883, 60)",
    "client.loop_forever()",
  ];
  top:number = 16;
  explain1:string[] = [
    "Se importa el módulo client del paquete paho.mqtt y se le da un alias mqtt para hacer referencia a él de manera más breve",
    "Define una constante MQTT_BROKER que contiene la dirección del broker MQTT al que te quieres conectar.",
    "Define una constante MQTT_TOPIC que representa el tema (topic) al que el cliente se suscribirá en el broker.",
    "Define una función llamada on_connect que se ejecutará cuando el cliente se conecte al broker.",
    "Imprime un mensaje que indica que el cliente se ha conectado al broker y muestra el código de respuesta de la conexión.",
    "Suscribe al cliente al tema definido en MQTT_TOPIC",
    "Define una función llamada on_message que se ejecutará cuando el cliente reciba un mensaje del broker.",
    "Imprime el contenido del mensaje recibido del broker. El método decode() convierte el contenido del mensaje (que originalmente puede estar en formato de bytes) a una cadena de caracteres.",
    "Crea una instancia de la clase Client y la asigna a la variable client.",
    "Asigna la función on_connect al atributo on_connect del cliente. Esto significa que cuando el cliente se conecte al broker, la función on_connect se ejecutará.",
    "Asigna la función on_message al atributo on_message del cliente. Esto significa que cuando el cliente reciba un mensaje del broker, la función on_message se ejecutará.",
    "Conecta el cliente al broker MQTT utilizando la dirección especificada en MQTT_BROKER, el puerto 1883 (que es el puerto estándar para MQTT) y un tiempo de espera de 60 segundos.",
    "Inicia un bucle infinito que permite al cliente procesar mensajes, enviar ping al broker, entre otras tareas, manteniendo la conexión activa. Esta función mantendrá el programa en ejecución y escuchando mensajes hasta que sea interrumpido manualmente."
  ];
  max_line1:number = 13;

  //-------------------------------------------------------------------------------------------------

  // CODIGO 2
  CODE2:string = `import requests
  API_ENDPOINT = "http://direccion_api_agricultura"
  HUMEDAD_MINIMA = 50
  response = requests.get(f"{API_ENDPOINT}/obtener_humedad")
  data = response.json()
  if data['humedad'] < HUMEDAD_MINIMA:
      print("Humedad del suelo baja, activando sistema de riego.")
      requests.post(f"{API_ENDPOINT}/activar_riego", data={'estado': 'ON'})
  else:
      print("Humedad del suelo en niveles óptimos.")`
  LINE_CODE2:string[]= [
    "import requests",
    "API_ENDPOINT = 'http://direccion_api_agricultura'",
    "HUMEDAD_MINIMA = 50",
    "response = requests.get(f'{API_ENDPOINT}/obtener_humedad')",
    "data = response.json()",
    "if data['humedad'] < HUMEDAD_MINIMA:",
    "    print('Humedad del suelo baja, activando sistema de riego.')",
    "    requests.post(f'{API_ENDPOINT}/activar_riego', data={'estado': 'ON'})",
    "else:",
    "    print('Humedad del suelo en niveles óptimos.')",
  ];
  explain2:string[] = [
    "Importa el módulo requests, que es una biblioteca de Python para hacer solicitudes HTTP de manera sencilla.",
    "Define una constante llamada API_ENDPOINT que contiene la dirección base de una API relacionada con la agricultura.",
    "Define una constante HUMEDAD_MINIMA con el valor de 50, que probablemente representa el porcentaje mínimo de humedad del suelo considerado aceptable.",
    "Realiza una solicitud HTTP GET al endpoint /obtener_humedad de la API, para obtener la humedad actual del suelo. El resultado de esta solicitud se guarda en la variable response",
    "Convierte la respuesta de la solicitud HTTP (que probablemente está en formato JSON) a un diccionario de Python y lo almacena en la variable data.",
    "Comprueba si el valor de humedad obtenido de la API (almacenado en data['humedad']) es menor que el valor definido en HUMEDAD_MINIMA.",
    "Si la condición anterior es verdadera (la humedad es menor que la mínima aceptable), imprime un mensaje indicando que la humedad del suelo es baja y que se activará el sistema de riego.",
    "Realiza una solicitud HTTP POST al endpoint /activar_riego de la API, enviando datos para activar el sistema de riego. En este caso, está enviando el estado 'ON' para indicar que el sistema de riego debe activarse.",
    "Es la parte alternativa del condicional if. Se ejecutará si la condición del if no se cumple (es decir, si la humedad es igual o superior a la mínima aceptable).",
    "Si la humedad está en niveles óptimos (condición del else), imprime un mensaje indicando que no es necesario activar el sistema de riego.",
  ];
  max_line2:number = 10;


  //--------------------------------------------------------------------------------------------------

  // CODIGO 3
  CODE3:string = `import requests
  API_ENDPOINT = "http://direccion_api_iot/registro_dispositivo"
  DEVICE_ID = "dispositivo_12345"
  DEVICE_SECRET = "secreto_dispositivo"
  response = requests.post(API_ENDPOINT, json={
      'device_id': DEVICE_ID,
      'device_secret': DEVICE_SECRET
  })
  if response.status_code == 200:
      print("Dispositivo registrado exitosamente!")
  else:
      print("Error al registrar el dispositivo:", response.content)`
  LINE_CODE3:string[]= [
    "import requests",
    "API_ENDPOINT = 'http://direccion_api_iot/registro_dispositivo'",
    "DEVICE_ID = 'dispositivo_12345'",
    "DEVICE_SECRET = 'secreto_dispositivo'",
    "response = requests.post(API_ENDPOINT, json={",
    "    'device_id': DEVICE_ID,",
    "    'device_secret': DEVICE_SECRET",
    "})",
    "if response.status_code == 200:",
    "    print('Dispositivo registrado exitosamente!')",
    "else:",
    "    print('Error al registrar el dispositivo:', response.content)",
  ];
  explain3:string[] = [
   "Se importa el módulo requests, que es una biblioteca popular en Python para realizar solicitudes HTTP.",
   "Define una constante llamada API_ENDPOINT que almacena la dirección del endpoint al cual se desea enviar la solicitud de registro del dispositivo.",
   "Define una constante llamada DEVICE_ID que almacena el identificador del dispositivo que se quiere registrar.",
   "Define otra constante llamada DEVICE_SECRET que almacena una contraseña o un secreto asociado al dispositivo, para propósitos de autenticación o seguridad.",
   "Inicia una solicitud HTTP POST al API_ENDPOINT. Se espera enviar un cuerpo con el contenido en formato JSON.",
   "En el cuerpo de la solicitud se especifica el par clave-valor para el device_id, usando el valor de la constante DEVICE_ID.",
   "También en el cuerpo de la solicitud, se añade otro par clave-valor para el device_secret, usando el valor de DEVICE_SECRET.",
   "Cierra el diccionario que se está enviando como cuerpo en formato JSON y la solicitud POST.",
   "Se comprueba si el código de estado (status code) retornado por la solicitud es 200. Un código 200 en HTTP generalmente significa que la solicitud fue procesada con éxito.",
   "Si el código de estado es 200, se imprime un mensaje indicando que el registro del dispositivo se realizó con éxito.",
   "Si el código de estado no es 200 (es decir, si hay algún tipo de error o problema), entonces se entra en esta sección.",
   "Imprime un mensaje indicando que hubo un error al intentar registrar el dispositivo y muestra el contenido de la respuesta, que podría contener detalles específicos sobre el motivo del error.",
  ];
  max_line3:number = 12;


  //--------------------------------------------------------------------------------------------------

  // CODIGO 4
  CODE4:string = `API_ENDPOINT = "http://direccion_api_iot/recibir_datos"
  TEMPERATURA_MAXIMA = 30
  def procesar_datos(temperatura):
      if temperatura > TEMPERATURA_MAXIMA:
          activar_enfriamiento()
  def activar_enfriamiento():
      print("Temperatura alta detectada. Activando sistema de enfriamiento.")
  data = {
      'device_id': "sensor_temp_001",
      'data': {
          'temperatura': 32  # Ejemplo: valor ficticio de temperatura
      }
  }
  response = requests.post(API_ENDPOINT, json=data)
  if response.status_code == 200:
      procesar_datos(data['data']['temperatura'])
  else:
      print("Error al enviar datos:", response.content)`
  LINE_CODE4:string[]= [
    "API_ENDPOINT = 'http://direccion_api_iot/recibir_datos'",
    "TEMPERATURA_MAXIMA = 30",
    "def procesar_datos(temperatura):",
    "    if temperatura > TEMPERATURA_MAXIMA:",
    "        activar_enfriamiento()",
    "def activar_enfriamiento():",
    "    print('Temperatura alta detectada. Activando sistema de enfriamiento.')",
    "data = {",
    "    'device_id': 'sensor_temp_001',",
    "    'data': {",
    "        'temperatura': 32  # Ejemplo: valor ficticio de temperatura",
    "    }",
    "}",
    "response = requests.post(API_ENDPOINT, json=data)",
    "if response.status_code == 200:",
    "    procesar_datos(data['data']['temperatura'])",
    "else:",
    "    print('Error al enviar datos:', response.content)",
  ];
  explain4:string[] = [
    "Importa el módulo requests, que es una biblioteca de Python para hacer solicitudes HTTP de manera sencilla.",
    "Define una constante llamada API_ENDPOINT que contiene la dirección base de una API relacionada con la agricultura.",
    "Define una constante HUMEDAD_MINIMA con el valor de 50, que probablemente representa el porcentaje mínimo de humedad del suelo considerado aceptable.",
    "Realiza una solicitud HTTP GET al endpoint /obtener_humedad de la API, para obtener la humedad actual del suelo. El resultado de esta solicitud se guarda en la variable response",
    "Convierte la respuesta de la solicitud HTTP (que probablemente está en formato JSON) a un diccionario de Python y lo almacena en la variable data.",
    "Comprueba si el valor de humedad obtenido de la API (almacenado en data['humedad']) es menor que el valor definido en HUMEDAD_MINIMA.",
    "Si la condición anterior es verdadera (la humedad es menor que la mínima aceptable), imprime un mensaje indicando que la humedad del suelo es baja y que se activará el sistema de riego.",
    "Realiza una solicitud HTTP POST al endpoint /activar_riego de la API, enviando datos para activar el sistema de riego. En este caso, está enviando el estado 'ON' para indicar que el sistema de riego debe activarse.",
    "Es la parte alternativa del condicional if. Se ejecutará si la condición del if no se cumple (es decir, si la humedad es igual o superior a la mínima aceptable).",
    "Si la humedad está en niveles óptimos (condición del else), imprime un mensaje indicando que no es necesario activar el sistema de riego.",
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
