// function click(){
//     const playSection = document.getElementById('play-section')
//     const scoreSection =document.getElementById('score')

//     playSection.classList.add('hidden')
//     scoreSection.classList.remove('hidden')
// }

let letter;
function play(){

    document.getElementById('letter-container').classList.remove('text-red-400','text-7xl')
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

        let newScoreString = document.getElementById('new-score').innerText
        const score = parseInt(newScoreString)
        const newScore = score+1;
        console.log(newScore)
        document.getElementById('new-score').innerText=newScore;

        play()
    }
    else{
        console.log('Try again')

        let remainingLivesString = document.getElementById('lives').innerText;
        let remainingLives = parseInt(remainingLivesString);
        remainingLives-=1;
        console.log('lives',remainingLives);
        document.getElementById('lives').innerText=remainingLives;
        

  

        if(remainingLives>0){
            play()
        }
        else{
            document.getElementById('letter-container').innerText='Play again'
            document.getElementById('letter-container').classList.add('text-red-400','text-7xl')
            document.getElementById('try-again').classList.remove('hidden')
            
        }
    }

   
})

function refresh(){
    document.getElementById('new-score').innerText='0'
    document.getElementById('lives').innerText='3'
}