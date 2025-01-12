export const randomInt = ({ min, max }: { min: number; max: number }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const secondsToHM = (d: number) => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);

  const hDisplay = h > 0 ? h + "h " : "";
  const mDisplay = m > 0 ? m + "m" : "";

  return (hDisplay + mDisplay).trimEnd();
};
