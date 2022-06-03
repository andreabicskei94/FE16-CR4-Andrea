const cardContents = JSON.parse(cards);
const content = document.querySelector(".content");

const content_2 = document.querySelector(".ruf");


function call(x) {
    content_2.innerHTML = "";
    for (let cards of x) {
        if (cards.importance <= 1) {
            color = "bg-success";
        } else if (cards.importance <= 3) {
            color = "bg-warning";
        } else {
            color = "bg-danger";
        }
    }
}



function funy(x) {
    content.innerHTML = "";
    for (let cards of x) {
        content.innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12 g-4">
    <div class="card h-100" style="width: 18rem;">
    <div class="card-header">
    <button type="button" class="btn btn-info">Task</button>
    <div class="icons justify-content-end">
        <i class="fa-solid fa-bookmark"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i></div>
</div>
  <img src="${cards.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cards.taskName}</h5>
    <p class="card-text">${cards.description}.</p>
  </div>
  <hr>
  <div class="card-footer">
  <p><i class="fa-solid fa-triangle-exclamation"></i> Priority Level: <button type="button" class="btn btn-success">"${cards.importance}"</button></p>
  <p><i class="fa-solid fa-calendar-days"></i> Deadline: 15.06.2022</p>
  <hr>
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can justify-content-end"></i> Delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-circle-check justify-content-end"></i> Done</button>
</div>
</div>
</div>
    `;
    }


}
funy(cardContents);
trool();

function action() {
    let btns = document.getElementsByClassName("b-likes");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            cardContents[i].importance++;

            document.getElementsByClassName("importance")[i].innerHTML = cardContents[i].importance;

            var sortedArray = cardContents.slice((a, b) => b.importance - a.importance);
            call(sortedArray);
        });
    }
}
call(cardContents);
action();

function sortpr() {
    cardContents.sort(function(a, v) {
        return v.importance - a.importance;
    })
}

document.querySelector(".lokas").addEventListener("click", function() {
    sortpr();
    call(cardContents);
});