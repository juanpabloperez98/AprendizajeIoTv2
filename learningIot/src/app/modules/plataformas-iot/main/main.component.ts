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
  `const int botonAumentar = 2;
  const int botonDisminuir = 3;
  const int pinSenal = 13;
  void setup() {
    pinMode(botonAumentar, INPUT_PULLUP);
    pinMode(botonDisminuir, INPUT_PULLUP);
    pinMode(pinSenal, OUTPUT);
  }
  void loop() {
    if (digitalRead(botonAumentar) == LOW) {
      enviarSenal("AUMENTAR");
      delay(500);
    }
    if (digitalRead(botonDisminuir) == LOW) {
      enviarSenal("DISMINUIR");
      delay(500);
    }
  }
  void enviarSenal(String comando) {
    if (comando == "AUMENTAR") {
      digitalWrite(pinSenal, HIGH);
      delay(100);
      digitalWrite(pinSenal, LOW);
    } else if (comando == "DISMINUIR") {
      digitalWrite(pinSenal, HIGH);
      delay(200);
      digitalWrite(pinSenal, LOW);
    }
  }`;
  LINE_CODE1:string[]= [
    "const int botonAumentar = 2;",
    "const int botonDisminuir = 3;",
    "const int pinSenal = 13;",
    "void setup() {",
    "  pinMode(botonAumentar, INPUT_PULLUP);",
    "  pinMode(botonDisminuir, INPUT_PULLUP);",
    "  pinMode(pinSenal, OUTPUT);",
    "}",
    "void loop() {",
    "  if (digitalRead(botonAumentar) == LOW) {",
    "    enviarSenal('AUMENTAR');",
    "    delay(500);",
    "  }",
    "  if (digitalRead(botonDisminuir) == LOW) {",
    "    enviarSenal('DISMINUIR');",
    "    delay(500);",
    "  }",
    "}",
    "void enviarSenal(String comando) {",
    "  if (comando == 'AUMENTAR') {",
    "    digitalWrite(pinSenal, HIGH);",
    "    delay(100);",
    "    digitalWrite(pinSenal, LOW);",
    "  } else if (comando == 'DISMINUIR') {",
    "    digitalWrite(pinSenal, HIGH);",
    "    delay(200);",
    "    digitalWrite(pinSenal, LOW);",
    "  }",
    "}",
  ];
  top:number = 16;
  explain1:string[] = [
    "Define el pin 2 del Arduino como el pin para el botón 'Aumentar'.",
    "Define el pin 3 del Arduino como el pin para el botón 'Disminuir'.",
    "Define el pin 13 del Arduino, que probablemente sea un LED o un pin de señalización.",
    "Inicio de la función setup() que se ejecuta una vez al arrancar el Arduino.",
    "Configura el pin 2 como entrada con resistencia pull-up interna activada.",
    "Configura el pin 3 de la misma manera que el pin 2.",
    "Configura el pin 13 como salida.",
    "Finaliza la función setup().",
    "Inicio de la función loop() que se ejecuta repetidamente.",
    "Comprueba si el botón 'Aumentar' está presionado.",
    "Si está presionado, se llama a la función enviarSenal con el argumento 'AUMENTAR'.",
    "Espera 500 milisegundos (0.5 segundos).",
    "Finaliza la condición if.",
    "Comprueba si el botón 'Disminuir' está presionado.",
    "Si está presionado, se llama a la función enviarSenal con el argumento 'DISMINUIR'.",
    "Espera 500 milisegundos (0.5 segundos).",
    "Finaliza la condición if.",
    "Finaliza la función loop().",
    "Inicio de la función enviarSenal que toma una cadena (String) como argumento.",
    "Comprueba si el argumento es 'AUMENTAR'.",
    "Si es 'AUMENTAR', activa (HIGH) el pin 13.",
    "Espera 100 milisegundos (0.1 segundos).",
    "Desactiva (LOW) el pin 13.",
    "Finaliza la condición if y Comprueba si el argumento es 'DISMINUIR'.",
    "Si es 'DISMINUIR', activa (HIGH) el pin 13.",
    "Espera 200 milisegundos (0.2 segundos).",
    "Desactiva (LOW) el pin 13.",
    "Finaliza la condición else if.",
    "Finaliza la función enviarSenal.",
  ];
  max_line1:number = 29;

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
