import Hero from "./hero.component";
import { PageNavBar } from "./pagenavbar.component";

interface PageLayoutProps {}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <div className="py-2 px-4">
      <PageNavBar />
      <Hero />
    </div>
  );
};

export default PageLayout;
