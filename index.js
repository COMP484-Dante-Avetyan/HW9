

// Part 1

function displayDate() {
    var today = new Date();

    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    document.getElementById('dateOutput').innerHTML = "Today is " + month + '/' + day + '/' + year;
}

function testNumber(val) {
    var converted = Number(val);
    var isNaN = Number.isNaN(converted);
    var isInt = Number.isInteger(converted);

    return "Value: '" + val + "'.&nbsp; Converted: " + converted
        + ".&nbsp; isNaN: " + isNaN + ".&nbsp; isInteger: " + isInt;
}

function displayNumberConversions() {
    var val1 = "98";
    var val2 = "20.325";
    var val3 = "goodbye";
    var val4 = "2003";

    document.getElementById("numberConversionOutput").innerHTML = testNumber(val1) + "<br>"
        + testNumber(val2) + "<br>"
        + testNumber(val3) + "<br>"
        + testNumber(val4);
}


// Part 3

function displayMathAndFormat() {
    var itemPrice = 29.99;
    var taxRate = 0.08;
    var shipping = 5.00;

    var subtotal = itemPrice + shipping;
    var taxAmount = itemPrice * taxRate;
    var total = subtotal + taxAmount;

    var shippingMessage;
    if (total > 40) {
        shippingMessage = "You qualify for a loyalty discount next order!";
    } else {
        shippingMessage = "Add more items to qualify for a discount.";
    }

    document.getElementById("mathOutput").innerHTML = "Item Price: $" + itemPrice.toFixed(2)
        + "<br>Shipping: $" + shipping.toFixed(2)
        + "<br>Subtotal: $" + subtotal.toFixed(2)
        + "<br>Tax (8%): $" + taxAmount.toFixed(2)
        + "<br>Total: $" + total.toFixed(2)
        + "<br>" + shippingMessage;
}

displayDate();
displayNumberConversions();
displayMathAndFormat();