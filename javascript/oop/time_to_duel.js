class Unit_Cards{
    constructor(name,cost,power,resilience){
        this.name=name;
        this.cost=cost;
        this.power=power;
        this.resilience=resilience;
    }
    attack(card){
        this.resilience-=card.power;
        this.resilience>=0 ? console.log("you win"):console.log("you lose");
    }
    
}

class Effect_Cards{
    constructor(cost,text,stat,magnitude){ 
        this.cost=cost;
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play(card){
        card.cost-=this.cost;
        card[this.stat]+=this.magnitude;
        console.log(`${this.text} new value ${card.power} power and ${card.resilience} resilience`);
    }
}
const red_belt_ninja=new Unit_Cards("Red Belt Ninja",3,3,4);
const black_belt_ninja=new Unit_Cards("Black Belt Ninja",4,5,4);
const hard_algorithm=new Effect_Cards(2,"increase target's resilience by 3","resilience",3);
const unhandled_promise_rejection=new Effect_Cards(1,"reduce target's resilience by 2","resilience",-2);
const pair_programming=new Effect_Cards(3,"increase target's power by 2","power",2);

unhandled_promise_rejection.play(red_belt_ninja);
pair_programming.play(red_belt_ninja);
red_belt_ninja.attack(black_belt_ninja);