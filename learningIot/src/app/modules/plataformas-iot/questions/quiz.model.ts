export interface Question {
  sentence: string; // Frase con espacios en blanco, representados por un "__".
  options: string[]; // Opciones que el usuario puede seleccionar.
  correctAnswerIndex: number; // El índice de la respuesta correcta dentro de "options".
  correct: boolean; // Verifica si fue marcada correcta
}
