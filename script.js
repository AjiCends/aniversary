function showNextPage() {
    const landing = document.getElementById("landing-page");
    const next = document.getElementById("next-page");
    const music = document.getElementById("bg-music");

    landing.classList.add("d-none");
    next.classList.remove("d-none");
    music.play();
}
