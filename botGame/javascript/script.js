let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let numClosedDoors = 3;

let openDoor1;

let openDoor2;

let openDoor3;

let playDoor = () => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver();
  }
}

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if(choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"

doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  playDoor();
}

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
  playDoor();
}

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
}

randomChoreDoorGenerator();
