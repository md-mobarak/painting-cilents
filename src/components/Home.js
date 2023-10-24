import ExperiencedPainters from "./ExperiencedPainters";
import FeedbackFrom from "./FeedbackFrom";
import Gallary from "./Gallary";
import HeroSection from "./HeroSection";
import News from "./News";
import OurServices from "./OurServices";
import Review from "./Review";
import WhyChooseUs from "./WhyChooseUs";

const Home = (data) => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="px-10">
        <ExperiencedPainters></ExperiencedPainters>
        <OurServices data={data}></OurServices>
        <Gallary></Gallary>
        <WhyChooseUs></WhyChooseUs>
        <Review></Review>
        <News></News>
        <FeedbackFrom></FeedbackFrom>
      </div>
    </div>
  );
};

export default Home;
