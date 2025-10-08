

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


// 1. Declare an array of objects containing image file names & alt text

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// 2. Loop through the images

// 2a. Create a baseURL constant containing the baseURL of the images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// 2b. Loop through the images using a for...of loop
for (const image of images) {
  // 2c. Create a new image element
  const newImage = document.createElement("img");
  // 2d. Set the source and alt text for the image
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // 2e. Make the image focusable via the keyboard
  newImage.tabIndex = "0";
  // 2f. Append the image as a child of the thumbBar
  thumbBar.appendChild(newImage);
  // 2g. Update the display to show the image fullsize when a thumb is clicked
  newImage.addEventListener("click", updateDisplayedImage);
  // 2h. Update the display to show the image fullsize when the "Enter" key
  // is pressed after it has been focused
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// 3. Create the updateDisplayedImage() function

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// 4. Wire up the Darken/Lighten button

// 4a. Add a click event listener on the button
btn.addEventListener("click", () => {
  // 4b. If the button has a "dark" class set,
  // change text to "Lighten" and make the overlay darker
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // 4b. Else, change text to "Darken" and make
    // the overlay lighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // 4c. Toggle the class ready for the next button press
  btn.classList.toggle("dark");
});