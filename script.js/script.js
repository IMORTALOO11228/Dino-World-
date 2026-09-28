const animals = [
  { name: "Stegosaurus", image: "IMG_20260928_073915.png", icon: "🦕" },
  { name: "Brachiosaurus", image: "IMG_20260928_073925.png", icon: "🦕" },
  { name: "Ankylosaurus", image: "IMG_20260928_073934.png", icon: "🦖" },
  { name: "Spinosaurus", image: "IMG_20260928_073950.png", icon: "🦖" },
  { name: "Carnotaurus", image: "IMG_20260928_074004.png", icon: "🦖" },
  { name: "Dilophosaurus", image: "IMG_20260928_074014.png", icon: "🦖" },
  { name: "Parasaurolophus", image: "IMG_20260928_074022.png", icon: "🦕" },
  { name: "Dimetrodon", image: "IMG_20260928_074033.png", icon: "🦎" },
  { name: "Allosaurus", image: "IMG_20260928_074041.png", icon: "🦖" },
  { name: "Baryonyx", image: "IMG_20260928_074207.png", icon: "🦖" },
  { name: "Kaprosuchus", image: "IMG_20260928_074219.png", icon: "🐊" },
  { name: "Pteranodon", image: "IMG_20260928_074228.png", icon: "🦅" },
  { name: "Alanqa", image: "IMG_20260928_074236.png", icon: "🦅" },
  { name: "Troodon", image: "IMG_20260928_074243.png", icon: "🦖" },
  { name: "Tapejara", image: "IMG_20260928_074252.png", icon: "🦅" },
  { name: "Zhejiangopterus", image: "IMG_20260928_074300.png", icon: "🦅" },
  { name: "Mosasaurus", image: "IMG_20260928_074307.png", icon: "🌊" },
  { name: "Ornithocheirus", image: "IMG_20260928_074317.png", icon: "🦅" },
  { name: "Rinchenia", image: "IMG_20260928_074333.png", icon: "🦖" },
  { name: "Sonorasaurus", image: "IMG_20260928_155709.png", icon: "🦕" },
  { name: "Zalmoxes", image: "IMG_20260928_155718.png", icon: "🦕" },
  { name: "Iguanodon", image: "IMG_20260928_155726.png", icon: "🦕" },
  { name: "Deinocheirus", image: "IMG_20260928_155736.png", icon: "🦖" },
  { name: "Postosuchus", image: "IMG_20260928_155854.png", icon: "🦎" },
  { name: "Corythosaurus", image: "IMG_20260928_155948.png", icon: "🦕" },
  { name: "Gallimimus", image: "IMG_20260928_160032.png", icon: "🦖" },
  { name: "Irritator", image: "IMG_20260928_160042.png", icon: "🦖" },
  { name: "Woolly Mammoth", image: "IMG_20260928_160055.png", icon: "🐘" },
  { name: "Mastodon", image: "IMG_20260928_160104.png", icon: "🐘" },
  { name: "Deinotherium", image: "IMG_20260928_160115.png", icon: "🐘" },
  { name: "Woolly Rhino", image: "IMG_20260928_160122.png", icon: "🦏" },
  { name: "Uintatherium", image: "IMG_20260928_160130.png", icon: "🦏" },
  { name: "Indricotherium", image: "IMG_20260928_160138.png", icon: "🦏" },
  { name: "Elasmotherium", image: "IMG_20260928_160145.png", icon: "🦏" },
  { name: "Smilodon", image: "IMG_20260928_160156.png", icon: "🐅" },
  { name: "Thylacosmilus", image: "IMG_20260928_160206.png", icon: "🐆" },
  { name: "Panthera blytheae", image: "IMG_20260928_160217.png", icon: "🐆" },
  { name: "Arctodus", image: "IMG_20260928_160225.png", icon: "🐻" },
  { name: "Ailurarctos", image: "IMG_20260928_160242.png", icon: "🐼" },
  { name: "Kelenken", image: "IMG_20260928_160253.png", icon: "🐦" },
  { name: "Megatherium", image: "IMG_20260928_160303.png", icon: "🦥" },
  { name: "Mylodon", image: "IMG_20260928_160312.png", icon: "🦥" },
  { name: "Titanoboa", image: "IMG_20260928_160321.png", icon: "🐍" },
  { name: "Glyptodon", image: "IMG_20260928_160336.png", icon: "🐢" },
  { name: "Megaloceros", image: "IMG_20260928_160352.png", icon: "🦌" },
  { name: "Eremotherium", image: "IMG_20260928_160401.png", icon: "🦥" },
  { name: "Entelodon", image: "IMG_20260928_160417.png", icon: "🐗" },
  { name: "Megistotherium", image: "IMG_20260928_160426.png", icon: "🐕" },
  { name: "Hyaenodon", image: "IMG_20260928_160445.png", icon: "🐺" },
  { name: "Procoptodon", image: "IMG_20260928_160458.png", icon: "🦘" },
  { name: "Sarkastodon", image: "IMG_20260928_160946.png", icon: "🐻" },
  { name: "Tyrannosaurus rex", image: "IMG_20260928_161317.png", icon: "🦖" },
  { name: "Velociraptor", image: "IMG_20260928_161330.png", icon: "🦖" },
  { name: "Triceratops", image: "IMG_20260928_161343.png", icon: "🦏" },
  { name: "Cervalces", image: "InShot_20260928_160936770.png", icon: "🦌" },
  { name: "Majungasaurus", image: "InShot_20260928_161022512.png", icon: "🦖" },
  { name: "Nundasuchus", image: "InShot_20260928_161043904.png", icon: "🦎" },
  { name: "Diplodocus", image: "InShot_20260928_161051638.png", icon: "🦕" },
  { name: "Gorgosaurus", image: "InShot_20260928_161058577.png", icon: "🦖" },
  { name: "Tarbosaurus", image: "InShot_20260928_161108623.png", icon: "🦖" },
  { name: "Stygimoloch", image: "InShot_20260928_161116869.png", icon: "🦖" },
  { name: "Pterodaustro", image: "InShot_20260928_161123774.png", icon: "🦅" },
  { name: "Oviraptor", image: "InShot_20260928_161130279.png", icon: "🦖" },
  { name: "Aerotitan", image: "InShot_20260928_161137514.png", icon: "🦅" },
  { name: "Suchomimus", image: "InShot_20260928_161144997.png", icon: "🦖" },
  { name: "Compsognathus", image: "InShot_20260928_161151182.png", icon: "🦖" }
];

window.dinoWorldAnimals = animals;

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("animal-list");

  if (!list) return;

  list.innerHTML = "";

  animals.forEach((animal) => {
    const card = document.createElement("a");

    card.href = "#";
    card.className = "period-card animal-card";

    card.innerHTML = `
      <span class="icon">${animal.icon}</span>
      <h3>${animal.name}</h3>
    `;

    list.appendChild(card);
  });
});
