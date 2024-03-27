// TEST
// alert ('ciao')

const rowElem = document.querySelector(".row") //object |null
console.log(rowElem, typeof rowElem)
// 1.stampo in cosnole i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    let bgClass;
    let wordChange;

    if (i % 15 === 0) {
        bgClass = "divisible15";
        console.log("FizzBuzz");
        wordChange = "FizzBuzz"
    } else if (i % 5 === 0) {
        bgClass = "divisible5";
        wordChange = "Buzz"
    } else if (i % 3 === 0) {
        bgClass = "divisible3";
        wordChange = "Fizz"
    } else {
        bgClass;
        i;
    }


    // const boxElem = `<div class="box ${bgClass}"> ${i} </div>`
    // console.log(boxElem);
    // rowElem.innerHTML += boxElem

    const boxElem = document.createElement("div"); // object
    boxElem.innerHTML = i;
    boxElem.innerHTML = wordChange
    boxElem.classList.add("box");
    boxElem.classList.add(bgClass);
    console.log(boxElem);

    // stampa dell'elemento in pagina
    rowElem.append(boxElem);
}
