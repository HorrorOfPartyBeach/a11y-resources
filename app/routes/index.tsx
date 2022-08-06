import { Card } from '~/components/Card/Card'

export default function Index() {
  return (
    <main
      className="m-8 h-full"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <h2 className="text-3xl font-bold text-slate-800 underline">
        Welcome to Accessibility Resources
      </h2>
      <Card>
        <div title="Lemon">Lemon is yellow</div>
        <div title="Strawberry">Strawberry is red</div>
        <div title="Pear">Pear is green</div>
      </Card>
    </main>
  )
}
