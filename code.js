// send get api
function pingApi(term){
    fetch(`https://api.github.com/users/${term}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("An error occured! Please Try again later"));
}
// display results for searched handle
function displayResults(response){
    $('.not-found').addClass('hidden');
    // if the handle isnt found
    if(response.message === "Not Found"){
        $('.not-found').removeClass('hidden');
    }else{
        $(".found").show();
        response.forEach(function (repo) {
            
        $(".found").append(`<div class="results">
            <p>${repo.full_name}</p>
            <a href='${repo.html_url}' target="_blank">Repo Link</a>
            </div>`);
        });
    }
      
}

function watchForm(){
    $(document).on('submit', 'form', function(e){
        e.preventDefault();
        $('.results').remove();
        let term = $('#search-term').val();
        pingApi(term);
    });
}

(function(){
    watchForm();
}());