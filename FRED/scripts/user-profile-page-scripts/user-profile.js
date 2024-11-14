let valueArray = [];//2D array
valueArray[0] = [];
valueArray[1] = [];
valueArray[2] = [];
valueArray[3] = [];

let validArray = [];//Stores all the question numbers that have been answered
let skipArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];//Contains all the questions in the beginning
let index = 0;
var totalAmount=0;//For progress bar
const increasingAmount = 6.25;//For progress bar
let labelText;//text for the label of the progress bar

//Start Button
function startCustomPrompt(){
    document.getElementById('startButton').style.display = "none";
    document.getElementById('progressBar').style.display = "block";
    displayQuestion();
}

//This function displays the question boxes or the box for the previous questions
function displayQuestion(){
    if(index<skipArray.length){
        document.getElementById(`promptBox${skipArray[index]}`).style.display = "block";
    }
    else{
        document.getElementById('previous').style.display = "block";
    }
}

//Checks whether a valid input is given, if so it will add that values to the valueArray
function nextCustomPrompt(){
    let inputText = document.getElementById(`question${skipArray[index]}`).value;
    if(inputText === ''){
        alert("Enter a value!");
    }
    else{
        document.getElementById('outputInfoLabel').style.display = "block";
        document.getElementById('outputInfo').style.display = "block";
        arrayPosition(inputText);
        validArray.push(skipArray[index]);//adding the valid inputs to the valueArray
        document.getElementById(`promptBox${skipArray[index]}`).style.display = "none";
        index++;
        progressBar();//Updates the progress bar
        displayQuestion();
    }
}

//Allows only a selected number of questions to skip 
function skipCustomPrompt(){
    if(skipArray[index] === 1 || skipArray[index] === 2 || skipArray[index] === 5 || skipArray[index] === 9 || skipArray[index] === 11 || skipArray[index] === 13 || skipArray[index] === 14){
        alert("Mandatory Question, please answer!");
    }
    else{
        document.getElementById(`question${skipArray[index]}`).value = '';//clear the text input
        document.getElementById(`promptBox${skipArray[index]}`).style.display = "none";
        index++;
        displayQuestion();
    }
   
}

//Progress Bar
function progressBar(){
    if(skipArray.length>0){
        totalAmount = totalAmount + increasingAmount;
        document.getElementById("updateProgressBar").value = `${totalAmount}`;
        document.getElementById("percentageValue").innerHTML = `${totalAmount}%`;
        if(totalAmount < 25){
            labelText = "Seems like a good start...";
        }
        else if(totalAmount >= 25 && totalAmount < 50){
            labelText = "Come on let's keep going...";
        }
        else if(totalAmount >= 50 && totalAmount < 75){
            labelText = "You are half way through...";
        }
        else if(totalAmount >= 75 && totalAmount < 99){
            labelText = "Almost there...";
        }
        else{
            labelText = "Hurray! You have completed it...";
        }
        document.getElementById('labelProgressBar').innerHTML = labelText;
    }
}

//Yes button used to go to the previous questions
function previousQuestions(){
    document.getElementById('previous').style.display = "none";
    skipArray = [];//resetting the skipArray

    for(let i = 1; i <= 16; i++){//Checks the question numbers in the validArray and add the skipped questions into to the resetted skipArray
        if(!validArray.includes(i)){
            skipArray.push(i); 
        }
    }
    index = 0;//resetting index
    startCustomPrompt();
    if(validArray.length===16){
        alert("All questions have been answered!");
    }
}

//No button to end the question series
function stopQuestions(){
    document.getElementById('previous').style.display = "none";
    document.getElementById('progressBar').style.display = "none";
    saveToLocal();//saving data to the session storage
}

//Output information gathered
function arrayPosition(text){
    if(skipArray[index]<=4 && skipArray[index]>=0){//Step 1
        var colNumber = skipArray[index]-1;
        valueArray[0][colNumber] = text;//saves data in the valueArray
        document.getElementById('outputInfo1').style.display = "block"; 
        document.getElementById(`outText${skipArray[index]}`).innerHTML = valueArray[0][colNumber];
    }
    else if(skipArray[index]<=8 && skipArray[index]>=5){//Step 2
        var colNumber = skipArray[index]-5;
        valueArray[1][colNumber] = text;//saves data in the valueArray
        document.getElementById('outputInfo2').style.display = "block"; 
        document.getElementById(`outText${skipArray[index]}`).innerHTML = valueArray[1][colNumber];
    }
    else if(skipArray[index]<=12 && skipArray[index]>=9){//Step 3
        var colNumber = skipArray[index]-9;
        valueArray[2][colNumber] = text;//saves data in the valueArray
        document.getElementById('outputInfo3').style.display = "block"; 
        document.getElementById(`outText${skipArray[index]}`).innerHTML = valueArray[2][colNumber];
    }
    else{//Step 4
        var colNumber = skipArray[index]-13;
        valueArray[3][colNumber] = text;//saves data in the valueArray
        document.getElementById('outputInfo4').style.display = "block"; 
        document.getElementById(`outText${skipArray[index]}`).innerHTML = valueArray[3][colNumber];
    }
}


//saves the valueArray to the local storage
function saveToLocal(){
    sessionStorage.setItem("userData", JSON.stringify(valueArray));
}