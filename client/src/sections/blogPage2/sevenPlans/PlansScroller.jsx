import PlanSection from "./PlanSection"
import { PLANS } from "./plansData"

function PlansScroller() {
  return (
    <main>
      {PLANS.map((plan, index) => (
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