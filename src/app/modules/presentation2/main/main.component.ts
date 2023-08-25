import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../../services/highlight.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  CODE1:string=
  `
/* Ejemplo de Gateway */
import requests
import random
import time

class Sensor:
    def __init__(self, id):
        self.id = id
        self.temperature = random.uniform(20, 30)
        self.humidity = random.uniform(40, 60)

    def read_data(self):
        self.temperature = random.uniform(20, 30)
        self.humidity = random.uniform(40, 60)

class Gateway:
    def __init__(self):
        self.sensors = [Sensor(1), Sensor(2), Sensor(3)]
        self.server_url = "http://example.com/api"

    def send_data_to_server(self, data):
        response = requests.post(self.server_url, json=data)
        if response.status_code == 200:
            print("Data sent successfully")
        else:
            print("Failed to send data")

    def collect_and_send_data(self):
        while True:
            for sensor in self.sensors:
                sensor.read_data()
                data = {
                    "sensor_id": sensor.id,
                    "temperature": sensor.temperature,
                    "humidity": sensor.humidity
                }
                self.send_data_to_server(data)
            time.sleep(10)

if __name__ == "__main__":
    gateway = Gateway()
    gateway.collect_and_send_data()
`;

  LINE_CODE1:string[]= [
    " ",
    "import requests",
    "import random",
    "import time",
    " ",
    "class Sensor:",
    "def __init__(self, id):",
        "self.id = id",
        "self.temperature = random.uniform(20, 30)",
        "self.humidity = random.uniform(40, 60)",
    " ",
    "def read_data(self):",
        "self.temperature = random.uniform(20, 30)",
        "self.humidity = random.uniform(40, 60)",
    " ",
    "class Gateway:",
    "def __init__(self):",
    "self.sensors = [Sensor(1), Sensor(2), Sensor(3)]",
    "self.server_url = 'http://example.com/api'",
    " ",
    "def send_data_to_server(self, data):",
    "response = requests.post(self.server_url, json=data)",
    "if response.status_code == 200:",
    "print('Data sent successfully')",
    "else:",
    "print('Failed to send data')",
    " ",
    "def collect_and_send_data(self):",
    "while True:",
    "for sensor in self.sensors:",
    "sensor.read_data()",
    "data = {",
    "'sensor_id': sensor.id,",
    "'temperature': sensor.temperature,",
    "'humidity': sensor.humidity",
    "}",
    "self.send_data_to_server(data)",
    "time.sleep(10) ",
    " ",
    "if __name__ == '__main__':",
    "gateway = Gateway()",
    "gateway.collect_and_send_data()",
];
  top:number = 16;
  explain1:string[] = [
    " ",
    "Importa la biblioteca 'requests', que se utiliza para hacer solicitudes HTTP, como enviar datos al servidor en este caso",
    "Importa la biblioteca 'random', que permite generar valores aleatorios",
    "Importa la biblioteca 'time', que proporciona funciones para trabajar con el tiempo",
    " ",
    " Define una clase llamada 'Sensor' que simulará la funcionalidad de los sensores",
    " El método '__init__' se llama cuando se crea una instancia de la clase. Aquí se inicializan las propiedades del sensor, como el 'id', la 'temperature' y la 'humidity'",
    "Establece el atributo 'id' del sensor según el valor proporcionado",
    "Genera un valor aleatorio de temperatura entre 20 y 30 y lo asigna al atributo 'temperature' del sensor",
    " Genera un valor aleatorio de humedad entre 40 y 60 y lo asigna al atributo 'humidity' del sensor",
    " ",
    "Define un método 'read_data' para simular la lectura de datos del sensor. En este método:",
    "Genera un nuevo valor aleatorio de temperatura y lo asigna al atributo 'temperature' del sensor",
    "Genera un nuevo valor aleatorio de humedad y lo asigna al atributo 'humidity' del sensor",
    " ",
    "Define una clase llamada 'Gateway' para representar la pasarela IoT. Esta clase contendrá propiedades y métodos relacionados con la pasarela.",
    "Define el método '__init__ 'que se llama al crear una instancia de la clase Gateway",
    " Crea una lista de instancias de la clase 'Sensor' con IDs 1, 2 y 3, y asigna esta lista al atributo 'sensors'.",
    "Establece la URL del servidor donde se enviarán los datos.",
    " ",
    "Define el método 'send_data_to_server' que envía los datos al servidor. Recibe el parámetro 'data' que contiene los datos del sensor. ",
    "Envía una solicitud POST al servidor con los datos en formato JSON.",
    "Verifica si la respuesta del servidor es exitosa (código de estado 200).",
    "Muestra un mensaje si los datos se enviaron con éxito.",
    "Si la respuesta del servidor no es exitosa",
    "Muestra un mensaje de error",
    " ",
    "Define el método 'collect_and_send_data' que recopila datos de sensores y los envía al servidor en un bucle continuo",
    "Inicia un bucle infinito para mantener la recolección y el envío de datos en ejecución.",
    "Itera a través de cada sensor en la lista de sensores",
    "Llama al método read_data del sensor para simular la obtención de nuevos datos.",
    "Crea un diccionario data con los valores del sensor",
    "Variable donde se guarda la información del sensor id",
    "Variable donde se guarda la información de temperatura",
    "Variable donde se guarda la información de humedad",
    "Cierre del diccionario",
    "Llama al método 'send_data_to_server' para enviar los datos al servidor.",
    "Pausa el bucle durante 10 segundos antes de la siguiente iteración.",
    " ",
    "Verifica si el script se está ejecutando directamente (no como un módulo importado).",
    "Crea una instancia de la clase 'Gateway' llamada 'gateway'.",
    "Llama al método 'collect_and_send_data' de la instancia 'gateway' para iniciar la recopilación y el envío de datos.",
  ];

  max_line1:number = 42;


  CODE2:string=
  `
/* Ejemplo de Dispositivo IoT */
import requests
import random
import time

class Device:
    def __init__(self, id):
        self.id = id

    def read_temperature(self):
        temperature = random.uniform(20, 30)
        return temperature

class Gateway:
    def __init__(self):
        self.server_url = "http://example.com/api"

    def send_data_to_server(self, data):
        response = requests.post(self.server_url, json=data)
        if response.status_code == 200:
            print("Data sent successfully")
        else:
            print("Failed to send data")

    def receive_data_from_device(self, device):
        temperature = device.read_temperature()
        data = {
            "device_id": device.id,
            "temperature": temperature
        }
        self.send_data_to_server(data)

if __name__ == "__main__":
    gateway = Gateway()
    device = Device(1)
    while True:
        gateway.receive_data_from_device(device)
        time.sleep(5)  # Esperar 5 segundos antes de la próxima lectura
`;

  LINE_CODE2:string[]= [
    " ",
    "import requests",
    "import random",
    "import time",
    " ",
    "class Device:",
    "def __init__(self, id):",
    "self.id = id",
    " ",
    "def read_temperature(self):",
    "temperature = random.uniform(20, 30)",
    "return temperature",
    " ",
    "class Gateway:",
    "def __init__(self):",
    "self.server_url = 'http://example.com/api'",
    " ",
    "def send_data_to_server(self, data):",
    "response = requests.post(self.server_url, json=data)",
    "if response.status_code == 200:",
    "print('Data sent successfully')",
    "else:",
    "print('Failed to send data')",
    " ",
    "def receive_data_from_device(self, device):",
    "temperature = device.read_temperature()",
    "data = {",
    "'device_id': device.id,",
    "'temperature': temperature",
    "}",
    " self.send_data_to_server(data)",
    " ",
    "if __name__ == '__main__':",
    "gateway = Gateway()",
    "device = Device(1)",
    "while True:",
    "gateway.receive_data_from_device(device)",
    "time.sleep(5)",
];
  explain2:string[] = [
    " ",
    "Importa la biblioteca 'requests', que se utiliza para hacer solicitudes HTTP, como enviar datos al servidor en este caso",
    "Importa la biblioteca 'random', que permite generar valores aleatorios",
    "Importa la biblioteca 'time', que proporciona funciones para trabajar con el tiempo",
    " ",
    "Define la clase 'Device' que representa el dispositivo IoT. La clase contendrá métodos y propiedades relacionadas con el dispositivo",
    "El método '__init__' inicializa una instancia de la clase con un atributo 'id' que identifica el dispositivo",
    "self.id = id",
    " ",
    "Define el método 'read_temperature' que simula la lectura de datos del dispositivo.",
    "Me genera un valor aleatorio de temperatura entre 20 y 30",
    "retorna la temperatura",
    " ",
    "Define la clase 'Gateway' que representa la pasarela IoT. La clase contendrá métodos y propiedades relacionadas con la pasarela.",
    "El método '__init__ 'inicializa una instancia de la clase con el atributo 'server_url'.",
    "representa la URL del servidor donde se enviarán los datos",
    " ",
    "Define el método 'send_data_to_server' que envía datos al servidor a través de una solicitud HTTP POST",
    "Envia los datos al servidor utilizando el método POST y el atributo 'server_url'. Los datos se pasan en formato JSON.",
    "Verifica si la respuesta del servidor tiene un código de estado 200 (éxito)",
    "Muestra un mensaje si los datos se enviaron correctamente",
    "Si la respuesta del servidor no es exitosa",
    "Muestra un mensaje de error",
    " ",
    "Define un método llamado 'receive_data_from_device' que recibe datos del dispositivo y los envía al servidor.",
    "Llama al método 'read_temperature' del objeto 'device' para obtener la temperatura actual",
    "Crea un diccionario 'data' con la información del dispositivo y la temperatura",
    "Variable donde va guardar el id",
    "Variable donde va guardar la temperatura",
    "Cierre del diccionario 'data'",
    "Llama al método 'send_data_to_server' para enviar los datos al servidor.",
    " ",
    "Verifica si el script se está ejecutando directamente (no como un módulo importado)",
    "Crea una instancia de la clase Gateway llamada gateway",
    "device = Device(1)",
    "Entra en un bucle infinito",
    "Llama al método 'receive_data_from_device' del objeto 'gateway' para recibir datos del dispositivo y enviarlos al servidor.",
    "Pausa la ejecución durante 5 segundos antes de la siguiente lectura.",
  ];

  max_line2:number = 38;



  CODE3:string=
  `
/* Ejemplo de Infraestructura en la Nube */
import boto3
import random

aws_access_key = 'TU_ACCESS_KEY'
aws_secret_key = 'TU_SECRET_KEY'
region_name = 'us-west-2'

dynamodb = boto3.resource('dynamodb',
      aws_access_key_id=aws_access_key,
      aws_secret_access_key=aws_secret_key,
      region_name=region_name)

table_name = 'Temperatures'
table = dynamodb.Table(table_name)

def read_sensor_data():
    return random.uniform(20, 30)

def store_data_in_cloud(data):
  table.put_item(Item={'Timestamp': data['timestamp'],'Temperature': data['temperature']})
  print("Data stored in the cloud:", data)

def calculate_average_temperature():
    response = table.scan()
    items = response['Items']
    temperatures = [float(item['Temperature']) for item in items]
    average_temperature = sum(temperatures) / len(temperatures)
    print("Average temperature:", average_temperature)

if __name__ == "__main__":
  timestamp = '2023-08-21 12:00:00'
  temperature = read_sensor_data()

  data = {'timestamp': timestamp, 'temperature': temperature}

  store_data_in_cloud(data)
  calculate_average_temperature()
`;

  LINE_CODE3:string[]= [
" ",
"import boto3",
"import random",
" ",
"aws_access_key = 'TU_ACCESS_KEY'",
"aws_secret_key = 'TU_SECRET_KEY'",
"region_name = 'us-west-2'",
" ",
"dynamodb = boto3.resource('dynamodb',",
"aws_access_key_id=aws_access_key,",
"aws_secret_access_key=aws_secret_key,",
"region_name=region_name)",
" ",
"table_name = 'Temperatures'",
"table = dynamodb.Table(table_name)",
" ",
"def read_sensor_data():",
"return random.uniform(20, 30)",
" ",
"def store_data_in_cloud(data):",
"table.put_item(Item={'Timestamp': data['timestamp'],'Temperature': data['temperature']})",
"print('Data stored in the cloud:', data)",
" ",
"def calculate_average_temperature():",
"response = table.scan()",
"items = response['Items']",
"temperatures = [float(item['Temperature']) for item in items]",
"average_temperature = sum(temperatures) / len(temperatures)",
"print('Average temperature:', average_temperature)",
" ",
"if __name__ == '__main__':",
"timestamp = '2023-08-21 12:00:00'",
"temperature = read_sensor_data()",
" ",
"data = {'timestamp': timestamp, 'temperature': temperature}",
" ",
"store_data_in_cloud(data)",
"calculate_average_temperature()",
];
  explain3:string[] = [
" ",
"'boto3' permite interactuar con los servicios de AWS,",
"'random' se utiliza para generar números aleatorios",
" ",
"Esta línea establece la credencial de acceso 'TU_ACCESS_KEY' con tus propias credenciales",
"Esta línea establece la credencial de acceso 'TU_SECRET_KEY' con tus propias credenciales",
"Establece la 'region_name' según la región que desees",
" ",
"Crea un objeto dynamodb para interactuar con el servicio DynamoDB de AWS.",
"Se configuran las credenciales",
"Se configuran las credenciales",
"Se configira la región",
" ",
"Define el nombre de la tabla de DynamoDB que se utilizará para almacenar los datos, en este caso, 'Temperatures'",
"Crea un objeto 'table' que representa esa tabla en la base de datos",
" ",
"Define una función llamada 'read_sensor_data' que simula la lectura de datos de un sensor",
"Genera y retorna un valor de temperatura aleatorio entre 20 y 30",
" ",
"Define una función llamada 'store_data_in_cloud' que almacena los datos en la base de datos DynamoDB en la nube.",
"'table.put_item' agrega un nuevo elemento a la tabla. 'Item' contiene un diccionario con atributos 'Timestamp' y 'Temperature'.",
"Muestra un mensaje indicando que los datos se almacenaron correctamente",
" ",
"Define una función llamada 'calculate_average_temperature' que calcula el promedio de temperaturas almacenadas en la nube",
"'table.scan()' recupera todos los elementos de la tabla",
"Los elementos se almacenan en 'items'",
"Extraen las temperaturas de cada elemento en la lista 'temperatures'",
"Calcula el promedio de temperaturas usando sum y len",
"muestra el resultado",
" ",
"Verifica si el script se está ejecutando directamente (no como un módulo importado)",
"Crea un valor timestamp",
"Obtiene una lectura de temperatura usando la función 'read_sensor_data'",
" ",
"Crea un diccionario data con el 'timestamp' y la 'temperature'.",
" ",
"Llama a la funcion 'store_data_in_cloud' para almacenar los datos en la nube",
"Llama a la funcion 'calculate_average_temperature' para calcular el promedio de temperatura almacenada.",
  ];

  max_line3:number = 38;




  constructor(private HighlightService: HighlightService,) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    this.HighlightService.highlightAll();
  }

}
