const span = document.querySelectorAll("span");
const button = document.querySelectorAll("button");
const counter = [0, 0, 0, 0];

for (let i = 0; i < span.length; i++) {
    button[i].onclick = () => {
    counter[i]++;
    span[i].textContent = counter[i];
  };
}


