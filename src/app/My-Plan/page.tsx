import PlanDetailCard from "@/components/PlanPage/PlanDetailCard";
import PlanSummary from "@/components/PlanPage/PlanSummary";
import PlanTabsSort from "@/components/PlanPage/PlanTabsSort";


const MyPlan = () => {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8 container mx-auto">
        {/* Header */}
        <div>
          <h1 className="
              text-[26px]
              font-black
              uppercase
              leading-none
              tracking-[-1px]
              text-white
              sm:text-[28px]">
            My Plan
          </h1>

          <p className="
              mt-2
              text-[12px]
              leading-[1.5]
              text-[#858b95]
              sm:text-[13px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Summary */}
        <PlanSummary />

        {/* Tabs + Sort */}
        <PlanTabsSort />

        {/* Workout Details */}
        <PlanDetailCard />
    </main>
  );
};

export default MyPlan;