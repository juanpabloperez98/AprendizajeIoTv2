import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
