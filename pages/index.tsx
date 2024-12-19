import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
} from '@neato/guider/client';

import { Home } from '../components/home';

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: 'page', site: 'main'}}>
      <Hero>
        <Hero.Badge title="v0.0.0-beta.13" to="/v0.0.0-beta.13">
          Just went out of beta!
        </Hero.Badge>
        <Hero.Title>Documentation that looks great out of the box</Hero.Title>
        <Hero.Subtitle>
          Flexible but beautiful documentation powered by NextJS — easy to write
          and easier to extend.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/v0.0.0-beta.13">Get started</Button>
          <Button to="https://github.com/eventstorage/eventstorage" type="secondary">
            View on GitHub
          </Button>
        </Hero.Actions>
      </Hero>
      <CardGrid>
        <Card icon="material-symbols:edit-document" title="Focus on writing">
          Effortlessly create beautiful documentation sites using Markdown or
          MDX files.
        </Card>
        <Card icon="mdi:puzzle" title="Unopinionated">
          Guider doesn't make assumptions about your site. Use it by itself or
          include it as part of a larger project.
        </Card>
        <Card icon="solar:pallete-2-bold" title="Themable to the core">
          Comes out the box with a ready-to-go theme, but can easily be made to
          look exactly like what you have envisioned.
        </Card>
      </CardGrid>
    </GuiderLayout>
  );
}
