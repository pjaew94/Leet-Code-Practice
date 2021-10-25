// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/typescript

function updateLight(current: string): string {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

console.log(updateLight("red"));
