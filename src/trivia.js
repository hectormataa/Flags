class Trivia {
    constructor(questions) {
        this.questions = questions;
        this.question = "";
        this.correctAnswer = "";
        this.score = 0;
    }

    
    getCorrectAnswer() {
        return this.correctAnswer = this.questions.results[0].correct_answer
    }

    start() {
        const respuesta = document.querySelector()
        const pregunta = document.getElementById('pregunta');
        pregunta.innerHTML = this.questions.results[0].question;
    }

}

export default Trivia;