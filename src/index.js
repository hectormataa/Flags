import axios from "axios"; //axios es similar a requests(callbacks), axios usa promesas
import Trivia from './trivia'
import "./styles/main.scss";


let URL = "https://opentdb.com/api.php?amount=10";
let category = document.getElementById("trivia_category");
let difficulty = document.getElementById("trivia_difficulty");
let type = document.getElementById("trivia_type");
let categoryURL = "";
let difficultyURL = "";
let typeURL = "";
let newURL = "";

function getURL() {
    if (category.value !== "any") {
        categoryURL = `&category=${category.value}`;
    }
    if (difficulty.value !== "any") {
        difficultyURL = `&difficulty=${difficulty.value}`;
    }
    if (type.value !== "any") {
        typeURL = `&type=${type.value}`;
    }

    return (newURL = `${URL}${categoryURL}${difficultyURL}${typeURL}`,
    console.log(newURL))
}


begin.addEventListener("click", (event) => {
    console.log("Le di click");
    event.preventDefault();

    getURL();

    function init() {
        //aqui voy hacer la llamada a la API por los datos
        axios.get(newURL)
            .then((response) => {
                console.log(response.status)
                console.log(response.data)
                const trivia = new Trivia(response.data)
                trivia.start()
            }).catch((error) => {
                console.log("Error:", error);
                return error;
            });

    }
    init();
});
