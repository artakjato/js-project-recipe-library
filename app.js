document.getElementById("balkan").addEventListener("click", displayFilterText);

function displayFilterText() {
  const paragraph = document.createElement('p');
  document.getElementById("filter-text").append(paragraph);
  paragraph.append("Up for some meat with everything?");
}