//MEMORY GAME!





var memoryAnswers = ["Hello","Hello","One","One","Three","Three","Meerkat","Meerkat","Five","Five","Two","Two","6","6","10","10"];
var values = [];
var tileId = [];
var numberOfFlips = 0;


//This creates a random shuffle of the memoryAnswers array
Array.prototype.shuffledArray = function(){
	var i = this.length, j, change;
	while(--i > 0){
		j = Math.floor(Math.random() * (i+1));
		change = this[j];
		this[j] = this[i];
		this[i] = change;
	}
}



function board(){
	numberOfFlips = 0;
	var output = '';
	memoryAnswers.shuffledArray();
	for (var i = 0; i < memoryAnswers.length; i++){
		output += '<div id="box'+i+'" onclick="flipTime(this,\''+memoryAnswers[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;

}


function flipTime(box,amount){
    if(box.innerHTML == "" && values.length < 2){
        box.style.background = "white";
        box.innerHTML = amount;
        if(values.length == 0){
            values.push(amount);
            tileId.push(box.id);
        } else if(values.length == 1){
            values.push(amount);
            tileId.push(box.id);
            if(values[0] == values[1]){
                numberOfFlips += 2;
                // Clear both arrays
                values = [];
                tileId = [];
                // Check to see if the whole board is cleared
                if(numberOfFlips == memoryAnswers.length){
                    alert("Board cleared... generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                    board();
                }
            } else {
                function flipBackOver(){
                    // Flip the 2 tiles back over
                    var box1 = document.getElementById(tileId[0]);
                    var box2 = document.getElementById(tileId[1]);
                    box1.style.background = 'url(images/meerkat.jpeg) no-repeat';
                    box1.innerHTML = "";
                    box2.style.background = 'url(images/meerkat.jpeg) no-repeat';
                    box2.innerHTML = "";
                    // Clear both arrays
                    values = [];
                    tileId = [];
                }
                setTimeout(flipBackOver, 900);
            }
        }
    }
}



