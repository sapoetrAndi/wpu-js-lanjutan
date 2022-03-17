// Fetch refactor

// refactor adalah embuat kode menjadi lebih modular agar lebih mudah dibaca dan dipahami

// sebelum di refactor
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
//     const inputKeyword = document.querySelector('.input-keyword');

//     fetch('http://www.omdbapi.com/?apikey=82d253e9&s=' + inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         // ketika tombol detail di klik
//         const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//         modalDetailButton.forEach(btn => {
//             btn.addEventListener('click', function () {
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=82d253e9&i=' + imdbid)
//                 .then(response => response.json())
//                 .then(m => {
//                     const movieDetail = showMovieDetail(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 })
//             })
//         })
//     });
// })


// setelah di refactor
const searchButton = document.querySelector('.search-button');

// keyword asyn artinya memberitahu js bahwa kode/function akan berjalan secara async, dan keyword await artinya menunggu sampai kode dieksekusi sampai selesai

searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
})

//event binding (meemberi event ke elemen yang awalnya belum ada tapi ketika elemen sudah ada event masih bisa berjalan) karena jika tidak dibinding event tidak akan bisa berjalan
document.addEventListener('click', async function(e){
    // menampilkan detail film
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIdetail(movieDetail);
    }
})

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=82d253e9&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIdetail(m){
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=82d253e9&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(res) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                    <img src="${res.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md-9">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${res.Title} (${res.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong>${res.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${res.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${res.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong> <br> ${res.Plot}</li>
                    </ul>
                    </div>
                </div>
            </div>`;
}