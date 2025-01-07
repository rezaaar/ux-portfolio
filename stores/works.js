import { defineStore } from 'pinia';

export const useWorksStore = defineStore('works', {
  state: () => ({
    works: [
      {
        name: 'latte',
        title: 'Latte Art Simulation App',
        category: 'UX Study',
        pdf: '/pdf/latte.pdf',
        description: 'Enhancing Technology for an Immersive Experience',
        cover: '/img/banner/LatteAR.png',
        docImg: '/img/doc/latte-long.png',
        tools: 'Figma, FigJam',
      },
      {
        name: 'fondasi',
        title: 'Material Visualization',
        category: 'UX Study',
        pdf: '/pdf/Fondasi.pdf',
        description: 'From frustration to Inovation',
        cover: '/img/banner/fondasi.png',
        docImg: '/img/doc/fondasi-long.png',
        tools: 'Figma, Figjam',
      },
    ],
  }),
  getters: {
    getWorkByTitle: (state) => (rawTitle) => {
      const normalize = (str) =>
        str.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

      const normalizedTitle = normalize(rawTitle);
      return state.works.find((work) => normalize(work.name) === normalizedTitle);
    }
  },
});