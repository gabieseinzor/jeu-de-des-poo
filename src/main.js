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
//tests
/*const premierJoueur = new Joueur("Adrien", 0, new Des(6, 0));
premierJoueur.lancerDes();
console.log(premierJoueur.valeurLance);*/

/*const secondJoueur = new Joueur("Alice", 0, new Des(6, 0));
secondJoueur.lancerDes();
console.log(secondJoueur.valeurLance);*/
class Partie {
  constructor(joueur1, joueur2, nbrTour) {
    this.joueur1 = joueur1;
    this.joueur2 = joueur2;
    this.nbrTour = nbrTour;
    this.scoreJ1 = 0;
    this.scoreJ2 = 0;
  }

  lancerPartie() {
    for (let i = 0; i < this.nbrTour; i++) {
      this.joueur1.lancerDes();
      this.joueur2.lancerDes();

      if (this.joueur1.valeurLance > this.joueur2.valeurLance) {
        this.scoreJ1 += 2;
      } else if (this.joueur1.valeurLance === this.joueur2.valeurLance) {
        this.scoreJ1 += 1;
        this.scoreJ2 += 1;
      } else {
        this.scoreJ2 += 2;
      }
      //console.log(this.joueur1.valeurLance, this.joueur2.valeurLance, this.scoreJ1, this.scoreJ2);
    }
    if (this.scoreJ1 > this.scoreJ2) {
      console.log(
        `Le gagnant de cette partie est ${this.joueur1.nom} avec un score de ${this.scoreJ1} points`,
      );
    } else if (this.scoreJ2 > this.scoreJ1) {
      console.log(
        `Le gagnant de cette partie est ${this.joueur2.nom} avec un score de ${this.scoreJ2} points`,
      );
    } else {
      console.log("Égalité minceeee !");
    }
  }
}

const premierJoueur = new Joueur("Adrien", 0, new Des(6, 0));
const secondJoueur = new Joueur("Alice", 0, new Des(6, 0));

const partie = new Partie(premierJoueur, secondJoueur, 5);
partie.lancerPartie();
