function convert() {
    let cm = Number(document.getElementById("input").value)

    let inch = cm / 2.54

    let result = document.getElementById("result")

    result.innerHTML = inch.toFixed(2) + "Inch"
}


function call() {
    let cel = Number(document.getElementById("input2").value)

    let fa = (cel * 9/5) + 32

    let result2 = document.getElementById("result2")

    result2.innerHTML = fa + "Fa"
}

function Add() {
    var a,b,c
    a = parseInt(t1.value)
    b = parseInt(t2.value)
    c = a + b
    t3.value = c
}