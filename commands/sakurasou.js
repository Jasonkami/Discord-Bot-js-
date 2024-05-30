module.exports = {
    name: 'sakurasou',
    description: "sends the link to the netflix series!",
    execute(message, args){

        if(message.member.roles.cache.some(role => role.name === 'AI')){
            message.channel.send('https://www.netflix.com/title/81165091?s=i&trkid=13747225')
       
       
        } else {
            message.channel.send('Sorry, but you do not own the required role yet. I will give it to you.');
            let role = message.member.guild.roles.cache.find(role => role.name === "AI");
            if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
             }

    }
}