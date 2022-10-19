function padTo2Digits (num) {
  return String(num).padStart(2, '0')
}

export function getFormatedTime (dateInput) {
  const date = new Date(dateInput)
  const hour = padTo2Digits(date.getHours())
  const minutes = padTo2Digits(date.getMinutes())

  return `${hour}:${minutes}`
}
