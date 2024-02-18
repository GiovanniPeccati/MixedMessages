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

const prediction = randomMessage(predictions);
const suggestion = randomMessage(suggestions);

console.log(`Today is ${dayOfWeek}.`);

console.log(`You will have ${prediction}.`);

console.log(`You should ${suggestion}.`);