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



    // CODIGO 3
    CODE3:string=
    `import socket
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    host = 'localhost'
    port = 12345
    s.bind((host, port))
    s.listen(5)
    print(f'Esperando conexiones en {host}:{port}')
    c, addr = s.accept()
    print(f'Conexión desde {addr}')
    c.sendall(b'Hola, cliente')
    print(c.recv(1024))
    c.close()`;
    LINE_CODE3:string[]= [
      "import socket",
      "s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
      "host = 'localhost'",
      "port = 12345",
      "s.bind((host, port))",
      "s.listen(5)",
      "print(f'Esperando conexiones en {host}:{port}')",
      "c, addr = s.accept()",
      "print(f'Conexión desde {addr}')",
      "c.sendall(b'Hola, cliente')",
      "print(c.recv(1024))",
      "c.close()",
    ];
    explain3:string[] = [
      "Importa el módulo socket de Python, que proporciona una interfaz de bajo nivel para trabajar con conexiones de red.",
      "Crea un nuevo objeto de socket usando socket.socket(). socket.AF_INET indica que el socket será de tipo IPv4. socket.SOCK_STREAM indica que el socket será de tipo TCP (basado en la conexión).",
      "Define una variable host y la asigna al string 'localhost', que generalmente se refiere a la dirección IP 127.0.0.1, la dirección IP del host local.",
      "Define una variable port y le asigna el valor 12345. Es el número de puerto en el que el socket estará escuchando conexiones.",
      "Vincula el socket s a una dirección IP y un puerto. En este caso, vincula el socket a localhost (o 127.0.0.1) y al puerto 12345.",
      "Hace que el socket s comience a escuchar conexiones entrantes. El número 5 es el número máximo de conexiones en cola que el sistema puede manejar. Si más de 5 conexiones intentan conectarse simultáneamente antes de que se acepte una, las adicionales serán rechazadas.",
      "Imprime un mensaje en la consola indicando que el programa está esperando conexiones en la dirección y puerto especificados.",
      "Espera y acepta una conexión entrante. Una vez que un cliente se conecta, retorna dos valores: c: un nuevo objeto socket para interactuar con el cliente. addr: la dirección del cliente que se ha conectado.",
      "Imprime la dirección del cliente que se ha conectado",
      "Envía el mensaje 'Hola, cliente' al cliente usando el socket c. El prefijo b antes del string convierte el string en bytes, ya que la función sendall requiere que los datos sean bytes.",
      "Recibe datos del cliente a través del socket c. 1024 es el tamaño máximo de los datos que se recibirán (en bytes). Imprime los datos recibidos en la consola.",
      "Cierra la conexión con el cliente.",
    ];
    max_line3:number = 12;


    // CODIGO 4
    CODE4:string=
    `#include <stdio.h>
    #include <arpa/inet.h>
    #include <netdb.h>
    int main() {
        char *hostname = "www.example.com";
        struct hostent *he;
        struct in_addr **addr_list;
        if ((he = gethostbyname(hostname)) == NULL) {
            perror("gethostbyname");
            return 1;
        }
        addr_list = (struct in_addr **) he->h_addr_list;
        for(int i = 0; addr_list[i] != NULL; i++) {
            printf("%s tiene la dirección IP %s\n", hostname, inet_ntoa(*addr_list[i]));
        }
        return 0;
    }`;
    LINE_CODE4:string[]= [
      "#include <stdio.h>",
      "#include <arpa/inet.h>",
      "#include <netdb.h>",
      "int main() {",
      "    char *hostname = 'www.example.com';",
      "    struct hostent *he;",
      "    struct in_addr **addr_list;",
      "    if ((he = gethostbyname(hostname)) == NULL) {",
      "        perror('gethostbyname');",
      "        return 1;",
      "    }",
      "    addr_list = (struct in_addr **) he->h_addr_list;",
      "    for(int i = 0; addr_list[i] != NULL; i++) {",
      "        printf('%s tiene la dirección IP %s\n', hostname, inet_ntoa(*addr_list[i]));",
      "    }",
      "    return 0;",
      "}",
    ];
    explain4:string[] = [
      "Esta línea incluye el encabezado estándar de entrada/salida en C, lo que nos permite usar funciones como printf() para imprimir información en la consola.",
      "Este encabezado proporciona declaraciones y definiciones para operaciones de internet. En este código, se utiliza específicamente para la función inet_ntoa().",
      "Incluye funciones y estructuras relacionadas con la base de datos de red. En este código, se utiliza para la función gethostbyname() y la estructura hostent.",
      "Declara el punto de entrada del programa. Cuando el programa se ejecuta, comienza desde aquí.",
      "Declara un puntero a un carácter llamado hostname y lo inicializa con la dirección del string literal 'www.example.com'.",
      "Declara un puntero hacia una estructura hostent llamado he. La estructura hostent se utiliza para almacenar la información de un host, incluidas sus direcciones IP.",
      "Declara un puntero doble hacia una estructura in_addr. Esta estructura se utiliza para representar una dirección IPv4.",
      "La función gethostbyname() trata de encontrar la entrada de la base de datos de nombres de host que corresponda al nombre hostname. Si tiene éxito, devuelve un puntero a una estructura hostent. De lo contrario, devuelve NULL.Esta línea también asigna el resultado de gethostbyname() a he y comprueba si es NULL en una única operación.",
      "Si gethostbyname() devolvió NULL, esta función imprimirá un mensaje de error descriptivo en la consola.",
      "En caso de error (si he es NULL), el programa se termina inmediatamente y devuelve un valor de 1 para indicar que hubo un error.",
      "Cierra el bloque if.",
      "Asigna el puntero h_addr_list de la estructura hostent apuntada por he al puntero addr_list. Esto da acceso directo a la lista de direcciones IP.",
      "Comienza un bucle que se ejecutará mientras el elemento i en addr_list no sea NULL.",
      "Imprime el nombre del host y su dirección IP correspondiente. inet_ntoa() convierte la dirección IP (que está en formato binario) a una cadena de caracteres.",
      "Cierra el bucle for.",
      "Termina el programa y devuelve un valor de 0 para indicar que se ejecutó con éxito.",
      "Cierra el bloque de la función main.",
    ];
    max_line4:number = 17;

  QUESTION_PATH = "/redes/questions";
  constructor() { }

  ngOnInit(): void {
  }

}
