// var openlist = document.getElementById("openlist");

const apiKey = "&apiKey=b6891e27371541609c0be5e5d5665eca";
const link =
  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
var oldName = null;
var fadeOn = false;

function search(list) {
  var input = document.getElementById("ingredients").value;
  var openlist = document.getElementById("openlist");
  let box = document.getElementById("openbox");
  var num = Math.floor(Math.random() * 10);
  console.log(num);
  if (event.key === "Enter") {
    if (fadeOn != true) {
      box.classList.toggle("fade");
      fadeOn = true;
    }
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
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        console.log(data);
        openlist.textContent = data[num].title;
        openlist.getAttribute("href");
        openlist.setAttribute(
          "href",
          "https://spoonacular.com/recipes" +
            data[num].title.replace(/\s/g, "-") +
            "-" +
            data[num].id
        );
      });

    openlist.textContent = list.value;
  }
}
