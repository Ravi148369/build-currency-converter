export default function bindEvents(element, event, callbackFunction) {
    element.addEventListener(event,()=>callbackFunction())
}