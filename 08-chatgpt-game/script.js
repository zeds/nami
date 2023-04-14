const playerTank = document.getElementById('playerTank');
const computerTank = document.getElementById('computerTank');
const bullet = document.getElementById('bullet');

let playerAngle = 0;
let computerAngle = 0;
let bulletInterval;
let isBulletActive = false;

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    playerAngle -= 5;
    playerTank.style.transform = `rotate(${playerAngle}deg)`;
  } else if (event.code === 'ArrowRight') {
    playerAngle += 5;
    playerTank.style.transform = `rotate(${playerAngle}deg)`;
  } else if (event.code === 'ArrowUp') {
    const dx = Math.cos(playerAngle * Math.PI / 180) * 5;
    const dy = Math.sin(playerAngle * Math.PI / 180) * 5;
    const left = parseFloat(playerTank.style.left) || 0;
    const top = parseFloat(playerTank.style.top) || 0;
    playerTank.style.left = `${left + dx}px`;
    playerTank.style.top = `${top - dy}px`;
  } else if (event.code === 'ArrowDown') {
    const dx = Math.cos(playerAngle * Math.PI / 180) * 5;
    const dy = Math.sin(playerAngle * Math.PI / 180) * 5;
    const left = parseFloat(playerTank.style.left) || 0;
    const top = parseFloat(playerTank.style.top) || 0;
    playerTank.style.left = `${left - dx}px`;
    playerTank.style.top = `${top + dy}px`;
  } else if (event.code === 'Space' && !isBulletActive) {
    isBulletActive = true;
    bullet.style.display = 'block';
    bullet.style.left = playerTank.style.left;
    bullet.style.top = playerTank.style.top;
    bullet.style.transform = `rotate(${playerAngle}deg)`;
    bulletInterval = setInterval(moveBullet, 10);
  }
});

function moveBullet() {
  const dx = Math.cos(playerAngle * Math.PI / 180) * 5;
  const dy = Math.sin(playerAngle * Math / 180) * 5;
    const left = parseFloat(bullet.style.left) || 0;
    const top = parseFloat(bullet.style.top) || 0;
    bullet.style.left = `${left + dx}px`;
    bullet.style.top = `${top - dy}px`;
  
    // 弾がフィールド外に出たら
    if (parseFloat(bullet.style.left) < 0 || parseFloat(bullet.style.left) > 800 ||
        parseFloat(bullet.style.top) < 0 || parseFloat(bullet.style.top) > 800) {
      clearInterval(bulletInterval);
      bullet.style.display = 'none';
      isBulletActive = false;
    }
  
    // 弾がコンピュータの戦車に当たったら
    const bulletRect = bullet.getBoundingClientRect();
    const computerTankRect = computerTank.getBoundingClientRect();
    if (bulletRect.left < computerTankRect.right &&
        bulletRect.right > computerTankRect.left &&
        bulletRect.top < computerTankRect.bottom &&
        bulletRect.bottom > computerTankRect.top) {
      clearInterval(bulletInterval);
      bullet.style.display = 'none';
      isBulletActive = false;
      alert('You Win!');
    }
  }
  
  // コンピュータの戦車の動き
  function moveComputerTank() {
    const direction = Math.floor(Math.random() * 4); // 0:左, 1:右, 2:上, 3:下
    const dx = Math.cos(computerAngle * Math.PI / 180) * 2;
    const dy = Math.sin(computerAngle * Math.PI / 180) * 2;
    const left = parseFloat(computerTank.style.left) || 0;
    const top = parseFloat(computerTank.style.top) || 0;
  
    switch (direction) {
      case 0:
        computerAngle -= 5;
        computerTank.style.transform = `rotate(${computerAngle}deg)`;
        break;
      case 1:
        computerAngle += 5;
        computerTank.style.transform = `rotate(${computerAngle}deg)`;
        break;
      case 2:
        computerTank.style.left = `${left - dx}px`;
        computerTank.style.top = `${top + dy}px`;
        break;
      case 3:
        computerTank.style.left = `${left + dx}px`;
        computerTank.style.top = `${top - dy}px`;
        break;
    }
  
    // コンピュータの戦車がフィールド外に出たら
    if (parseFloat(computerTank.style.left) < 0 || parseFloat(computerTank.style.left) > 800 ||
        parseFloat(computerTank.style.top) < 0 || parseFloat(computerTank.style.top) > 800) {
      computerAngle += 180;
      computerTank.style.transform = `rotate(${computerAngle}deg)`;
    }
  }
  
  setInterval(moveComputerTank, 1000);
  