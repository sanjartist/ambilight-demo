function loadVideo(src) {
  const bg = document.querySelector('.background');
  const fg = document.querySelector('.foreground');
  bg.src = src;
  fg.src = src;
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
