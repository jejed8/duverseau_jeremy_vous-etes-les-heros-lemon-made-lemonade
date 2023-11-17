const chapters = {
  debut: {
    titre: "Prologue",
    description:
      "C'est l'été, Jimmy est pauvre et a besoin d'argent. Sa mère lui raconte qu'elle opérait un kiosque de limonade lorsqu'elle était jeune. Jimmy décide de s'y lancer. Jimmy fait du profit dès le premier jour! Son voisin, Rodrigue, est jaloux, il a entendu la conversation que Jimmy a eue avec sa mère et il a décidé de rivaliser avec Jimmy. Il doit avoir le kiosque le plus populaire du coin.",
    image: "./assets/images/limonade.png",
    boutons: [{ titre: "Continuer", destination: "jour1" }],
  },
  jour1: {
    titre: "Jour 1",
    description:
      "Jimmy va au supermarché se procurer des citrons, du sucre et de l'eau fraiche. Jimmy veut aussi un autre agrume.",
    image: "./assets/images/fruits-1.png",
    boutons: [
      { titre: "Pamplemousses", destination: "interlude1" },
      { titre: "Framboise", destination: "erreur1" },
    ],
  },
  jour2: {
    titre: "Jour 2",
    description:
      "Jimmy va au supermarché se procurer des aliments pour sa limonade. Il est inspiré par ce qu'on a raconté aux nouvelles hier. Que devrait-il prendre?",
    image: "./assets/images/fruits-2.png",
    boutons: [
      { titre: "Mangues", destination: "erreur2" },
      { titre: "Bananes", destination: "jour2partie2" },
    ],
  },
  jour2partie2: {
    titre: "J'ai trop d'argent",
    description:
      "Jimmy possède un peu plus d'argent. Il décide de prendre un supplément.",
    image: "./assets/images/supplements.png",
    boutons: [
      { titre: "Sucre", destination: "interlude2" },
      { titre: "Menthe", destination: "interlude2" },
      { titre: "Glacons", destination: "interlude2" },
    ],
  },
  jour3: {
    titre: "Jour 3",
    description:
      "Jimmy va au supermarché se procurer des aliments pour sa limonade. Il est inspiré par ce qu'on a raconté aux nouvelles hier. Que devrait-il prendre?",
    image: "./assets/images/fruits-3.png",
    boutons: [
      { titre: "Poires cactus", destination: "erreur4" },
      { titre: "Kiwis", destination: "jour3partie2" },
      { titre: "Goyaves", destination: "erreur3" },
    ],
  },
  jour3partie2: {
    titre: "Il fait chaud!!",
    description: "Il fait 40˚C!! Les gens ont chaud! Avez-vous des glaçons?",
    image: "./assets/images/glacons.png",
    boutons: [
      { titre: "Oui", destination: "fin" },
      { titre: "Non", destination: "erreur5" },
    ],
  },
  fin: {
    titre: "Bravo!",
    description:
      "Bravo! Le kiosque de limonade à Jimmy a été le plus populaire pendant 3 jours consécutifs. Furieux, Rodrigue rentre chez lui.",
    image: "./assets/videos/argent.mp4",
    boutons: [
      { titre: "Sortie", destination: "" },
      { titre: "Rejouer", destination: "debut" },
    ],
  },
  interlude1: {
    titre: "Interlude 1",
    description:
      "Jimmy remporte la journée avec le plus de limonade vendue. Il finit sa journée devant la télé. Aux nouvelles, on raconte qu'une évasion de singe a eu lieu.",
    image: "./assets/images/tv-singe.png",
    boutons: [{ titre: "Continuer", destination: "jour2" }],
  },
  interlude2: {
    titre: "Interlude 2",
    description:
      "Jimmy remporte la journée avec le plus de limonade vendue. Il finit sa journée devant la télé. Aux nouvelles, on annonce une canicule et on raconte que le président s'est fait enlever par des extraterrestres pendant qu'il mangeait des peaux de fruit poilu.",
    image: "./assets/images/tv-alien.png",
    boutons: [{ titre: "Continuer", destination: "jour3" }],
  },
  erreur1: {
    titre: "Echec",
    description: "La limonade de Rodrigue est plus populaire, Jimmy abandonne.",
    image: "./assets/images/rodrigue.png",
    boutons: [{ titre: "Réssayer", destination: "debut" }],
  },
  erreur2: {
    titre: "Echec",
    description: "La limonade de Rodrigue est plus populaire, Jimmy abandonne.",
    image: "./assets/images/rodrigue.png",
    boutons: [{ titre: "Réssayer", destination: "debut" }],
  },
  erreur3: {
    titre: "Echec",
    description:
      "Rodrigue a vendu plus de limonade que toi. Il se moque de toi pour avoir pris des goyaves.",
    image: "./assets/images/rodrigue_goyaves.png",
    boutons: [{ titre: "Réssayer", destination: "debut" }],
  },
  erreur4: {
    titre: "Echec",
    description:
      "Les extraterrestres ne sont pas d'accord avec cette décision. Ils capturent Jimmy.",
    image: "./assets/images/alien.png",
    boutons: [{ titre: "Réssayer", destination: "debut" }],
  },
  erreur5: {
    titre: "Echec",
    description:
      "La limonade n'est plus fraiche et les clients la crachent!! Ils demandent à Jimmy de se faire rembourser.",
    image: "",
    boutons: [{ titre: "Réssayer", destination: "debut" }],
  },
};

/*
function goToChapter(chapitre) {
    
    if (chapters[chapitre]) {
      const chap = chapters[chapitre];
      console.log("Titre:", chap.titre);
      console.log("Description:", chap.description);
  
      if (chap.boutons.length > 0) {
        const destination = chap.boutons.map(button => button.destination);
        console.log("Options", destination.join(", "));
      } else {
        console.log("fin");
      }
    } else {
      console.error("Erreur. Veuillez entrer une clé de chapitre valide.");
    }
}
*/

function goToChapter(chapterName) {
  const chapter = chapters[chapterName];

  let chapterTitle = document.getElementById("chapterTitle");
  let chapterPara = document.getElementById("chapterPara");
  let chapterImg = document.getElementById("chapterImg");
  let chapterButtons = document.getElementById("chapterButtons");

  chapterTitle.textContent = chapter.titre;
  chapterPara.textContent = chapter.description;
  chapterImg.src = chapter.image;

  chapterButtons.innerHTML = "";

  if (chapter.boutons.length) {
    for (let i = 0; i < chapter.boutons.length; i++) {
      const button = chapter.boutons[i];
      const buttonElement = document.createElement("button");
      buttonElement.textContent = button.titre;

      buttonElement.addEventListener("click", function () {
        buttonSound();
        saveProgress(button.destination);
        goToChapter(button.destination);
      });

      chapterButtons.appendChild(buttonElement);

    }
  }
}

//goToChapter("debut");



//sauvegarde progression
function saveProgress(chapterName) {
  localStorage.setItem("currentChapter", chapterName);
}

//charger progression
function loadProgress() {
  return localStorage.getItem("currentChapter") || "debut";
}

//partir le jeu
function startGame() {
  const currentChapter = loadProgress();
  goToChapter(currentChapter);
}

//bouton reinitialiser
let restartbutton = document.getElementById("restart");

restartbutton.addEventListener("click", function () {
  localStorage.clear();
  goToChapter("debut");
});

//son de bouton
function buttonSound() {
  const son = new Audio("./assets/sons/pop-39222.mp3");
  son.play();
}

startGame();