//memory price calculate 
function memoryPrice(memoryID){
    const price = 0;
    if(memoryID+'-memory'=='defalut-memory'){
        document.getElementById('memoryPrice').innerText=price;
    }
    else if(memoryID+'-memory'=='customized-memory'){
        document.getElementById('memoryPrice').innerText=price+180;
    }
    totalPrice();
}

//storage price calculate
function storagePrice(storageID){
    const price = 0;
    if(storageID+'-storage'=='default-storage'){
        document.getElementById('storagePrice').innerText=price;
    }
    else if(storageID+'-storage'=='customized1-storage'){
        document.getElementById('storagePrice').innerText=price+100;
    }
    else if(storageID+'-storage'=='customized2-storage'){
        document.getElementById('storagePrice').innerText=price+180;
    }
    totalPrice()
}

//delivery charges calculate
function deliveryCharges(deliveryID){
    const charge = 0;
    if(deliveryID+'Delivery'=='freeDelivery'){
        document.getElementById('chargePrice').innerText=charge;
    }
    else if(deliveryID+'Delivery'=='chargesDelivery'){
        document.getElementById('chargePrice').innerText=charge+20;
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

//apply promo code
document.getElementById('discounted-btn').addEventListener('click',function(){
    let subTotal = parseInt(document.getElementById('discounted-price').innerText);
    const promoCode = 'stevekaku';
    const userInput = document.getElementById('promo-code').value;
    if(promoCode ==userInput){
        const discount = subTotal-(subTotal*.2);
        document.getElementById('discounted-price').innerText=discount;
    }
    else{
        alert('Right Valid Promo Code');
    }
})