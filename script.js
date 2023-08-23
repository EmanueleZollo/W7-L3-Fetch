fetch("https://striveschool-api.herokuapp.com/books")
  .then((bookInfo) => bookInfo.json())
  .then((singleBook) => {
    let row = document.querySelector(".row");

    singleBook.forEach((book) => {
      let bookTitle = book.title;
      let bookImg = book.img;
      let bookPrice = book.price;

      const col = document.createElement("div");
      col.className = "col-md-4 col-lg-3";

      col.innerHTML = `<div class="card">
  <img src=${bookImg} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${bookTitle}</h5>
    <p class="card-text">${bookPrice}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
    });
  })
  .catch((error) => console.log(error));
