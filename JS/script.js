let content = JSON.parse(cards);
console.table(cards);

function updateHTML(arr) {
    document.getElementById("result").innerHTML = "";
    for (let x of arr) {
        document.getElementById("result").innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card h-100" style="width: 18rem;">
    <div class="card-header">
    <button type="button" class="btn btn-info">Task</button>
    <div class="icons justify-content-end">
        <i class="fa-solid fa-bookmark"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i></div>

</div>
  <img src="${x.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${x.taskName}</h5>
    <p class="card-text">${x.description}.</p>
    
  </div>
  <hr>
  <div class="card-footer">
  <p><i class="fa-solid fa-triangle-exclamation"></i> Priority Level: <button type="button" class="btn btn-success">"${importance}"</button></p>
  <p><i class="fa-solid fa-calendar-days"></i> Deadline: 15.06.2022</p>
  <hr>
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can justify-content-end"></i> Delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-circle-check justify-content-end"></i> Done</button>

</div>
</div>
</div>
    `;
    }
    likeAction();
}