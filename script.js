setTimeout(() => {
    document.querySelector("h1").textContent = "Uh-oh! Something went wrong...";
    document.querySelector("#hacked-message").style.display = "block";
}, 6000);

setTimeout(() => {
    document.querySelector(".hacking-animation").style.display = "block";
}, 8000);

setTimeout(() => {
    document.querySelector(".hacking-animation").style.display = "none";
    document.querySelector("#message").style.display = "block";
}, 12000);