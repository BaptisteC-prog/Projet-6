import { weapon0 } from "./Weapon.js";
import { playboard } from "./Grid.js";
import Cell from "./Cell.js";
import Grid from "./Grid.js";
import Weapon from "./Weapon.js"; 
import weaponsList from "./Weapon.js"; 

export default class Player {
    constructor(name, posX,posY) {
		this.name = name;
		this.HP=100;
		this.weapon =weapon0;
		this.prevWeapon=weapon0;
		this.posX = posX;
		this.posY = posY;
		this.myTurn = true;
		this.myAction=""; //isAttacking
		this.canPlay=true;
		
	}

	checkMoves(){

		let okMove=true;
		//en haut
		for (let up=1; up<4;up++){
			
			let cell=playboard.pickCell(this.posX,this.posY-up);
			if (playboard.isOnBoard(this.posX,this.posY-up)){
				if (cell.checkPlayer() && okMove && up==1 ) { playboard.setOverlay(this.posX,this.posY-up,"fight") }
				if (cell.checkPlayer() || cell.checkWall() ) { okMove=false; }
				if ( (cell.checkFree() || cell.checkWeapon() )
					&& okMove 
					&& this.posY-up>=0) {
					playboard.setOverlay(this.posX,this.posY-up,"check");
				}
			}
		}

		okMove=true;
		//a droite
		for (let right=1; right<4;right++){
			let cell=playboard.pickCell(parseInt(this.posX+right),this.posY);	
			if (playboard.isOnBoard(parseInt(this.posX+right),this.posY)){
				if (cell.checkPlayer() && okMove && right==1 ) { playboard.setOverlay(parseInt(this.posX+right),this.posY,"fight") }
				if (cell.checkPlayer() || cell.checkWall() ) { okMove=false; }
				if ( (cell.checkFree() || cell.checkWeapon() )
					&& okMove 
					&& parseInt(this.posX+right)<=playboard.sizeX) {
					playboard.setOverlay(parseInt(this.posX+right),this.posY,"check");
				}	
			}
		}

		okMove=true;
		//en bas
		for (let down=1; down<4;down++){
			let cell=playboard.pickCell(this.posX,parseInt(this.posY+down));	
			if (playboard.isOnBoard(this.posX,parseInt(this.posY+down))){
				if (cell.checkPlayer() && okMove && down==1 ) { playboard.setOverlay(this.posX,parseInt(this.posY+down),"fight") }
				if (cell.checkPlayer() || cell.checkWall() ) { okMove=false; }
				if ( (cell.checkFree() || cell.checkWeapon() )
					&& okMove 
					&& parseInt(this.posY+down)<=playboard.sizeY) {
					playboard.setOverlay(this.posX,parseInt(this.posY+down),"check");
				}
			}
		}

		okMove=true;
		//a gauche
		for (let left=1; left<4;left++){
			let cell=playboard.pickCell(this.posX-left,this.posY);	
			if (playboard.isOnBoard(this.posX-left,this.posY)){
				if (cell.checkPlayer() && okMove && left==1 ) { playboard.setOverlay(this.posX-left,this.posY,"fight") }
				if (cell.checkPlayer() || cell.checkWall() ) { okMove=false; }
				if ( (cell.checkFree() || cell.checkWeapon() )
					&& okMove 
					&& this.posX-left>=0) {
					playboard.setOverlay(this.posX-left,this.posY,"check");
				}
			}
		}
	}






}

export let player1=new Player("bleu",0,0);
export let player2=new Player("rouge",0,0);

//Blue.weapon=weapon0;
