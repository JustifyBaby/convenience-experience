const colors = ["black" , "blue" , "red"];
const transition = "all 0.5s";


const dice = () => {
  const content = natureRandom(1,6);
  
  const element = document.getElementById("dice");
  element.innerHTML = content;
  element.style.color = colors[randomChoice(colors.length)];
  element.style.transition = transition;
  console.log(content);
}

const numSelecter = () => {
  const nums = ["1","2","3","4","5","6","7","8","9","0"];
  const content = nums[randomChoice(nums.length)]
                + nums[randomChoice(nums.length)]
                + nums[randomChoice(nums.length)]

                + nums[randomChoice(nums.length)];
  
  const element = document.getElementById("nums");
  element.innerHTML = content;
  element.style.color = colors[randomChoice(colors.length)];
  element.style.transition = transition;
  console.log(content);
}

const multiSelecter = () => {
  const increaseNum = getInputById_withNum("num")
  const mlts = rangeBetweenArray(increaseNum,increaseNum,increaseNum);
  const content = `{${mlts[0]} , ${mlts[1]} , ${mlts[2]}}`
  
  const element = document.getElementById("mlt");
  element.innerHTML = content;
  element.style.color = colors[randomChoice(colors.length)];
  element.style.transition = transition;
}
