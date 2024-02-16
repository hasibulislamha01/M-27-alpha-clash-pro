// function play(){
//     // hiding the alpha clash section
//     const alphaHome = document.getElementById('homeScreen');
//     alphaHome.classList.add('hidden')

//     // removing the hidden class from the play ground section
//     const playSection = document.getElementById('play-section')
//     playSection.classList.remove('hidden')
// }



// generating random alphabet here


function randomAlphabet() {

    // step 1: generate random alphabet array
    const alphaString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphaString.split('')
    console.log(alphabets)

    // step 2: generate random numbers
    let randomNumbers = Math.random() * 25
    let index = Math.round(randomNumbers)

    // step 3: generate random alphabets
    let alphabet = alphabets[index];
    console.log(alphabet)

    // step 4: show the alphabet in the game-play art-board
    document.getElementById('random-alphabet').innerText = alphabet
    const key = document.getElementById(alphabet)
    console.log(key)  // displaying the key to enter

    key.classList.add('bg-amber-500')   //changing the background of the expected keyboard 


    // handling the keypress event here
    document.addEventListener('keyup', handleKeypress)
    function handleKeypress(event) {
        console.log('button pressed')

        const playerInput = event.key.toLowerCase()
        console.log('player has pressed ', playerInput)

        const expectedKeypress = key.innerText.toLowerCase();
        console.log(expectedKeypress, playerInput)

        if( expectedKeypress === playerInput){

            let currentScore;
            let newScore;
            currentScore+=1;

            console.log('you got point')
            removeBgColor(expectedKeypress)

            const currentScoreString = document.getElementById('current-score').innerText
            currentScore = parseInt(currentScoreString)
            newScore = currentScore + 1
            console.log('your new score is ',newScore)
            currentScoreString.innerText = newScore

            continueGame()
        }
        else{
            console.log('live gone')
        }
    }
    
}




function activeKeyBg() {

}

function continueGame() {
    randomAlphabet()
}



function play() {
    hideElement('homeScreen')
    showElement('play-section')
    continueGame()
    console.log('play function')
}

function click(){
    console.log('click function')
}

function hideElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
 }

 function showElement(elementId){
    document.getElementById(elementId).classList.remove('hidden')
}

function makeInvisible(idName){
    document.getElementById(idName).classList.add('hidden')
}
