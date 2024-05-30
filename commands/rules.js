module.exports = {
    name: 'rules',
    description: "sends the server rules!",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#e500ff')
        .setTitle('__**RULES**__')
        .setURL('https://discord.gg/XKbs9gtcYM')
        .setDescription('These are the rules of the icy-test-discord Server!')
        .addFields(
            {name: 'Rule 1', value: ' Be kind and use common sense! Friendliness has top priority. No one needs a fight!'},
            {name: 'Rule 2', value: 'No inappropriate nicknames! Nicknames must not contain any offensive or other prohibited or protected names or parts of names.'},
            {name: 'Rule 3', value: 'No inappropriate avatars! Avatars must not contain any pornographic, racist, offensive or other content that violates law.'},
            {name: 'Rule 4', value: 'Do not share private data! Private data such as telephone numbers, addresses, passwords and other things like that may not be exchanged publicly. A server admin will never ask for sensitive data.'},
            {name: 'Rule 5', value: 'Be careful with your words! Insulting , Mobbing and Discrimination is prohibited.'},
            {name: 'Rule 6', value: 'Spam-Note: Any kind of spam is prohibited except in random-spam-area.'},
            {name: 'Rule 7', value: 'Advertising: External advertising of any kind is strictly prohibited and will be punished!'},
            {name: 'Rule 8', value: 'Offensive topics! Racism, anti-Semitism, anti feminism and any other kind of offensive topics in any form will not be tolerated!'},
            {name: 'Rule 9', value: 'Bot-commands: Please use bot commands like to see your rank only in #icy_test except there is a special channel for a bot Example: ||_coming soon_||!'},
            {name: 'Rule 10', value: 'Order of channels: Please pay attention to all the different channels and use them just for there determination!'},
        )
        .setImage('https://c.tenor.com/u8rif2MFV3IAAAAC/rules.gif')
        .setFooter('By staying on this server and later reacting to this message (feature not implemented yet) you agree with the rules!');

        message.channel.send(newEmbed);


    }
}