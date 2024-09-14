function updateItem(item, cost, adding) {
    const itemInput = document.getElementById(item + '-number');
    let itemNo = itemInput.value;
    if (adding) {
        itemNo = parseInt(itemNo) + 1;
    }
    else if (itemNo > 0) {
        itemNo = parseInt(itemNo) - 1;
    }
    itemInput.value = itemNo;

    const itemTotal = document.getElementById(item + '-total');
    itemTotal.innerText = itemNo * cost;
    calcTotal();
}

//Just in case user doesnt select travel option
function calcTotal() {
    const itemTotal = getInput('item') * 15;
    const item2Total = getInput('item2') * 55;
    const eventTotal = itemTotal + item2Total;
    const totalPrice = eventTotal;
    document.getElementById('event-total').innerText = eventTotal;
    document.getElementById('overall-total').innerText = totalPrice;
}

function getInput(item) {
    const prodInput = document.getElementById(item + '-number');
    const prodNo = parseInt(prodInput.value);
    return prodNo;
}

document.getElementById('item-sub').addEventListener('click', function () {
    updateCaseNumber('item', 15, false);
});

document.getElementById('item-add').addEventListener('click', function () {
    updateItem('item', 15, true);
});

document.getElementById('item2-sub').addEventListener('click', function () {
    updateItem('item2', 55, false);
});

document.getElementById('item2-add').addEventListener('click', function () {
    updateItem('item2', 55, true);
});

function calcTravel() {
    const trainRad = document.getElementById('train');
    const busRad = document.getElementById('bus');
    const travelTotal = document.getElementById('travel-total');
    let travelCost = 0;
    if (trainRad.checked) {
        travelCost = 4;
    } else if (busRad.checked) {
        travelCost = 2;
    }

    travelTotal.innerText = travelCost;
    calculateTotalAndTravel(travelCost);
}

function calculateTotalAndTravel(travelCost) {
    const eventTotal = parseInt(document.getElementById('event-total').innerText);
    const totalCost = document.getElementById('overall-total');
    const overallTotal = eventTotal + travelCost;
    totalCost.innerText = overallTotal;
}

document.getElementById('train').addEventListener('change', calcTravel);
document.getElementById('bus').addEventListener('change', calcTravel);
calcTravel();