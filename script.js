// var massAnswer = [];
// var questions = [];
// var countOfQuestions = 0;
// var result = "";
// var textForHeadOfResult = "Заголовок";
// var unredactedText = ["Начало ", "Продолжение ", "Конец ", "Должно быть ", "Пять "];
// var textForContentOfResult = function() {
// 	for(var i = 0; i < unredactedText.length; i++) {
// 		unredactedText[i] += " " + massAnswer[i];
// 	}

// 	var text = unredactedText.join(" ");
// 	return text;
// }

// // document.querySelector(".start.gameOneButton").onclick = function() {
// // 	var hide = document.querySelector(".games");
// // 	hide.classList.add("invis");
// // 	var game = document.querySelector(".gameOne");
// // 	game.classList.remove("invis");
// // 	questions = ["Второй вопрос", "Третий вопрос", "Четвертый вопрос", "Пятый вопрос"];
// // }

// // document.querySelector(".start.gameTwoButton").onclick = function() {
// // 	var hide = document.querySelector(".games");
// // 	hide.classList.add("invis");
// // 	var game = document.querySelector(".gameTwo");
// // 	game.classList.remove("invis");
// // }

// // document.querySelector(".start.gameThreeButton").onclick = function() {
// // 	var hide = document.querySelector(".games");
// // 	hide.classList.add("invis");
// // 	var game = document.querySelector(".gameThree");
// // 	game.classList.remove("invis");
// // }

// document.querySelector("#nextButton").onclick = function() {
// 	if(document.querySelector("#answer").value == "") {
// 		return;
// 	}
// 	massAnswer.push(document.querySelector("#answer").value);
// 	//alert(mass);
// 	document.querySelector("#answer").value = "";
// 	document.querySelector("#directQuestion").textContent = questions[countOfQuestions];
// 	countOfQuestions++;
// 	document.querySelector("#numberOfQuestion").textContent = "Вопрос " + (countOfQuestions+1) + "/"+(questions.length+1);
// 	if(countOfQuestions>questions.length) {
// 		endOfTheGame();
// 	}
// }

// function endOfTheGame() {
// 	document.querySelector(".question").classList.add("invis");
// 	document.querySelector(".result").classList.remove("invis");
// 	document.querySelector("#resultHead").textContent = textForHeadOfResult;
// 	document.querySelector("#resultContent").textContent = textForContentOfResult();
// }