// send get api
function pingApi(term){
    fetch(`https://api.github.com/users/${term}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("An error occured! Please Try again later"));
}
// display results for searched handle
function displayResults(response){
    console.log(response.fullname);
    
    console.log(response);
    $('.not-found').addClass('hidden');
    // if the handle isnt found
    if(response.message === "Not Found"){
        $('.not-found').removeClass('hidden');
    }else{
        $(".found").show();
        response.forEach(function (repo) {
            console.log(repo.html_url);
            $(".found").append(`<div class="results">
        <p>${repo.full_name}</p>
        <a href='${repo.html_url}' target="_blank">Repo Link</a>
        </div>`);
            console.log('finished');
        });
    }
    
    
}

function watchForm(){
    console.log("awaiting instructions");
    $(document).on('submit', 'form', function(e){
        e.preventDefault();
        $('.results').remove();
        let term = $('#search-term').val();
        console.log(term);
        pingApi(term);
    });
}

(function(){
    watchForm();
}());