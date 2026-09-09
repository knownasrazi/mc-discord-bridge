import { Client } from "discord.js";
export function forwardToDiscord(player: string, text: string, webhook: string){
    if(!text.trim()) return;
    const clean=text.slice(0,1900);
    fetch(webhook,{method:"POST", body:JSON.stringify({content:"**"+player+":** "+clean}), headers:{"Content-Type":"application/json"}});
}
export function forwardToMc(username: string, text: string){
    // via RCON
    const cmd = 'tellraw @a {"text":"[Discord] '+username+': '+text.slice(0,100)+'"}';
    fetch(process.env.RCON_URL||"",{method:"POST",body:cmd});
}
