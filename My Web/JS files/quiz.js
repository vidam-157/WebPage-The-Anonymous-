function rule_display() {
	document.getElementById("button-box").style.display="none";
	document.getElementById("rule_box").style.display="block";
	
}

function exit_rules() {
	document.getElementById("rule_box").style.display="none";
}

function open_quiz() {
	document.getElementById("rule_box").style.display="none";
	document.getElementById("button-box").style.display="none";
	document.getElementById("ques_box").style.display="block";
	start_timer();
	show_Questions(0);
	
}

//Getting questions and options from the array.

function show_Questions(index) {
	const Q = document.getElementById("theQues").innerHTML= "<span>"+ questions[index].question +"<span>";
	const A=document.getElementById("options").innerHTML =  "<div class='options'>"+ questions[index].options[0] +"<span></span></div>"+
		                									"<div class='options'>"+ questions[index].options[1] +"<span></span></div>"+
		                									"<div class='options'>"+ questions[index].options[2] +"<span></span></div>"+
		                									"<div class='options'>"+ questions[index].options[3] +"<span></span></div>";
		                								}   

	const choice = document.getElementById("options");

    // set onclick attribute to all available options
    for(i=0; i < options.length; i++){
        choice[i].setAttribute("onclick", "optionSelected(this)");
    }


function optionSelected(answer) {
	alert("hi");
	var userAnswer = answer.textContent;
	var correctAnswer = questions[Qcount].answer;
	console.log(correctAnswer);

	if (userAnswer == correctAnswer) {
		console.log("Answer is Correct");
	}
	else{
		console.log("Answer is Wrong");
	}
}

//if next button clicked

var Qcount = 0;

 function next_quiz(){
 	if(Qcount < 10){
	 	Qcount++;
	 	show_Questions(Qcount);
 	}
 	else{
	 	document.getElementById("ques_box").style.display="none";
	 	document.getElementById("result_box").style.display="block";
	 	document.getElementById("button-box").style.display="block";
 	}
 }

 var time = 120;

	function quizTimer(){
    	time = time - 1;

    	if(time < 120) {
        	count.innerHTML = time;
    	}

    	if (time < 1){
	        window.clearTimeout(update);   // Time's up; auto submission
	        document.getElementById("ques_box").style.display="none";
	 		document.getElementById("result_box").style.display="block";
    	}
	}

	function start_timer() {
	        update = setInterval("quizTimer()", 1000);
	    }

