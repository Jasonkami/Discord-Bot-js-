const Discord = require('discord.js');

const TOKEN = require .env

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({intents:["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]},{partials:["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '!';


const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const messages = ['HENTAI' , 'Rocket League Esports' , 'You in your house' , 'Helldivers die']
let current = 1;

client.on('ready', () => {
    console.log('Ai-chan is online!');

    client.user.setActivity(messages[0] , {type: 'WATCHING'})
       
    setInterval(() => {
        if(messages[current]){
            client.user.setActivity(messages[current] , {type: 'WATCHING'})
            current++;
        }else {
            current = 0;
            client.user.setActivity(messages[current] , {type: 'WATCHING'})
        }

    } , 5*1000)
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'hey') {
      return interaction.reply('hey!');
    }
});


client.on('guildMemberAdd' , guildMember => {

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'AI');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.find(i => i.name === 'welcome').send(`Yo <@${guildMember.user.id}> welcome to the server, please check the information channel and follow the rules!`)
})

client.on('message', message => {
   
   
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    
    } else if (command == 'sakurasou'){
        client.commands.get('sakurasou').execute(message, args);
    
    } else if (command == 'information'){
        client.commands.get('information').execute(message, args);
   
    } else if (command == 'remove'){
        client.commands.get('remove').execute(message, args);
   
    } else if (command == 'sasusupport'){
        client.commands.get('sasusupport').execute(message, args, Discord);
   
    } else if (command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
   
    } else if(command == 'kick'){
        client.commands.get('kick').execute
        if(message.member.roles.cache.find(r => r.name === "Admin")) {
            client.commands.get('kick').execute(message, args)
       
       
        } else {
             message.channel.send('Sorry, but you do not have permissions to do that.');
        }
        (message, args);
    
    } else if(command == 'ban'){
        client.commands.get('ban').execute
        if(message.member.roles.cache.find(r => r.name === "Admin")) {
            client.commands.get('kick').execute(message, args)
       
       
        } else {
             message.channel.send('Sorry, but you do not have permissions to do that.');
        }
        (message, args);

    } else if (command == 'mute'){
        client.commands.get('mute').execute
        if(message.member.roles.cache.find(r => r.name === "Admin")){
            client.commands.get('mute').execute(message, args)
       
       
        } else {
             message.channel.send('Sorry, but you do not have permissions to do that.');
        }
        (message, args);

    } else if (command == 'unmute'){
        client.commands.get('unmute').execute
        if(message.member.roles.cache.find(r => r.name === "Admin")) {
            client.commands.get('unmute').execute(message, args)
       
       
        } else {
             message.channel.send('Sorry, but you do not have permissions to do that.');
        }
        (message, args);

    } else if (command === 'genderrole') {
        client.commands.get('genderrole').execute(message, args, Discord, client);
    
    } else if (command == 'erssetup'){
        client.commands.get('erssetup').execute
        if(message.member.roles.cache.find(r => r.name === "Admin")) {
            client.commands.get('erssetup').execute(message, args)
       
       
        } else {
             message.channel.send('Sorry, but you do not have permissions to do that.');
        }
             (message, args);

    } else if (command == 'serversetup'){
        client.commands.get('serversetup').execute
        if(message.member.roles.cache.find(r => r.name === "Admin")) {
            client.commands.get('serversetup').execute(message, args)
               
               
        } else {
            message.channel.send('Sorry, but you do not have permissions to do that.');
        }
        (message, args);
    }

}); 

client.login(TOKEN)
