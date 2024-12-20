import {
  defineTheme,
  directory,
  group,
  link,
  site,
  siteTemplate,
  social,
  type SiteComponent,
} from '@neato/guider/theme';
import { Logo } from 'components/logo';

const template = siteTemplate({
  github: 'eventstorage/eventstorage',
  dropdown: [link('v0.0.0-beta.13', '/v0.0.0-beta.13'), link('v0.0.0-beta.12', '/v0.0.0-beta.12')],
  navigation: [link('Showcase', '/showcase')],
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
    editRepositoryBase: 'https://github.com/eventstorage/eventstorage/tree/main/docs',
    socials: [
      social.discord('https://discord.gg/cGd5pKxWyK'),
      social.github('https://github.com/eventstorage/eventstorage'),
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

const gdGetStarted = (url: string) => `/v0.0.0-beta.13/getting-started${url}`;
const gdDocs = (url: string) => `/v0.0.0-beta.13/documentation${url}`;
const gdLearn = (url: string) => `/v0.0.0-beta.13/learning${url}`;

const starLinks = [
  link('GitHub', 'https://github.com/eventstorage/eventstorage', {
    style: 'star',
    newTab: true,
    icon: 'akar-icons:github-fill',
  }),
  link('Discord', 'https://discord.gg/cGd5pKxWyK', {
    style: 'star',
    newTab: true,
    icon: 'fa6-brands:discord',
  }),
  link('Suggest features', 'https://github.com/eventstorage/eventstorage/issues', {
    style: 'star',
    newTab: true,
    icon: 'streamline:chat-bubble-typing-oval-solid',
  }),
];

export default defineTheme([
  site('main', {
    extends: [template],
    directories: [
      directory('main', {
        sidebar: [],
      }),
    ],
  }),
  site('v0.0.0-beta.13', {
    extends: [template],
    tabs: [
      link('Getting started', '/v0.0.0-beta.13/getting-started'),
      link('Documentation', '/v0.0.0-beta.13/docs'),
      link('Learning', '/v0.0.0-beta.13/learn'),
    ],
    directories: [
      directory('getting-started', {
        sidebar: [
          ...starLinks,
          group('Getting started', [
            link('Installation', gdGetStarted('/getting-started/installation'), {
              icon: 'fa6-solid:download',
            }),
            link('Development', gdGetStarted('/getting-started/development'), {
              icon: 'icon-park-solid:cpu',
            }),
            link.nested({
              title: 'Migrating to Guider',
              icon: 'fa6-solid:sailboat',
              items: [
                link(
                  'From Nextra',
                  gdGetStarted('/getting-started/migration/from-nextra'),
                ),
                link(
                  'From Docus',
                  gdGetStarted('/getting-started/migration/from-docus'),
                ),
                link(
                  'From Mintlify',
                  gdGetStarted('/getting-started/migration/from-mintlify'),
                ),
              ],
            }),
          ]),
          group('Configuration', [
            link('Colors & theme', gdGetStarted('/config/theming')),
            link('Redirects', gdGetStarted('/config/redirects')),
            link('SEO & Meta tags', gdGetStarted('/config/seo')),
            link('Landing page', gdGetStarted('/config/landing')),
            link('Navigation', gdGetStarted('/config/navigation')),
            link.nested('Common setups', [
              link(
                'Multiple docs sites',
                gdGetStarted('/config/common/multi-docs'),
              ),
              link('API reference + docs', gdGetStarted('/config/common/api-ref')),
            ]),
          ]),
          group('Advanced', [
            link('Running multiple sites', gdGetStarted('/advanced/multi-site')),
            link('Header', gdGetStarted('/advanced/header')),
            link('Footer', gdGetStarted('/advanced/footer')),
            link(
              'Customizing layout',
              gdGetStarted('/advanced/customizing-layout'),
            ),
            link('Deep-dive concepts', gdGetStarted('/advanced/deep-dive')),
          ]),
          group('Deploying', [
            link('GitHub Pages', gdGetStarted('/deploy/github-pages')),
            link('Netlify', gdGetStarted('/deploy/netlify')),
            link('Vercel', gdGetStarted('/deploy/vercel')),
            link('Cloudflare Pages', gdGetStarted('/deploy/cloudflare')),
            link('Docker', gdGetStarted('/deploy/docker')),
          ]),
        ],
      }),
      directory('guider-writing', {
        sidebar: [
          ...starLinks,
          group('Markdown', [
            link('Making pages', gdDocs('/markdown/making-pages'), {
              icon: 'fa6-solid:file-lines',
            }),
            link('Basic text', gdDocs('/markdown/basic-text'), {
              icon: 'fa6-solid:font',
            }),
            link('Lists', gdDocs('/markdown/lists'), {
              icon: 'fa6-solid:list-ul',
            }),
            link('Code blocks', gdDocs('/markdown/code-blocks'), {
              icon: 'fa6-solid:code',
            }),
          ]),

          group('Advanced markdown', [
            link('Tables', gdDocs('/advanced/tables'), {
              icon: 'fa6-solid:table',
            }),
            link('Quotes', gdDocs('/advanced/quotes'), {
              icon: 'fa6-solid:quote-left',
            }),
            link('Footnotes', gdDocs('/advanced/footnotes'), {
              icon: 'fa6-solid:note-sticky',
            }),
            link('Dividers', gdDocs('/advanced/dividers'), {
              icon: 'fa6-solid:grip-lines',
            }),
          ]),

          group('Components', [
            link('Code groups', gdDocs('/components/code-groups'), {
              icon: 'fa6-solid:layer-group',
            }),
            link('Callouts', gdDocs('/components/callouts'), {
              icon: 'fa6-solid:bell-concierge',
            }),
            link('Tabs', gdDocs('/components/tabs'), {
              icon: 'fa6-solid:window-restore',
            }),
            link('Fields', gdDocs('/components/fields'), {
              icon: 'fa6-solid:rectangle-list',
            }),
            link('Steps', gdDocs('/components/steps'), {
              icon: 'fa6-solid:list-ol',
            }),
            link('Frames', gdDocs('/components/frames'), {
              icon: 'fa6-solid:image',
            }),
            link('Custom components', gdDocs('/components/custom'), {
              icon: 'fa6-solid:boxes-stacked',
            }),
          ]),
        ],
      }),
      directory('guider-api-ref', {
        sidebar: [
          ...starLinks,
          group('Theme configuration', [
            link('defineTheme()', gdLearn('/theme/define-theme')),
            link('site()', gdLearn('/theme/site')),
            link('siteTemplate()', gdLearn('/theme/site-template')),
            link('directory()', gdLearn('/theme/directory')),
            link('link()', gdLearn('/theme/link')),
            link('group()', gdLearn('/theme/group')),
            link('separator()', gdLearn('/theme/separator')),
            link('component()', gdLearn('/theme/component')),
            link('social()', gdLearn('/theme/social')),
            link('Layout settings', gdLearn('/theme/settings')),
          ]),

          group('Setup', [link('guider()', gdLearn('/setup/guider'))]),

          group('_meta.json', [
            link('Structure of _meta.json', gdLearn('/meta/structure')),
          ]),

          group('Client functions', [
            link('createRedirect()', gdLearn('/functions/create-redirect')),
            link(
              'createNotFoundPage()',
              gdLearn('/functions/create-not-found-page'),
            ),
            link('useGuider()', gdLearn('/functions/use-guider')),
            link('useGuiderPage()', gdLearn('/functions/use-guider-page')),
          ]),

          group('Theme components', [
            link('<GuiderHeader/>', gdLearn('/components/guider-header')),
            link('<GuiderLayout/>', gdLearn('/components/guider-layout')),
            link('<GuiderSidebar/>', gdLearn('/components/guider-sidebar')),
            link('<GuiderToc/>', gdLearn('/components/guider-toc')),
            link('<GuiderLogo/>', gdLearn('/components/guider-logo')),
            link(
              '<GuiderContentFooter/>',
              gdLearn('/components/guider-content-footer'),
            ),
            link(
              '<GuiderPageFooter/>',
              gdLearn('/components/guider-page-footer'),
            ),
            link('<GuiderPageEnd/>', gdLearn('/components/guider-page-end')),
          ]),
        ],
      }),
    ],
  }),
  site('config', {
    extends: [template],
    directories: [
      directory('main', {
        sidebar: [
          ...starLinks,
          group('Guide', [
            link('Why use @neato/config', '/docs/config/guide/why-neat-config'),
            link('Installation', '/docs/config/guide/installation'),
            link('Usage', '/docs/config/guide/usage'),
            link('Basic example', '/docs/config/guide/basic-example'),
          ]),
          group('API', [
            link('Loaders', '/docs/config/api/loaders'),
            link('Schemas', '/docs/config/api/schemas'),
            link('Formatting', '/docs/config/api/formatting'),
            link('Fragments', '/docs/config/api/fragments'),
            link('Error handling', '/docs/config/api/errors'),
            link('Utilities', '/docs/config/api/utils'),
          ]),
          group('Miscellaneous', [
            link('Security', '/docs/config/misc/security'),
            link('Changelog', '/docs/config/misc/changelog'),
          ]),
        ],
      }),
    ],
  }),
]) satisfies SiteComponent[];
