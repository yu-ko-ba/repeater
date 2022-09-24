import repeatForNCharacters from "../../src/utils/repeatForNCharacters"

describe('repeat for n characters', () => {
  it('should repeat for n characters', () => {
    expect(repeatForNCharacters("a", 10)).to.equal("aaaaaaaaaa")
  })
})
