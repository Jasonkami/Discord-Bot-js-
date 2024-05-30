module.exports = {
    name: 'serversetup',
    description: "this command sets up a server",
    execute(message, args){

message.guild.channels.create('Information', {
    type: 'category',

})

message.guild.channels.create('welcome', {
    type: 'text',
    
  })

  .then(channel => {

    let category = message.guild.channels.cache.find(c => c.name == "Information" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    else channel.setParent(category.id);
 }).catch(console.error);

 message.guild.channels.create('rules', {
  type: 'text',
  
})

.then(channel => {

  let category = message.guild.channels.cache.find(c => c.name == "Information" && c.type == "category");

  if (!category) throw new Error("Category channel does not exist");
  else channel.setParent(category.id);
}).catch(console.error);

message.guild.channels.create('announcements', {
  type: 'text',
  
})

.then(channel => {

  let category = message.guild.channels.cache.find(c => c.name == "Information" && c.type == "category");

  if (!category) throw new Error("Category channel does not exist");
  else channel.setParent(category.id);
}).catch(console.error);

message.guild.channels.create('reaction-roles', {
  type: 'text',
  
})

.then(channel => {

  let category = message.guild.channels.cache.find(c => c.name == "Information" && c.type == "category");

  if (!category) throw new Error("Category channel does not exist");
  else channel.setParent(category.id);
}).catch(console.error);

  
  //let category = message.guild.channels.cache.find(c => c.name == "test" && c.type == "category"),
  //channel = message.guild.channels.cache.find(c => c.name == "test-channel" && c.type == "text");

  //if (category && channel) message.guild.channel.setParent(category.id);

  message.channel.send("Server has been setup, you're good to go ! :3");

}

    }

