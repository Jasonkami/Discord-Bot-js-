module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){

        if(message.member.roles.cache.some(role => role.name === 'AI')){
            message.channel.send('pong!')
       
       
        } else {
             message.channel.send('Sorry, but you do not own the required role yet. I will give it to you.');
             let role = message.member.guild.roles.cache.find(role => role.name === "AI");
             if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        }

    }
}