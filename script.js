console.log('Main script working...');

// Fix margin-left on #dev-logo-div

function updateDevLogoDiv() {
  console.log('original devLogoDiv margin-left: ' + document.getElementById('dev-logo-div').getBoundingClientRect().left);

  document.getElementById('dev-logo-div').style.marginLeft = 0;

  var newMarginLeft = ((document.getElementById('content-div').getBoundingClientRect().width - document.getElementById('dev-logo-div').getBoundingClientRect().width) * .5);

  document.getElementById('dev-logo-div').style.marginLeft = newMarginLeft + 'px';

  console.log('new devLogoDiv margin-left: ' + document.getElementById('dev-logo-div').getBoundingClientRect().left);
}

updateDevLogoDiv();

window.addEventListener('resize', () => {
  updateDevLogoDiv();
})

document.getElementById('crt-button').addEventListener('click', () => {
  setTimeout(updateDevLogoDiv, 1);
})

// ******************************************************************

// Add music and control via play/pause button

/* Music: "Generic Futuristic Hero's Theme", by Marc Armitage */
var music = new Audio('assets/generic-futuristic-heros-theme.flac');
var timeAtPause;

document.getElementById('music-button').addEventListener('click', () => {
  
  if(document.getElementById('music-button').classList.contains('music-on')){
    document.getElementById('music-button').classList.toggle('music-on');
    timeAtPause = music.currentTime;
    music.pause();
    console.log('Music has been paused at ' + timeAtPause + '.');
  } else {
    document.getElementById('music-button').classList.toggle('music-on');
    if(timeAtPause > 5) {
      music.currentTime = timeAtPause;
      console.log('Music re-started at ' + timeAtPause + '.');
    } else {
      music.currentTime = 5;
      console.log('Music starting from beginning.');
    }
    music.loop = true;
    music.play();
    console.log('Music has been turned on.');
  }

})

// ******************************************************************

// Set scroll behavior for 'links' in the navbar

document.getElementById('nav-item-about-me').addEventListener('click', () => {
  if(document.getElementById('content-div').classList.contains('crt')) {
    document.getElementById('content-div').scroll(0, (document.getElementById('about-me-div-border').offsetTop - 62 - document.getElementById('content-div').offsetTop));
  } else {
    window.scroll(0, (document.getElementById('about-me-div-border').offsetTop - 62));
  }
})
document.getElementById('nav-item-toolkit').addEventListener('click', () => {
  if(document.getElementById('content-div').classList.contains('crt')) {
    document.getElementById('content-div').scroll(0, (document.getElementById('toolkit-div').offsetTop - 62 - document.getElementById('content-div').offsetTop));
  } else {
    window.scroll(0, (document.getElementById('toolkit-div').offsetTop - 62));
  }
})
document.getElementById('nav-item-projects').addEventListener('click', () => {
  if(document.getElementById('content-div').classList.contains('crt')) {
    document.getElementById('content-div').scroll(0, (document.getElementById('projects-div').offsetTop - 62 - document.getElementById('content-div').offsetTop));
  } else {
    window.scroll(0, (document.getElementById('projects-div').offsetTop - 62));
  }
})
document.getElementById('nav-item-cert-and-ed').addEventListener('click', () => {
  if(document.getElementById('content-div').classList.contains('crt')) {
    document.getElementById('content-div').scroll(0, (document.getElementById('cert-and-ed-div').offsetTop - 62 - document.getElementById('content-div').offsetTop));
  } else {
    window.scroll(0, (document.getElementById('cert-and-ed-div').offsetTop - 62));
  }
})
document.getElementById('nav-item-?').addEventListener('click', () => {
  if(document.getElementById('content-div').classList.contains('crt')) {
    document.getElementById('content-div').scroll(0, (document.getElementById('chat-lounge-div').offsetTop - 62 - document.getElementById('content-div').offsetTop));
  } else {
    window.scroll(0, (document.getElementById('chat-lounge-div').offsetTop - 62));
  }
})

// ******************************************************************

// Make 'hover' effects for the video

document.getElementById('intro-video-div').style.background = 'none';

document.getElementById('video-div').addEventListener('mouseover', () => {
  document.getElementById('intro-video-div').style.backgroundColor = 'rgba(57, 255, 20, .05)';
})
document.getElementById('video-div').addEventListener('mouseleave', () => {
  document.getElementById('intro-video-div').style.background = 'none';
})

document.getElementById('intro-video').addEventListener('mouseover', () => {
  document.getElementById('intro-video-screen').style.display = 'none';
})
document.getElementById('intro-video').addEventListener('mouseleave', () => {
  document.getElementById('intro-video-screen').style.display = 'block';
  
})

// ******************************************************************

// Make 'hover' effects for items in the toolkit, so the pixelated image is replaced with a non-pixelated image

document.getElementById('badge-1').addEventListener('mouseover', () => {
  document.getElementById('badge-1-img-a').style.display = 'none';
  document.getElementById('badge-1-img-b').style.display = 'inline';
})
document.getElementById('badge-1').addEventListener('mouseleave', () => {
  document.getElementById('badge-1-img-b').style.display = 'none';
  document.getElementById('badge-1-img-a').style.display = 'inline';
})

document.getElementById('badge-2').addEventListener('mouseover', () => {
  document.getElementById('badge-2-img-a').style.display = 'none';
  document.getElementById('badge-2-img-b').style.display = 'inline';
})
document.getElementById('badge-2').addEventListener('mouseleave', () => {
  document.getElementById('badge-2-img-b').style.display = 'none';
  document.getElementById('badge-2-img-a').style.display = 'inline';
})

document.getElementById('badge-3').addEventListener('mouseover', () => {
  document.getElementById('badge-3-img-a').style.display = 'none';
  document.getElementById('badge-3-img-b').style.display = 'inline';
})
document.getElementById('badge-3').addEventListener('mouseleave', () => {
  document.getElementById('badge-3-img-b').style.display = 'none';
  document.getElementById('badge-3-img-a').style.display = 'inline';
})

document.getElementById('badge-4').addEventListener('mouseover', () => {
  document.getElementById('badge-4-img-a').style.display = 'none';
  document.getElementById('badge-4-img-b').style.display = 'inline';
})
document.getElementById('badge-4').addEventListener('mouseleave', () => {
  document.getElementById('badge-4-img-b').style.display = 'none';
  document.getElementById('badge-4-img-a').style.display = 'inline';
})

document.getElementById('badge-5').addEventListener('mouseover', () => {
  document.getElementById('badge-5-img-a').style.display = 'none';
  document.getElementById('badge-5-img-b').style.display = 'inline';
})
document.getElementById('badge-5').addEventListener('mouseleave', () => {
  document.getElementById('badge-5-img-b').style.display = 'none';
  document.getElementById('badge-5-img-a').style.display = 'inline';
})

document.getElementById('badge-6').addEventListener('mouseover', () => {
  document.getElementById('badge-6-img-a').style.display = 'none';
  document.getElementById('badge-6-img-b').style.display = 'inline';
})
document.getElementById('badge-6').addEventListener('mouseleave', () => {
  document.getElementById('badge-6-img-b').style.display = 'none';
  document.getElementById('badge-6-img-a').style.display = 'inline';
})

document.getElementById('badge-7').addEventListener('mouseover', () => {
  document.getElementById('badge-7-img-a').style.display = 'none';
  document.getElementById('badge-7-img-b').style.display = 'inline';
})
document.getElementById('badge-7').addEventListener('mouseleave', () => {
  document.getElementById('badge-7-img-b').style.display = 'none';
  document.getElementById('badge-7-img-a').style.display = 'inline';
})

document.getElementById('badge-8').addEventListener('mouseover', () => {
  document.getElementById('badge-8-img-a').style.display = 'none';
  document.getElementById('badge-8-img-b').style.display = 'inline';
})
document.getElementById('badge-8').addEventListener('mouseleave', () => {
  document.getElementById('badge-8-img-b').style.display = 'none';
  document.getElementById('badge-8-img-a').style.display = 'inline';
})

document.getElementById('badge-9').addEventListener('mouseover', () => {
  document.getElementById('badge-9-img-a').style.display = 'none';
  document.getElementById('badge-9-img-b').style.display = 'inline';
})
document.getElementById('badge-9').addEventListener('mouseleave', () => {
  document.getElementById('badge-9-img-b').style.display = 'none';
  document.getElementById('badge-9-img-a').style.display = 'inline';
})