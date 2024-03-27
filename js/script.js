// TEST
// alert ('ciao')

const rowElem = document.querySelector(".row") //object |null
console.log(rowElem, typeof rowElem)
// 1.stampo in cosnole i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    let bgClass;

    if (i % 15 === 0) {
        bgClass = "divisible15";
    } else if (i % 5 === 0) {
        bgClass = "divisible5";
    } else if (i % 3 === 0) {
        bgClass = "divisible3";
    } else{
        bgClass
    }


    const boxElem = `<div class="box ${bgClass}"> ${i}</div>`
    console.log(boxElem);
    rowElem.innerHTML += boxElem

    
}

