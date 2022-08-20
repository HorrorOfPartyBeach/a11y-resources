import { Card } from '~/components/Card/Card'
import { DesignersSvg } from 'app/components/svgs/DesignersSvg'

export default function Index() {
  return (
    <main
      className="h-min"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <article className="bg-slate-200 text-lg ">
        <h2 className="mx-8 pb-10 pt-16 text-3xl font-bold text-slate-800">
          Welcome!
        </h2>

        <p className="mx-8 pb-8">
          My name is Emma and I'm a Frontend Software Engineer and Accessibility
          Advocate. Over the last few years, I've gathered up a lot of
          accessiblity resources and I wanted a place to share them with people.
        </p>

        <p className="mx-8 pb-8">
          I also recently tried out the{' '}
          <a
            href="https://remix.run/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-900 underline visited:bg-black visited:text-purple-900 hover:bg-slate-900 hover:text-blue-200"
          >
            Remix framework
          </a>{' '}
          and found it a lot of fun, so I decided to use it for this site.
        </p>
      </article>

      <article className="mx-8 bg-pink-400 pt-10">
        <h2 className="text-3xl font-bold text-slate-800">Resource List</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-2 ">
          <Card
            title="Designers"
            className="w-full"
            image={<DesignersSvg />}
            linkText="Designers"
            link={'/designers'}
          />
          <Card
            title="Developers"
            className="w-full"
            linkText="Developers"
            link={'/developers'}
          />
          <Card
            title="Testers"
            className="w-full"
            linkText="Testers"
            link={'/qa'}
          />
        </div>
      </article>
    </main>
  )
}
