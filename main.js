const opening = document.getElementById('opening');
const today = document.getElementById('today');
const predict = document.getElementById('predictions');
const suggest = document.getElementById('suggestions');
const reveal = document.getElementById('reveal');
const retry = document.getElementById('retry');
const card = document.getElementById('card');

card.style.display = 'none';
today.style.display = 'none';
predict.style.display = 'none';
suggest.style.display = 'none';

// create a new Date object
const now = new Date();

// get the current day of the week
const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const dayOfWeek = daysOfWeek[now.getDay()];

// parts for possible random messages combinations
const goodPredictions = ['good luck', 'a wonderful day', 'a fun day', 'an enjoyable day', 'a special day',  'a successful day', 'a crazy day', 'a relaxing day', 'a good day']
const goodSuggestions = ['go for a walk', 'hang out with friends', 'spend time with your family', 'go to the gym', 'meet new people', 'try something new', 'go on a roadtrip']

const badPredictions = ['bad luck', 'a stressful day', 'a boring day', 'a tiring day', 'a very long day', 'a tough day', 'an outrageous day', 'a strange day', 'a bad day']
const badSuggestions = ['stay at home', 'read a book', 'go to sleep early', 'take a shower', 'relax a bit', 'take a nap', 'drink some water', 'eat something']

const allPredictions = ['good luck', 'a wonderful day', 'a fun day', 'an enjoyable day', 'a special day',  'a successful day', 'a crazy day', 'a relaxing day', 'a good day', 'bad luck', 'a stressful day', 'a boring day', 'a tiring day', 'a very long day', 'a tough day', 'an outrageous day', 'a strange day', 'a bad day'];
const allSuggestions = ['go for a walk', 'hang out with friends', 'spend time with your family', 'go to the gym', 'meet new people', 'try something new', 'go on a roadtrip','stay at home', 'read a book', 'go to sleep early', 'take a shower', 'relax a bit', 'take a nap', 'drink some water', 'eat something'];

// select the message part randomly
const randomMessage = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

function futureReveal() {
  let prediction = randomMessage(allPredictions);;
  let suggestion;

  // selects the suggestion based on the type of prediction
  for (let i = 0; i < goodPredictions.length; i++) {
    if (prediction === goodPredictions[i]) {
      suggestion = randomMessage(goodSuggestions);
    } 
  }

  for (let i = 0; i < badPredictions.length; i++) {
    if (prediction === badPredictions[i]) {
      suggestion = randomMessage(badSuggestions);
    } 
  }

  reveal.style.display = 'none';

  opening.innerHTML = 'Here is your future:';

  card.style.display = 'block';
  today.style.display = 'block';
  predict.style.display = 'block';
  suggest.style.display = 'block';

  today.innerHTML = `Today is ${dayOfWeek}.`;
  predict.innerHTML = `You will have ${prediction}.`;
  suggest.innerHTML = `You should ${suggestion}.`;

  retry.style.display = 'block';
}

reveal.onclick = futureReveal;
retry.onclick = futureReveal;