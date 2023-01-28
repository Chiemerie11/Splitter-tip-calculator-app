// LAYER 1 IMPLEMENTATION:
let billInputbox = document.getElementById('bill-input');
let billEnterbutton = document.getElementById('enter-bill-button');

let peopleInputbox = document.getElementById('people-input');
let peopleEnterbutton = document.getElementById('enter-people-button');

// Variables as database for values entered by user:
var billDatabase;
var peopleDatabase;

// Test for bill entry value:
billEnterbutton.addEventListener('click', function(){
    var newbillInputvalue;
    billInputbox.addEventListener('input', function(e2){
        newbillInputvalue = e2.target.value;
        newbillInputvalue = billInputbox.value;
    });

    if(!isNaN(Number(billInputbox.value))) {
        if(Number(billInputbox.value) > 0) {
            billDatabase = Number(billInputbox.value);
            console.log(billDatabase);
        } else {
            alert(`🎃 Bill: Database Error 🎃 Enter a number > 0.`);
        }
    } else {
        alert(`🎃 Bill: Database Error 🎃 Enter a VALID Number.`);
    }

    billInputbox.value = '';
});

// Test for people entry value:
peopleEnterbutton.addEventListener('click', function(){
    var newpeopleInputvalue;
    peopleInputbox.addEventListener('input', function(e1){
        newpeopleInputvalue = e1.target.value;
        newpeopleInputvalue = peopleInputbox.value;
    });

    if(!isNaN(Number(peopleInputbox.value))) {
        if(Number(peopleInputbox.value) > 0 && Number(peopleInputbox.value) % 1 === 0) {
            peopleDatabase = Number(peopleInputbox.value);
            console.log(peopleDatabase);
        } else {
            alert(`🎃 People: Database Error 🎃 Enter a WHOLE NUMBER > 0.`);
        }
    } else {
        alert(`🎃 People: Database Error 🎃 Enter a VALID Number.`);
    }
    
    peopleInputbox.value = '';
});

// Total Computed Bill global variable
var totalComputedbill;


// LAYER 2 IMPLEMENTATION:
let button5 = document.getElementById('button5%');
let tipAmountdisplay = document.getElementById('tip-amount');
let grandPaymentdisplay = document.getElementById('grand-payment-amount');

let button10 = document.getElementById('button10%');
let button15 = document.getElementById('button15%');
let button20 = document.getElementById('button20%');
let button25 = document.getElementById('button25%');
let buttonCustom = document.getElementById('custom-button');


var tipAmount;
var grandPayment;

// buttons trigger almighty function:
function buttonTriggers(arg){
    totalComputedbill = billDatabase * peopleDatabase;

    tipAmount = Number((arg * totalComputedbill).toFixed(2));
    tipAmountdisplay.innerHTML = tipAmount;
        
    grandPayment = (totalComputedbill + tipAmount);
    grandPaymentdisplay.innerHTML = grandPayment;
};

// custom button
function buttonCustomfunction(){
    if(billDatabase > 0 && peopleDatabase > 0){
        buttonTriggers(0);

        // remove other event listeners
        button5.removeEventListener('click', button5Eventfunction);
        button10.removeEventListener('click', button10Eventfunction);
        button15.removeEventListener('click', button15Eventfunction);
        button20.removeEventListener('click', button20Eventfunction);
        button25.removeEventListener('click', button25Eventfunction);        
    } else {
        alert(`Error! No entry for Bill and/or People. Kindly enter or reset and try again.`);
    }
};
buttonCustom.addEventListener('click', buttonCustomfunction);

// button5%
function button5Eventfunction(){
    if(billDatabase > 0 && peopleDatabase > 0) {
        buttonTriggers(0.05);

        // remove other event listeners
        buttonCustom.removeEventListener('click', buttonCustomfunction);
        button10.removeEventListener('click', button10Eventfunction);
        button15.removeEventListener('click', button15Eventfunction);
        button20.removeEventListener('click', button20Eventfunction);
        button25.removeEventListener('click', button25Eventfunction);
    } else {
        alert(`Error! No entry for Bill and/or People. Kindly enter or reset and try again.`);
    }   
};
button5.addEventListener('click', button5Eventfunction);

// button10%
function button10Eventfunction(){
    if(billDatabase > 0 && peopleDatabase > 0){
        buttonTriggers(0.10);

        // remove other event listeners
        buttonCustom.removeEventListener('click', buttonCustomfunction);
        button5.removeEventListener('click', button5Eventfunction);
        button15.removeEventListener('click', button15Eventfunction);
        button20.removeEventListener('click', button20Eventfunction);
        button25.removeEventListener('click', button25Eventfunction);
    } else {
        alert(`Error! No entry for Bill and/or People. Kindly enter or reset and try again.`);
    }
};
button10.addEventListener('click', button10Eventfunction);

// button15%
function button15Eventfunction(){
    if(billDatabase > 0 && peopleDatabase > 0){
        buttonTriggers(0.15);

        // remove other event listeners
        buttonCustom.removeEventListener('click', buttonCustomfunction);
        button5.removeEventListener('click', button5Eventfunction);
        button10.removeEventListener('click', button10Eventfunction);
        button20.removeEventListener('click', button20Eventfunction);
        button25.removeEventListener('click', button25Eventfunction);
    } else {
        alert(`Error! No entry for Bill and/or People. Kindly enter or reset and try again.`);
    }
};
    
button15.addEventListener('click', button15Eventfunction);

// button20%
function button20Eventfunction(){
    if(billDatabase > 0 && peopleDatabase > 0){
        buttonTriggers(0.20);

        // remove other event listeners
        buttonCustom.removeEventListener('click', buttonCustomfunction);
        button5.removeEventListener('click', button5Eventfunction);
        button10.removeEventListener('click', button10Eventfunction);
        button15.removeEventListener('click', button15Eventfunction);
        button25.removeEventListener('click', button25Eventfunction);
    } else {
        alert(`Error! No entry for Bill and/or People. Kindly enter or reset and try again.`);
    }  
};
button20.addEventListener('click', button20Eventfunction);

// button25%
function button25Eventfunction(){
    if(billDatabase > 0 && peopleDatabase > 0){
        buttonTriggers(0.25);

        // remove other event listeners
        buttonCustom.removeEventListener('click', buttonCustomfunction);
        button5.removeEventListener('click', button5Eventfunction);
        button10.removeEventListener('click', button10Eventfunction);
        button15.removeEventListener('click', button15Eventfunction);
        button20.removeEventListener('click', button20Eventfunction);
    } else {
        alert(`Error! No entry for Bill and/or People. Kindly enter or reset and try again.`);
    }
};
button25.addEventListener('click', button25Eventfunction);


// LAYER 3 IMPLEMENTATION: //
let resetButton = document.getElementsByClassName('reset-button');

resetButton[0].addEventListener('click', function(){
    tipAmountdisplay.innerHTML = 0;
    grandPaymentdisplay.innerHTML = 0;

    // Add back event listeners
    buttonCustom.addEventListener('click', buttonCustomfunction);
    button5.addEventListener('click', button5Eventfunction);
    button10.addEventListener('click', button10Eventfunction);
    button15.addEventListener('click', button15Eventfunction);
    button20.addEventListener('click', button20Eventfunction);
    button25.addEventListener('click', button25Eventfunction);

    // Clear database variables
    billDatabase = '';
    peopleDatabase = '';
});

