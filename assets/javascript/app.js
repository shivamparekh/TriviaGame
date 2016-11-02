<!-- variables -->
var correctNumber = 0;
var incorrectNumber = 0;
var unansweredNumber = 0;
var setNumber = 1;
var counterNumber = 3000;

var setOne = [
	"<br>What is Ray Allen's real first name? </br>",
	"<br><button> Ray </button></br>",
	"<br><button> Reginald </button></br>",
	"<br><button> Will </button></br>",
	"<br><button> Walter </button></br>"];

var setTwo = [
	"<br>What year was Michael Jordan drafted? </br>",
	"<<br>button> 1983 </button></br>",
	"<br><button> 1984 </button></br>",
	"<br><button> 1985 </button></br>",
	"<br><button> 1986 </button></br>"];

var setThree = [
	"<br>Who was the last Boston Celtics coach to win two straight NBA championships? </br>",
	"<br><button> Red Auerbach </button></br>",
	"<br><button > K.C. Jones </button></br>",
	"<br><button> Doc Rivers </button></br>",
	"<br><button> Bill Russel </button></br>"];

var setFour = [
	"<br>Who is the Miami Heat's all-time leading scorer? (*hint: spelling) </br>",
	"<br><button> Alonzo Mourning </button></br>",
	"<br><button> Dwyane Wade </button></br>",
	"<br><button> Dwayne Wade </button></br>",
	"<br><button> Alonzo Evening </button></br>"];

var setFive = [
	"<br>Which of these current NBA players spent time in the D-League </br>",
	"<br><button> Matt Barnes </button></br>",
	"<br><button> Kyle Lowry </button></br>",
	"<br><button> Evan Turner </button></br>",
	"<br><button> Mason Plumlee </button></br>"];

selectSet();


timer();
var timeRemaining;

	function timer(){

		timeRemaining = setInterval(function(){
			if (counterNumber == 0){
				clearTimeout(timeRemaining);

				checkAnswer("outOfTime");
			}
			$("#timer").html("Time Remaining: " + counterNumber);
			counterNumber--;
		})

	};

	function displayText(myArray){

		$("#question").empty();

		$("#answers").empty();

		$("#question").html(myArray[0]);

		for (var i = 1; i < myArray.length; i++){
			$("#answers").append(myArray[i]);
		}

	};
	function selectSet(){

		if (setNumber == 1){
			displayText(setOne);
		} else if (setNumber == 2){
			displayText(setTwo);
		} else if (setNumber == 3){
			displayText(setThree);
		} else if (setNumber == 4){
			displayText(setFour);
		} else if (setNumber == 5){
			displayText(setFive);
		}
	};

	$("#answers").on("click","button",function(){

		clearTimeout(timeRemaining);

	});
