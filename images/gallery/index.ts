export const gallery = Object.values(
  import.meta.glob("./*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);
