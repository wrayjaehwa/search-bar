// var openlist = document.getElementById("openlist");

// const apiKey = "&apiKey=b6891e27371541609c0be5e5d5665eca";
const apiKey = "&apiKey=490f66e454e54af3b90f96d589116dbf";
const link =
  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
var oldName = null;
var fadeOn = false;

var randomMessages = [
  "Feed me food!",
  "Yucky, I want real food!",
  "I'm hungry...",
  "Gimme snacks.",
];

function search(list) {
  var input = document.getElementById("ingredients").value;
  var openlist = document.getElementById("openlist");
  var food_icon = document.getElementById("link_icon");
  let box = document.getElementById("openbox");
  console.log(num);
  if (event.key === "Enter") {
    if (fadeOn != true) {
      box.classList.toggle("fade");
      fadeOn = true;
    }
    var num = Math.floor(Math.random() * 10);
    // openlist.textContent = list.value;
    // console.log("hit");
    input = input.trim().replace(/,/g, " ").replace(/\s\s+/g, " ");
    console.log(link + input.replace(/\s/g, ",+") + apiKey);

    fetch(link + input + "&number=10" + apiKey)
      .then((response) => {
        if (response.ok) {
          0;
          return response.json();
        } else {
          openlist.textContent = "Something went wrong!";
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        if (data[1]) {
          console.log(data);
          // food_icon.style.display = "inline-block";
          openlist.textContent = data[num].title;
          food_icon.getAttribute("class");
          food_icon.setAttribute(
            "class",
            "fa-solid fa-arrow-up-right-from-square"
          );

          openlist.getAttribute("href");
          openlist.setAttribute(
            "href",
            "https://spoonacular.com/recipes" +
              data[num].title.replace(/\s/g, "-") +
              "-" +
              data[num].id
          );
        } else {
          // food_icon.style.display = "none";

          food_icon.getAttribute("class");
          food_icon.setAttribute("class", "fa-solid fa-face-tired");
          openlist.textContent =
            randomMessages[Math.floor(Math.random() * randomMessages.length)];
          openlist.getAttribute("href");
          openlist.setAttribute("href", "/#");
        }
      });

    // openlist.textContent = list.value;
    // openlist.textContent = "Something went wrong...";
    // openlist.style.visibility = "hidden";
  }
}
