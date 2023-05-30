import WelcomeScreen from "@/components/welcome-screen/welcome-screen";
import BuyScreen from "@/components/buy-screen/buy-screen";
import ProductionScreen from "@/components/production-screen/production-screen";
import AboutScreen from "@/components/about-screen/about-screen";
import FeaturesScreen from "@/components/features-screen/features-screen";
import ContactsScreen from "@/components/contacts-screen/contacts-screen";
import Header from "@/components/header/header";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";
import Footer from "@/components/footer/footer";
import Head from 'next/head';

export default function Home() {
  return (
      <>
          <Head>
              <title>Экопоролон</title>
              <meta
                  name="description"
                  content="Продажа поролона вторичного вспенивания"
                  key="desc"
              />
          </Head>
          <Header />
          <main className="page__main">
              <WelcomeScreen/>
              <BuyScreen/>
              <ProductionScreen/>
              <AboutScreen/>
              <FeaturesScreen/>
              <ContactsScreen/>
              <FeedbackScreen/>
          </main>
          <Footer/>
      </>
  )
}
