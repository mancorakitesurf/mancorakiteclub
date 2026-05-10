import PlanSection from "./PlanSection"
import { PLANS } from "../plansData"
import { useI18n } from '../../../app/providers/i18nContext'

function PlansScroller() {
  const { t } = useI18n()

  const translatedPlans = PLANS.map(plan => ({
    ...plan,
    title: t(plan.titleKey),
    duration: t(plan.durationKey),
    level: t(plan.levelKey),
    spots: t(plan.spotsKey),
    vibe: t(plan.vibeKey),
    description: t(plan.descKey)
  }))

  return (
    <main>
      {translatedPlans.map((plan, index) => (
        <PlanSection
          key={plan.letter}
          plan={plan}
          index={index}
        />
      ))}
    </main>
  )
}
export default PlansScroller