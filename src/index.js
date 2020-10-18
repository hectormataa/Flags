import axios from "axios"; //axios es similar a requests(callbacks), axios usa promesas
//import Trivia from './trivia'
import "./styles/main.scss";

let category = document.getElementById("trivia_category");
let difficulty = document.getElementById("trivia_difficulty");
let type = document.getElementById("trivia_type");
let begin = document.getElementById("begin");
let URL = "https://opentdb.com/api.php?amount=10";
let newURL = "";

begin.addEventListener("click", () => {
  console.log("Le di click");

  let categoryURL = "";
  let difficultyURL = "";
  let typeURL = "";

  if (category.value !== "any") {
    categoryURL = `&category=${category.value}`;
  } 
  if (difficulty.value !== "any") {
    difficultyURL = `&difficulty=${difficulty.value}`;
  }
  if (type.value !== "any") {
    typeURL = `&type=${type.value}`;
  }

    return newURL = `${URL}${categoryURL}${difficultyURL}${typeURL}`;
  
    console.log(newURL);

 console.log(category.value);
 console.log(difficulty.value);
 console.log(type.value);


  //https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple

});



