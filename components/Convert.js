import fetchData from "./FetchData.js"

export default async function convert(){
    const form = document.querySelector('form')
    const prizeFrom = document.querySelector('#js-prize-from')
    const prizeTo = document.querySelector('#js-prize-to')
    const prize = document.querySelector('#js-prize')

    const currencyPrize_API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${form.fromInput.value}.json` 
    const data = await fetchData(currencyPrize_API)
    if(!data){
        return
    }
    prizeFrom.textContent = ''
    prizeTo.textContent  = ''
    prize.textContent = ''
    if(data[form.fromInput.value] && !isNaN(form.amountInput.value) && form.amountInput.value){
        prizeFrom.textContent = `${form.amountInput.value} ${form.fromInput.value.toUpperCase()} = `
        prizeTo.textContent = `${data[form.fromInput.value][form.toInput.value]*form.amountInput.value} ${form.toInput.value.toUpperCase()}`
        prize.textContent = `1 ${form.fromInput.value.toUpperCase()} = ${data[form.fromInput.value][form.toInput.value]} ${form.toInput.value.toUpperCase()}`
    }
}