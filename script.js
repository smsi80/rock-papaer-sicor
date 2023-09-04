let sangButton = document.querySelector("#sang");
let kaghazButton = document.querySelector("#kaghaz");
let gheychiButton = document.querySelector("#gheychi");
let randomized = 0;
let userval = 0;
let win = 0,
  draws = 0,
  lose = 0;
//start the Game section
// sangButton section
sangButton.onclick = function () {
  randomized = Math.round(Math.random() * 2);
  userval = 0;
  if (userval === 0 && randomized === 2) {
    document.getElementsByTagName("h1")[0].innerHTML =
      "you won the ai chose the scissors ";
    document.getElementById("winscore").innerHTML = `Wins: ${(win = win + 1)}`;
    console.log(win);
  } else if (userval === 0 && randomized === 0) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw ";
    document.getElementById("drawscore").innerHTML = `Draws: ${(draws =
      draws + 1)}`;
  } else if (userval === 0 && randomized === 1) {
    document.getElementsByTagName("h1")[0].innerHTML =
      "you lose ai chosen the paper  ";
    document.getElementById("losescore").innerHTML = `Lose: ${(lose =
      lose + 1)}`;
  }
};
//kaghaz button sectaions
kaghazButton.onclick = function () {
  randomized = Math.round(Math.random() * 2);
  userval = 1;

  if (userval === 1 && randomized === 2) {
    document.getElementsByTagName("h1")[0].innerHTML =
      "you lose ai chosen the scissors ";
    document.getElementById("losescore").innerHTML = `Lose: ${(lose =
      lose + 1)}`;
  } else if (userval === 1 && randomized === 1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw ";
    document.getElementById("drawscore").innerHTML = `Draws: ${(draws =
      draws + 1)}`;
  } else if (userval === 1 && randomized === 0) {
    document.getElementsByTagName("h1")[0].innerHTML =
      " you won the ai chose the rock ";
    document.getElementById("winscore").innerHTML = `Wins: ${(win = win + 1)}`;
  }
};
//heychi button sectaions
gheychiButton.onclick = function () {
  randomized = Math.round(Math.random() * 2);
  userval = 2;
  console.log(randomized);
  if (userval === 2 && randomized === 0) {
    document.getElementsByTagName("h1")[0].innerHTML =
      "you lose ai chosen the Rock ";
    document.getElementById("losescore").innerHTML = `Lose: ${(lose =
      lose + 1)}`;
  } else if (userval === 2 && randomized === 2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw ";
    document.getElementById("drawscore").innerHTML = `Draws: ${(draws =
      draws + 1)}`;
  } else if (userval === 2 && randomized === 1) {
    document.getElementsByTagName("h1")[0].innerHTML =
      " you won the ai chose the paper ";
    document.getElementById("winscore").innerHTML = `Wins: ${(win = win + 1)}`;
  }
};
////////////////Dark mode toggle
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
