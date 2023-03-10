export function savefavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}