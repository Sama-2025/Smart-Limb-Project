// Hero Section
let text = "Empowering Movement Through Technology";
let typeEffect = document.getElementById("typing-effect");
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typeEffect.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Design Section
let summaryList = document.getElementById("summary-list");
let image = document.getElementById("limb-image");
let selections = {
    part  : " ",
    color: " ",
    ability : " ",
    age : " ",
};
function updateSummary() {
    summaryList.innerHTML = `
      <li>Part : ${selections.part}</li>
      <li>Color : ${selections.color}</li>
      <li>Ability : ${selections.ability}</li>
      <li>Age Group : ${selections.age}</li>
      `;
  }
  function handleCardClick(groupId, card) {
    let group = document.getElementById(groupId);
    let cards = group.querySelectorAll(".card");
    cards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    let value = card.getAttribute("data-value");
    selections[groupId.replace("-options", "")] = value;
    if (groupId === "part-options") {
        let imgUrl = card.getAttribute("data-image");
        image.src = imgUrl;
    }
     updateSummary();
}
document.querySelectorAll(".cards").forEach(group => {
  group.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
      handleCardClick(group.id, card);
      });
    });
});
  updateSummary();


// How Section
function openPopup(button) {
  let stepDiv = button.closest('.step');         
  let popup = stepDiv.nextElementSibling;        
  popup.style.display = "flex";
}

function closePopup(closeBtn) {
  let popup = closeBtn.closest('.popup');       
  popup.style.display = "none";
}
 