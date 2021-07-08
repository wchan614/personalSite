let Game = {
	seen: [],
	correct: 0,
	lives: 3,
	currentWord: "",
	isSeen: false,
	previousWord: "",
}

let seenProbability = 0;

function pickWord() {
	// Pick from the seen word list with a given probability
	Game.previousWord = Game.currentWord;

	let word = ""
	let pickFromSeen = Math.random() < seenProbability;
	if( (Game.seen.length > 0) && pickFromSeen ) {
		which =  Math.floor(Math.random() * Game.seen.length);
		Game.currentWord = Game.seen[ which ];

		if ( Game.previousWord == Game.currentWord ) {
			which = ( which + 1 ) % Game.seen.length;
			Game.currentWord = Game.seen[ which ];
		}
		Game.isSeen = true;
	}
	else {
		Game.currentWord = wordList[ Math.floor(Math.random() * wordList.length) ];
		Game.isSeen = false;
	}

	seenProbability = seenProbability <= 0.49 ? seenProbability + 0.10 : 0.5; 
	document.getElementById("word").innerHTML = Game.currentWord;
}

function playerPick( seen ) {
	if( seen == Game.isSeen ) {
		Game.correct++;
		document.getElementById("score").innerHTML = "Score: " + Game.correct;
	}
	else {
		Game.lives--;
		document.getElementById("lives").innerHTML = "Lives: " + Game.lives;
	}

	if( Game.lives < 0 ) {
		gameover();
		return;
	}

	if( !Game.isSeen ) {
		Game.seen.push( document.getElementById("word").innerHTML );
	}

	pickWord();
}

function gameover() {
	document.getElementById("gameDiv").classList.add("d-none");
	document.getElementById("gameoverDiv").classList.remove("d-none");

	document.getElementById("gameScore").value = Game.correct;
	document.getElementById("gameoverScore").innerHTML = "Your score was " + Game.correct;
}


function start() {
	Game = {
		seen: [],
		correct: 0,
		lives: 3,
		currentWord: "",
		isSeen: false,
	};
	document.getElementById("score").innerHTML = "Score: 0";
	document.getElementById("lives").innerHTML = "Lives: 3";
	pickWord();

	document.getElementById("startDiv").classList.add("d-none");
	document.getElementById("gameoverDiv").classList.add("d-none");
	document.getElementById("gameDiv").classList.remove("d-none");
}
