// TEST
// alert ('ciao')

const rowElem = document.querySelector(".row") //object |null
console.log(rowElem, typeof rowElem)
// 1.stampo in cosnole i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    let bgClass;
    let wordChange;

    if  ((i % 3 === 0) && (i % 5=== 0)) {
        bgClass = "divisible35";
        wordChange = "FizzBuzz";
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        bgClass = "divisible3";
        wordChange = "Buzz";
        console.log("Buzz");
    } else if (i % 5 === 0) {
        bgClass = "divisible5";
        wordChange = "Fizz";
        console.log("Fizz");
    } else {
        wordChange = i
    }


    // const boxElem = `<div class="box ${bgClass}"> ${i} </div>`
    // console.log(boxElem);
    // rowElem.innerHTML += boxElem
    
    const boxElem = document.createElement("div"); // object
    boxElem.innerHTML = wordChange;
    boxElem.classList.add("box");
    boxElem.classList.add(bgClass);
    console.log(boxElem);

    // per inserire l'elemento nell'elemento genitore in pagina 
    rowElem.append(boxElem);
}
