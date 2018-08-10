import { add } from '../src/index'

describe('My lib', () => {
  it('adds', () => {
    console.log('Im in')
    expect(add(1, 2)).toBe(3)
  })
})
