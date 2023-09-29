const calculator = document.querySelector(".calculator")
const display = document.querySelector(".current-content")
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {

    const {keyType} = calculator.dataset

    button.addEventListener("click", (e) => {
        let key = e.target
        let currentContent = key.textContent
        let action = key.dataset.action
        let displayContent = display.textContent


        const calculate = (n1, operator, n2) => {
            let result = ''
            
            if (operator === 'add') {
              result = parseFloat(n1) + parseFloat(n2)
            } else if (operator === 'subtract') {
              result = parseFloat(n1) - parseFloat(n2)
            } else if (operator === 'multiply') {
              result = parseFloat(n1) * parseFloat(n2)
            } else if (operator === 'divide') {
              result = parseFloat(n1) / parseFloat(n2)
            }
            
            return result
        }

        Array.from(buttons).forEach((btn) => {
            btn.classList.remove("is-pressed")
        })

        if(!action){
            if(displayContent === "0" || calculator.dataset.keyType === 'operator'){
                display.innerText = currentContent
            }else{
                display.innerText = displayContent + currentContent
            }
            calculator.dataset.keyType = 'number'
        }
        if(action === "clear"){
            display.innerText = "0";
            calculator.dataset.keyType = "Clear"
        }
        
        if(
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            const secondValue = displayContent
            const operator = calculator.dataset.operator
            const firstValue = calculator.dataset.firstValue
            
            if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue)
            }

            key.classList.add("is-pressed")
            calculator.dataset.firstValue = displayContent
            calculator.dataset.operator = action
            calculator.dataset.keyType = 'operator'

        }
        if(action === "decimal"){
            if(!displayContent.includes(".")){
                display.textContent = displayContent + "."
            }else if(keyType === "operator"){
                display.textContent = "0."
            }
            calculator.dataset.keyType = "Decimal"
        }
        if(action === "calculate"){
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayContent

            if(
                firstValue &&
                operator &&
                keyType !== "operator"
            ){
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue

                calculator.dataset.firstValue = calcValue;
            }else{
                calculator.dataset.firstValue = displayContent  
            }
            // calculator.dataset.keyType = "Equals"
        }
    })
})