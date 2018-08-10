export function add (a, b, ...rest) {
  console.log('adding', a, b)
  console.log('got more?', ...rest)
  return a + b
}
