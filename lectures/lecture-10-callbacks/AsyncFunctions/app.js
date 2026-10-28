async function hello() {}
console.log(hello());

const sing = async () => {
  // throw "OH NO, PROBLEM!";
  return "LA LA LA LA";
};

sing()
  .then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
  })
  .catch((err) => {
    console.log("PROMISE REJECTED!");
    console.log(err);
  });

// Login example with just async

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "password123") return "WELCOME!";
  throw "Invalid Password";
};

login("todd", "password123")
  .then((msg) => {
    console.log("LOGGED IN!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });

// Delayed Color Change example

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  console.log("Color changed to red");
  await delayedColorChange("orange", 1000);
  console.log("Color changed to orange");
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE!";
}

console.log("Called async function rainbow!");

// rainbow().then(() => console.log("END OF RAINBOW!"))

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();

console.log("after printRainbow()");

// Using async and await with response data
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AN ERROR!");
    console.log("error is:", e);
  } finally {
    console.log("finally");
  }
}
