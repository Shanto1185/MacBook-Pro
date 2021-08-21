//for memory cost
function getMemoryCost (extended){
    const storageCost = parseFloat(document.getElementById('sotrage-cost').innerText);
    const previousDeliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if(extended == true){
        document.getElementById('extra-memory-cost').innerText = 180;
        const totalAmmount = 1299 + 180 + storageCost + previousDeliveryCost;
        document.getElementById('total-price').innerText = totalAmmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }
    else if(extended == false){
        document.getElementById('extra-memory-cost').innerText = 0;
        const totalAmmount = 1299 + 0 + storageCost + previousDeliveryCost;
        document.getElementById('total-price').innerText = totalAmmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }
}

document.getElementById('extended-memory').addEventListener('click', function(){

    getMemoryCost (true);
})
document.getElementById('base-memory').addEventListener('click', function(){

    getMemoryCost (false);
})

//for storage cost
function getStorageCost(value){

    const memoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const previousDeliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if(value == 180){
        document.getElementById('sotrage-cost').innerText = 180;
        const totalAmount = 1299 + 180 + memoryCost + previousDeliveryCost;
        document.getElementById('total-price').innerText = totalAmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }
    else if(value == 100){
        document.getElementById('sotrage-cost').innerText = 100;
        const totalAmount = 1299 + 100 + memoryCost + previousDeliveryCost;
        document.getElementById('total-price').innerText = totalAmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }
    else if (value == 0){
        document.getElementById('sotrage-cost').innerText = 0;
        const totalAmount = 1299 + 0 + memoryCost + previousDeliveryCost;
        document.getElementById('total-price').innerText = totalAmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }
}

document.getElementById('extended-storage').addEventListener('click', function(){

    getStorageCost(180);

})
document.getElementById('second-storage').addEventListener('click', function(){

    getStorageCost(100);

})
document.getElementById('base-storage').addEventListener('click', function(){

    getStorageCost(0);

})

//for delivery cost
function getDelivetyCost(option){

    const memoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('sotrage-cost').innerText);

    if(option == true){
        document.getElementById('delivery-cost').innerText = 20;
        const totalAmount = 1299 + 20 + memoryCost + storageCost;
        document.getElementById('total-price').innerText = totalAmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }
    else if (option == false){
        document.getElementById('delivery-cost').innerText = 0;;
        const totalAmount = 1299 + 0 + memoryCost + storageCost;
        document.getElementById('total-price').innerText = totalAmount;
        document.getElementById('discount-price').innerText = totalAmount;
    }

}

document.getElementById('fast-delivey').addEventListener('click', function(){
    
    getDelivetyCost(true);

})
document.getElementById('prime-delivey').addEventListener('click', function(){
    
    getDelivetyCost(false);
})


//for promo code button
document.getElementById('apply-btn').addEventListener('click', function(){
    const totalAmmount = parseFloat(document.getElementById('total-price').innerText);
    const inputValue = document.getElementById('promo-code').value;
    if(inputValue == 'stevekaku'){
        document.getElementById('discount-price').innerText = totalAmmount - (totalAmmount * 0.2)
    }
    document.getElementById('promo-code').value = '';
})