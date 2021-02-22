export const get_int_rand = (min, max) =>
  parseInt(Math.random() * (max - min) + min);

export const get_float_rand = (min, max) => Math.random() * (max - min) + min;

export const get_rand_rositve_or_negative = (number) =>
  Math.random() > 0.5 ? number : -number;
