//import Cell from "./Cell.js";
import Grid from "./Grid.js";
import {playboard} from "./Grid.js";
import Weapon from "./Weapon.js";  // les METHODES de weapon
//import Player from "./Player.js"; 
import {player1,player2} from "./Player.js";
import {weapon0,weapon1,weapon2,weapon3,weapon4} from "./Weapon.js"; //les OBJETS de weapon

$(document).ready(function () {
	
	let dmgchart=true;
	function rnd(p=1){
		return	Math.pow(Math.random(),p);
	}


	
	playboard.generate(sizeX,sizeY);

	let numWalls=Math.ceil((0.075+rnd()*0.075)*sizeX*sizeY);

	playboard.generateWall(numWalls);
	console.log("###END GENERATION###______________________________________________________________________________________________");

	playboard.spawnPlayers();
	playboard.spawnWeapons();


	$('#grid').on('click','.player1', function(){

		if (player1.myTurn) { player1.checkMoves(); }
	});

	$('#grid').on('click','.player2', function(){

		if (player2.myTurn) { player2.checkMoves(); }
	});

//bilan
	if ( dmgchart == true ) {
	console.log("0 :"+weapon0.minDmg+"-"+weapon0.maxDmg+ "   rnd:"+weapon0.randomTier);
	console.log("1 :"+weapon1.minDmg+"-"+weapon1.maxDmg+ "   rnd:"+weapon1.randomTier);
	console.log("2 :"+weapon2.minDmg+"-"+weapon2.maxDmg+ "   rnd:"+weapon2.randomTier);
	console.log("3 :"+weapon3.minDmg+"-"+weapon3.maxDmg+ "   rnd:"+weapon3.randomTier);
	console.log("4 :"+weapon4.minDmg+"-"+weapon4.maxDmg+ "   rnd:"+weapon4.randomTier);
	}
	//player1.weapon=weapon4;
	//console.log(player1.weapon.name);


	//playboard.setObject(5,0,"mur");
	//playboard.setObject(4,0,"mur");
	//playboard.setObject(5,1,"mur");
	//playboard.setObject(6,0,"mur");

	//console.log(playboard.canEscape(5,0));

	//let cellrandom=playboard.randomCell();



	//playboard.setObject(cellrandom.x,cellrandom.y,"test")
/*
	let test=playboard.pickCell(5,3);
	let test2=playboard.pickCell(8,4);

	let aaa=playboard.distance_man(test,test2);

	console.log(aaa);*/

	//console.log (playboard.getClasses(test.x,test.y));

	//playboard.setObject(5,3,"test")

	//test.checkFree();

	//test.content="cell mur";
	
	//console.log (playboard.getClasses(test.x,test.y));
	
	
   //console.log
});