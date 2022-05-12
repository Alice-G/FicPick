function pickfic() {
  // Get the value of the input fields
  let minNumChosen = document.getElementById('minNum').value;
  let maxNumChosen = document.getElementById('maxNum').value;


  let reply;
  // empty fields
  if (minNumChosen == null || minNumChosen == "" || maxNumChosen == null || maxNumChosen == "") {
    reply = "Ahem...<br />Maybe give me sometihng to go on?<br />Like a number?";
  }
  // If input Not a Number 
  else if (isNaN(minNumChosen) || isNaN(maxNumChosen)) {
    reply = "I think you pissed off my sandwich! Also, those numbers make no sense to me. &#x1F92A";
  }
  // If min bigger than max
  else if (parseInt(minNumChosen) >= parseInt(maxNumChosen)) {
    reply = "Not to be Sam-coded, but I don't think you ordered those numbers right...";
  }
  // If min is zero
  else if (minNumChosen == 0) {
    reply = "Really, dude? You have an Excel line for 'zero'?? <br /> Witch!";
  }
  else {
    // if range is correct, randomize number
    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    reply = "Fic number " + generateRandomNumber(parseInt(minNumChosen), parseInt(maxNumChosen)) + " is being summoned!";

  }
  document.getElementById("result").innerHTML = reply;
  console.log(minNumChosen, maxNumChosen);
}