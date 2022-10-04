export default function timeConverter(timestamp) {
  const a = new Date(timestamp)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
/*   const year = a.getFullYear() */
  const month = months[a.getMonth()]
  const date = a.getDate()
  const hour = a.getHours()
  const min = a.getMinutes()
/*   const sec = a.getSeconds() */
  return `${date} ${month} ${hour}:${min}`
}
