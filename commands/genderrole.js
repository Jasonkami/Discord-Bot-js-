module.exports = {
    name: 'genderrole',
    description: "reaction role message for genders!",
    async execute(message, args, Discord, client) {
        const channel = '952962737191915540';
        const maleRole = message.guild.roles.cache.find(role => role.name === 'male');
        const femaleRole = message.guild.roles.cache.find(role => role.name === 'female');
        const diverseRole = message.guild.roles.cache.find(role => role.name === 'diverse');

        const maleEmoji = '🙋‍♂️';
        const femaleEmoji = '🙋‍♀️';
        const diverseEmoji = '🦄';

        let embed = new Discord.MessageEmbed()
        .setColor('#2cb968')
        .setTitle('choose your gender!')
        .setDescription('choosing your gender will make it easier for others to find out your pronouns!\n\n'
            + `${maleEmoji} for the male gender\n`
            + `${femaleEmoji} for the female gender\n`
            + `${diverseEmoji} for non-binary`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(maleEmoji);
        messageEmbed.react(femaleEmoji);
        messageEmbed.react(diverseEmoji);
        
        client.on('messageReactionAdd' , async (reaction, user) => {

            const role = reaction.message.guild.roles.cache.find(r => r.name === "role");
            

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                
                if (reaction.emoji.name === maleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(maleRole);

                } 
                if (reaction.emoji.name === femaleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(femaleRole);

                }
                if (reaction.emoji.name === diverseEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(diverseRole);                   
                } 
            } else {
                return;
            }


        });

        client.on('messageReactionRemove' , async (reaction, user) => {

            const role = reaction.message.guild.roles.cache.find(r => r.name === "role");
            

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
            
                
                if (reaction.emoji.name === maleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(maleRole);

                } 
                if (reaction.emoji.name === femaleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(femaleRole);

                }
                if (reaction.emoji.name === diverseEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(diverseRole);                   
                } 
            } else {
                return;
            }


        });

    }

}