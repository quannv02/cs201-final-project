let backgroundList = document.querySelector('.background-menu ul');

let staticBackgroundCatalog = [{
  "name": "Windy",
  "url": "backgrounds/Windy.mp4"
}, {
  "name": "Raining",
  "url": "backgrounds/Raining.mp4"
}, {
  "name": "Beach",
  "url": "backgrounds/Beach.mp4"
}, {
  "name": "Sky",
  "url": "backgrounds/Sky.mp4"
}, {
  "name": "Night",
  "url": "backgrounds/Night.mp4"
}];

backgroundInit();

function backgroundInit() {
  staticBackgroundCatalog.forEach((background, i) => {
    backgroundList.innerHTML += `<li id="background${background.name}">${background.name}</li>`;
  });
  staticBackgroundCatalog.forEach((background, i) => {
    let name = "background" + background.name;
    let btn = document.getElementById(name);
    btn.addEventListener("click", () => {
      document.getElementById('myVideo').src = background.url;
    })
  });
};
