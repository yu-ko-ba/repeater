import repeat from "../../src/utils/repeat"

describe('repeat text to the max length', () => {
  it('should return empty string', () => {
    expect(repeat("", 140, false)).to.equal("")
  })

  it('should return empty string', () => {
    expect(repeat("", 140, true)).to.equal("")
  })

  it('should "いちご" * 46', () => {
    expect(repeat("いちご", 140, false))
      .to.equal("いちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちご")
  })

  it('should "いちご" * 46 + "いち"', () => {
    expect(repeat("いちご", 140, true))
      .to.equal("いちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいち")
  })
})
