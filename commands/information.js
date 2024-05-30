module.exports = {
    name: 'information',
    description: "this command sends information about the bot!",
    execute(message, args){

        if(message.member.roles.cache.some(role => role.name === 'AI')){
            message.channel.send('** Hi! My name is Ai and I am a discord.js bot that is currently being developed by the user @Jasonkami#6103. You mostly need the role "AI" to interact with me while some commands are exclusive to Admins and Moderators. In order for my Admin/Moderator commands to work you will need people with the "Admin" role or the "Moderator" role. If there are any issues please ping or contact my developer.** ')
       
       
        } else {
            message.channel.send('Sorry, but you do not own the required role yet. I will give it to you.');
            let role = message.member.guild.roles.cache.find(role => role.name === "AI");
            if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
             }

    }
}