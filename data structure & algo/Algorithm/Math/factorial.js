//My solution

function factorial(n) {
  let answer = 1
  for (let i = n; i > 0; i--) {
    answer = answer * i
  }
  return answer
}
