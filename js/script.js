var userInput = prompt("How many lotto picks?");
var lottery = [];
var lotteryNumbers = "";



//fills array
if (userInput < 8)
{	
	for (var i = 0; i < userInput; i++)
	{
		lottery[i] = Math.ceil(Math.random() * 99);
	}
}
else
{
	alert("Please choose less than 8 lottery numbers.");
}
//display array
for (var i = 0; i < lottery.length; i++)
{
	if (i == lottery.length - 1)
	{
		lotteryNumbers = lotteryNumbers + lottery[i];
	}
	else
		{		
		lotteryNumbers = lotteryNumbers + lottery[i] + "-";
		//lotteryNumbers += lottery[i] + "-";     (same thing)
	}
}
console.log(lotteryNumbers);
document.getElementById("output").innerText = lotteryNumbers;




