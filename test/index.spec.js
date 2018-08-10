import { add } from '../src/index'

describe('My lib', () => {
  it('adds', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('logs more', () => {
    expect(add(2, 2, 3, 4, 7)).toBe(4)
  })
})
