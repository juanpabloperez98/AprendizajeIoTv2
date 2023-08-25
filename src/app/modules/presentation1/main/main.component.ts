
import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../../services/highlight.service';


@Component({
  selector: 'Presentation-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  CODE1:string=
  `
  /* Uso de sensores*/
  import dht
  from machine import Pin
  import time

  dht_pin = Pin(4, Pin.IN)

  sensor = dht.DHT11(dht_pin)

  while True:
      try:
          sensor.measure()

          temperature = sensor.temperature()
          humidity = sensor.humidity()

          print("Temperatura: {}°C".format(temperature))
          print("Humedad: {}%".format(humidity))

      except OSError as e:
          print("Error al leer el sensor:", e)

      time.sleep(2)`;

  LINE_CODE1:string[]= [
    " ",
    "import dht",
    "from machine import Pin",
    "import time",
    " ",
    "dht_pin = Pin(4, Pin.IN)",
    " ",
    "sensor = dht.DHT11(dht_pin)",
    " ",
    "while True:",
    "try:",
    "sensor.measure()",
    " ",
    "temperature = sensor.temperature()",
    "humidity = sensor.humidity()",
    " ",
    "print('Temperatura: {}°C'.format(temperature))",
    "print('Humedad: {}%'.format(humidity))",
    " ",
    "except OSError as e:",
    "print('Error al leer el sensor:', e)",
    " ",
    "time.sleep(2)",

  ];
  top:number = 16;
  explain1:string[] = [
    " ",
    "Importa la biblioteca que proporciona soporte para el sensor DHT11",
    "Importa la clase Pin de la biblioteca machine, que se utiliza para interactuar con los pines GPIO de la placa",
    "Importa la biblioteca time que proporciona funciones para trabajar con el tiempo.",
    " ",
    "Configuración del pin GPIO para el DHT11",
    " ",
    "Crea un objeto DHT11 llamado 'sensor'. Este objeto se inicializa con el pin 'dht_pin' que acabamos de configurar. Ahora 'sensor' es capaz de interactuar con el sensor DHT11.",
    " ",
    "Inicia un bucle infinito que continuará ejecutándose siempre. Esto permite que el código siga leyendo y mostrando los valores del sensor en bucle.",
    "Inicia un bloque try, que se utiliza para manejar posibles errores",
    "Llama al método 'measure()' en el objeto 'sensor' para realizar una medición de temperatura y humedad con el sensor DHT11",
    " ",
    "Obtiene la temperatura medida del sensor y la almacena en la variable temperature. ",
    "Obtiene la humedad medida del sensor y la almacena en la variable 'humidity'.",
    " ",
    "Muestra la temperatura en la consola utilizando la función 'print()'. El valor de 'temperature' se formatea en el lugar '{}'.",
    "Muestra la humedad en la consola de manera similar a la línea anterior",
    " ",
    "En caso de que ocurra un error, este bloque capturará la excepción 'OSError' y la almacenará en la variable 'e'",
    "Muestra un mensaje de error junto con la descripción del error capturado.",
    " ",
    " Espera durante 2 segundos antes de continuar con la siguiente iteración del bucle. Esto evita lecturas excesivamente frecuentes del sensor.",
  ];
  max_line1:number = 23;




  QUESTION_PATH = "/presentationTwo/questions";

  constructor(private HighlightService: HighlightService,) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    this.HighlightService.highlightAll();
  }

}
