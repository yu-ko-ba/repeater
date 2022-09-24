const repeatForNCharacters = (str: string, n: number): string => { 
  if (str.length === 0) {
    return ""
  }
  let result = str
  while (result.length < n) {
    result += str
  }
  return result.slice(0, n)
}

export default repeatForNCharacters
