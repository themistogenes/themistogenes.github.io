const balls = document.getElementsByClassName('ball');

for (let i = 0 ; i < 2; i++) {

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';

  balls[i - 1].style.left = x;
  balls[i - 1].style.top = y;
  balls[i - 1].transform = 'translate(-' + x + ',-' + y + ')';
};

}

var eyeTwoEl = document.createElement("div");
eyeTwoEl.classList.add("eye");
document.querySelector("div").appendChild(eyeTwoEl);

var ballTwoEl = document.createElement("div");
ballTwoEl.classList.add("ball");
eyeTwoEl.appendChild(ballTwoEl);