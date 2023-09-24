import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  CODE: string = `
  datos = []
  while True:
      entrada = input("Ingrese un dato (o escriba 'salir' para terminar): ")      
      if entrada.lower() == 'salir':
          break      
      datos.append(entrada)
  print("Datos recopilados:")
  for dato in datos:
      print(dato)
  `;

  LINE_CODE: string[] = [
    'datos = []',
    'while True:',
    'entrada = input("Ingrese un dato (o escriba `salir` para terminar): ")',
    "if entrada.lower() == 'salir':",
    'break',
    'datos.append(entrada)',
    'print("Datos recopilados:")',
    'for dato in datos:',
    'print(dato)',
  ];

  EXPLAIN: string[] = [
    'En esta línea, se crea una lista vacía llamada datos. Esta lista se utilizará para almacenar los datos que el usuario ingresará más adelante.',
    'Solicitar al usuario que ingrese datos hasta que decida salir',
    'En esta línea, se utiliza la función input para mostrar un mensaje al usuario ("Ingrese un dato (o escriba `salir` para terminar): ") y esperar a que el usuario ingrese algo',
    'Comprobar si el usuario quiere salir',
    'Se utiliza la declaración break para salir del bucle while, lo que detendrá la recopilación de datos.',
    'Si el usuario no ha decidido salir, la entrada del usuario se agrega a la lista datos utilizando el método append()',
    'Mostrar los datos recopilados',
    'Se utiliza un bucle for para iterar a través de la lista datos',
    'Mostrar cada dato en la pantalla. Esto presenta los datos recopilados al usuario.',
  ];

  max_line: number = this.LINE_CODE.length;

  top: number = 16;

  CODE1: string = `
  import pandas as pd
  data = {'Nombre': ['Juan', 'María', 'Pedro', 'Luis', 'Ana', 'Ana'],
          'Edad': [25, 30, None, 35, 28, 28],
          'Puntuación': [85, 92, 88, 75, None, 95]}
  df = pd.DataFrame(data)
  print("DataFrame Original:")
  print(df)
  df = df.dropna()
  df = df.drop_duplicates()
  print("\\nDataFrame Limpio:")
  print(df)
  `;

  LINE_CODE1: string[] = [
    'import pandas as pd',
    "data = {'Nombre': ['Juan', 'María', 'Pedro', 'Luis', 'Ana', 'Ana'],",
    "'Edad': [25, 30, None, 35, 28, 28],",
    "'Puntuación': [85, 92, 88, 75, None, 95]}",
    'df = pd.DataFrame(data)',
    'print("DataFrame Original:")',
    'print(df)',
    'df = df.dropna()',
    'df = df.drop_duplicates()',
    'print("\\nDataFrame Limpio:")',
    'print(df)',
  ];

  EXPLAIN1: string[] = [
    'Importamos la biblioteca pandas con el alias pd. Pandas es una poderosa biblioteca de Python para manipulación y análisis de datos.',
    'En esta sección, creamos un DataFrame llamado df a partir de un diccionario de datos data',
    'Columna llamada Nombre con sus respectivos valores',
    'Columna llamada Edad con sus respectivos valores',
    'Columna llamada Puntuación con sus respectivos valores',
    'En esta línea, estamos utilizando la función pd.DataFrame() de la biblioteca pandas para crear un DataFrame a partir de los datos en el diccionario data.',
    'utilizamos la función print() para mostrar en la consola el DataFrame original',
    'df. Esto nos permite ver cómo se ve el DataFrame antes de realizar la limpieza de datos.',
    'Eliminar filas con valores nulos',
    'Con esta línea, aplicamos el método dropna() al DataFrame df',
    'Aquí, aplicamos el método drop_duplicates() al DataFrame df',
    'Finalmente, usamos la función print() nuevamente para mostrar en la consola el DataFrame limpio ',
    'df. Después de realizar la limpieza de datos, este DataFrame solo contendrá filas únicas y sin valores nulos.',
  ];

  max_line1: number = this.LINE_CODE1.length;

  CODE2: string = `
  import pandas as pd
  data = pd.read_csv('data.csv')
  print(data.head())
  print(data.info())
  print(data.describe())
  print(data['columna'].nunique())
  filtro = data['columna'] > 5
  datos_filtrados = data[filtro]
  media = data['columna'].mean()
  print(f"Media: {media}")
  import matplotlib.pyplot as plt
  data['columna'].plot.hist()
  plt.xlabel('Nombre de la columna')
  plt.ylabel('Frecuencia')
  plt.show()
`;

  LINE_CODE2: string[] = [
    'import pandas as pd',
    "data = pd.read_csv('data.csv')",
    'print(data.head())',
    'print(data.info())',
    'print(data.describe())',
    "print(data['columna'].nunique())",
    "filtro = data['columna'] > 5",
    'datos_filtrados = data[filtro]',
    "media = data['columna'].mean()",
    'print(f"Media: {media}")',
    'import matplotlib.pyplot as plt',
    "data['columna'].plot.hist()",
    "plt.xlabel('Nombre de la columna')",
    "plt.ylabel('Frecuencia')",
    'plt.show()',
  ];

  EXPLAIN2: string[] = [
    'Importamos la biblioteca pandas como "pd". Pandas es una poderosa biblioteca de Python para el análisis y manipulación de datos.',
    "Cargamos un conjunto de datos desde un archivo CSV llamado 'data.csv' utilizando la función read_csv de pandas",
    'Imprimimos las primeras filas del DataFrame "data" utilizando el método head()',
    'Utilizamos el método info() para obtener información básica sobre el conjunto de datos, como el número de filas, el número de columnas, los tipos de datos en cada columna y si hay valores nulos',
    'Utilizamos el método describe() para calcular estadísticas descriptivas para todas las columnas numéricas en el conjunto de datos',
    "Usamos el método nunique() para contar los valores únicos en una columna específica llamada 'columna'.",
    "Creamos un filtro booleano que selecciona las filas donde los valores en la columna 'columna' son mayores que 5",
    'Creamos un nuevo DataFrame llamado "datos_filtrados" que contiene solo las filas que cumplen con esta condición.',
    "Calculamos la media de la columna 'columna' utilizando el método mean()",
    'La almacenamos en la variable "media". Luego, imprimimos la media en la consola.',
    'Importamos la biblioteca Matplotlib y la renombramos como "plt". Matplotlib es una biblioteca de visualización en Python que permite crear gráficos y visualizaciones de datos.',
    "Utilizamos el DataFrame 'data' para acceder a una columna específica llamada 'columna' y luego llamamos al método plot.hist() en esa columna",
    "Usamos plt.xlabel() para establecer una etiqueta en el eje x del gráfico. En este caso, la etiqueta se establece como 'Nombre de la columna', lo que ayuda a identificar qué representa el eje x en el histograma.",
    "Usamos plt.ylabel() para establecer una etiqueta en el eje y del gráfico. En este caso, la etiqueta se establece como 'Frecuencia'",
    'Finalmente, utilizamos plt.show() para mostrar la visualización en una ventana gráfica. Esta función es necesaria para que el histograma se muestre en la pantalla',
  ];

  max_line2: number = this.LINE_CODE2.length;

  CODE3: string = `
  import numpy as np
  datos = [12, 15, 17, 20, 22, 25, 28, 30]
  media = np.mean(datos)
  print(f"Media: {media}")
  mediana = np.median(datos)
  print(f"Mediana: {mediana}")
  desviacion_estandar = np.std(datos)
  print(f"Desviación Estándar: {desviacion_estandar}")
  `;

  LINE_CODE3: string[] = [
    'import numpy as np',
    'datos = [12, 15, 17, 20, 22, 25, 28, 30]',
    'media = np.mean(datos)',
    'print(f"Media: {media}")',
    'mediana = np.median(datos)',
    'print(f"Mediana: {mediana}")',
    'desviacion_estandar = np.std(datos)',
    'print(f"Desviación Estándar: {desviacion_estandar}")',
  ];

  EXPLAIN3: string[] = [
    'Esta línea importa la biblioteca NumPy bajo el alias "np"',
    'En esta línea, se crea una lista llamada "datos" que contiene una serie de números.',
    'Esta línea utiliza la función np.mean() de NumPy para calcular la media de los datos en la lista "datos".',
    'Aquí se imprime la media calculada en la línea anterior utilizando la función print(). Se utiliza una f-string',
    'Esta línea utiliza la función np.median() de NumPy para calcular la mediana de los datos en la lista "datos"',
    'Al igual que en el caso de la media, esta línea imprime la mediana calculada junto con un texto descriptivo.',
    'Esta línea utiliza la función np.std() de NumPy para calcular la desviación estándar de los datos en la lista "datos"',
    'Por último, esta línea imprime la desviación estándar calculada junto con un texto descriptivo.',
  ];

  max_line3: number = this.LINE_CODE3.length;

  CODE4: string = `
  datos = [45, 62, 78, 92, 53, 67, 88, 72, 95, 60]
  promedio = sum(datos) / len(datos)
  umbral = 70
  if promedio > umbral:
      print(f"El promedio ({promedio}) está por encima del umbral ({umbral}).")
  elif promedio < umbral:
      print(f"El promedio ({promedio}) está por debajo del umbral ({umbral}).")
  else:
      print(f"El promedio ({promedio}) es igual al umbral ({umbral}).")
  `;

  LINE_CODE4: string[] = [
    'datos = [45, 62, 78, 92, 53, 67, 88, 72, 95, 60]',
    'promedio = sum(datos) / len(datos)',
    'umbral = 70',
    'if promedio > umbral:',
    'print(f"El promedio ({promedio}) está por encima del umbral ({umbral}).")',
    'elif promedio < umbral:',
    'print(f"El promedio ({promedio}) está por debajo del umbral ({umbral}).")',
    'else:',
    'print(f"El promedio ({promedio}) es igual al umbral ({umbral}).")',
  ];

  EXPLAIN4: string[] = [
    'En esta línea, estamos creando una lista llamada "datos" que contiene un conjunto de números. Estos son los datos con los que trabajaremos en este ejemplo',
    'En esta línea, calculamos el promedio de los datos. Utilizamos la función sum(datos) para sumar todos los valores en la lista y luego dividimos la suma por la longitud de la lista utilizando len(datos)',
    'Aquí definimos un valor umbral, que es un número que usaremos para comparar con el promedio. En este caso, el umbral se establece en 70',
    'Si el promedio es mayor que el umbral, se imprimirá un mensaje indicando que el promedio está por encima del umbral.',
    'Se imprime el texto indidcando el promedio es mayor que el umbral',
    'Si el promedio es menor que el umbral, se imprimirá un mensaje indicando que el promedio está por debajo del umbral.',
    'Se imprime el texto indidcando el promedio es menor que el umbral',
    'Si el promedio es igual al umbral, se imprimirá un mensaje indicando que el promedio es igual al umbral.',
    'Se imprime el texto indidcando el promedio es igual al umbral',
  ];

  max_line4: number = this.LINE_CODE4.length;

  constructor() {}

  ngOnInit(): void {}
}
