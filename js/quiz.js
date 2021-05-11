(function(){
    
    function buildQuiz(){
      
      const output = [];
  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          
          const answers = [];
  
          
          for(letter in currentQuestion.answers){
  
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
          
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "2. Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "3. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "4. How many tags in a regular element?",
        answers: {
          a: "2",
          b: "1",
          c: "3",
          d: "0"
        },
        correctAnswer: "a"
      },
      {
        question: "5. What is an element that does not have a closing tag called?",
        answers: {
            a:"Tag",                                b:"Empty element",
            c:"Closed element",                     d:"None of these",
        },
        correctAnswer: "b"
      },
      {
        question: "6. what is the difference in an opening tag and a closing tag",
        answers: {
          a: "opening tag has a / in front ",
          b: "Closing tag has a / in front",
          c: "There is no difference",
          d: "both a and b are  correct"
        },
        correctAnswer: "b"
      },
      {
        question: "7. where is the meta tag only found?",
        answers: {
            a:"The last page",                      b:"The home page",
            c:"The second page",                    d:"None of these",
            
        },
        correctAnswer: "b"
      },
      {
        question: "8. What does CSS stand for?",
        answers: {
          a:  "Cascading Style Sheet", 
          b:  "Complex Style Syntax",
          c:  "Complete Sound Sheet",
        },
        correctAnswer: "a"
      },
      {
        question: "9. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
  
      {
        question: "10. Where is the correct place to insert a JavaScript?",
        answers: {
            a:"Both the <head> section and the <body> section are correct",  
            b:"The <head> section",
            c:"The <body> section",
            
        },
        correctAnswer: "a"
      },

      {
        question: "11. How do you create a function in JavaScript?",
        answers: {
          a: "function myFunction()",      
          b: "function = myFunction()",
          c: "function:myFunction()",
        },
        correctAnswer: "a"
      },
    
      {
        question: "12. Is JavaScript case-sensitive??",
        answers: {
          a: "yes",
          b: "no",
          
        },
        correctAnswer: "d"
      },
      {
        question: "13. Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: {
          a: "In the <body> section",
          b:"In the <head> section",  
          c:"At the end of the document",
          
        },
        correctAnswer: "b"
      },
      {
        question: "14. Choose the correct HTML element to define important text",
        answers: {
          a: "<i>",
          b:"<important>",
          c:"<b>",
          d:"<strong>",
        },
        correctAnswer: "d"
      },
      {
        question: "15. Which tool can you use to ensure code quality?",
        answers: {
          a: "{body;color:black;}",
          b:"body:color=black;",
          c:"{body:color=black;}",
          d:"body {color: black;}",
        },
        correctAnswer: "d"
      },
    ];
  
    
    buildQuiz();
  
    
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    
    showSlide(currentSlide);
  
    
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  


  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  


