import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  CODE: string = `
  import hashlib
  import hmac
  import os
  secret_key = b'MiClaveSecreta'
  def calcular_hmac(data, key):
      return hmac.new(key, data, hashlib.sha256).digest()
  def verificar_autenticidad(data, hmac_received):
      hmac_calculado = calcular_hmac(data, secret_key)
      return hmac.compare_digest(hmac_calculado, hmac_received)
  datos_del_dispositivo = b'Datos importantes del dispositivo IoT'
  hmac_enviado = calcular_hmac(datos_del_dispositivo, secret_key)
  datos_recibidos = datos_del_dispositivo 
  hmac_recibido = hmac_enviado
  if verificar_autenticidad(datos_recibidos, hmac_recibido):
      print("Los datos son auténticos y seguros.")
  else:
      print("Los datos han sido manipulados o no son auténticos.")
  `;

  LINE_CODE: string[] = [
    'import hashlib',
    'import hmac',
    'import os',
    "secret_key = b'MiClaveSecreta'",
    'def calcular_hmac(data, key):',
    'return hmac.new(key, data, hashlib.sha256).digest()',
    'def verificar_autenticidad(data, hmac_received):',
    'hmac_calculado = calcular_hmac(data, secret_key)',
    'return hmac.compare_digest(hmac_calculado, hmac_received)',
    "datos_del_dispositivo = b'Datos importantes del dispositivo IoT'",
    'hmac_enviado = calcular_hmac(datos_del_dispositivo, secret_key)',
    'datos_recibidos = datos_del_dispositivo ',
    'hmac_recibido = hmac_enviado',
    'if verificar_autenticidad(datos_recibidos, hmac_recibido):',
    'print("Los datos son auténticos y seguros.")',
    'else:',
    'print("Los datos han sido manipulados o no son auténticos.")',
  ];

  EXPLAIN: string[] = [
    ' El código comienza importando las bibliotecas necesarias de Python, que incluyen hashlib y hmac. Estas bibliotecas se utilizan para calcular un HMAC (Código de Autenticación de Mensajes Hash), que es una técnica de seguridad que garantiza la integridad y autenticidad de los datos.',
    ' El código comienza importando las bibliotecas necesarias de Python, que incluyen hashlib y hmac. Estas bibliotecas se utilizan para calcular un HMAC (Código de Autenticación de Mensajes Hash), que es una técnica de seguridad que garantiza la integridad y autenticidad de los datos.',
    ' El código comienza importando las bibliotecas necesarias de Python, que incluyen hashlib y hmac. Estas bibliotecas se utilizan para calcular un HMAC (Código de Autenticación de Mensajes Hash), que es una técnica de seguridad que garantiza la integridad y autenticidad de los datos.',
    'Clave secreta compartida entre el dispositivo IoT y el servidor',
    'Función para calcular un hash HMAC (Message Authentication Code)',
    'Función para calcular un hash HMAC (Message Authentication Code)',
    'Función para verificar la autenticidad de los datos',
    'Función para verificar la autenticidad de los datos',
    'Función para verificar la autenticidad de los datos',
    'Simulación de un envío de datos desde el dispositivo IoT al servidor',
    'Simulación de un envío de datos desde el dispositivo IoT al servidor',
    'En una implementación real, estos datos vendrían del dispositivo',
    'En una implementación real, estos datos vendrían del dispositivo',
    'Se simula la recepción de datos en el servidor, junto con el HMAC recibido del dispositivo IoT. Luego, se utiliza la función verificar_autenticidad para verificar si los datos son auténticos',
    'Se simula la recepción de datos en el servidor, junto con el HMAC recibido del dispositivo IoT. Luego, se utiliza la función verificar_autenticidad para verificar si los datos son auténticos',
    'Se simula la recepción de datos en el servidor, junto con el HMAC recibido del dispositivo IoT. Luego, se utiliza la función verificar_autenticidad para verificar si los datos son auténticos',
    'Se simula la recepción de datos en el servidor, junto con el HMAC recibido del dispositivo IoT. Luego, se utiliza la función verificar_autenticidad para verificar si los datos son auténticos',
  ];

  max_line: number = this.LINE_CODE.length;

  top: number = 16;

  constructor() {}

  ngOnInit(): void {}
}
