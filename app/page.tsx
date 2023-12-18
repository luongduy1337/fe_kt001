import { Banner } from "@/components/Banner/Banner";
import { IntroductionCompany } from "@/components/Introduction/IntroductionCompany";
import { Statistics } from "@/components/Statistics/Statistics";

export default function HomePage() {
  return (
    <section className="home">
      <Banner/>
      <IntroductionCompany/>
      <Statistics/>
    </section>
  )
}
