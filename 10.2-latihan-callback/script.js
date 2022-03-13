$(".search-button").on('click', function () {
    $.ajax({
        url:"http://www.omdbapi.com/?apikey=82d253e9&s=" + $(".input-keyword").val(),
        success: results => {
            console.log(results);
            const movies = results.Search;
            let cards = '';
            if(typeof(movies) != "undefined" && movies !== null){
                movies.forEach(m => {
                    cards += showCards(m);
                });
                $(".movie-container").html(cards);
            }
    
            // note : jika kita menggunakan event listener disarankan tidak menggunakan arrow function karena tidak memiliki konteks this, karena terkadang kita butuh this
            $('.modal-detail-button').on('click', function () {
                // console.log($(this).data('imdbid'));
                const imdbid = $(this).data('imdbid');
                $.ajax({
                    url:"http://www.omdbapi.com/?apikey=82d253e9&i="+imdbid,
                    success: res => {
                        const movieDetail = showMovieDetail(res);
                        $(".modal-body").html(movieDetail);
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                })
            })
        },
        error: e => {
            console.log(e.responseText);
        }
    })
})



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