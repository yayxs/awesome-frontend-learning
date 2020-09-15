module.exports = {
  title: "前端厚说",
  description: "frontend-thick-talk",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guides/" },
      {
        text: "GitHub",
        link: "https://github.com/yayxs/frontend-thick-talk",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        title: "前言",
        collapsable: false,
        children: ["/guides/",
      
      ],
      },
      {
        title: "读书系列",
        collapsable: true,
        children: [
          "/guides/books/js_advanced_one",
          "/guides/books/webpack_one",
          "/guides/books/webpack_two",
          "/guides/books/webpack_three",
        ],
      },
      {
        title: "TypeScript",
        collapsable: true,
        children: ["/guides/typescript/ts_one", "/guides/typescript/ts_two"],
      },
      {
        title: "框架实战",
        collapsable: true,
        children: [
          "/guides/wangyiyun/cloud_one",
          "/guides/wangyiyun/cloud_two",
        ],
      },
      {
        title: "工程化",
        collapsable: true,
        children: ["/guides/webpack/"],
      },
    ],
  },
};
