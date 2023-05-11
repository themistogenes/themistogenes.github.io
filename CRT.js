console.log('CRT script working...');

// ========== Enable CRT ==========

const enableCRT = function() {
  console.log('CRT has been toggled!');
  document.querySelector('body').classList.toggle('body-crt');
  document.getElementById('content-div-container').classList.toggle('content-div-container-crt');
  document.getElementById('scanline').classList.toggle('scanline-crt');
  document.getElementById('content-div').classList.toggle('content-div-crt');
  document.getElementById('content-div').classList.toggle('crt');
}

const CRTbtn = document.getElementById('crt-button');
CRTbtn.addEventListener('click', enableCRT);