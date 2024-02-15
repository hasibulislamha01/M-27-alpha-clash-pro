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
