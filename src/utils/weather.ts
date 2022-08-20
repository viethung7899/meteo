export type Unit = "metric" | "imperial"

export const convertTemperature = (temp: number, unit: Unit) => {
  if (unit === "metric") return Math.round(temp);
  return Math.round(temp * 1.8 + 32);
}