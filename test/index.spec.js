import { add } from '../src/index'

console.log('Im in')
describe('My lib', () => {
  it('adds', () => {
    expect(add(1, 2)).toBe(3)
  })
})
