import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  // CODIGO 1
  CODE1:string = `int SensorPin = A0;
  void setup() {
      Serial.begin(9600);
  }
  void loop() {
      int humedad = analogRead(SensorPin);
      Serial.println(humedad);
      delay(1000);
  }`
  top1:number = 16;
  explain1:string[] = [
    "Linea1",
    "Linea2",
    "Linea3",
    "Linea4",
    "Linea5",
    "Linea6",
    "Linea7",
    "Linea8",
    "Linea9",
  ];
  max_line1:number = 9;


  // CODIGO 2
  CODE2:string = `#include SoftwareSerial.h
  SoftwareSerial BT1(10, 11);
  void setup(){
      pinMode(8, OUTPUT);
      pinMode(9, OUTPUT);
      digitalWrite(9, HIGH);
      delay (500) ;
      Serial.begin(9600);
      Serial.println("Levantando el modulo HC-06");
      digitalWrite (8, HIGH);
      Serial.println("Esperando comandos AT:");
      BT1.begin(38400);
      }
      void loop(){
      if (BT1.available())
          Serial.write(BT1.read());
      if (Serial.available())
          BT1.write(Serial.read());
      }`
  top2:number = 16;
  explain2:string[] = [
    "Linea1",
    "Linea2",
    "Linea3",
    "Linea4",
    "Linea5",
    "Linea6",
    "Linea7",
    "Linea8",
    "Linea9",
    "Linea10",
    "Linea11",
    "Linea12",
    "Linea13",
    "Linea14",
    "Linea15",
    "Linea16",
    "Linea17",
    "Linea18",
    "Linea19",
  ];
  max_line2:number = 19;


  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
