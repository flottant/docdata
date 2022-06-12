// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '御宅族的知识库',
  tagline: '^_^',
  url: 'https://osw.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
  organizationName: 'flottant', // Usually your GitHub org/user name.
  projectName: 'docdata', // Usually your repo name.

  //scripts: [
  //  'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/embed.js',
  //  'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/autoFitIframe.js'
  //],

  scripts: [{
    //src: '/js/embed.js',
    src: 'https://d3l9fju211jpzs.cloudfront.net/114/client/static/js/embed.js',
    async: false,
  }, ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/flottant/docdata/edit/master/',
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/flottant/docdata/edit/master/',
          //blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 8,
          path: 'blog',
          blogSidebarTitle: 'Recent',
          feedOptions: {
            type: 'all',
            title: '御宅族的知识库',
            description: '御宅族的知识库 RSS',
            copyright: `Copyright © ${new Date().getFullYear()} Power Lin.`,
          },
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }, ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*
            algolia: {
              // The application ID provided by Algolia
              appId: 'IRO903CONI',

              // Public API key: it is safe to commit it
              apiKey: 'defe7fd8690822eed8e3c94801bab286',

              indexName: 'wiki-power',

              // Optional: see doc section below
              contextualSearch: true,

              // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
              //externalUrlRegex: 'external\\.com|domain\\.com',

              // Optional: Algolia search parameters
              searchParameters: {},

              // Optional: path for search page that enabled by default (`false` to disable it)
              searchPagePath: 'search',

              //... other Algolia params
            },*/

      //sidebarCollapsible: true, //默认折叠
      autoCollapseSidebarCategories: true,
      image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
      hideableSidebar: false,


      navbar: {
        title: ' 御宅族的知识库', 
        hideOnScroll: false,
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/


/*
        items: [{
            to: "",
            label: "",
            position: "",
          },
        ],
        */ 
      },


      footer: {
        style: 'light',


        links: [

          /*
          {
            href: "",
            label: "",
          */
        ],


        copyright: ` Built with Docusaurus.`,
      },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;