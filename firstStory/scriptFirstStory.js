var massAnswer = [];
var questions = ["Что бы вы не стали есть даже за деньги?", "Место в котором вы точно не хотите оказаться.", 
"Чем по мнению иностранцев целыми днями занимаются русские?", "Приятно видеть в женских руках…", "Какой вы любите чувствовать запах по утрам?", "Сколько вам лет?", "Как бы вы назвали людей с заработком ниже 10 000р.", 
"Какого мелкого питомца вы хотели бы завести?", "Назовите любое преступление.", "Как бы вы описали бомжей?(одним словом)", "Что нужно сказать человеку, чтобы затащить его в постель?", "Чем бы вы решили заняться, оставшись одни дома?", 
"Любая цитата Стэтхема."];
var countOfQuestions = 0;
// var result = "";
var textForHeadOfResult = "Поход в магазин";
var unredactedText = ["В тот день я как обычно", ", после чего я естественно проголодался и пошел на кухню посмотреть что можно перекусить, открыв холодильник я увидел что съесть я могу разве что",
 ", недолго думая я кинул кусочек в рот и отправился в магазин. Ближайший магазин называется «", "», туда я и проложил свой путь. Только выйдя из дома я сразу же увидел как люди", 
 ", меня это не смутило, ведь я сам делаю так каждый день. Дойдя до магазина я начал открывать двери, к которым какой-то шутник вместо дверной ручки приделал", ", зайдя внутрь я сразу почувствовал родной запах", 
 ", засунув руку поглубже в карман я достал оттуда", "рублей, немного расстроившись я все же решил поискать что я могу купить за эти деньги. Я подошел к стойке, на которой было написано «", 
 " only», я сразу понял что это мой вариант, но даже здесь мне хватало денег только на жареного", 
 ", но от одной мысли что я буду такое есть меня выворачивало, так что я решил взять ситуацию в свои руки. Я сказал охраннику что на улице опять", " и пока он пошел разбираться в ситуации я взял", 
 "пельмени и засунув их поглубже направился к выходу. В предвкушении королевской трапезы я отправился домой. Не пройдя и десяти шагов я услышал со спины дерзкое «", 
 "», это был охранник, по его глазам было видно что меня раскусили, но выхода не оставалось – я решил", ", как оказалось это было не то что нужно в данный момент и охранник пафосно кинув фразу «", 
 "», завершил её стремительным ударом с ноги. Очнувшись спустя несколько часов с утроенным чувством голода я отправился в магазин…"];
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
	//alert(mass);
	document.querySelector("#answer").value = "";
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