const btn = document.getElementById("btn");
const ip = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener("click", handleSubmit);

async function handleSubmit() {
  const ipValue = ip.value.trim();
  let currValue = await firstPromise(ipValue);
  currValue = await secondPromise(currValue);
  currValue = await thirdPromise(currValue);
  currValue = await fourthPromise(currValue);
  currValue = await fifthPromise(currValue);
}

async function firstPromise(ip) {
  const newIp = ip;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First promise resolved with:", newIp);
      output.innerText = `Result: ${newIp}`;
      resolve(newIp);  // pass the value forward
    }, 2000);
  });
}

async function secondPromise(ip) {
  const newIp = ip * 2;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second promise resolved with:", newIp);
      output.innerText = `Result: ${newIp}`;
      resolve(newIp);  // pass the value forward
    }, 2000);
  });
}

async function thirdPromise(ip) {
  const newIp = ip - 3;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third promise resolved with:", newIp);
      output.innerText = `Result: ${newIp}`;
      resolve(newIp);  // pass the value forward
    }, 1000);
  });
}

async function fourthPromise(ip) {
  const newIp = ip/2;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fourth promise resolved with:", newIp);
      output.innerText = `Result: ${newIp}`;
      resolve(newIp);  // pass the value forward
    }, 1000);
  });
}
async function fifthPromise(ip) {
  const newIp = ip + 10
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fifth promise resolved with:", newIp);
      output.innerText = `Final Result: ${newIp}`;
      resolve(newIp);  // pass the value forward
    }, 1000);
  });
}