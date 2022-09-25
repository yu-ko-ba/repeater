const repeat = (repeatText: string, resultMaxLength: number, cramToTheMax: boolean): string => {
  if (repeatText === "") {
    return ""
  }

  const times = Math.trunc(resultMaxLength / repeatText.length)

  if (cramToTheMax) {
    return repeatText.repeat(times + 1).slice(0, resultMaxLength)
  }

  return repeatText.repeat(times)
}

export default repeat
