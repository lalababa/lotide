//loop (array)
//  if (check the grape)
//    return alert!
//  else : all good!

const raisinAlarm = function (cookies) {
  // Put your solution here
  
  for(let cookie of cookies){
 //   console.log(cookie);
    
    if(cookie === "🍇"){
      return "Raisin Alert!";
    }  
  }
  return "All Good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



//arrays in arrays


const raisinAlarmArray = function (cookies) {
  // Put your solution here
  const result = [];
  for (let array of cookies){
    result.push(raisinAlarm(array));
  }
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);