Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, email, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.address = address;
    }
  }
  var person1 = new Person("vijay", "viji", 25, "mahiviji99.com", "112 kn nagar")
  var a = person1;
  for (i=0;i<a.length;i++){
      console.log(a[i])
  }

  2.write a class to calculate the uber price.
  function calculateUberPrice(distanceInKilometers, timeInMinutes) {
    const baseRatePerKilometer = 1.5;
    const ratePerMinute = 0.2; 
    const bookingFee = 5;
  
    const distanceCost = baseRatePerKilometer * distanceInKilometers;
    const timeCost = ratePerMinute * timeInMinutes;
    const totalCost = distanceCost + timeCost + bookingFee;
  
    return totalCost.toFixed(2);
  }
  
  
  const distance = 10;
  const time = 20; 
  const price = calculateUberPrice(distance, time);
  
  console.log(`The Uber price is $${price}`);