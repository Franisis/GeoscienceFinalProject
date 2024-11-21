import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [NgFor, NgIf],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  questions = [
    {
      question: '¿Qué tipo de rocas predominan en el cerro de Monserrate?',
      options: ['Ígneas', 'Metamórficas', 'Sedimentarias', 'Volcánicas'],
      answer: 2
    },
    {
      question: '¿Cómo se formaron las rocas de Monserrate?',
      options: [
        'Por enfriamiento y solidificaición del magma.',
        'Por acumulación de sedimentos en el fondo de un mar cretácico',
        'Por procesos de erosión de un volcán antiguo',
        'Por actividad tectónica en una zona de subducción'
      ],
      answer:1
    },
    {
      question: '¿Por qué no es posible que existan rocas volcánicas en la Sabana de Bogotá?',
      options: [
        'Porque no hay mares en la sabana.',
        'Porque la región no tiene condiciones tectónicas ni magmáticas para producirlas.',
        'Porque las rocas volcánicas solo se encuentran en zonas costeras.',
        'Porque la Sabana de Bogotá tiene glaciares antiguos que lo impiden.',
      ],
      answer:1
    },
    {
      question: '¿Qué diferencia clave existe entre las rocas sedimentarias y las volcánicas?',
      options: [
        'Las sedimentarias se forman por acumulación de materiales; las volcánicas, por magma enfriado.',
        'Las sedimentarias contienen minerales; las volcánicas, no.',
        'Las sedimentarias son más antiguas que las volcánicas.',
        'Las sedimentarias solo se forman en montañas; las volcánicas, en volcanes.',
      ],
      answer:0
    },
    {
      question: '¿Cuál es una característica geológica única de Monserrate?',
      options: [
        'Tiene un cráter que se formó por erupciones.',
        'Se formó por el levantamiento tectónico de sedimentos de un mar antiguo.',
        'Está compuesto únicamente por roca metamórfica.',
        'Es parte de una cadena volcánica activa.',
      ],
      answer:1
    }
  ];

  selectedAnswers: number[] =[];

  checkAnswer(questionIndex: number, answerIndex: number) {
    this.selectedAnswers[questionIndex] = answerIndex;
  }

  isCorrect(questionIndex: number): boolean {
    return this.selectedAnswers[questionIndex] === this.questions[questionIndex].answer;
  }

}
