describe('empty spec', () => {
  it('passes', () => {
    const hoge = () => {
      return fetch("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap")
        .then((r) => "hoge")
        .catch((reason) => "error")
    }
    const fuga = hoge()
    console.log(fuga);
  })
})
