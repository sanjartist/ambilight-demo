function loadVideo(src) {
  const bg = document.querySelector('.background');
  const fg = document.querySelector('.foreground');
  bg.src = src;
  fg.src = src;
  // Synchronize playback between foreground and background
  bg.pause();
  fg.pause();
  const sync = () => { bg.currentTime = fg.currentTime; };
  fg.addEventListener('play', () => bg.play());
  fg.addEventListener('pause', () => bg.pause());
  fg.addEventListener('seeked', sync);
  fg.addEventListener('timeupdate', () => {
    if (Math.abs(bg.currentTime - fg.currentTime) > 0.1) {
      bg.currentTime = fg.currentTime;
    }
  });
  document.getElementById('loader').style.display = 'none';
  document.getElementById('ambilight').style.display = 'block';
}

document.getElementById('load-url').addEventListener('click', () => {
  const url = document.getElementById('video-url').value.trim();
  if (url) {
    loadVideo(url);
  }
});

document.getElementById('video-file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    loadVideo(URL.createObjectURL(file));
  }
});
