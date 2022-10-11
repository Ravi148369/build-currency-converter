import fetchData from "./fetchData.js"

export default async function currencyList() {
    const fromSelectInput = document.querySelector('#js-from-currency')
    const toSelectInput = document.querySelector('#js-to-currency')
    let currencyList = {}
    
    const currencyList_API = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    currencyList = await fetchData(currencyList_API)
    if(!currencyList){
        return
    }
    for (const currency in currencyList) {
        const tocurrencyOption = document.createElement('option')
        tocurrencyOption.value = currency
        tocurrencyOption.textContent = `${currency} - ${currencyList[currency]}`
        const fromcurrencyOption = tocurrencyOption.cloneNode(true)
        toSelectInput.append(tocurrencyOption)
        fromSelectInput.append(fromcurrencyOption)
    }
}
