import { defineStore } from 'pinia';

export const useWorksStore = defineStore('works', {
  state: () => ({
    works: [
      {
        title: 'Latte Art Simulation App',
        category: 'UX Study',
        pdf: '/pdf/latte.pdf',
        description: 'Enhancing Technology for an Immersive Experience',
        cover: '/img/banner/LatteAR.png',
        tools: 'Figma, FigJam',
      },
      // {
      //   title: 'Work 2',
      //   category: 'Graphic Design',
      //   pdf: '/pdf/work2.pdf',
      //   description: 'An exploration of modern design.',
      //   cover: '/img/work2-cover.jpg',
      //   tools: 'Adobe Photoshop, Illustrator',
      // },
    ],
  }),
  getters: {
    getWorkByTitle: (state) => (rawTitle) => {
      const normalize = (str) =>
        str.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

      const normalizedTitle = normalize(rawTitle);
      return state.works.find((work) => normalize(work.title) === normalizedTitle);
    }
  },
});