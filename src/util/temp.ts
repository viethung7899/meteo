export type Unit = "metric" | "imperial"

export const convertFromKelvin = (temp: number, unit: Unit) => {
  const celcius = Math.round(temp - 273.15);
  if (unit === "metric") return celcius;
  return Math.round(celcius * 1.8 + 32);
}