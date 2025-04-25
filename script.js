let musicData = {
    musics: [
      {
        id: 1,
        name: "Macan - Кино",
        img: { url: "image copy.png" },
        audio: { url: "music/Passenger - Let Her Go.mp3" }
      },
      {
        id: 2,
        name: "Macan - Другое",
        img: { url: "image.png" },
        audio: { url: "music/Cygo - Panda E.mp3" }
      },
      {
        id: 3,
        name: "i dontknow - Unknown",
        img: { url: "image copy 2.png" },
        audio: { url: "music/Pitbull ft, Ne-Yo.mp3" }
      }
    ]
  };
  
  let audio = document.getElementById('audio');
  let coverImage = document.getElementById('cover');
  let title = document.getElementById('title');
  let artist = document.getElementById('artist');
  let trackList = document.getElementById('trackList');
  let playPauseButton = document.getElementById('playPause');
  
  let currentTrackIndex = 0;
  
  function loadTrack(index) {
    let track = musicData.musics[index];
    title.textContent = track.name;
    artist.textContent = "Artist: Unknown";
    coverImage.src = track.img.url;
    audio.src = track.audio.url;
    trackList.value = index;
    playPauseButton.textContent = "Play";
  }
  
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "Pause";
    } else {
      audio.pause();
      playPauseButton.textContent = "Play";
    }
  }
  
  function next() {
    currentTrackIndex = (currentTrackIndex + 1) % musicData.musics.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  
  function previous() {
    currentTrackIndex = (currentTrackIndex - 1 + musicData.musics.length) % musicData.musics.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  
  function onTrackChange(index) {
    currentTrackIndex = parseInt(index);
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  
  function populateTrackList() {
    musicData.musics.forEach((track, index) => {
      let option = document.createElement('option');
      option.value = index;
      option.textContent = track.name;
      trackList.appendChild(option);
    });
  }
  
  populateTrackList();
  loadTrack(currentTrackIndex);
  