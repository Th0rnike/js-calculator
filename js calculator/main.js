const calculator = document.querySelector(".calculator-grid")
const keys = document.querySelectorAll("button")
const display = document.querySelector(".current-content")

keys.forEach(button => {
    button.addEventListener('click', (e)=>{
        const key = e.target
        const action = key.dataset.action
        let keyContent = e.target.textContent
        let currentDisplay = display.textContent

        Array.from(key.parentNode.children)
        .forEach(b => b.classList.remove('is-pressed'))

        if(!action){
            if(currentDisplay === '0'){
                display.textContent = keyContent
            }else{
                display.textContent = currentDisplay + keyContent
            }
        }
        if(
            action === 'add' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'subtract'
        ){
            key.classList.add("is-pressed")
        }
        if(action === "decimal"){
            display.textContent = currentDisplay + "."
        }
        if(action === "clear"){
            console.log("ac clicked")
        }
        if(action === "calculate"){
            console.log("equals clicked")
        }
    })
})

// const key = e.target