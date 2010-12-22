var feedbackEffect = 'slide';
var curQuestion = 1;
var tickerText = '';
var c = 0;

$(document).ready(function() {
	$('button').button();
	
	$(':radio').click(function(){
		$('.feedback').hide('slow');
	});
	
	q1();
	
});


function setCurQuestion() {
	
}

function isCorrect(question, answer, piece){
	var userInput = $('input[name="quest' + question + '"]:checked').val();
	if (userInput == answer) {
	  curQuestion = question + 1;
	  //show puzzle piece
	  $('#' + piece).show('slow');
	  //hide dialog
	  $('#q' + question).dialog('close');  
	  //show next question
	  eval('q' + curQuestion + '()');
	}
	return userInput;
}

function feedback(id, msg){
	$('#' + id + ' .feedback').text(msg).show(feedbackEffect);
}

function showQuestion(question, onSubmit) {
	$('#q' + question).dialog({
		title: "Question " + question,
		width: '400px',
		show: 'puff',
		autoOpen: true,
		closeOnEscape: false,
		modal: true,
		buttons: {
			"Submit": function() {
				onSubmit();				
			}
		},
		beforeClose: function(event, ui) {
			if (curQuestion == question) {
				return false;			
			}
		}
	});
}

function q1() {
	showQuestion(1, function(){
		var response = '';
	  switch(isCorrect(1, 'd', 'a1')) {
			case "a":
			  response = "You're getting warm.";
			  break;
			case "b":
			  response = "Whaaaaa????";
			  break;
			case "c":
				response = "You're getting warmer.";
				break;
		}		
	  feedback('q1', response);
	});
}

function q2() {
	showQuestion(2, function(){
		var response = '';
	  switch(isCorrect(2, 'c', 'a3')) {
			case "a":
			  response = "Really?......Really?";
			  break;
			case "b":
			  response = "Think bigger.";
			  break;
			case "d":
				response = "I said Gulf of Mexico, not the Moon.";
				break;
		}		
	  feedback('q2', response);
	});
}

function q3() {
	showQuestion(3, function(){
		var response = '';
	  switch(isCorrect(3, 'b', 'b3')) {
			case "a":
			  response = "Oh, you guys are sweethearts.";
			  break;
			case "c":
			  response = "Oh snap!";
			  break;
			case "d":
				response = "I'd start running if I were you.";
				break;
		}		
	  feedback('q3', response);
	});
}

function q4() {
	showQuestion(4, function(){
		var userInput = $('input[name="quest4"]:checked').val();
		if (userInput != 'c') {
		  curQuestion = 5;
		  //show puzzle piece
		  $('#c1').show('slow');
		  //hide dialog
		  $('#q4').dialog('close');  
		  //show next question
			q5();		  
		}
		else {
			feedback('q4', 'You picked the only incorrect answer.');
		}
	});
}

function q5() {
	showQuestion(5, function(){
		var response = '';
	  switch(isCorrect(5, 'a', 'b1')) {
			case "b":
			  response = "What?! Chicago's not even a state!";
			  break;
			case "c":
			  response = "No, but she's lived here forever.";
			  break;
			case "d":
				response = "She's not a cheese head.";
				break;
		}		
	  feedback('q5', response);
	});
}

function q6() {
	showQuestion(6, function(){
		var response = '';
	  switch(isCorrect(6, 'b', 'a2')) {
			case "a":
			  response = "No, but it probably should be.";
			  break;
			case "c":
			  response = "Sorry, try again.";
			  break;
			case "d":
				response = "I didn't ask where you live, did I?";
				break;
		}		
	  feedback('q6', response);
	});
}

function q7() {
	showQuestion(7, function(){
		var response = '';
	  switch(isCorrect(7, 'c', 'c3')) {
			case "a":
			  response = "Good guess, but try again.";
			  break;
			case "b":
			  response = "Too low.";
			  break;
			case "d":
				response = "Too high.";
				break;
		}		
	  feedback('q7', response);
	});
}

function q8() {
	showQuestion(8, function(){
		var response = '';
	  switch(isCorrect(8, 'a', 'c2')) {
			case "b":
			  response = "Good guess, but try again.";
			  break;
			case "c":
			  response = "Nope, it's not a Fort.";
			  break;
			case "d":
				response = "Try again.";
				break;
		}		
	  feedback('q8', response);
	});
}

function q9() {
	showQuestion(9, function(){
		var response = '';
	  switch(isCorrect(9, 'c', 'b2')) {
			case "a":
			  response = "Yikes, somebody needs geography lessons.";
			  break;
			case "b":
			  response = "Ohhh, so close.";
			  break;
			case "d":
				response = "Nope.";
				break;
		}		
	  feedback('q9', response);
	});
}

function q10() {
	$('#q10').dialog({
		title: "Final Question!",
		width: '400px',
		show: 'puff',
		position: 'left',
		autoOpen: true,
		closeOnEscape: false,
		modal: true,
		buttons: {
			"Submit": function() {
				var userInput = $('input[name="quest10"]:checked').val();
				var response = '';
			  switch(userInput) {
					case "a":
					  response = "Are you sure?";
					  break;
					case "c":
					  response = "Wow, if you would have told me this earlier I would have saved a lot of money.";
					  break;
					case "d":
						response = "Northwood is pretty cool, but there is one place that is better.";
						break;
					case "b":
					  curQuestion = 11;
						//hide dialog
					  $('#q10').dialog('close');
						//you win!
						$('h1').hide();
						$('#container').hide();
						
						//get ticker text
						tickerText = $('#win h2').text();
						$('#win h2').text('');
							
						//show ticker text.
						typetext();																	
																		
				}		
			  feedback('q10', response);				
			}
		},
		beforeClose: function(event, ui) {
			if (curQuestion == 10) {
				return false;			
			}
		}
	});
}

function typetext() {	
	var thisChar = tickerText.substr(c, 1);
	$('#win h2').text(tickerText.substr(0, c++));
	if(c < tickerText.length+1) {
		if (c == 1){
			//show win div
			$('#win').slideDown('slow');			
		}
		setTimeout("typetext()", 28);
	}		
	else {
		c = 1;
		tickerText = "";
	}	
}