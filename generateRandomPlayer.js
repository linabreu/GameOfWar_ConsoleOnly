//want to fetch random name from this API and assign to the players in the game

  var obj = {};
  obj.name = "";


//don't know enough about how to capture fetch data as a variable, will come back to this later
  fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {obj = data;})
  .then(() => {console.log(obj.results[0].name.first);})




  




