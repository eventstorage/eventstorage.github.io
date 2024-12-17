import {
  defineTheme,
  directory,
  group,
  link,
  site,
  separator,
  siteTemplate,
  social,
  type SiteComponent,
} from '@neato/guider/theme';
import { Logo } from './components/logo';


const template = site('my-site', {
  github: 'mrjvs/neatojs',
  dropdown: [link('v0.0.0-beta.12', '/docs/guider'), link('v0.0.0-beta.13', '/docs/config')],
  navigation: [link('Showcase', '/showcase')],
  tabs: [link('Documentation', '/docs'), link('Api reference', '/api-refs')],
  settings: {
    colors: {
      primary: '#A880FF',
      primaryDarker: '#6C3DD0',
      primaryLighter: '#D0BAFF',
    },
    backgroundPattern: 'flare',
    logo: () => <Logo />,
  },
  contentFooter: {
    editRepositoryBase: 'https://github.com/mrjvs/neatojs/tree/dev/apps/docs',
    socials: [
      social.discord('https://discord.gg/cGd5pKxWyK'),
      social.github('https://github.com/mrjvs/neatojs'),
    ],
  },
  meta: {
    titleTemplate: '%s - NeatoJS',
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  },
});


export default defineTheme([
  site('main', {
    extends: [template],
    // logo: () => <img src="vercel.svg" width="50" height="50"></img>,
    directories: [
      directory('ref', {
        // sidebar: [
        //   // link('The API reference', '/api-ref/'),
        //   // link('Other info', '/api-ref/other'),
        // ],
      }),
    ],
    logo: () => <Logo />,
  }),
  site('site-a', {
    extends: [template],
    meta: {
      titleTemplate: "%s - Guider",
      openGraph: {
        type: 'website',
        url: 'https://www.example.com/page',
        title: 'My site',
        description: 'My description'
      }
    },
    contentFooter: {
      socials: [],
      text: 'Copyright (c) 2024',
      editRepositoryBase: 'https://github.com/eventstorage/eventstorage',
    },
    pageFooter: {
      text: 'Made with love <3',
    },
    directories: [
      directory('guides', {
        sidebar: [
          link('Guides', '/docs/guides/', {
            style: 'star',
            icon: 'fa6-solid:house',
          }),
          link('How to?', '/docs/guides/how-to', { style: 'star' }),
          link('GFM', '/docs/guides/github', {
            style: 'star',
            icon: 'radix-icons:github-logo',
          }),

          group('Introduction', [
            link('Guides', '/docs/guides/'),
            link('How to?', '/docs/guides/how-to'),
          ]),
          group('Other stuff', [
            link('Guides', '/docs/guides/'),
            link('How to?', '/docs/guides/how-to'),
          ]),
          separator(),
          link.nested('Troubleshooting', '/docs/guides/troubleshooting', [
            link('Guides', '/docs/guides/'),
            link('How to?', '/docs/guides/how-to'),
          ]),
          link.nested('Troubleshooting 2', [
            link('Guides', '/docs/guides/'),
            link('How to?', '/docs/guides/how-to'),
          ]),
        ],
        settings: {
          logo: () => <img src="vercel.svg" width="50" height="50"></img>,
          colors: {
            primary: '#50EA8E',
            primaryDarker: '#1BA965',
            primaryLighter: '#89FFAA',
          },
        },
      }),
      directory('cli', {
        sidebar: [
          link('Getting started', '/docs/cli/'),
          link('CLI A', '/docs/cli/cli-a'),
          link('CLI B', '/docs/cli/cli-b'),
          link('David Tennant', '/docs/cli/tennant'),
        ],
      }),
      directory('misc', {
        sidebar: [
          link('The misc', '/docs/misc/'),
          link('The cure', '/docs/misc/the-cure'),
        ],
      }),
    ],
  }),
]) satisfies SiteComponent[];
