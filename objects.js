var playlist = { "Oasis" : "Wonderwall" }

function updatePlaylist(playlist, artistName, songTitle) {
  return {[artistName]:songTitle} 
  
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
  
}