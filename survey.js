const { info } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const yourAnswers = {
  myName: "",
  activity: "",
  listen: "",
  meal: "",
  favoriteFood: "",
  sport: "",
  superPower: ""
};


rl.question('What is your name? Nicknames are also acceptable :)  ', (myName) => {
  yourAnswers.myName = myName;

  rl.question('What\'s an activity you like doing?  ', (activity) => {
    yourAnswers.activity = activity;

    rl.question('What do you listen to while doint that?  ', (listen) => {
      yourAnswers.listen = listen;

      rl.question('Which meal is your favorite? (eg. dinner, brunch, etc.)  ', (meal) => {
        yourAnswers.meal = meal;

        rl.question('What\'s your favorite thing to eat for that meal?  ', (favoriteFood) => {
          yourAnswers.favoriteFood = favoriteFood;
 
          rl.question('Which sport is your absolute favorite?  ', (sport) => {
            yourAnswers.sport = sport;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (superPower) => {
              yourAnswers.superPower = superPower;

              rl.close();
  
              console.log(`My name is ${myName} and I like ${activity} while listening to ${listen}. My favorite meal is ${meal} and my favorite food is ${favoriteFood}. My absolute favorite sport is ${sport}, and my super power is ${superPower}`);

            });

          });

        });

      });

    });

  });

});

