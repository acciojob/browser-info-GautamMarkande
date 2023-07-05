const browserName = navigator.userAgent;
const version = navigator.appVersion;
const divEle = document.createElement("div");
divEle.id = "browser-info";
divEle.innerText =  `You are using ${browserName} version ${version}`;
document.body.appendChild(divEle);