module.exports = {
    name: 'ban',
    description: "this command bans someone!",
    execute(message, args){
        const member = message.mentions.users.first();

        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("The user has been banned.");
        }else{
            message.channel.send(`Sorry, but you coudn't ban that member!`);

        }
   
    }
}