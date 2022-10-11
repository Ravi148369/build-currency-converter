import convert from "./Convert.js"
export default function bindEvents() {

    const form = document.querySelector('form')
    const submitButton = document.querySelector('.submit button')
    const swapInput = document.querySelector('#js-swap')

    submitButton.addEventListener('click',()=>convert())
    form.amountInput.addEventListener('keydown',()=>convert())
    form.fromInput.addEventListener('change',()=>convert())
    form.toInput.addEventListener('change',()=>convert())
    swapInput.addEventListener('click',()=>{
        const temp = form.fromInput.value
        form.fromInput.value = form.toInput.value  
        form.toInput.value = temp
        convert()
    })
}