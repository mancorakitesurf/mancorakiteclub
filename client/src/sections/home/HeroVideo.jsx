import MotionReveal from '../../components/blog/MotionReveal.jsx'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'

function HeroVideo() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-100 via-cyan-50 to-white">
      <Container className="grid gap-8 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="space-y-6">
          <MotionReveal y={24}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
              Premium Placeholder
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08} y={24}>
            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              TODO: contenido real
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.16} y={24}>
            <p className="max-w-xl text-base text-slate-700">
              TODO: contenido real para hero principal, propuesta de valor y CTA.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.24} y={24}>
            <div className="flex flex-wrap gap-3">
              <Button>TODO: CTA principal</Button>
              <Button className="bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-100">
                TODO: CTA secundario
              </Button>
            </div>
          </MotionReveal>
        </div>

        <div className="relative min-h-[300px] rounded-3xl border border-slate-300 bg-slate-900/90 p-6 shadow-xl">
          <div className="flex h-full min-h-[260px] items-center justify-center rounded-2xl border border-dashed border-slate-400/70 text-center text-sm text-slate-300">
            TODO: video hero real
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroVideo
