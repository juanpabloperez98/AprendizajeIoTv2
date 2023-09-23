import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public url: string = '/microcontroller/questions'


  CODE: string = `#include <xc.h>
  #pragma config FOSC = INTRCIO
  #pragma config WDTE = OFF
  #pragma config PWRTE = OFF
  #pragma config MCLRE = OFF
  #pragma config CP = OFF
  #define _XTAL_FREQ 4000000
  void main() {
    TRISAbits.TRISA0 = 0;
    while(1) {
      PORTAbits.RA0 = 1;
      __delay_ms(1000);
      PORTAbits.RA0 = 0;
      __delay_ms(1000);
    }
  }
`;

  LINE_CODE: string[] = [
    '#include <xc.h>',
    '#pragma config FOSC = INTRCIO',
    '#pragma config WDTE = OFF',
    '#pragma config PWRTE = OFF',
    '#pragma config MCLRE = OFF',
    '#pragma config CP = OFF',
    '#define _XTAL_FREQ 4000000',
    'void main() {',
    'TRISAbits.TRISA0 = 0;',
    'while(1) {',
    'PORTAbits.RA0 = 1;',
    '__delay_ms(1000);',
    'PORTAbits.RA0 = 0;',
    '__delay_ms(1000);',
    '}',
    '}',
  ];

  EXPLAIN: string[] = [
    'Esta línea incluye el archivo de encabezado <xc.h>, que es específico para los microcontroladores PIC y contiene las definiciones de registro y configuración necesarias.',
    'Esto configura los bits de configuración del microcontrolador. En este caso, se establece el oscilador interno (INTRCIO) como fuente de reloj. Los bits de configuración son específicos para cada microcontrolador y definen su comportamiento general.',
    'Desactiva el perro guardián (watchdog timer), que es un mecanismo de seguridad que reinicia el microcontrolador si no se recibe una señal de "alimentación" periódicamente. En este caso, se desactiva.',
    'Desactiva el temporizador de encendido (power-up timer), que controla el tiempo que el microcontrolador debe esperar después de encenderse antes de ejecutar el código principal. Se desactiva en este caso.',
    'Desactiva el reset maestro (master reset), que se utiliza para reiniciar el microcontrolador en ciertas condiciones. Se desactiva en este caso.',
    'Desactiva la protección de código, que puede impedir que el programa sea leído o modificado desde el exterior. Se desactiva en este caso.',
    'Define una constante _XTAL_FREQ que representa la frecuencia del oscilador interno del microcontrolador. En este caso, se establece en 4 MHz (4,000,000 Hz).',
    'Comienza la función main(). Esta es la función principal del programa y es donde comienza la ejecución del código.',
    'Configura el pin RA0 como salida al modificar el registro TRISAbits, que controla si un pin es de entrada (1) o salida (0). En este caso, se configura RA0 como salida para controlar un LED.',
    'Inicia un bucle infinito que ejecutará el código dentro de las llaves {} repetidamente.',
    'Enciende el LED conectado al pin RA0 al establecer su valor en 1 mediante el registro PORTAbits.',
    'Espera 1 segundo (1000 milisegundos) utilizando la función __delay_ms().',
    'Apaga el LED al establecer su valor en 0 mediante el registro PORTAbits.',
    'Espera otro segundo antes de volver a encender el LED. El bucle continuará repitiéndose indefinidamente, lo que hará que el LED parpadee cada segundo.',
    'Finaliza el ciclo while()',
    'Cierra la función main() y, por lo tanto, el programa. El microcontrolador seguirá ejecutando este bucle infinito hasta que se apague o se reinicie.',
  ];

  max_line: number = this.LINE_CODE.length;

  top: number = 16;

  CODE1: string = `
  #include <avr/io.h>
  int main(void) {
      DDRB |= (1 << PB5);
      DDRC &= ~(1 << PC2);
      PORTC |= (1 << PC2);
      while (1) {
          if (PINC & (1 << PC2)) {
              // El Pin 2 del Puerto C está en alto (sin presionar)
          } else {
              // El Pin 2 del Puerto C está en bajo (presionado)
          }
          PORTB ^= (1 << PB5);
      }
      return 0;
  }
  `;

  LINE_CODE1: string[] = [
    '#include <avr/io.h>',
    'int main(void) {',
    'DDRB |= (1 << PB5);',
    'DDRC &= ~(1 << PC2);',
    'PORTC |= (1 << PC2);',
    'while (1) {',
    'if (PINC & (1 << PC2))',
    '// El Pin 2 del Puerto C está en alto (sin presionar)',
    '} else {',
    '// El Pin 2 del Puerto C está en bajo (presionado)',
    '}',
    'PORTB ^= (1 << PB5);',
    '}',
    'return 0;',
    '}',
  ];

  EXPLAIN1: string[] = [
    'Incluir la librería necesaria para el microcontrolador AVR',
    'Configurar los pines de entrada y salida',
    'DDRB es el registro de dirección del Puerto B, y el bit 5 se establece en 1 para configurarlo como salida.',
    'DDRC es el registro de dirección del Puerto C, y el bit 2 se establece en 0 para configurarlo como entrada.',
    'PORTC es el registro de salida del Puerto C, y el bit 2 se establece en 1 para activar el pull-up.',
    'Tu programa principal aquí',
    'Leer el estado del Pin 2 del Puerto C',
    'Realiza alguna acción cuando el pin está en alto',
    'Si el pin PC2 no está en estado alto (presionado), se ejecuta el siguiente bloque de código.',
    'Realiza alguna acción cuando el pin está en bajo',
    'Se finaliza la condición',
    'Cambiar el estado del Pin 5 del Puerto B',
    'Retardo o espera (dependiendo de la velocidad del microcontrolador)',
    'Termina la función principal y devuelve un valor de 0 para indicar una salida exitosa.',
    'Finaliza la función main',
  ];

  max_line1: number = this.LINE_CODE1.length;

  CODE2: string = `
  #include <xc.h>
  #include <pic16f877a.h>
  void interrupt ISR(void) {
      if (INTCONbits.INTF) {
          INTCONbits.INTF = 0;
      }
  }
  void main(void) {
      TRISB0 = 1;
      INTEDG = 0;
      INTF = 0;
      INTE = 1;
      GIE = 1;
      while (1) {
          // El programa principal continúa aquí
      }
      return;
  }
  `;

  LINE_CODE2: string[] = [
    '#include <xc.h>',
    '#include <pic16f877a.h>',
    'void interrupt ISR(void) {',
    'if (INTCONbits.INTF) {',
    'INTCONbits.INTF = 0;',
    '}',
    '}',
    'void main(void) {',
    'TRISB0 = 1;',
    'INTEDG = 0;',
    'INTF = 0;',
    'INTE = 1; ',
    'GIE = 1;',
    'while (1) {',
    '// El programa principal continúa aquí',
    '}',
    'return;',
    '}',
  ];

  EXPLAIN2: string[] = [
    'Aquí, incluimos dos archivos de cabecera: <xc.h> y <pic16f877a.h>. Estos archivos contienen definiciones específicas del microcontrolador y del compilador que necesitamos para trabajar con el PIC16F877A.',
    'Aquí, incluimos dos archivos de cabecera: <xc.h> y <pic16f877a.h>. Estos archivos contienen definiciones específicas del microcontrolador y del compilador que necesitamos para trabajar con el PIC16F877A.',
    'Definición de la rutina de manejo de interrupción (ISR)',
    'Se ha producido una interrupción externa en RB0/INT pin',
    'Limpiar la bandera de interrupción externa',
    'Finaliza el condicional',
    'Finaliza la rutina de manejo de interrupción',
    'Función principal main',
    'Configurar RB0/INT pin como entrada',
    'Interrupción en flanco de bajada',
    'Limpiar la bandera de interrupción externa',
    'Habilitar la interrupción externa',
    'Habilitar las interrupciones globales',
    'Después de configurar todo, el programa principal entra en un bucle infinito',
    'Puede realizar otras tareas o simplemente esperar a que ocurra la interrupción externa',
    'Finaliza el ciclo',
    'Finaliza la ejecución del programa',
    'Finaliza la función main',
  ];

  max_line2: number = this.LINE_CODE2.length;

  CODE3: string = `
  #include <avr/io.h>
  #include <avr/interrupt.h>
  void interrupt_handler() {
      // Tu código de manejo de interrupción aquí
  }
  int main() {
      DDRD &= ~(1 << PD2);
      EICRA |= (1 << ISC01) | (1 << ISC00);
      EIMSK |= (1 << INT0);
      sei();
      while (1) {
          // Tu código principal aquí
      }
      return 0;
  }
  `;

  LINE_CODE3: string[] = [
    '#include <avr/io.h>',
    '#include <avr/interrupt.h>',
    'void interrupt_handler() {',
    '// Tu código de manejo de interrupción aquí',
    '}',
    'int main() {',
    'DDRD &= ~(1 << PD2);',
    'EICRA |= (1 << ISC01) | (1 << ISC00);',
    'EIMSK |= (1 << INT0);',
    'sei();',
    'while (1) {',
    '// Tu código principal aquí',
    '}',
    'return 0;',
    '}',
  ];

  EXPLAIN3: string[] = [
    'Incluimos las bibliotecas necesarias para trabajar con microcontroladores AVR y manejar interrupciones.',
    'Incluimos las bibliotecas necesarias para trabajar con microcontroladores AVR y manejar interrupciones.',
    'Declaración de la función de interrupción',
    'Se ejecutará cuando ocurra la interrupción externa en el pin INT0.',
    'Finaliza la función interrupt_handler',
    'Se declara la función principal main()',
    'Configura el bit 2 de DDRD como entrada',
    'Configura la interrupción para que ocurra en cualquier cambio de nivel',
    'Habilitar la interrupción externa INT0',
    'Habilitar las interrupciones globales',
    'Esto crea un bucle infinito. La condición 1 es una expresión que siempre es verdadera',
    'Se indica que esta parte del código es donde debes colocar tu código principal',
    'Finaliza el ciclo while',
    'Esta línea es el punto final del programa',
    'Finaliza la función main',
  ];

  max_line3: number = this.LINE_CODE3.length;

  CODE4: string = `
  #include <stdio.h>
  #include <stdint.h>
  void UART_Init() {
      // Configura la velocidad de transmisión, el número de bits de datos, paridad, etc.
  }
  void UART_SendChar(char c) {
      // Implementa la lógica para enviar un carácter a través de la UART
  }
  void Debug_Print(const char *str) {
      while (*str) {
          UART_SendChar(*str);
          str++;
      }
  }
  int main() {
      UART_Init();
      uint32_t value = 42;
      Debug_Print("Valor de ejemplo: ");
      printf("%d\\n", value);
      while (1) {
          // Aquí puedes colocar tu código
      }
      return 0;
  }
  `;

  LINE_CODE4: string[] = [
    '#include <stdio.h>',
    '#include <stdint.h>',
    'void UART_Init() {',
    '// Configura la velocidad de transmisión, el número de bits de datos, paridad, etc.',
    '}',
    'void UART_SendChar(char c) {',
    '// Implementa la lógica para enviar un carácter a través de la UART',
    '}',
    'void Debug_Print(const char *str) {',
    'while (*str) {',
    'UART_SendChar(*str);',
    'str++;',
    '}',
    '}',
    'int main() {',
    'UART_Init();',
    'uint32_t value = 42;',
    'Debug_Print("Valor de ejemplo: ");',
    'printf("%d\n", value);',
    'while (1) {',
    '// Aquí puedes colocar tu código',
    '}',
    'return 0;',
    '}',
  ];

  EXPLAIN4: string[] = [
    'El código comienza incluyendo las cabeceras estándar stdio.h y stdint.h',
    'El código comienza incluyendo las cabeceras estándar stdio.h y stdint.h',
    'Esta función se utiliza para inicializar la UART (Universal Asynchronous Receiver/Transmitter)',
    'Dentro de esta función, debes configurar los registros de la UART según las especificaciones de tu microcontrolador.',
    'Finaliza la primera función',
    'Función para enviar un carácter a través de la UART',
    'La implementación de esta función dependerá de la configuración específica de la UART en tu microcontrolador.',
    'Finaliza la función UART_SendChar',
    'Esto define la función Debug_Print. Toma un argumento str, que es un puntero a una cadena de caracteres',
    'Este es un bucle while que se ejecuta mientras el valor al que apunta el puntero str no sea un carácter nulo',
    'Dentro del bucle, se llama a la función UART_SendChar para enviar el carácter al que apunta el puntero str a través de la UART',
    'Después de enviar el carácter actual, el puntero str se incrementa para apuntar al siguiente carácter en la cadena',
    'Finaliza el ciclo',
    'Finaliza la función Debug_Print',
    'Esta es la función principal de tu programa. Aquí se realiza la inicialización de la UART llamando a UART_Init()',
    'Inicializa la UART para la depuración',
    'Esta línea declara una variable llamada value como un entero sin signo de 32 bits (uint32_t) y le asigna el valor 42',
    'Esta línea llama a la función Debug_Print para imprimir la cadena de caracteres "Valor de ejemplo: "',
    'Esta línea utiliza la función printf para imprimir el valor de la variable value. %d se utiliza como formato de impresión para un entero con signo',
    'Esto crea un bucle infinito. La condición 1 es una expresión que siempre es verdadera',
    'Se indica que esta parte del código es donde debes colocar tu código principal',
    'Finaliza el ciclo while',
    'Esta línea es el punto final del programa',
    'Finaliza la función main',
  ];

  max_line4: number = this.LINE_CODE4.length;

  constructor() {}

  ngOnInit(): void {}
}
