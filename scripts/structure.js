export function AddSibling() {
  // Get the reference to the existing playlist element
  const existingPlaylist = document.querySelector(".playlist");

  // Clone the existing playlist element, including all its children
  const newPlaylist = existingPlaylist.cloneNode(true);

  // Modify the title and count paragraphs
  const titleParagraph = newPlaylist.querySelector(
    ".playlist-overlay p:first-child"
  );
  titleParagraph.textContent = "New Playlist";

  const countParagraph = newPlaylist.querySelector(
    ".playlist-overlay p:last-child"
  );
  countParagraph.textContent = "5";

  // Insert the new playlist element after the existing playlist element
  existingPlaylist.insertAdjacentElement("afterend", newPlaylist);
}

// Adding Trending Song Dynamically
export function addTrendingSong() {
  // Create a new div with the class "trending"
  const trendingDiv = document.createElement("div");
  trendingDiv.classList.add("trending");

  // Create the HTML structure using template literals
  trendingDiv.innerHTML = `
    <div class="item">1</div>
    <div class="item-image">
      <img src="./images/image.jpg" alt="Song Image" class="image-style" />
    </div>
    <div class="item">Playlist Name</div>
    <div class="item">123456</div>
    <div class="item">2:30</div>
    <div class="item"><i class="bi bi-heart"></i></div>
  `;

  // Get the reference to the container where you want to add the "trending" div
  const container = document.querySelector(".trending-container");

  // Add the "trending" div to the container
  container.appendChild(trendingDiv);
}
