let namee = document.querySelector("#tovarNamee")
let price = document.querySelector("#tovarPrice")
let category = document.querySelector("#tovarCategory")
let dobavka = document.querySelector("#tovarDobavka")
let stranbtn = document.querySelector("#secstran")

dobavka.addEventListener('click', function () {
    let tovar = {
        name: namee.value,
        price: price.value,
        category: category.value
    }
    let tovarray = JSON.parse(localStorage.getItem("goods"));
    if (tovarray === null) {
        tovarray = [];
    };
    tovarray.push(tovar);
    localStorage.setItem("goods", JSON.stringify(tovarray));
    console.log(tovarray)
})

stranbtn.addEventListener('click', function () {
    window.location.href = "user.html"
})