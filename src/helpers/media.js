export const media = {
  'xs': 0, 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4
}

export const mediaOnly = function (width, size) {
  return media[width] === size;
}

export const mediaNot = function (width, size) {
  return !mediaOnly(width, size);
}

export const mediaUp = function (width, size) {
  return media[width] >= size;
}

export const mediaDown = function (width, size) {
  return media[width] <= size;
}

export const mediaLargerThan = function (width, size) {
  return media[width] > size;
}

export const mediaSmallerThan = function (width, size) {
  return media[width] < size;
}
