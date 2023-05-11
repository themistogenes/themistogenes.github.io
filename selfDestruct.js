console.log('Self-Destruct script working...');

// ========== Self-Destruct ==========

const selfDestruct = function() {

  console.log('Self-Destruct has been initiated!');
  
  if(document.getElementById('music-button').classList.contains('music-on')) {
    music.pause();
    console.log('Music has been turned off via Self-Destruct.');
  }  

  var gameOverMusic = new Audio('assets/game-over.wav');
  gameOverMusic.currentTime = 2;
  gameOverMusic.play();
  
  if(!document.getElementById('content-div').classList.contains('crt')) {
    document.body.style.background = "red";
  }
  
  if(document.getElementById('content-div').classList.contains('crt')) {
    document.getElementById('content-div-container').style.height = "85vh";
    document.getElementById('content-div-container').style.width = "85vw";
  }
  
  document.getElementById('content-div-container').style.backgroundColor = "red";
  document.getElementById('content-div').style.backgroundColor = "red";
  document.getElementById('content-div').style.overflowX = "hidden";
  document.getElementById('content-div').style.overflowY = "auto";
  document.getElementById('about-me-div-border').style.background = "none";
  document.getElementById('toolkit-div').style.backgroundColor = "red";
  document.getElementById('toolkit-div').style.backgroundImage = "none";
  document.getElementById('mini-projects-div').style.backgroundColor = "red";
  document.getElementById('mini-projects-div').style.backgroundImage = "none";
  document.getElementById('cert-and-ed-div').style.backgroundColor = "red";
  document.getElementById('chat-lounge-display-div-bg').style.backgroundColor = "red";
  
  if(document.getElementById('screensaver-logo')) {
    document.getElementById('screensaver-logo').remove();
  }
  if(document.getElementById('screensaver-logo-crt')) {
    document.getElementById('screensaver-logo-crt').remove();
  }
  
  setTimeout(() => {document.getElementById('footer-div').remove()}, 200);
  setTimeout(() => {document.getElementById('self-destruct-div').remove()}, 400);
  setTimeout(() => {document.getElementById('chat-lounge-div').remove()}, 600);
  setTimeout(() => {document.getElementById('cert-and-ed-div').remove()}, 800);
  setTimeout(() => {document.getElementById('mini-projects-div').remove()}, 1000);
  setTimeout(() => {document.getElementById('projects-div').remove()}, 1200);
  setTimeout(() => {document.getElementById('toolkit-div').remove()}, 1400);
  setTimeout(() => {document.getElementById('video-div').remove()}, 1600);
  setTimeout(() => {document.getElementById('about-me-div-border').remove()}, 1800);
  setTimeout(() => {document.getElementById('navigation-div').remove()}, 2000);
  setTimeout(() => {document.getElementById('dev-name-div').remove()}, 2200);
  setTimeout(() => {document.getElementById('dev-initials-div').remove()}, 2400);
  
  // setTimeout(() => {
  //   document.getElementById('last-div-standing').style.display = "flex";
  //   document.getElementById('last-div-standing').style.alignItems = "center";
  //   document.getElementById('last-div-standing').style.justifyContent = "center";
  // }, 2000);
  
  setTimeout(() => {
    if(!document.getElementById('content-div').classList.contains('crt')) {
      document.body.style.backgroundImage = "url('assets/game-over-l-edited.jpg')";
      document.body.style.backgroundSize = "100vw 100vh";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    if(document.getElementById('content-div').classList.contains('crt')) {
      document.getElementById('content-div-container').style.backgroundImage = "url('assets/game-over-l-edited.jpg')";
      document.getElementById('content-div-container').style.backgroundPosition = "top center";
      document.getElementById('content-div-container').style.backgroundSize = "100% 100%";
      document.getElementById('content-div-container').style.backgroundRepeat = "no-repeat";
    }
  }, 2000);
  
  }
  
  const SDbtn = document.getElementById('self-destruct-button');
  SDbtn.addEventListener('click', selfDestruct);