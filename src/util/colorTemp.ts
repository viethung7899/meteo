export type RGB = [number, number, number]

export const COLORS: Array<[number, RGB]> = [
  [-60, [230, 239, 253]],
  [-40, [196, 212, 235]],
  [0, [122, 144, 182]],
  [35, [44, 67, 107]],
  [50, [56, 102, 134]],
  [65, [109, 139, 136]],
  [80, [191, 171, 124]],
  [95, [179, 115, 83]],
  [115, [101, 30, 55]],
  [120, [56, 7, 2]]
];

const temps = COLORS.map(([temp, _]) => temp);

const interpolate = (color1: RGB, color2: RGB, t: number = 0.5) => {
  let color = color1.map(c => c * t);
  color2.forEach((c, i) => color[i] = Math.floor(color[i] + c * (1-t)));
  return color as RGB;
}

export const getTempColor = (temp: number) => {
  if (temp < temps[0]) return COLORS[0][1];
  if (temp >= temps[COLORS.length - 1]) return COLORS[COLORS.length - 1][1];
  
  const lowers = COLORS.filter(([t,]) => t <= temp);
  const uppers = COLORS.filter(([t,]) => t > temp);

  const [low, lowColor] = lowers[lowers.length - 1];
  const [high, highColor] = uppers[0];
  return interpolate(highColor, lowColor, (temp - low) / (high - low));
}