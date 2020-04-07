// Your code goes here

// Get Function
const get = (selector) => {
    return document.querySelector(selector)
}

// Variables
const signUpButton = get('.btn')
const titleWelcome = get('h1')
const footerZoom = get('footer');

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


