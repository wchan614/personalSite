const progressTime = 100;
let Game = {
	score: 0,
	correct: 0,
	filled: 0,
	strikes: 0,
	lives: 3,
	size: 3,
	ans: [],
	state: [],
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

function initGrid() {
	Game.ans = [];
	Game.strikes = 0; // ok

	//Make initial state
	for( let x = 0; x < Game.size; x++ ) {
		Game.ans[x] = [];
		for( let y = 0; y < Game.size; y++ ) {
			Game.ans[x][y] = false;
		}
	}

	//Set some to active
	Game.filled = Game.size + Math.floor(2*(Game.score/Game.size));
	let amt = 0;
	while( amt < Game.filled ) {
		let rx = Math.floor( Math.random() * Game.size );
		let ry = Math.floor( Math.random() * Game.size );
		while( Game.ans[rx][ry] ) {
			rx = Math.floor( Math.random() * Game.size );
			ry = Math.floor( Math.random() * Game.size );
		}

		Game.ans[rx][ry] = true;
		amt++;
	}

	Game.state = [];
	for( let x = 0; x < Game.size; x++ ) {
		Game.state[x] = [];
		for( let y = 0; y < Game.size; y++ ) {
			Game.state[x][y] = false;
		}
	}
	
	setupDom();
	showAns();
}

function setupDom() {
	document.getElementById("score").innerText = "Score: " + Game.score;
	document.getElementById("lives").innerText = "Lives: " + Game.lives;

	let remember = document.getElementById("rememberGrid");
	while( remember.firstChild ) {
		remember.removeChild( remember.firstChild );
	}

	for( let x = 0; x < Game.size; x++ ) {
		let row = document.createElement( "div", "m-1" );
		remember.appendChild( row );
		row.classList.add( "row" );
		row.style.display = "flex";
		row.style.height = (100 / Game.size ) + "%";
		for( let y = 0; y < Game.size; y++ ) {
			let btn = document.createElement( "button" );
			row.appendChild( btn );
			btn.classList.add( "col-sm", "btn", "m-1");
			if( Game.ans[x][y] ) {
				btn.classList.add( "btn-primary" );
			}
			else {
				btn.classList.add( "btn-secondary" );
			}

			btn.style.width = (100 / Game.size ) + "%";
			btn.style.display = "flex";
		}
	}

	let input = document.getElementById("inputGrid");
	while( input.firstChild ) {
		input.removeChild( input.firstChild );
	}

	for( let x = 0; x < Game.size; x++ ){
		let row = document.createElement( "div", "m-1" );
		input.appendChild( row );
		row.classList.add( "row" );
		row.style.display = "flex";
		row.style.height = (100 / Game.size ) + "%";
		for( let y = 0; y < Game.size; y++ ) {
			let btn = document.createElement( "button" );
			row.appendChild( btn );
			btn.classList.add( "col-sm", "btn", "m-1", "btn-secondary");

			btn.style.width = (100 / Game.size ) + "%";
			btn.style.display = "flex";

			btn.addEventListener("click", function(e) { clickSquare(e, this.x, this.y) }.bind({x:x, y:y}) );
		}
	}
}

function clickSquare( ev, x, y ) {
	//console.log( x, y );
	if( Game.state[x][y] ) return;

	if( Game.ans[x][y] ) {
		ev.target.classList.add( "btn-primary" );
		ev.target.classList.remove( "btn-secondary" );
		Game.state[x][y] = true;
		if( checkState() ) {
			Game.score++;
			Game.correct++;
			Game.size = 3 + Math.floor(Game.correct / 3);
			setGridCorrect();
			setTimeout(initGrid,2500);
		}
	}
	else {
		ev.target.disabled = true;
		Game.strikes++;
		if( Game.strikes >= 3 ) {
			// Game.strikes = 0;
			if( --Game.lives <= 0 ) {
				gameover();
			}
			setTimeout(initGrid,1000);
		}
	}
}

function checkState() {
	for( let x = 0; x < Game.size; x++ ) {
		for( let y = 0; y < Game.size; y++ ) {
			if( Game.ans[x][y] != Game.state[x][y] ) {
				return false;
			}
		}
	}
	return true;
}


function showAns() {

	document.getElementById("rememberDiv").classList.remove("d-none");
	document.getElementById("inputDiv").classList.add("d-none");

	Game.delay = 2500 + Game.filled * 250;
	Game.time = 0;

	document.getElementById("progress").style.width = "0%";
	Game.interval = window.setInterval(updateProgress, progressTime);

}

function setGridCorrect() {
	let btns = document.querySelectorAll(".btn-primary");
	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.remove("btn-primary");
		btns[i].classList.add("btn-success");
	}
}

function hideAns() {
	document.getElementById("rememberDiv").classList.add("d-none");
	document.getElementById("inputDiv").classList.remove("d-none");
}

function updateProgress() {
	Game.time += progressTime;

	const updateRate = 200;
	if( Game.time % updateRate == 0 ) {
		document.getElementById("progress").style.width = ((Game.time + updateRate) / Game.delay * 100) + "%";
		//console.log(document.getElementById("progress").style.width);
	}
	if( Game.time >= Game.delay ) {
		hideAns();
		clearInterval( Game.interval );
		return;
	}
}

function start() {
	
	Game = {
		score: 0,
		correct: 0,
		filled: 0,
		strikes: 0,
		lives: 3,
		size: 3,
		ans: [],
		state: [],
		delay: 0,
		inverval: 0,
		time: 0,
	};

	document.getElementById("score").innerText = "Score: 0";
	document.getElementById("lives").innerText = "Lives: 3";

	document.getElementById("startDiv").classList.add("d-none");
	document.getElementById("gameoverDiv").classList.add("d-none");
	document.getElementById("gameDiv").classList.remove("d-none");

	initGrid();
}
