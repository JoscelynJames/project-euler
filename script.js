/* Project Euler problem 99
 Largest Exponential
 For this problem we need to find the largest exponential of 2 sets of numbers.
*/

// First, I built a function that took in four arguments.
function largestExpo(num1, s1, num2, s2) {
//I used the math.pow() to find the total of both pairs.
  var num1T =  Math.pow(num1, s1);
  var num2T = Math.pow(num2, s2);
/*
I created a conditional that compared the first number to the second number.
If the First number was larger it would return that number, if the first number
was not larger(indicating the second one is larger) it will return the second number.
*/
  if (num1T > num2T) {
    console.log('num1S is bigger.', num1T, ' > ', num2T);
    return num1T;
  } else {
    console.log('num2T is bigger.', num1T, ' < ', num2T);
    return num2T;
  }
}

largestExpo(5, 50, 6, 15)

/* Although this does work for smaller numbers, the numbers that were given would
reach over 3million characters. When I entered two pairs of the given number
it would return Infinity in the console.
This works on small numbers but I would need to find an differnt program that
could encounter these large numbers.
*/
