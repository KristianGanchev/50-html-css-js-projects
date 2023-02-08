const jokeEl = document.getElementById("joke");
const jokeBnt = document.getElementById("jokeBtn");

jokeBnt.addEventListener("click", generateJoke);

const config = {
  headers: {
    Accept: "application/json",
  },
};

async function generateJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", config);
    const data = await response.json();

    jokeEl.innerText = data.joke
  } catch (error) {
    console.log(error);
  }
}

generateJoke();
