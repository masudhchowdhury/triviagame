

var stopwatch = {
	number: 31,
	run: function () {
		counter = setInterval(stopwatch.increment, 1000);
	},
	increment: function() {
		stopwatch.number--;
      	$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
      	if (stopwatch.number === 0){
        	stopwatch.stop();
		}
	},
	stop: function() {
		clearInterval(counter);
	}
};

var quiz = [ {
		question: "Pick your opponent!",
		picture: "assets/images/goku.gif",
		choices: ['Goku','Trunks','Gohan','picollo'],
		correct: 0,
	},
	{	question: "Pick your opponent!",
		picture: 'assets/images/gohan.gif',
		choices: ['Goku','Trunks','Gohan','picollo'],
		correct: 2,
	},
	{	question: "Pick your opponent!",
		picture: 'assets/images/goten.gif',
		choices: ['Goku','Goten','Gohan','picollo'],
		correct: 1,
	},
	{	question: "WPick your opponent!",
		picture: 'assets/images/krillin.gif',
		choices: ['Krillin','Yamcha','Tien','Vegeta'],
		correct: 0,
	},
	{	question: "Pick your opponent!",
		picture: 'assets/images/tien.gif',
		choices: ['Frieza','Your Mom','Tien','Obama'],
		correct: 2,
	},
	{	question: "Pick your opponent!",
		picture: 'assets/images/picollo.gif',
		choices: ['Trunks','Picollo','Gohan','Your Mom'],
		correct: 1,
	},
	{	question: "Pick your opponent!",
		picture: 'assets/images/trunks.gif',
		choices: ['Ali','Bulma','Trunks','CHi CHi'],
		correct: 2,
	},
	{	question: "Pick your opponent!",
		picture: 'assets/images/vegeta.gif',
		choices: ['Vegeta','Trunks','Bulma','Brolly'],
		correct: 0,
	
}];

var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;

var pokePic = $('<img>');



$('input[name="choice"]').hide;


function nextQuest(){

	$('#questions').text(quiz[counter].question);
	pokePic.attr('src', quiz[counter].picture)
	$('#pokes').append(pokePic)
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);
}



function validate() {
	if ($('input').is(':checked')) {

		nextQuest(); 
	}
	else {
		alert("Please make a selection.");
		counter--;
	}
}


nextQuest();



$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	
	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;


	
	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Quiz Complete! You scored " + numCorrect + " out of " + numQuestions + "!";
		return; 
	}

	validate();

	
	$('.card').hide().fadeIn("slow");
	
	
	$('input[name="choice"]').prop('checked', false);
});



$('#backBtn').on('click', function() {
	if (quiz[counter] == 0) {
		$('.card').hide().fadeIn("slow");

	} else {
		
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	
	
	// display previous question
	nextQuest();	
});

