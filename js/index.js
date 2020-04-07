// Your code goes here

// Get Function
const get = (selector) => {
    return document.querySelector(selector)
}

// Variables
const signUpButton = get('.btn')
const titleWelcome = get('h1')
const footerZoom = get('footer');
const input = get('input.freeCode');
const password = get('input[type="password"]')
const newBackgroundColor = get('html')
const navLinks = get('nav a')

// Stop Nav refresh

function stopNavRefresh(event){
    event.preventDefault();
}

navLinks.addEventListener('click', stopNavRefresh)

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


// focus

password.addEventListener('focus', (event) => {
    event.target.style.background = 'black';
})

// blur

password.addEventListener('blur', (event) => {
    event.target.style.background = 'blue'
})

// mouse down

newBackgroundColor.addEventListener('mousedown', (event) => {
    event.target.style.background = 'grey';
    event.stopPropagation();
    newBackgroundColor.addEventListener('mouseup', (event) => {
        event.target.style.background = 'white'
    })
})

// mouse up




  