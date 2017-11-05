var massAnswer = [];
var questions = ["Уважаемая личность.", "Действие, которым можно отпугнуть любого хищника.", 
"Отличное средство(поведение) в борьбе с тупыми людьми.", "Куда бегут люди?", "Чего точно нельзя капать в глаза?", "Ваш ответ цыгану, который попросит вас закрыть глаза на пару секунд.", "Какой ультиматум можно поставить своей девушке?", 
"Если посмотреть на вашу жизнь и ваши действия 7 лет назад, как бы вы себя охарактеризовали?", "Назовите предмет, с которым вас связывает незабываемый опыт.", "Назовите вещь, без которой не обойтись в холодную погоду.", "Твердый предмет, который вы можете поместить у себя в руке.", "Каким видом деятельности вы бы стали больше заниматься, если бы вернулись в прошлое?", 
"Представьте что вы главный герой крутого фильма, какая бы у вас была пафосная фраза?"];
var countOfQuestions = 0;
// var result = "";
var textForHeadOfResult = "Социальные связи";
var unredactedText = ["Все уже было готово, мышка передвинута на левую часть коврика, упаковка салфеток на столе и сайт на заднем фоне, контент которого уже перестал радовать, как раньше. Не успев начать мне на весь экран вылезла реклама «", "с друзьями всего за 100р.», вспомнив что у меня нет друзей, я решил это исправить. Не зная с чего начать я искал совета, никого лучше, чем задрота который называл себя ",
 "я не нашел. Он посоветовал мне ", "и тогда все будут без ума от меня. Опробовав его совет на практике я замечал лишь ", 
 "со стороны людей. Не отчаиваясь я пошел ", ", где неожиданно для себя я нашел приятного парня, который просил прохожего продать ему ", 
 ". Подождав пока его отпустит я включив свое обаяние на максимум сказал «", "», мы сразу нашли общий язык и он пригласил меня к себе на ужин. Оказалось, он живет не один, следя за своими манерами я поприветствовал его маму фразой «", 
 "», в ответ я услышал «", 
 "». Стульев в этом доме не было, но зато свободная ", "нашлась, на неё я и сел. Увидев что у них в доме есть ", 
 "я позабыл о том что хотел завести новых друзей и взяв нужную мне вещь побежал к выходу, почувствовав неприятную боль от тупого удара по голове я распластался на полу, это был", 
 "прилетевший мне в затылок. Грозясь мне ", "они спросили мои последние слова, ни о чем не жалея я на последнем вздохе прохрипел «", "»."];
var textForContentOfResult = function() {
	for(var i = 0; i < unredactedText.length; i++) {
		if(massAnswer[i]==undefined) {
			massAnswer[i] = "";
		}
		unredactedText[i] += " " + massAnswer[i];
	}

	var text = unredactedText.join(" ");
	return text;
}

document.querySelector("#nextButton").onclick = function() {
	if(document.querySelector("#answer").value == "") {
		return;
	}
	massAnswer.push(document.querySelector("#answer").value);
	document.querySelector("#answer").value = "";
	document.querySelector("#answer").focus();
	document.querySelector("#directQuestion").textContent = questions[countOfQuestions];
	countOfQuestions++;
	document.querySelector("#numberOfQuestion").textContent = "Вопрос " + (countOfQuestions+1) + "/"+(questions.length+1);
	if(countOfQuestions>questions.length) {
		endOfTheGame();
	}
}

function endOfTheGame() {
	document.querySelector(".question").classList.add("invis");
	document.querySelector(".result").classList.remove("invis");
	document.querySelector("#resultHead").textContent = textForHeadOfResult;
	document.querySelector("#resultContent").textContent = textForContentOfResult();
}