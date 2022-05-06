function pickfic() {
    // Get the value of the input fields
    let minNumChosen = document.getElementById('minNum').value;
    let maxNumChosen = document.getElementById('maxNum').value;
    
    // If input Not a Number or min bigger than max
    let reply;
    if (isNaN(minNumChosen) || isNaN(maxNumChosen) || parseInt(minNumChosen) >= parseInt(maxNumChosen) ) {
      reply = "I think you pissed off my sandwich. Also, those numbers make no sense to me.";
    } 
      // If min is zero
    else if (minNumChosen == 0) {
     reply = "Really, dude? You have an Excel line for 'zero'?? Witch.";
    }
    else {
      // if range is correct, randomize number
      const generateRandomNumber = (min, max) =>  {
      return Math.floor(Math.random() * (max - min) + min);
        };
      reply = "Today, you should read fic number " + generateRandomNumber(parseInt(minNumChosen), parseInt(maxNumChosen)) + "!";
  
    }
    document.getElementById("result").innerHTML = reply;
    console.log(minNumChosen,maxNumChosen);
}