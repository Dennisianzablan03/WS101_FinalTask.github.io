function addNumbers()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").value = sum;
}
function subNumbers()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    difference = parseInt(num1)-parseInt(num2);
    document.getElementById("result").value = difference;
}
function mulNumbers()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    product = parseInt(num1)*parseInt(num2);
    document.getElementById("result").value = product;
}
function divNumbers()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    quotient = parseInt(num1)/parseInt(num2);
    document.getElementById("result").value = quotient;
}
function clearBtn()
{
    document.getElementById("num1").value = " ";
    document.getElementById("num2").value = " ";
    document.getElementById("result").value = " ";
}
function aboutBtn()
{
    alert("Work of Dennis Ian Zablan");
}


function Process()
{
 productCost = 15.97;
 
 numberOfItems = (document.getElementById("numOfItems").value);
 totalCostOfItems = parseFloat(productCost)*parseFloat(numberOfItems);
 document.getElementById("show_numOfItems").innerHTML = numberOfItems;
 document.getElementById("itemCost").innerHTML = "$" + totalCostOfItems.toFixed(2);
 
 shippingHandlingFee = 4.99;
 totalBeforeTax = parseFloat(totalCostOfItems)+parseFloat(shippingHandlingFee);
 document.getElementById("totalBeforeTax").innerHTML = "$" + totalBeforeTax.toFixed(2);

 tax = Math.round(parseFloat(totalBeforeTax)*10)/100;
 document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);

 overallCost = parseFloat(totalBeforeTax)+parseFloat(tax);
 document.getElementById("overallCost").innerHTML = "$" + overallCost.toFixed(2);

}
