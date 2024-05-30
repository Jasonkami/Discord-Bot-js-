module.exports = {
    name: 'remove',
    description: "this command removes the bot role!",
    execute(message, args){

        if(message.member.roles.cache.some(role => role.name === 'AI')){
            message.channel.send('Your role has been successfully removed!');
             let role = message.member.guild.roles.cache.find(role => role.name === "AI");
             if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
       
       
        } else {
             message.channel.send('Sorry, but you do not even own this role :D');
             
        }

    }
}