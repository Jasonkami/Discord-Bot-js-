module.exports = {
    name: 'erssetup',
    description: "this command sets up the ers corner",
    execute(message, args){



message.guild.channels.create('ers-general', {
    type: 'text',
    
  })

  message.guild.channels.create('ers-predictions', {
    type: 'text',
    
  })

  message.guild.channels.create('ers-predictions-discussion', {
    type: 'text',
    
  })

  message.guild.channels.create('ERS Discussion', {
    type: 'voice',
    
  })

  message.guild.channels.create('ERS Corner', {
    type: 'category',
    
  })
  message.channel.send("ERS Corner has been setup, you're good to go ! :3");



        //message.guild.channels.create('ERS Corner', {
            //type: 'category'})

        //message.guild.channels.create('ers-general', {
            //type: 'text'})
            
        
                //message.guild.channels.create('ers-predictions', {
                    //type: 'text'})
                    

                        //message.guild.channels.create('ers-predictions-discussion', {
                            //type: 'text'})
                         
                    

                                //message.guild.channels.create('ERS Voice', {
                                    //type: 'voice'})


}}
