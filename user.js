let tovarr = JSON.parse(localStorage.getItem("goods"));
list = $("#list");
let clear = document.querySelector("#deletebtn");

let removetovar = (tovarrIndex) => {
    tovarr.splice(tovarrIndex, 1);
    localStorage.setItem("goods", JSON.stringify(tovarr));
    location.reload();
}
for (let i = 0; i < tovarr.length; i++) {
    list.append(` <div class="card">
        <p> Название вашего товара: ${tovarr[i].name}</p>
        <p>Цена вашего товара:${tovarr[i].price}</p>
        <p> Категория вашего товара:${tovarr[i].category}</p>
    </div>`
    )
}

clear.addEventListener('click', function () {
    localStorage.removeItem("goods");
    list.empty();
})