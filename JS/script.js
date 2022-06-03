const cardContents = JSON.parse(cards);
const content = document.querySelector(".content");

function coloring(ime) {
    content.innerHTML = "";
    for (let cards of ime) {
        if (cards.importance <= 1) {
            color = "bg-success";
        } else if (cards.importance <= 3) {
            color = "bg-warning";
        } else {
            color = "bg-danger";
        }
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
  <i class="fa-solid fa-triangle-exclamation druck"></i> Priority Level:<p class="mx-1 px-2 ${color} rounded neew"> ${cards.importance}</p>
  <p><i class="fa-solid fa-calendar-days"></i> Deadline: 15.06.2022</p>
  <hr>
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can justify-content-end"></i> Delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-circle-check justify-content-end"></i> Done</button>
</div>
</div>
</div>
    `;
    }
    work();
}

function work() {
    let nesto = document.getElementsByClassName("druck");
    for (let i = 0; i < nesto.length; i++) {
        nesto[i].addEventListener("click", function() {
            cardContents[i].importance++;
            document.getElementsByClassName("neew")[i].innerHTML = cardContents[i].importance;
            var red = cardContents.slice((a, b) => b.importance - a.importance);
            coloring(red);
        });
    }
}
coloring(cardContents);
work();

function sortfun() {
    cardContents.sort(function(min, max) {
        return max.importance - min.importance;
    })
}
document.getElementsByClassName('sortingList').addEventListener("click", function() {
    sortfun();
    coloring(cardContents);
});