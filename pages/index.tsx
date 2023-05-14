import WelcomeScreen from "@/components/welcome-screen/welcome-screen";
import BuyScreen from "@/components/buy-screen/buy-screen";
import ProductionScreen from "@/components/production-screen/production-screen";
import AboutScreen from "@/components/about-screen/about-screen";
import FeaturesScreen from "@/components/features-screen/features-screen";
import ContactsScreen from "@/components/contacts-screen/contacts-screen";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";

export default function Home() {
  return (
      <>
          <WelcomeScreen/>
          <BuyScreen/>
          <ProductionScreen/>
          <AboutScreen/>
          <FeaturesScreen/>
          <ContactsScreen/>
      </>
  )
}
