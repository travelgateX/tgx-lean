module.exports = {
  title: 'TGX Lean Practices',
  tagline: 'Tech and product Best Practices and Guidelines',
  url: 'https://docs.travelgatex.com/tgx-lean/site/',
  baseUrl: '/tgx-lean/site/',
  favicon: 'img/favicon.ico',
  organizationName: 'TravelgateX', // Usually your GitHub org/user name.
  projectName: 'tgx-lean', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'TGX Lean Practices',
      logo: {
        alt: 'TravelgateX',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Changelog', position: 'left'},
        {
          href: 'https://github.com/travelgateX',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TravelgateX. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'teams-organization',
          sidebarPath: require.resolve('./sidebars.auto.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-auto-sidebars'
  ],
};
