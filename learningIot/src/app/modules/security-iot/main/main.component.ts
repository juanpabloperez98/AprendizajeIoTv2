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

  CODE1: string = `
  #include <stdio.h>
  #include <stdbool.h>
  typedef struct {
      char id[16];    
      char secret[32];
  } IoTDevice;
  bool authenticateDevice(IoTDevice device, char* deviceId, char* deviceSecret) {
      if (strcmp(deviceId, device.id) == 0 && strcmp(deviceSecret, device.secret) == 0) {
          return true;
      }
      return false; 
  }
  bool authorizeDevice(IoTDevice device, char* resource) {
      return true;
  }
  int main() {
      IoTDevice device1;
      strcpy(device1.id, "device123");
      strcpy(device1.secret, "mysecretkey");
      char inputId[16];
      char inputSecret[32];
      printf("Ingrese el ID del dispositivo: ");
      scanf("%s", inputId);
      printf("Ingrese la clave secreta del dispositivo: ");
      scanf("%s", inputSecret);
      if (authenticateDevice(device1, inputId, inputSecret)) {
          printf("Dispositivo autenticado con éxito.\\n");
          char resource[32];
          printf("Ingrese el recurso al que desea acceder: ");
          scanf("%s", resource);
          if (authorizeDevice(device1, resource)) {
              printf("Acceso autorizado al recurso: %s\\n", resource);
          } else {
              printf("Acceso denegado al recurso: %s\\n", resource);
          }
      } else {
          printf("Autenticación fallida. Dispositivo no autorizado.\\n");
      }
      return 0;
  }
  `;

  LINE_CODE1: string[] = [
    '#include <stdio.h>',
    '#include <stdbool.h>',
    'typedef struct {',
    'char id[16];',
    'char secret[32];',
    '} IoTDevice;',
    'bool authenticateDevice(IoTDevice device, char* deviceId, char* deviceSecret) {',
    'if (strcmp(deviceId, device.id) == 0 && strcmp(deviceSecret, device.secret) == 0) {',
    'return true;',
    '}',
    'return false;',
    '}',
    'bool authorizeDevice(IoTDevice device, char* resource) {',
    'return true;',
    '}',
    'int main() {',
    'IoTDevice device1;',
    'strcpy(device1.id, "device123");',
    'strcpy(device1.secret, "mysecretkey");',
    'char inputId[16];',
    'char inputSecret[32];',
    'printf("Ingrese el ID del dispositivo: ");',
    'scanf("%s", inputId);',
    'printf("Ingrese la clave secreta del dispositivo: ");',
    'scanf("%s", inputSecret);',
    'if (authenticateDevice(device1, inputId, inputSecret)) {',
    'printf("Dispositivo autenticado con éxito.\\n");',
    'char resource[32];',
    'printf("Ingrese el recurso al que desea acceder: ");',
    'scanf("%s", resource);',
    'if (authorizeDevice(device1, resource)) {',
    'printf("Acceso autorizado al recurso: %s\\n", resource);',
    '} else {',
    'printf("Acceso denegado al recurso: %s\\n", resource);',
    '}',
    '} else {',
    'printf("Autenticación fallida. Dispositivo no autorizado.\\n");',
    '}',
    'return 0;',
  ];

  EXPLAIN1: string[] = [
    '<stdio.h> para entrada y salida estándar, y <stdbool.h> para usar el tipo de datos bool.',
    '<stdio.h> para entrada y salida estándar, y <stdbool.h> para usar el tipo de datos bool.',
    'Un nuevo tipo de dato personalizado',
    'Identificador único del dispositivo',
    'Clave secreta del dispositivo',
    'Se define una estructura IoTDevice que representa un dispositivo IoT. ',
    'Se define una función llamada authenticateDevice que toma un dispositivo device y dos cadenas de caracteres deviceId y deviceSecret',
    'Comparamos el ID y la clave secreta proporcionados con los del dispositivo',
    'Autenticación exitosa',
    'Finaliza el condicional "if"',
    'Autenticación fallida',
    'Finaliza la función llamada authenticateDevice',
    'Se define una función llamada authorizeDevice que toma un dispositivo device y una cadena de caracteres resource',
    'En este ejemplo simple, la función siempre devuelve true, lo que indica que cualquier dispositivo está autorizado a acceder a cualquier recurso',
    'Finaliza la función llamada authenticateDevice',
    'Comienza la función main(), que es la función principal que se ejecutará cuando se inicie el programa.',
    'Se crea un objeto device1 de tipo IoTDevice',
    'Se inicializa con un ID utilizando la función strcpy()',
    'Una clave secreta de ejemplo utilizando la función strcpy()',
    'Se declara el arreglo de caracteres inputId para almacenar los valores que el usuario proporcionará para la autenticación.',
    'Se declara el arreglo de caracteres inputSecret para almacenar los valores que el usuario proporcionará para la autenticación.',
    'Texto simple que indica al usuario ingresar un ID',
    'Entrada que obtiene un ID',
    'Texto simple que indica al usuario ingresar una clave secreta',
    'Entrada que obtiene la clave secreta',
    'Se verifica la autenticación llamando a la función authenticateDevice() con el dispositivo device1 y las entradas del usuario.',
    'Se muestra un mensaje indicando que el dispositivo se ha autenticado con éxito.',
    'Variable llamada resource que es un arreglo de caracteres con una longitud de 32 elementos',
    'Texto simple que indica al usuario seleccionar el recurso',
    'Entrada del recurso solicitado',
    'Se verifica la autorización llamando a la función authorizeDevice() con el dispositivo device1 y el nombre del recurso',
    'Si la autorización es exitosa, se muestra un mensaje indicando que se ha autorizado el acceso al recurso especificado.',
    'Si la autorización falla (la función authorizeDevice() devuelve false)',
    'Se muestra un mensaje indicando que se ha denegado el acceso al recurso especificado.',
    'Finaliza el condicional else',
    'Si la autenticación falla (la función authenticateDevice() devuelve false)',
    'Se muestra un mensaje indicando que la autenticación ha fallado y el dispositivo no está autorizado.',
    'Finaliza el condicional else',
    'Finalmente, el programa retorna 0 para indicar una terminación exitosa.',
  ];

  max_line1: number = this.LINE_CODE1.length;

  CODE2: string = `
  #include <stdio.h>
  #include <openssl/aes.h>
  #include <openssl/rand.h>
  #define AES_KEY_SIZE 256 
  void encryptDecryptAES(unsigned char *data, const unsigned char *key, int encrypt) {
      AES_KEY aesKey;
      AES_set_encrypt_key(key, AES_KEY_SIZE, &aesKey);
      if (encrypt) {
          AES_encrypt(data, data, &aesKey);
      } else {
          AES_decrypt(data, data, &aesKey);
      }
  }
  int main() {
      unsigned char key[AES_KEY_SIZE / 8]; 
      unsigned char data[16] = "Hello, IoT!";
      RAND_bytes(key, sizeof(key));
      encryptDecryptAES(data, key, 1);
      printf("Texto cifrado: %s\\n", data);
      encryptDecryptAES(data, key, 0);
      printf("Texto descifrado: %s\\n", data);
      return 0;
  }
  `;

  LINE_CODE2: string[] = [
    '#include <stdio.h>',
    '#include <openssl/aes.h>',
    '#include <openssl/rand.h>',
    '#define AES_KEY_SIZE 256',
    'void encryptDecryptAES(unsigned char *data, const unsigned char *key, int encrypt) {',
    'AES_KEY aesKey;',
    'AES_set_encrypt_key(key, AES_KEY_SIZE, &aesKey);',
    'if (encrypt) {',
    'AES_encrypt(data, data, &aesKey);',
    '} else {',
    'AES_decrypt(data, data, &aesKey);',
    '}',
    '}',
    'int main() {',
    'unsigned char key[AES_KEY_SIZE / 8];',
    'unsigned char data[16] = "Hello, IoT!";',
    'RAND_bytes(key, sizeof(key));',
    'encryptDecryptAES(data, key, 1);',
    'printf("Texto cifrado: %s\\n", data);',
    'encryptDecryptAES(data, key, 0);',
    'printf("Texto descifrado: %s\\n", data);',
    'return 0;',
    '}',
  ];

  EXPLAIN2: string[] = [
    'Incluimos la cabecera. stdio.h para entrada/salida estándar,',
    'Incluimos la cabecera. openssl/aes.h para AES (Advanced Encryption Standard)',
    'Incluimos la cabecera. openssl/rand.h para la generación segura de números aleatorios.',
    'Definimos una macro AES_KEY_SIZE que representa el tamaño de la clave AES en bits, en este caso, 256 bits (32 bytes).',
    'Definimos una función llamada encryptDecryptAES que toma tres argumentos: data (los datos a cifrar o descifrar), key (la clave de cifrado) y encrypt (un indicador booleano que determina si estamos cifrando o descifrando). La función no devuelve un valor y realiza el cifrado o descifrado directamente en el búfer data.',
    'Creamos una estructura AES_KEY llamada aesKey para almacenar la clave de cifrado',
    'Utilizamos la función AES_set_encrypt_key para configurar esta clave a partir de la clave proporcionada en el argumento key',
    'Usamos un condicional if para determinar si estamos cifrando o descifrando (encrypt es verdadero o falso)',
    'Si estamos cifrando (encrypt es verdadero), llamamos a AES_encrypt para cifrar los datos en el lugar (sobrescribiendo data) utilizando la clave aesKey',
    'En caso de que no se cumpla la condición',
    'Si estamos descifrando, utilizamos AES_decrypt de manera similar para descifrar los datos.',
    'Finaliza el condicional else',
    'Finaliza función encryptDecryptAES',
    'Comienza la función principal del programa.',
    'Declaramos un arreglo key para almacenar la clave de cifrado (256 bits o 32 bytes)',
    'Arreglo data para los datos de entrada, inicializado con la cadena "Hello, IoT!".',
    'Utilizamos la función RAND_bytes de OpenSSL para generar una clave aleatoria segura y la almacenamos en el arreglo key.',
    'Llamamos a la función encryptDecryptAES para cifrar los datos en data utilizando la clave key. El tercer argumento, `',
    'Imprime en la consola el texto cifrado.',
    'Llama a la función encryptDecryptAES para descifrar los datos cifrados utilizando la misma clave. El tercer parámetro, 0, indica que se está realizando un descifrado.',
    'Imprime en la consola el texto descifrado.',
    'Indica que la función main ha finalizado y devuelve el valor 0, indicando que el programa ha finalizado correctamente.',
  ];

  max_line2: number = this.LINE_CODE2.length;

  CODE3: string = `
  #include <stdio.h>
  #include <string.h>
  void encryptData(char *data, int key) {
      int i;
      for (i = 0; i < strlen(data); i++) {
          data[i] = data[i] + key;
      }
  }
  void decryptData(char *data, int key) {
      int i;
      for (i = 0; i < strlen(data); i++) {
          data[i] = data[i] - key;
      }
  }
  int main() {
      char userData[] = "Datos sensibles del usuario"; 
      int encryptionKey = 5; 
      printf("Datos del usuario: %s\\n", userData);
      encryptData(userData, encryptionKey);
      printf("Datos cifrados: %s\\n", userData);
      decryptData(userData, encryptionKey);
      printf("Datos descifrados: %s\\n", userData);
      return 0;
  }
  `;

  LINE_CODE3: string[] = [
    '#include <stdio.h>',
    '#include <string.h>',
    'void encryptData(char *data, int key) {',
    'int i;',
    'for (i = 0; i < strlen(data); i++) {',
    'data[i] = data[i] + key;',
    '}',
    '}',
    'void decryptData(char *data, int key) {',
    'int i;',
    'for (i = 0; i < strlen(data); i++) {',
    'data[i] = data[i] - key;',
    '}',
    '}',
    'int main() {',
    'char userData[] = "Datos sensibles del usuario";',
    'int encryptionKey = 5;',
    'printf("Datos del usuario: %s\n", userData);',
    'encryptData(userData, encryptionKey);',
    'printf("Datos cifrados: %s\n", userData);',
    'decryptData(userData, encryptionKey);',
    'printf("Datos descifrados: %s\n", userData);',
    'return 0;',
    '}',
  ];

  EXPLAIN3: string[] = [
    'stdio.h proporciona funcionalidades para entrada/salida estándar',
    'string.h proporciona funciones para manipulación de cadenas.',
    'Aquí se define una función encryptData que toma dos parámetros: un puntero a una cadena de caracteres (char *data) y una clave de cifrado (int key)',
    'Variable que itera',
    'La función recorre cada caracter de la cadena',
    'Esta línea suma la clave de cifrado key al valor ASCII de cada caracter en la cadena data.',
    'Se finaliza el ciclo for',
    'Se finaliza la función encryptData',
    'Esta línea define una función llamada decryptData que es similar a encryptData',
    'Variable que itera',
    'La función recorre cada caracter de la cadena',
    'Esta línea resta la clave de cifrado key al valor ASCII de cada caracter en la cadena data.',
    'Se finaliza el ciclo for',
    'Se finaliza la función decryptData',
    'Esta línea define la función principal del programa.',
    'Declara una variable userData como una matriz de caracteres que contiene la cadena "Datos sensibles del usuario".',
    'Declara una variable encryptionKey y le asigna el valor 5 como clave de cifrado.',
    'Esta línea imprime la cadena original userData en la pantalla.',
    'Llama a la función encryptData para cifrar la cadena userData.',
    'Imprime la cadena cifrada después de aplicar la función de cifrado.',
    'Llama a la función decryptData para descifrar la cadena userData.',
    'Imprime la cadena descifrada después de aplicar la función de descifrado.',
    'Indica que el programa ha finalizado con éxito y sale de la función main.',
  ];

  max_line3: number = this.LINE_CODE3.length;

  CODE4: string = `
  #include <stdio.h>
  #include <string.h>
  #define USUARIO_CORRECTO "usuario"
  #define CONTRASENA_CORRECTA "contrasena"
  int verificarCredenciales(const char *usuario, const char *contrasena) {
      if (strcmp(usuario, USUARIO_CORRECTO) == 0 && strcmp(contrasena, CONTRASENA_CORRECTA) == 0) {
          return 1;
      }
      return 0; 
  }
  int main() {
      char usuario[50];
      char contrasena[50];
      printf("Ingrese el nombre de usuario: ");
      scanf("%s", usuario);
      printf("Ingrese la contraseña: ");
      scanf("%s", contrasena);
      if (verificarCredenciales(usuario, contrasena)) {
          printf("Acceso concedido. Dispositivo IoT autenticado con éxito.\\n");
      } else {
          printf("Acceso denegado. Credenciales incorrectas.\\n");
      }
      return 0;
  }
  `;

  LINE_CODE4: string[] = [
    '#include <stdio.h>',
    '#include <string.h>',
    '#define USUARIO_CORRECTO "usuario"',
    '#define CONTRASENA_CORRECTA "contrasena"',
    'int verificarCredenciales(const char *usuario, const char *contrasena) {',
    'if (strcmp(usuario, USUARIO_CORRECTO) == 0 && strcmp(contrasena, CONTRASENA_CORRECTA) == 0) {',
    'return 1;',
    '}',
    'return 0;',
    '}',
    'int main() {',
    'char usuario[50];',
    'char contrasena[50];',
    'printf("Ingrese el nombre de usuario: ");',
    'scanf("%s", usuario);',
    'printf("Ingrese la contraseña: ");',
    'scanf("%s", contrasena);',
    'if (verificarCredenciales(usuario, contrasena)) {',
    'printf("Acceso concedido. Dispositivo IoT autenticado con éxito.\\n");',
    '} else {',
    'printf("Acceso denegado. Credenciales incorrectas.\\n");',
    '}',
    'return 0;',
  ];

  EXPLAIN4: string[] = [
    'Esta línea incluye la librería estándar de entrada/salida de C, que es necesaria para usar funciones de entrada/salida estándar como printf y scanf',
    'Incluye la librería estándar de cadenas de C, que se utiliza para operaciones de manipulación de cadenas como strcmp.',
    'Estas línea define un macro utilizando la directiva #define. En este caso, USUARIO_CORRECTO se define como la cadena "usuario". Estos valores representan un nombre de usuario de ejemplo.',
    'Estas línea define un macro utilizando la directiva #define. En este caso, CONTRASENA_CORRECTA se define como la cadena "contrasena". Estos valores representan una contraseña de ejemplo.',
    'Aquí se define una función llamada verificarCredenciales. Esta función toma dos argumentos: usuario y contrasena, que son punteros a cadenas de caracteres (const char *).',
    'Dentro de la función, se utiliza la función strcmp para comparar las cadenas usuario y contrasena con los valores definidos en USUARIO_CORRECTO y CONTRASENA_CORRECTA.',
    'Si ambas comparaciones son iguales (retornan 0), significa que las credenciales son correctas, por lo que la función devuelve 1.',
    'Finaliza el condicional if',
    'De lo contrario, devuelve 0 para indicar que las credenciales son inválidas.',
    'Finaliza la función verificarCredenciales',
    'La función main es la entrada principal del programa. Aquí es donde comienza la ejecución del código.',
    'Se declaran el arreglo de caracteres usuario con espacio para almacenar hasta 50 caracteres.',
    'Se declaran el arreglo de caracteres contrasena con espacio para almacenar hasta 50 caracteres.',
    'Esta línea imprime en la consola el mensaje "Ingrese el nombre de usuario: " utilizando la función printf. Esto solicita al usuario que ingrese su nombre de usuario.',
    'Esta línea utiliza la función scanf para leer una cadena de caracteres (un nombre de usuario) ingresada por el usuario y almacenarla en la variable usuario.',
    'Similar al primer mensaje, esta línea imprime en la consola el mensaje "Ingrese la contraseña: ", solicitando al usuario que ingrese su contraseña.',
    'Al igual que antes, esta línea utiliza scanf para leer una cadena de caracteres (la contraseña) ingresada por el usuario y almacenarla en la variable contrasena',
    'Esta línea inicia una estructura condicional if. Comprueba si el resultado de la función verificarCredenciales(usuario, contrasena) es verdadero (1)',
    'Si las credenciales son válidas, se imprime en la consola el mensaje "Acceso concedido. Dispositivo IoT autenticado con éxito." utilizando printf',
    'El programa ejecuta el bloque de código dentro del else.',
    'Dentro del bloque else, se imprime en la consola el mensaje "Acceso denegado. Credenciales incorrectas." utilizando printf',
    'Finaliza el condicional else',
    'Finalmente, el programa llega a esta línea que devuelve el valor 0 al sistema operativo',
  ];

  max_line4: number = this.LINE_CODE4.length;

  constructor() {}

  ngOnInit(): void {}
}
