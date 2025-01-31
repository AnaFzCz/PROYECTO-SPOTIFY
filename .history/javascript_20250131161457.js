const searchInput = document.getElementById('Search-Input');
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
      //  .then((result) => displayResults(result - artist))
}


document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLoweCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm)

});