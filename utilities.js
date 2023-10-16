function getElement(elementId){
    const elementName = document.getElementById(elementId);
    const elementText = elementName.innerText;
    const elementValueConversion = parseFloat(elementText);
    return elementValueConversion;
}

function setElement(elementId,newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

function enterElement(elementId1, elementId2, elementId3){
    const productPrice = getElement(elementId1);

    const totalPrice = getElement(elementId2);
    const total = getElement(elementId3);

    const totalCost1 = productPrice + totalPrice;
    const totalCost2 = productPrice + total;

    setElement(elementId2,totalCost1);
    setElement(elementId3,totalCost2);

}

document.getElementById('apply').addEventListener('click', function(){
    const totalPrice = getElement('total-price');

    const discount = getElement('discount')

    const total = getElement('total')

    const input = document.getElementById('input');
    const inputValue = input.value;
    input.value = '';

    if(inputValue === 'SELL200'){
        const finalAmount =  totalPrice * 0.2 - discount;
        const fixedAmount = finalAmount.toFixed(2);
        setElement('discount', fixedAmount);
        const lastTotal = total * 0.2;
        const minus = total - lastTotal;
        setElement('total',minus);
        return finalAmount;
    }
}) 

function getName(pName){
    const product = document.getElementById('p-names');
    const count = product.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-3')
    p.innerHTML = `${count + 1}. ${pName}`
    product.appendChild(p);
}