import { repeatForNCharacters } from "../../src/utils/repeat"

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    expect(repeatForNCharacters("a", 10)).to.equal("aaaaaaaaaa")
  })
})
