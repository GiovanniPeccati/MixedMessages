const opening = document.getElementById('opening');
const today = document.getElementById('today');
const predict = document.getElementById('predictions');
const suggest = document.getElementById('suggestions');
const reveal = document.getElementById('reveal');
const retry = document.getElementById('retry');

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
const predictions = ['good luck', 'bad luck', 'a wonderful day', 'a stressful day', 'a fun day', 'an enjoyable day', 'a special day', 'a boring day', 'a tiring day', 'an odd day', 'a crazy day', 'a successful day', 'a very long day'];
const suggestions = ['stay at home', 'go for a walk', 'hang out with friends', 'do some chores', 'work', 'spend time with your family', 'read a book', 'clean your room', 'do the laundry', 'go to work', 'go to sleep early', 'go to the gym', 'do the dusting', 'take a shower'];

// select the message part randomly
const randomMessage = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

function futureReveal() {
  const prediction = randomMessage(predictions);
  const suggestion = randomMessage(suggestions);

  reveal.style.display = 'none';

  opening.innerHTML = 'Here is your future:';

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