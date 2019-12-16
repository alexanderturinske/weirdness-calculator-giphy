export const calculateMean = favorites => {
  const gifs = Object.values(favorites);
  const total = !gifs.length
    ? 0
    : gifs.reduce((acc, curr) => acc + curr.weirdness, 0);
  // TODO: Show different message if there are no favorites instead of setting it to 0
  const mean = gifs.length ? Math.round(total / gifs.length) : 0;
  return mean;
};
