//want to fetch random name from this API and assign to the players in the game

  var obj = {};
  obj.name = "";



  fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {obj = data;})
  .then(() => {console.log(obj.results[0].name.first);})




  




