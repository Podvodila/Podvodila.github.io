var animeStarts = document.querySelectorAll(".start");
var playBlock = document.querySelector(".animeText");
var defaultText = playBlock.querySelector("#reviewText");
var defaultReviewer = playBlock.querySelector("#reviewCompany");
var countOfChange = 0;
var arrayText = ['"БУДОРАЖИТ СОЗНАНИЕ"', '"РАБОТА ГЕНИАЛЬНОГО СЦЕНАРИСТА"', '"ПОРАЗИТЕЛЬНО"', '"НЕОПИСУЕМО"', '"ЧУВСТВУЕТСЯ РУКА МАСТЕРА"', '"ИЗУМИТЕЛЬНО"', '"НЕЗАБЫВАЕМО"', '"МУРАШКИ ПО КОЖЕ"', '"НЕВОЗМОЖНО ОТОРВАТЬСЯ"', '"НЕ ПЕРЕДАТЬ СЛОВАМИ"'];
var arrayReviewer = ["-The Guardian", "-Christopher Nolan", "-The Telegraph", "-Arnold Schwarzenegger", "-The Independent", "-Jason Statham", "-Forbes", "-Sylvester Stallone", "-The New York Times", "-Немой мальчик"];

for (var i = 0; i < animeStarts.length; i++) {
	animeStarts[i].onmouseenter = function() {
		playBlock.style.animationPlayState = "running";
		playBlock.style.opacity = "100";
	}

	animeStarts[i].onmouseleave = function() {
		playBlock.style.animationPlayState = "";
		playBlock.style.opacity = "0";
	}
}

function sooqa() {
	if(countOfChange>=arrayText.length) countOfChange = 0;
	defaultText.textContent = arrayText[countOfChange];
	defaultReviewer.textContent = arrayReviewer[countOfChange];
	countOfChange++;
}

playBlock.addEventListener("animationiteration", sooqa, false);