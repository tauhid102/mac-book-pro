//memory price calculate 
function memoryPrice(memoryID){

    if(memoryID+'-memory'=='defalut-memory'){
        document.getElementById('memoryPrice').innerText=0;
    }
    else if(memoryID+'-memory'=='customized-memory'){
        document.getElementById('memoryPrice').innerText=180;
    }
    totalPrice();
}

//storage price calculate
function storagePrice(storageID){
    
    if(storageID+'-storage'=='default-storage'){
        document.getElementById('storagePrice').innerText=0;
    }
    else if(storageID+'-storage'=='customized1-storage'){
        document.getElementById('storagePrice').innerText=100;
    }
    else if(storageID+'-storage'=='customized2-storage'){
        document.getElementById('storagePrice').innerText=180;
    }
    totalPrice()
}

//delivery charges calculate
function deliveryCharges(deliveryID){
    
    if(deliveryID+'Delivery'=='freeDelivery'){
        document.getElementById('chargePrice').innerText=0;
    }
    else if(deliveryID+'Delivery'=='chargesDelivery'){
        document.getElementById('chargePrice').innerText=20;
    }
    totalPrice()
}

//total price calculate
function totalPrice(){

    const mackbookPrice = parseInt(document.getElementById('macbookPrice').innerText);
    const memorysPrice = parseInt(document.getElementById('memoryPrice').innerText);
    const storagesPrice = parseInt(document.getElementById('storagePrice').innerText);
    const deliveryCost = parseInt(document.getElementById('chargePrice').innerText);
    const total = mackbookPrice+memorysPrice+storagesPrice+deliveryCost;
    document.getElementById('total-price').innerText=total;
    document.getElementById('discounted-price').innerText=total;

}

//memory customize events
document.getElementById('defalut-memory').addEventListener('click',function(){
    memoryPrice('defalut');
})
document.getElementById('customized-memory').addEventListener('click',function(){
    memoryPrice('customized');
})

//storage customize events
document.getElementById('default-storage').addEventListener('click',function(){
    storagePrice('default');
})
document.getElementById('customized1-storage').addEventListener('click',function(){
    storagePrice('customized1');
})
document.getElementById('customized2-storage').addEventListener('click',function(){
    storagePrice('customized2');
})

//delivery chargre events
document.getElementById('freeDelivery').addEventListener('click',function(){
    deliveryCharges('free');
})
document.getElementById('chargesDelivery').addEventListener('click',function(){
    deliveryCharges('charges');
})

//apply promo code apply
document.getElementById('discounted-btn').addEventListener('click',function(){
    const totalPriceText = document.getElementById('total-price');
    const price = parseFloat(totalPriceText.innerText);
    const userInputField = document.getElementById('promo-code');
    const userInput = userInputField.value;
    if('stevekaku' == userInput){
        const discount = price-(price*.2);
        document.getElementById('discounted-price').innerText=discount;
        userInputField.value='';
    }
    else{
        alert('Right Valid Promo Code');
        userInputField.value=''
        
    }
})