import "./style.css";

// création de classe Des

class Des {
  constructor(nbrFace, score) {
    this.nbrFace = nbrFace;
    this.score = score;
  }

  lancer() {
    // retourne un entier aléatoire entre 1 et nbrFace(6) random
    this.score = Math.floor(Math.random() * this.nbrFace + 1);
    return this.score;
  }
}

// création de classe Joueur

class Joueur {
  constructor(nom, valeurLance, des) {
    this.nom = nom;
    this.valeurLance = valeurLance;
    this.des = des;
  }
  // on créé la méthode lancerDes() qui appelle lancer();
  lancerDes() {
    this.valeurLance = this.des.lancer();
  }
}

const premierJoueur = new Joueur("Adrien", 0, new Des(6, 0));
premierJoueur.lancerDes();
console.log(premierJoueur.valeurLance);

const secondJoueur = new Joueur("Alice", 0, new Des(6, 0));
secondJoueur.lancerDes();
console.log(secondJoueur.valeurLance);
