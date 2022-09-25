const repeatNTimes = (str: string, times: number): string => {
  if (str === "") {
    return ""
  }

  return str.repeat(times)
}

export default repeatNTimes
