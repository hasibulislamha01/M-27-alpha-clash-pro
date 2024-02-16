// function click(){
//     const playSection = document.getElementById('play-section')
//     const scoreSection =document.getElementById('score')

//     playSection.classList.add('hidden')
//     scoreSection.classList.remove('hidden')
// }

let letter;
function play(){

    document.getElementById('letter-container').classList.remove('text-red-400')
    document.getElementById('try-again').classList.add('hidden')

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('')
    console.log(alphabet)

    const number = Math.round(Math.random()*25)
    letter = alphabet[number];
    console.log(letter)

    
    document.getElementById('letter-container').innerText=letter

    
}


document.addEventListener('keyup', function(event){
    const typedLetter = event.key.toLowerCase()
    const expectedLetter = letter
    console.log(typedLetter,expectedLetter)

    if(typedLetter === expectedLetter){
        console.log('success')
        increaseScore()
        play()
    }
    else{
        console.log('Try again')
        document.getElementById('letter-container').innerText='Wrong'
        document.getElementById('letter-container').classList.add('text-red-400','text-9xl')
        document.getElementById('try-again').classList.remove('hidden')
    }

    function increaseScore(){
        
    }
})