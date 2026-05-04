// "https://v2.jokeapi.dev/joke/Any?safe-mode"

const joke = document.getElementById("joke");
const id = document.getElementById("id");
const button = document.getElementById("btn");

async function getJoke() {
    joke.innerText = "loading joke...";
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");

        const data = await response.json();
        console.log(data);
        if (data.type === "single") {
            joke.innerText = `"${data.joke}"` +"😂";
        } else{
            joke.innerText = `"${data.setup + data.delivery}"` + "😄😂";
        }

    } catch (error) {
        joke.textContent = "Oops! Failed to load joke";
        
    }
    
}
getJoke();

button.addEventListener("click", getJoke)