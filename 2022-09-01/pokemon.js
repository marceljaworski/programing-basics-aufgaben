class Pokemon {
    constructor(name, gesunheit, magie, skills) {
        this.name = name
        this.gesunheit = gesunheit;
        this.magie = magie;
        this.skills = skills;
    }
    learnAttackSkill(attackSkill){
        const doesSkillAlreadyExist = this.skills.some((skill)=> skill.name === attackSkill.name)
        if (doesSkillAlreadyExist) {
            return this.name + "kann dieses Skill bereits."
        }else{
            this.skills.push(attackSkill)
            return this.name + " hat neue Skill gelernt";
        }
    }
    showStatus(){
        if (this.gesunheit < 0){
            return this.name + " ist tot";
        }; 
        return this.name + " hat " + this.gesunheit + " gesunheit und " + this.magie + " Magie übrig";
    }
    attack(attackSkill , pokemonObject) {
        if(this.magie <  this.skills[0].magie){
            return `Dein Pokemon hat nich genug Magie um dieses Attack einzusetzen`;
        }else{
            pokemonObject.gesunheit -= attackSkill.schadens;
            this.magie -= this.skills[0].magie;

            return this.name + " hat mit " + this.skills[0].name + " zum " + pokemonObject.name + " angegriffen.";
        } 
    }
    getMagic(number){
        this.magie += number;
        return this.name + " hat jetzt " + number + " Magie Punkte mehr!";
    }
}   

class AttackSkill {
    constructor(name, schadens, magie) {
        this.name = name;
        this.schadens = schadens;
        this.magie = magie;
    }
}
const relaxo = new Pokemon(name = "Relaxo", 150, 3, []);
const pikachu = new Pokemon(name = "Pikachu", 70, 0, []);
const lautesSchnarchen = new AttackSkill("LautesSchnarchen", 100, 4);

relaxo.learnAttackSkill(lautesSchnarchen);

console.log(relaxo.showStatus())
console.log(relaxo.getMagic(10))

console.log(relaxo.attack(lautesSchnarchen, pikachu))
console.log(pikachu.showStatus())
console.log(relaxo.showStatus())
relaxo.learnAttackSkill(lautesSchnarchen);