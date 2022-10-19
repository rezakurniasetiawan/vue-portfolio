import { defineStore } from "pinia";

const imageStore  = defineStore({
  id: "image",
  state: () => ({
    list: [
      {
        id: 1,
        slug: "al-quran-terjemahan-lengkap-indonesia",
        category: "Mobile Development",
        title: "Al-quran Lengkap Indonesia",
        image: "1.jpg",
      },
      {
        id: 2,
        slug: "portal-beasiswa",
        category: "Web Development",
        title: "Portal Beasiswa",
        image: "2.jpg",
      },
      {
        id: 3,
        slug: "aplikasi-edukasi-wayang-anak-anak",
        category: "Mobile Development",
        title: "Aplikasi Edukasi wayang anak-anak",
        image: "3.jpg",
      },
      {
        id: 4,
        slug: "elu-app",
        category: "Mobile Development",
        title: "ELU App",
        image: "4.jpg",
      },
      {
        id: 5,
        slug: "runner-covid-19",
        category: "Game Development",
        title: "Runner Covid 19",
        image: "5.jpg",
      },
      {
        id: 6,
        slug: "e-Batik-suroboyoan-app",
        category: "Mobile Development",
        title: "E-Batik Suroboyoan app",
        image: "6.jpg",
      },
      {
        id: 7,
        slug: "media-pembelajaran-app",
        category: "Mobile Development",
        title: "Media Pembelajaran App",
        image: "7.jpg",
      },
      {
        id: 8,
        slug: "hidrokarbon-app",
        category: "Game Development",
        title: "Hidrokarbon App",
        image: "8.jpg",
      },
      {
        id: 9,
        slug: "",
        category: "Web Development",
        title: "Landing Page Elu App",
        image: "9.jpg",
      },
      {
        id: 10,
        slug: "",
        category: "Web Development",
        title: "SPK Metode SAW",
        image: "10.jpg",
      },
      {
        id: 11,
        slug: "",
        category: "Web Development",
        title: "Sistem Pelayanan Sertifikat Tanah",
        image: "11.jpg",
      },
      {
        id: 12,
        slug: "",
        category: "Web Development",
        title: "Sistem Pelayanan Arsip Inaktif",
        image: "12.jpg",
      },
      {
        id: 13,
        slug: "",
        category: "Mobile Development",
        title: "Kemerdekaan App",
        image: "13.jpg",
      },
      {
        id: 14,
        slug: "",
        category: "Mobile Development",
        title: "Virtual Queue App",
        image: "14.jpg",
      },
    ],
  }),
  actions : {},
  getters: {
      g$list: ({ list })=> list,
      g$detail: ({ list }) => {
          return(id) => list.find((image) => image.id == id);
      }
  },
});
export default imageStore;