const search = document.querySelector("#search");
const button = document.querySelector("button");
const form = document.querySelector("#searchForm");
const images = document.querySelector("#images");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    images.innerHTML = "";
    const userInput = form.elements.search.value;
    const config = { params: { q: userInput } };
    const result = await axios.get(
      `https://api.tvmaze.com/search/shows`,
      config
    );
    makeImages(result.data);
    form.elements.search.value = "";
  } catch (e) {
    console.log("ERROR:", e);
  }
});

const makeImages = (shows) => {
  for (let res of shows) {
    if (res.show.image) {
      const imgLink = res.show.image.medium;
      const newIMG = document.createElement("IMG");
      newIMG.setAttribute("src", imgLink);
      images.append(newIMG);
    }
  }
};
