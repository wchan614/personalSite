const progressTime = 100;
let Game = {
	number: 0,
	score: 0,
	strikes: 0,
	correct: 0,
	delay: 0,
	inverval: 0,
	time: 0,
}

function gameover() {
	document.getElementById("gameDiv").classList.add("d-none");
	document.getElementById("gameoverDiv").classList.remove("d-none");

	document.getElementById("gameoverScore").innerText = "Your score was " + Game.score;
	document.getElementById("gameScore").value = Game.score;
}

function pickNumber() {
	let digits = 3 + Math.floor( Game.correct / 2 );

	let min = 10 ** (digits - 1)
	let max = (10 ** digits) - 1
	Game.number = Math.floor( Math.random() * (max - min) + min );

	showNumber(digits);
}

function showNumber() {
	document.getElementById("rememberDiv").classList.remove("d-none");
	document.getElementById("inputDiv").classList.add("d-none");

	document.getElementById("rememberNumber").innerText = Game.number;

	let digits = 3 + Math.floor( Game.correct / 2 );
	Game.delay = (150 * (digits - 3) ) + 2200 + (1000 * Game.strikes);
	Game.time = 0;

	document.getElementById("progress").style.width = "0%";
	Game.interval = window.setInterval(updateProgress, progressTime);
}

function updateProgress() {
	Game.time += progressTime;

	const updateRate = 200;
	if( Game.time % updateRate == 0 ) {
		document.getElementById("progress").style.width = ((Game.time + updateRate) / Game.delay * 100) + "%";
		console.log(document.getElementById("progress").style.width);
	}
	if( Game.time >= Game.delay ) {
		hideNumber();
		clearInterval( Game.interval );
		return;
	}
}

function hideNumber() {
	document.getElementById("inputDiv").classList.remove("d-none");
	document.getElementById("rememberDiv").classList.add("d-none");

	document.getElementById("playerNumber").value = "";
	document.getElementById("playerNumber").focus();
}

function submitNumber(e) {
	e.preventDefault();

	let submitted = document.getElementById("playerNumber").value;

	if( submitted == Game.number ) {
		Game.score += 3 + Math.floor( Game.correct / 2 );
		Game.correct++;
		Game.strikes = 0;

		document.getElementById("score").innerText = "Score: " + Game.score;
		document.getElementById("lives").innerText = "Strikes: 0";
		document.getElementById("tryAgain").classList.add("d-none");
		pickNumber();
	}
	else {
		document.getElementById("tryAgain").classList.remove("d-none");
		Game.strikes++;
		if( Game.strikes == 3 ) {
			gameover();
			return;
		}

		document.getElementById("lives").innerText = "Strikes: " + Game.strikes;
		showNumber();
	}

	return false;
}

function start() {
	Game = {
		number: 0,
		score: 0,
		strikes: 0,
		correct: 0,
		delay: 0,
		inverval: 0,
		time: 0,
	};
	document.getElementById("score").innerText = "Score: 0";
	document.getElementById("lives").innerText = "Strikes: 0";

	document.getElementById("startDiv").classList.add("d-none");
	document.getElementById("tryAgain").classList.add("d-none");
	document.getElementById("gameoverDiv").classList.add("d-none");
	document.getElementById("gameDiv").classList.remove("d-none");

	pickNumber();
}
