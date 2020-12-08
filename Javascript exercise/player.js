class Player {
    constructor(name,country) {
        this.name = name;
        this.country = country;
    }

    introduce(){
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi = new Player("Messi","Argentina")
messi.introduce();

class PlayTennis extends Player {
    constructor(name,country,age) {
        super(name,country);
        this.age= age;
    }
   play(){
       console.log(`${this.name} is ${this.age} and can play`)
   }


}

const mira = new PlayTennis("Rafale","Portugese",34);
mira.play();