import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    // CODIGO 1
    CODE1:string=
    `import smtplib
    from email.mime.text import MIMEText
    # Configura tus credenciales
    EMAIL_ADDRESS = "tu_email@gmail.com"
    EMAIL_PASSWORD = "tu_password"
    # Crear mensaje
    msg = MIMEText('Este es el cuerpo del correo.')
    msg['Subject'] = 'Prueba de SMTP'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = 'destinatario@email.com'
    # Enviar correo
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()  # Encripta la conexión
    server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
    server.sendmail(EMAIL_ADDRESS, 'destinatario@email.com', msg.as_string())
    server.quit()`;
    LINE_CODE1:string[]= [
      "import smtplib",
      "from email.mime.text import MIMEText",
      "# Configura tus credenciales",
      "EMAIL_ADDRESS = 'tu_email@gmail.com'",
      "EMAIL_PASSWORD = 'tu_password'",
      "# Crear mensaje",
      "msg = MIMEText('Este es el cuerpo del correo.')",
      "msg['Subject'] = 'Prueba de SMTP'",
      "msg['From'] = EMAIL_ADDRESS",
      "msg['To'] = 'destinatario@email.com'",
      "# Enviar correo",
      "server = smtplib.SMTP('smtp.gmail.com', 587)",
      "server.starttls()  # Encripta la conexión",
      "server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)",
      "server.sendmail(EMAIL_ADDRESS, 'destinatario@email.com', msg.as_string())",
      "server.quit()",
    ];
    top:number = 16;
    explain1:string[] = [
      "Esta línea importa el módulo smtplib que es una biblioteca de Python para enviar correos usando el protocolo SMTP (Simple Mail Transfer Protocol).",
      "Esta línea importa la clase MIMEText del módulo email.mime.text. MIMEText se utiliza para crear mensajes de correo electrónico con texto.",
      "Esto es simplemente un comentario, no tiene un efecto en el código en sí. Es una anotación para el programador.",
      "Se asigna la dirección de correo electrónico del remitente a la variable EMAIL_ADDRESS.",
      "Se asigna la contraseña del correo electrónico del remitente a la variable EMAIL_PASSWORD.",
      "Otro comentario que indica que las siguientes líneas están relacionadas con la creación del mensaje de correo electrónico.",
      "Aquí se crea un nuevo mensaje de correo electrónico con el texto 'Este es el cuerpo del correo.'.",
      "Establece el asunto del mensaje a 'Prueba de SMTP'.",
      "Establece el remitente del mensaje usando la dirección de correo electrónico especificada anteriormente.",
      "Establece el destinatario del mensaje.",
      "Otro comentario que indica que las siguientes líneas están relacionadas con el proceso de enviar el correo.",
      "Se establece una conexión con el servidor SMTP de Gmail en el puerto 587 y se asigna a la variable server.",
      "Inicia una conexión TLS (Transport Layer Security) para encriptar la conexión con el servidor. Es un paso necesario para mantener segura la información durante el proceso de envío.",
      "Inicia sesión en el servidor SMTP usando las credenciales proporcionadas anteriormente.",
      "Envía el correo electrónico. Utiliza la dirección de correo electrónico del remitente, la dirección del destinatario y el mensaje que hemos creado.",
      "Cierra la conexión con el servidor SMTP.",
    ];
    max_line1:number = 16;


    // CODIGO 2
    CODE2:string=
    `#include<stdio.h>
    #include<sys/socket.h>
    #include<arpa/inet.h>
    int main(int argc, char *argv[]) {
        int socket_desc;
        struct sockaddr_in server;
        char *message;
        socket_desc = socket(AF_INET, SOCK_STREAM, 0);
        server.sin_addr.s_addr = inet_addr("192.168.1.10");
        server.sin_family = AF_INET;
        server.sin_port = htons(8888);
        connect(socket_desc, (struct sockaddr *)&server, sizeof(server));
        message = "GET / HTTP/1.1";
        send(socket_desc, message, strlen(message), 0);
        return 0;
    }`;
    LINE_CODE2:string[]= [
      "#include<stdio.h>",
      "#include<sys/socket.h>",
      "#include<arpa/inet.h>",
      "int main(int argc, char *argv[]) {",
      "    int socket_desc;",
      "    struct sockaddr_in server;",
      "    char *message;",
      "    socket_desc = socket(AF_INET, SOCK_STREAM, 0);",
      "    server.sin_addr.s_addr = inet_addr('192.168.1.10');",
      "    server.sin_family = AF_INET;",
      "    server.sin_port = htons(8888);",
      "    connect(socket_desc, (struct sockaddr *)&server, sizeof(server));",
      "    message = 'GET / HTTP/1.1\r\n\r\n';",
      "    send(socket_desc, message, strlen(message), 0);",
      "    return 0;",
      "}",
    ];
    explain2:string[] = [
      "Incluye el archivo de cabecera estándar de entrada/salida. Proporciona funcionalidades para la entrada/salida de datos.",
      "Incluye el archivo de cabecera necesario para operaciones de sockets. Esencial para crear, enlazar, etc., sockets.",
      "Incluye definiciones para operaciones de internet, como inet_addr.",
      "Es la función principal del programa y el punto de entrada. argc y argv representan, respectivamente, el número de argumentos y la lista de argumentos pasados al programa.",
      "Declara una variable entera llamada socket_desc que almacenará el descriptor del socket.",
      "Declara una estructura sockaddr_in llamada server que contendrá la dirección IP y el puerto del servidor al que se desea conectar.",
      "Declara un puntero a char llamado message que almacenará el mensaje a enviar al servidor.",
      "Crea un nuevo socket TCP (SOCK_STREAM) usando el protocolo IPv4 (AF_INET). El descriptor del socket se almacena en socket_desc.",
      "Asigna la dirección IP '192.168.1.10' a la estructura server. inet_addr convierte la cadena con la dirección IP en una forma adecuada para la estructura.",
      "Establece el tipo de dirección o familia del protocolo a IPv4.",
      "Establece el puerto del servidor a '8888'. La función htons convierte el número de puerto de formato 'host' a formato 'network'.",
      "Intenta conectar el socket al servidor usando la dirección IP y el puerto especificados en la estructura server.",
      "Asigna al puntero message una cadena que representa una solicitud HTTP GET básica.",
      "Envía la cadena almacenada en message al servidor a través del socket.",
      "Finaliza la ejecución de la función main y devuelve el valor 0, indicando que el programa finalizó correctamente.",
      "Se cierra la función",
    ];
    max_line2:number = 16;

  QUESTION_PATH = "/redes/questions";
  constructor() { }

  ngOnInit(): void {
  }

}
