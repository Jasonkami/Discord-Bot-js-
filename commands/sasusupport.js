module.exports = {
    name: 'sasusupport',
    description: "sends an embed for the netflix series!",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#e500ff')
        .setTitle('**PLEASE SUPPORT THIS ANIME!**')
        .setURL('https://www.netflix.com/title/81165091?s=i&trkid=13747225')
        .setDescription('If this anime gets a second season, I am the happiest human on this planet!')
        .addFields(
            {name: 'Reason 1', value: 'It makes me the happiest person on the planet!'},
            {name: 'Reason 2', value: 'It makes other poeple really happy too, because the anime has many fans!'},
            {name: 'Reason 3', value: 'The anime is actually great and has so much potencial for a season two!'},
            {name: 'Reason 4', value: 'By doing it you will experience something hyper emotional and beautiful, I promise!'},
            {name: 'Reason 5', value: 'The developers and producers + the whole team etc. deserve to see, that they did a great job and need to see, that they should go on!'}
        )
        .setImage('http://static2.minitokyo.net/view/49/34/656749.jpg')
        .setFooter('Make sure to check it out! PLS!');

        message.channel.send(newEmbed);


    }
}