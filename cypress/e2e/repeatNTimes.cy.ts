import repeatNTimes from "../../src/utils/repeatNTimes"

describe('repeat n times', () => {
  it('should repeat text n times', () => {
    expect(repeatNTimes("いちご", 46))
      .to.equal("いちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちごいちご")
  })
})
