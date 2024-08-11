import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import BestSeller from "./components/BestSeller/BestSeller";
import CommingSoon from "./components/ComingSoon/ComingSoon";
import NewsOnShelves from "./components/NewOnShelves/NewOnShelves";
import BooksEveryOneTalks from "./components/BooksEveryoneTalks/BooksEveryoneTalks";
import SignedEditions from "./components/SignedEditions/SignedEditions";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AppPromotion from "./components/AppPromotion/AppPromotion";
import SummerBanner from "./components/SummerBanner/SummerBanner";
import VerticalSpacing from "./components/common/VerticalSpacing";
import IconTabs1 from "./components/IconTabs/IconTabs1";
import IconTabs2 from "./components/IconTabs/IconTabs2";
import FeaturedBooks from "./components/FeaturedBooks/FeaturedBooks";
import IconTabs3 from "./components/IconTabs/IconTabs3";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import FurtherReading from "./components/FurtherReading/FurtherReading";
import IndependentPublishing from "./components/IndependentPublishing/IndependentPublishing";
import NewRecommendedChildrenBooks from "./components/NewRecommendedChildrenBooks/NewRecommendedChildrenBooks";
import BestSellingGiftsStationary from "./components/BestsellingGiftsStationery/BestsellingGiftsStationery";
import IconTabs4 from "./components/IconTabs/IconTabs4";
import IconTabs5 from "./components/IconTabs/Icontabs5";
import NewInPaperBack from "./components/NewInPaperback/NewInPaperback";
import NewRecommendedTeenAdult from "./components/NewRecommendedTeenAdult/NewRecommendedTeenAdult";

function App() {
  return (
    <>
      <Header />
      <VerticalSpacing height={225} />
      <HeroSection />
      <VerticalSpacing />
      <BestSeller />
      <VerticalSpacing />
      <IconTabs1 />
      <VerticalSpacing />
      <NewsOnShelves />
      <VerticalSpacing />
      <IconTabs2 />
      <VerticalSpacing />
      <CommingSoon />
      <VerticalSpacing />
      <FeaturedBooks />
      <VerticalSpacing />
      <BooksEveryOneTalks />
      <VerticalSpacing />
      <IconTabs3 />
      <VerticalSpacing />
      <SignedEditions />

      <VerticalSpacing />
      <FurtherReading />
      <VerticalSpacing />
      <NewInPaperBack />
      <VerticalSpacing />
      {/*  */}
      <IconTabs4 />
      <VerticalSpacing />
      <UpcomingEvents />
      <VerticalSpacing />
      <IndependentPublishing />
      <VerticalSpacing />
      <NewRecommendedTeenAdult />
      <VerticalSpacing />
      {/*  */}
      <IconTabs5 />
      <VerticalSpacing />
      <NewRecommendedChildrenBooks />
      <VerticalSpacing />
      <SummerBanner />
      <VerticalSpacing />
      <BestSellingGiftsStationary />
      <VerticalSpacing />
      <AppPromotion />
      <VerticalSpacing />
      <SubscribeSection />
      <VerticalSpacing height="20px"/>
      <Footer />
    </>
  );
}

export default App;
