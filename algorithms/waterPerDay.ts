/*
The formula for how much water you should be drinking:

Step 1: Take your weight (in lbs) and divide it by 2.2.

Step 2: Multiply that number by your age.

Step 3: Divide that sum by 28.3.

Step 4: Your total is how many ounces of water you should drink each day.
Source = https://www.dailymail.co.uk/femail/food/article-4617270/How-water-REALLY-drink-day-revealed.html
*/

export function CalculateWater(age: number, weight: number) {
  const stepOne = weight / 2.2;
  const stepTwo = stepOne * age;
  const stepThree = stepTwo / 28.3;
  return Math.floor(stepThree);
}
