// Your code goes here

// Get Function
const get = (selector) => {
    return document.querySelector(selector)
}

// Variables
const signUpButton = get('.btn')
const titleWelcome = get('h1')
const footerZoom = get('footer');
const input = get('input')

// Double Click
function welcomeAlert(event){
    console.log(`on event fired ${event.timeStamp}`)
    return alert('Welcome to Our Website!')
}

titleWelcome.addEventListener('dblclick', welcomeAlert)

// Mouse Over
signUpButton.addEventListener('mouseover', (event) => {
    event.target.style.color = "red"
})

// Keydown 
function escKey(event) {
    if (event.key === 'Escape') {
        window.scrollTo(0, document.body.scrollHeight)
    }
}

document.addEventListener('keydown', escKey)

// Wheel

function wheelZoom(event) {
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    footerZoom.style.transform = `scale(${scale})`;
  }

  let scale = 1;
  
  footerZoom.addEventListener('wheel', wheelZoom)

// click

signUpButton.addEventListener('click', event => {
    signUpButton.innerHTML = `Click count: ${event.detail}`
})

// select

function selectCode(event) {
    const log = document.getElementById('log')
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You have unlocked a secret discount! Call 123-456-7891 for Details. Or else.`;
}

input.addEventListener('select', selectCode)

// load

window.addEventListener('load', (event) => {
    console.log('this page is locked and loaded sergent')
})

//