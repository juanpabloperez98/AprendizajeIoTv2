import { QuestionData } from '../interfaces/question.interface';

export const QUESTION_DATA: QuestionData[] = [
  {
    title: '¿Cuáles son las etapas comunes en el proceso de análisis de datos?',
    listQuestion: [
      {
        control: 'collect1',
        text: 'Recopilación de datos',
        isTrue: true,
      },
      {
        control: 'interpret1',
        text: 'Interpretación de resultados',
      },
      {
        control: 'communication1',
        text: 'Comunicación y presentación',
        isTrue: true,
      },
      {
        control: 'techniques1',
        text: 'Selección de técnicas de análisis',
      },
    ],
  },
  {
    title: '¿Cuáles son los posibles métodos de preprocesamiento de datos?',
    listQuestion: [
      {
        control: 'normalization2',
        text: 'Normalización de datos',
        isTrue: true,
      },
      {
        control: 'cleaning2',
        text: 'Eliminación de valores atípicos',
        isTrue: true,
      },
      {
        control: 'aggregation2',
        text: 'Agregación de datos',
      },
      {
        control: 'imputation2',
        text: 'Imputación de datos faltantes',
        isTrue: true,
      },
    ],
  },
  {
    title:
      '¿Cuáles son algunas fuentes comunes de datos en el análisis de datos?',
    listQuestion: [
      {
        control: 'surveys3',
        text: 'Encuestas',
        isTrue: true,
      },
      {
        control: 'regression3',
        text: 'Regresión lineal',
      },
      {
        control: 'experiments3',
        text: 'Experimentos de laboratorio',
      },
      {
        control: 'sensors3',
        text: 'Sensores IoT',
        isTrue: true,
      },
    ],
  },
  {
    title:
      '¿Cuál es el objetivo principal del análisis exploratorio de datos (EDA)?',
    listQuestion: [
      {
        control: 'generate4',
        text: 'Generar modelos predictivos',
      },
      {
        control: 'identify4',
        text: 'Identificar patrones y tendencias',
        isTrue: true,
      },
      {
        control: 'submit4',
        text: 'Presentar los resultados finales',
      },
      {
        control: 'decisions4',
        text: 'Tomar decisiones finales',
      },
    ],
  },
  {
    title:
      '¿Cuáles son posibles técnicas de análisis utilizadas en el análisis de datos?',
    listQuestion: [
      {
        control: 'regression5',
        text: 'Regresión lineal',
        isTrue: true,
      },
      {
        control: 'clustering5',
        text: 'Clustering',
        isTrue: true,
      },
      {
        control: 'cooking5',
        text: 'Cocinar una receta',
      },
      {
        control: 'paint5',
        text: 'Pintar un cuadro',
      },
    ],
  },
  // {
  //   title: '',
  //   listQuestion: [
  //     {
  //       control: '',
  //       text: '',
  //     },
  //     {
  //       control: '',
  //       text: '',
  //     },
  //     {
  //       control: '',
  //       text: '',
  //     },
  //     {
  //       control: '',
  //       text: '',
  //     },
  //   ],
  // },
];
