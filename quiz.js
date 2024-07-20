const questions = [
{
	question: "Who is known as father of c++ language ?",
	answers:[
		{text: "Gudio Van Rossum",correct:false},
		{text: "Bjarne Stroustrup",correct:true},
		{text: "James Gosling",correct:false},
		{text: "Dennis Ritchie",correct:false},
	]
},
{
	question: "Which level of language is called as Assembly language ?",						//js list=[{},{}.{},....]
	answers:[
		{text: "High Level Programming language",correct:false},
		{text: "Medium Level Programming language",correct:false},
		{text: "Low Level Programming language",correct:true},
		{text: "Machine language",correct:false},
	]
},
{
	question: "Which is most comman language used in web desingning ?",
	answers:[
		{text: "HTML",correct:true},
		{text: "Java",correct:false},
		{text: "Python",correct:false},
		{text: "C",correct:false},
	]
},
{
	question: "When Javascript was invented ?",
	answers:[
		{text: "1990",correct:false},
		{text: "1995",correct:true},
		{text: "1985",correct:false},
		{text: "1986",correct:false},
	]

},
{
	question: "Who devloped Bootstrap ?",
	answers:[
		{text: "James Gosling",correct:false},
		{text: "Mark Jukervich",correct:false},
		{text: "Dennis Ritchie",correct:false},
		{text: "Mark Otto and Jacob Thornton",correct:true},
	]

},
{
	question: ".NET framework was desinged and devloped by ?",
	answers:[
		{text: "IBM",correct:false},
		{text: "Microsoft",correct:true},
		{text: "Google",correct:false},
		{text: "Oracle",correct:false},
	]

},
{
	question: "HTML used ?",
	answers:[
		{text: "Pre specified tags",correct:false},
		{text: "User defined tags",correct:false},
		{text: "tags only for linking",correct:false},
		{text: "Fixed tags defined by language",correct:true},
	]

},
{
	question: "Word Interpreter is related to ?",
	answers:[
		{text: "Address resolution",correct:false},
		{text: "IP address ranges",correct:false},
		{text: "Programming languages",correct:true},
		{text: "None of above",correct:false},
	]

},
{
	question: "C is what kind of language ?",
	answers:[
		{text: "Future language",correct:false},
		{text: "Assembly language",correct:false},
		{text: "Third level generation High level language",correct:true},
		{text: "Machine language",correct:false},
	]

},
{
	question: "Which of the following language used for Android Devlopment ?",
	answers:[
		{text: "Java",correct:true},
		{text: "C++",correct:false},
		{text: "C",correct:false},
		{text: "PHP",correct:false},
	]

},

];

const queelm = document.getElementById("question");			//access html tags
const ansbtn = document.getElementById("ansbtn");
const nextbtn = document.getElementById("nextbtn");

let currentqueindex = 0;
let score = 0;
function startquiz(){
	currentqueindex = 0;
	score = 0 ;
	nextbtn.innerHTML = "next" ;
	showque();
}
function showque(){
	resetstate();											//reset prev que and ans
	let currentque = questions[currentqueindex]; 
	let queno = currentqueindex + 1;						
	queelm.innerHTML = queno + ". " + currentque.question;	//add que from list questions to the web page

	currentque.answers.forEach(answer => {
		const button = document.createElement("button");	//create button on website
		button.innerHTML=answer.text;						//add answer option as button name
		button.classList.add("btn");						//add class btn to create buttons
		ansbtn.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;			//true or false added in button.dataset
		}							
		button.addEventListener("click",selectanswer);
	});

}

function resetstate(){
	nextbtn.style.display = "none";
	while(ansbtn.firstChild){
		ansbtn.removeChild(ansbtn.firstChild)				//removes previous ans options
	}
}

function selectanswer(e){									
	const selectedbtn = e.target;							//onclick on btn the true or false is chceked
	const iscorrect = selectedbtn.dataset.correct === "true";
	if(iscorrect){
		selectedbtn.classList.add("correct");				//add class correct to selected btn and css to this class given in css file
		score++;
	}
	else{
		selectedbtn.classList.add("incorrect");				//same as correct and it gives incorrect option as red color and correct option as green color
	}

	Array.from(ansbtn.children).forEach(button => {
		if(button.dataset.correct === "true"){
			button.classList.add("correct");				//if we select wrong ans then it automatically show right ans as green by applying class " correct "and stop selecting other button by using button.disabeled
		}
		button.disabled = true;								//css btn:hover:not([disabled]) :- here not disabeled use becoz hover will work only when button is not disabeld 

	});
	nextbtn.style.display = "block";						// it will display next button after answer once
}

nextbtn.addEventListener("click", ()=> {
	if(currentqueindex < questions.length){
		handlenextbtn();
	}
	else{
		startquiz();										//restart the quiz if there is no next question 
	}

});



function handlenextbtn(){
	currentqueindex++;
	if(currentqueindex < questions.length){
		showque();											//show next que
	}
	else{
		showscore();										//if there is no another question then it show score
	}
}

function showscore(){
	resetstate();											//reset all ans 
	queelm.innerHTML = "you score " + score + " out of " + questions.length + " !";	//show score inplace of question
	nextbtn.innerHTML = "Play Again";						//show play again inplace of next
	nextbtn.style.display = "block";
}

startquiz();
