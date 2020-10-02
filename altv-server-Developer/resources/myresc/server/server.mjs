import * as alt from 'alt';
import * as chat from 'chat';

//Mirror Park X:1070.206 Y:-711.958 Z:58.483
const playerSpawn = {x:1070.206, y:-711.958, z:58.483};
var jsonWeapon = require('./waffen_liste.json');
const weaponObj = JSON.parse(jsonWeapon);

//const specialColshape = new ColshapeSphere();




alt.on('playerConnect', SpawnPlayer);
//alt.on('playerDeath', RespawnPlayer);


function SpawnPlayer(player){
    player.model= 'a_f_y_hipster_04';
    player.spawn(playerSpawn.x,playerSpawn.y, playerSpawn.z,0);

}
/*
function RespawnPlayer(target){
   target.spawn(playerSpawn.x, playerSpawn.y, playerSpawn.z,2);
}
*/

chat.registerCmd('pos',(player) => {
  //  chat.send(player,`${JSON.stringify(player.pos)}`);
    console.log(player.pos);
});

chat.registerCmd('giveweapon', (player, args)=> {
  const weaponName = args[0].toLowerCaser(); 

  if()
})