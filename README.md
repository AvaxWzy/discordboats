<div align="center">

[![NPM](https://nodei.co/npm/discordboats.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discordboats)

# DiscordBoats
<p>The unofficial <a href="https://discord.boats">https://discord.boats</a> API wrapper for Node.js</p>
    
</div>



## Installation 

```diff
  # NPM
  npm install discordboats

  # Yarn
  yarn add discordboats
```

## Usage

Post your Bot's Server Count
```js
const { Boat } = require("discordboats");
const boat = new Boat();

boat.on("Ready", () => {

    console.log("Ready");

    boat.postServers("1234", 23);
});

boat.on("Posted", amount => {

    console.log("Server count posted - " + number);
});

boat.login("Your Api Token");
```

Fetch a user info
```js
const { Boat } = require("discordboats");
const boat = new Boat();

/*boat.users.fetchUser("User id").then(x => {

    console.log(`Name: ${x.name}`);
});*/

const user = await boat.users.fetchUser("User id");

console.log(`Name: ${user.name}`);
```

Fetch a bot info
```js
const { Boat } = require("discordboats");
const boat = new Boat();

/*boat.users.fetchBot("Bot id").then(x => {

    console.log(`Name: ${x.name}`);
});*/

const bot = await boat.users.fetchBot("Bot id");

console.log(`Name: ${bot.name}`);
```

Check if a user has voted your bot
```js
const { Boat } = require("discordboats");
const boat = new Boat();

/*boat.users.isVoted("Your Bot ID", "User ID").then(x => {

    console.log(x); // Return true or false
});*/

const voted = await boat.users.isVoted("Your Bot Id", "User ID");

console.log(voted); // Retrun true of false
```

# License

Package is licensed under [MIT](LICENSE)
