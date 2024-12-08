function calc()
{

    var A = document.getElementById("num1").value;
    var B = 10 - (A / 3);
    var C = (B * 3) / 2;
    if(A > 20)
    {
    C="First > 20"
    }
    document.getElementById("result").innerHTML = C;
}