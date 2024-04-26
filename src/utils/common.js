import { imageProduct as image } from "../components/Assets/images";
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};
export const data = [
  {
    name: "Villas",
    image: image[0],
  },
  {
    name: "Penthouses",
    image: image[1],
  },
  {
    name: "Terraces",
    image: image[2],
  },
  {
    name: "Pool Side",
    image: image[3],
  },
  {
    name: "Balcony",
    image: image[4],
  },
];
