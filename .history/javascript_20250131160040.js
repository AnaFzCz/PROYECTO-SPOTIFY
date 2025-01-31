const searchInput = document.getElementById('Search-Input');
const resultArtist = document.getElementById ('result-artist')
const resultPlaylist = document.getElementById('result-playlist');

document.addEventListener('input', function(){
const searchTerm =searchInput.value.toLoweCase();
if(searchTerm ===''){
resultPlaylist.classList.add('hidden');
resultArtist.classList.remove('hidden');
}
})