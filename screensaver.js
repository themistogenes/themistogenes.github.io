console.log('Screensaver script working...');

// ========== Enable Screensaver ==========

const enableSS = function() {

  if(document.getElementById('content-div').classList.contains('crt')) {
    var logo = document.getElementById('screensaver-logo-crt');
  } else {
    var logo = document.getElementById('screensaver-logo');
  }

  logo.style.display = 'block';

  logo.style.width = .30*100;
  logo.style.height = (window.getComputedStyle(document.getElementById('banner-div')).height)
  
  const FPS = 100;
  
  document.getElementById('content-div').style.opacity = .5;
  document.getElementById('banner-div').style.background = 'none';
  
  if(document.getElementById('content-div').classList.contains('crt')) {
    var xPosition = document.getElementById('content-div').getBoundingClientRect().left + document.getElementById('content-div').getBoundingClientRect().width - logo.clientWidth;
    var yPosition = document.getElementById('content-div').getBoundingClientRect().top + 1;
  } else {
    var xPosition = window.innerWidth - logo.clientWidth;
    var yPosition = window.visualViewport.pageTop + 1;
  }
  
  document.getElementById('crt-button').addEventListener('click', () => {
  
    if(document.getElementById('content-div').classList.contains('crt')) {
      logo.style.display = 'none';
      logo = document.getElementById('screensaver-logo-crt');
      logo.style.display = 'block';
      // logo.style.width = .30*100;
      logo.style.height = (window.getComputedStyle(document.getElementById('banner-div')).height)
      xSpeed = 7;
      ySpeed = 7;
    } else {
      logo.style.display = 'none';
      logo = document.getElementById('screensaver-logo');
      logo.style.display = 'block';
      // logo.style.width = .30*100;
      logo.style.height = (window.getComputedStyle(document.getElementById('banner-div')).height)
      xSpeed = 3;
      ySpeed = 3;
    }
  
    xPosition = document.getElementById('content-div').getBoundingClientRect().left + document.getElementById('content-div').getBoundingClientRect().width - logo.clientWidth - 1;
    yPosition = document.getElementById('content-div').getBoundingClientRect().top + 1;
  
  });
  
  let xSpeed = 3;
  let ySpeed = 3;

  function update() {

    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';

  }
  
  setInterval(() => {

    if(document.getElementById('content-div').classList.contains('crt')) {
      if(xPosition + logo.clientWidth >= (document.getElementById('content-div').getBoundingClientRect().left + document.getElementById('content-div').getBoundingClientRect().width) || xPosition <= document.getElementById('content-div').getBoundingClientRect().left) {
        xSpeed = -xSpeed;
        changeLogoColor();
      }
      if(yPosition + logo.clientHeight >= (document.getElementById('content-div').getBoundingClientRect().top + document.getElementById('content-div').getBoundingClientRect().height) || yPosition <= document.getElementById('content-div').getBoundingClientRect().top) {
        ySpeed = -ySpeed;
        changeLogoColor();
      }
    } else {
      if(xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        changeLogoColor();
      }
      if(yPosition + logo.clientHeight >= (window.visualViewport.pageTop + window.visualViewport.height) || yPosition <= window.visualViewport.pageTop) {
        ySpeed = -ySpeed;
        changeLogoColor();
      }
    }
  
    xPosition += xSpeed;
    yPosition += ySpeed;
    update();

  }, 1000/FPS)
  
  function changeLogoColor() {

    if(logo.src.match("assets/justin2-pixelated-edited9.png")) {
      logo.src = "assets/justin2-pixelated-edited10.png";
    } else {
      logo.src = "assets/justin2-pixelated-edited9.png";
    }
    
  }
  
  window.addEventListener('scroll', () => {

    if(window.visualViewport.pageTop >= yPosition) {
      yPosition = window.visualViewport.pageTop + 1;
    }
    if((yPosition + logo.clientHeight) >= (window.visualViewport.pageTop + window.visualViewport.height)) {
      yPosition = (window.visualViewport.pageTop + window.visualViewport.height) - (logo.clientHeight + 1);
    }

  })
  
  window.addEventListener('resize', () => {

    if(document.getElementById('content-div').classList.contains('crt')) {
      if((document.getElementById('content-div').getBoundingClientRect().left + document.getElementById('content-div').getBoundingClientRect().width) <= (xPosition + logo.clientWidth)) {
        console.log('problem');
        xPosition = (document.getElementById('content-div').getBoundingClientRect().left + document.getElementById('content-div').getBoundingClientRect().width) - (logo.clientWidth + 1);
      }
      if(document.getElementById('content-div').getBoundingClientRect().top >= yPosition) {
        yPosition = document.getElementById('content-div').getBoundingClientRect().top + 1;
      }
      if((yPosition + logo.clientHeight) >= (document.getElementById('content-div').getBoundingClientRect().top + document.getElementById('content-div').getBoundingClientRect().height)) {
        yPosition = (document.getElementById('content-div').getBoundingClientRect().top + document.getElementById('content-div').getBoundingClientRect().height) - (logo.clientHeight + 1);
      }
    } else {
      if(window.visualViewport.width <= (xPosition + logo.clientWidth)) {
        xPosition = window.visualViewport.width - (logo.clientWidth + 1);
      }
      if(window.visualViewport.pageTop >= yPosition) {
        yPosition = window.visualViewport.pageTop + 1;
      }
      if((yPosition + logo.clientHeight) >= (window.visualViewport.pageTop + window.visualViewport.height)) {
        yPosition = (window.visualViewport.pageTop + window.visualViewport.height) - (logo.clientHeight + 1);
      }
    }

  })

}

const SSbtn = document.getElementById('ss-button');
SSbtn.addEventListener('click', () => {

  if((document.getElementById('banner-div').style.background == 'none') && !document.getElementById('content-div').classList.contains('crt')) {
    location.reload();
  } 
  if(
    (document.getElementById('banner-div').style.background == 'none') &&
    document.getElementById('content-div').classList.contains('crt')
  ) {
    sessionStorage.setItem('CRThistory', 'true');

    if(document.getElementById('music-button').classList.contains('music-on')) {
      sessionStorage.setItem('MusicHistory', 'true');
    }

    location.reload();
  }
  else {
    enableSS();
  }

});

window.onload = () => {

  if(sessionStorage.getItem('CRThistory')) {
    sessionStorage.removeItem('CRThistory');
    document.getElementById('crt-button').click();
    console.log('CRT has been re-enabled!');
  }

  if(sessionStorage.getItem('MusicHistory')) {
    sessionStorage.removeItem('MusicHistory');
    function playMusicAgain() {
      document.removeEventListener('click', playMusicAgain, true);
      document.getElementById('music-button').click();
      console.log('Music status restored!');
    }
    document.addEventListener('click', playMusicAgain, true);
  }

}