import bindEvents from "./components/BindEvents.js";
import currencyList from "./components/CurrencyList.js";
import convert from "./components/Convert.js";
function render (){
    const form = document.querySelector('form')
    const submitButton = document.querySelector('.submit button')
    const swapInput = document.querySelector('#js-swap')

    currencyList()
    bindEvents(submitButton,'click',convert)
    bindEvents(form.amountInput, 'keydown',convert)
    bindEvents(form.fromInput, 'change', convert)
    bindEvents(form.toInput, 'change', convert)
    bindEvents(swapInput, 'click', ()=>{
        const temp = form.fromInput.value
        form.fromInput.value = form.toInput.value  
        form.toInput.value = temp
        convert()
    })   
    
}
render()