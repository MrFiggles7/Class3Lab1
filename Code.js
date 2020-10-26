var bookFee = .25;
var dvdFee = .50;
var total = 0;


function AddItems()
{
    var books = parseFloat(prompt("How many books are you returning?"));
    var dvd = parseFloat(prompt("How many DVDs are you returning?"));
    var daysLate = parseFloat(prompt("How many days late are these items?"));

    total += books * bookFee;
    total += dvd * dvdFee;
    var newTotal = total * daysLate;

    total = newTotal;
}

function PrintTotal()
{
    alert(`You owe: $${total.toFixed(2)}`);
}