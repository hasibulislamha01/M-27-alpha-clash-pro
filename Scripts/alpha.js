// function play(){
//     // hiding the alpha clash section
//     const alphaHome = document.getElementById('homeScreen');
//     alphaHome.classList.add('hidden')

//     // removing the hidden class from the play ground section
//     const playSection = document.getElementById('play-section')
//     playSection.classList.remove('hidden')
// }

// generatin random alphabet here
function randomAlphabet(){
        // step 1: generate random alphabet
        const alphaString = 'abcdefghijklmnopqrstuvwxyz'
        const alphabets = alphaString.split('')
        console.log(alphabets)
    
        // step 2: generate random numbers
        let randomNumbers = Math.random()*25
        let index = Math.round(randomNumbers)

        // step 3: generate random alphabets
        let alphabet = alphabets[index];
        console.log(alphabet)

        // step 4: show the alphabet in the game-play art-board
        document.getElementById('random-alphabet').innerText=alphabet

        const key = document.getElementById(alphabet)
        console.log(key)
        
        key.classList.add('bg-amber-500')
}

function activeKeyBg(){

}

function continueGame(){
    randomAlphabet()
}



function play(){
    hideElement('homeScreen')
    showElement('play-section')
    continueGame()
    console.log('play function')
}

// function click(){
//     console.log('click function')
// }

