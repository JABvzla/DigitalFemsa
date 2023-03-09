export const fullDateFormat = (date: string) => {
  const dateObj = new Date(date)
  const options = { year: "numeric", month: "long", day: "numeric" }
  const result = dateObj.toLocaleDateString("es-ES", options as Intl.DateTimeFormatOptions)
  if (result === "Invalid Date") return ""
  return result
}
