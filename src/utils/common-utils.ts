export const getCardsBackground = (index: number) => {
  const mod = index % 4;

  switch (mod) {
    case 0:
      return "green.400";
    case 1:
      return "red.50";
    case 2:
      return "red.300";
    case 3:
      return "green.200";
  }
};
