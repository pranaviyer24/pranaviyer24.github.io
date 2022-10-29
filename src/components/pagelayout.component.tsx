import { CaseStudies } from "./casestudies.component";
import Hero from "./hero.component";
import { PageNavBar } from "./pagenavbar.component";

interface PageLayoutProps {
  setIsHome: (isHome: boolean) => void;
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <div className="py-2 px-4">
      <Hero />
      <CaseStudies setIsHome={props.setIsHome} />
    </div>
  );
};

export default PageLayout;
