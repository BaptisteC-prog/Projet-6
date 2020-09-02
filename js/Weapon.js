export let weapons = [];

class Weapon {
	constructor(ID,name,mindmg,maxdmg,randomtier)
	{
		this.ID=ID;
		this.name=name;
		this.mindmg=mindmg;
		this.maxdmg=maxdmg;
		this.randomtier=randomtier;
	}
}

export let weapon0=new Weapon(0,"Defaut",10,10,0);
let weapon1=new Weapon(1,"Cuillere",10,15,0.5);
let weapon2=new Weapon(2,"Cravate",15,20,1);
let weapon3=new Weapon(3,"Cable WiFi",20,30,2);
let weapon4=new Weapon(4,"Clippy",30,45,3);

//les fourchettes peuvent etre random mais elle ne se croisent pas

weapons.push(weapon1,weapon2,weapon3,weapon4)