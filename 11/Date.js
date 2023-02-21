
const now = new Date();

const year = now.getFullYear();
console.log('Year: ', year);

const month = now.getMonth();
console.log('Month: ', month);

const date = now.getDate();
console.log('Date: ', date);

const day = now.getDay();
console.log('Day: ', day);

const hours = now.getHours();
console.log('Hours: ', hours);

const minutes = now.getMinutes();
console.log('Minutes: ', minutes);

const secondsSinceEpoch = now.getTime() / 1000;
console.log('Seconds since January 1, 1970: ', secondsSinceEpoch);
