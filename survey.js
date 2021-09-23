const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Object to capture user inputted values.
const details = {
  name: '',
  activity: '',
  musicForActivity: '',
  meal: '',
  dishForMeal: '',
  sport: '',
  superpower: '',
};

// Question bank.
const questions = [
  "What's your name?: ",
  "What's an activity you like doing?: ",
  "What do you listen to while doing that?: ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?: ",
  "What's your favourite thing to eat for that meal?: ",
  "Which sport is your absolute favourite?: ",
  "What is your superpower?: ",
];

rl.question(questions[0], name => {
  details.name = name;

  rl.question(questions[1], activity => {
    details.activity = activity;

    rl.question(questions[2], musicForActivity => {
      details.musicForActivity = musicForActivity;

      rl.question(questions[3], meal => {
        details.meal = meal;

        rl.question(questions[4], dishForMeal => {
          details.dishForMeal = dishForMeal;

          rl.question(questions[5], sport => {
            details.sport = sport;

            rl.question(questions[6], superpower => {
              details.superpower = superpower;

              console.log(`\n${details.name}'s Profile:\n- Likes ${details.activity} while listening to ${details.musicForActivity}\n- Favourite meal is ${details.meal} and favourite thing to eat for ${details.meal} is ${details.dishForMeal}\n- Favourite sport is ${details.sport}\n- Superpower is ${details.superpower}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});