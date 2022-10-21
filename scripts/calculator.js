"use strict";

window.onload = init;

function init()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const Add = document.getElementById("addBtn");
    const Subtraction = document.getElementById("subBtn");
    const Multiplication = document.getElementById("multBtn");
    const Divide = document.getElementById("diviBtn");

    addBtn.onclick = addBtnOnClick;
    subtBtn.onclick = subtBtnOnClick;
    multBtn.onclick = multBtnOnClick;
    diviBtn.onclick = diviBtnOnClick;
}
function addBtnOnClick() 
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 + num2;

    const answerField = document.getElementById("answerField");

    answerField.value = answer;

}

function subtBtnOnClick() 
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 - num2;

    const answerField = document.getElementById("answerField");

    answerField.value = answer;

}

function multBtnOnClick() 
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 * num2;

    const answerField = document.getElementById("answerField");

    answerField.value = answer;

}

function diviBtnOnClick() 
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 / num2;

    const answerField = document.getElementById("answerField");

    answerField.value = answer;

}