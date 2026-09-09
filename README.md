# mc-discord-bridge

**Chat, bridged.**

> Discord bridge for Minecraft - chat sync between Discord and in-game.

Single file, readable, no bloat.

## Flow

- AsyncPlayerChatEvent -> Discord webhook
- Discord !say -> Bukkit.broadcastMessage

## Hand-crafted JS

\\\js
client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith("!say")) return;
  const text = msg.content.slice(4).trim();
  rcon.send('minecraft:msg @a [Discord] ' + msg.author.username + ': ' + text);
});
\\\

## Run

\\\ash
git clone https://github.com/knownasrazi/mc-discord-bridge.git
cd mc-discord-bridge
bun install
bun run start
\\\

## License

MIT