const text = document.querySelector('.content p');
const autor = document.querySelector('.content #autor');

const button = document.querySelector('#button')


const quotes = [
    {
      quote:
        "Há sempre alguma loucura no amor. Mas há sempre um pouco de razão na loucura.",
      author: " Friedrich Wilhelm Nietzsche"
    },
    {
      quote:
        "O amor revela as qualidades sublimes e ocultas do que ama, - o que nele há de raro, de excepcional: nesse aspecto facilmente engana quanto ao que nele há de habitual.",
      author: "Friedrich Wilhelm Nietzsche"
    },
    {
      quote:
        "Não vos aconselho o trabalho, mas a luta. Não vos aconselho a paz, mas a vitória! Seja o vosso trabalho uma luta! Seja a vossa paz uma vitória!",
      author: "Friedrich Wilhelm Nietzsche "
    },
    {
      quote: "Amar os outros é a única salvação individual que conheço: ninguém estará perdido se der amor e às vezes receber amor em troca.",
      author: "Clarice Lispector"
    },
    {
      quote:
        "E ninguém é eu, e ninguém é você. Esta é a solidão. ",
      author: "Clarice Lispector"
    },
    {
      quote:
        "Há momentos na vida em que sentimos tanto a falta de alguém que o que mais queremos é tirar essa pessoa de nossos sonhos e abraçá-la.",
      author: " Clarice Lispector"
    },
    {
      quote:
        "Não vos preocupeis com o dia de amanhã, pois o dia de amanhã preocupar-se-à consigo mesmo. A cada dia basta o seu mal.",
      author: "Evangelho de Mateus 6,34"
    },
    {
      quote:
        "Nada há de encoberto que não venha a ser descoberto, nem de oculto que não venha a ser revelado.",
      author: "Evangelho de Mateus 10,26"
    },
    {
      quote:
        "Não amemos de palavras nem de língua, mas por acções e em verdade.",
      author: "1ª de São João"
    },
    {
      quote:
        "Quem semeia a injustiça colherá a desgraça.",
      author: "Eclesiástico 13,3"
    },
    {
      quote:
        "O rico comete uma injustiça e ainda se mostra altivo; o pobre é injustiçado e ainda precisa de se desculpar.",
      author: "Eclesiástico 13,3"
    }

  ];

  const quotesAplication = ()=>{
      let randon = Math.floor(Math.random()*quotes.length)
      text.textContent = quotes[randon].quote;
      autor.textContent= quotes[randon].author;
  }

  button.addEventListener('click',quotesAplication);