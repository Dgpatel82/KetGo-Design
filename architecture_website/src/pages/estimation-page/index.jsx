import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import EstimationForm from "./components/EstimationForm";
import EstimationHero from "./components/EstimationHero";
import EstimationFAQ from "./components/EstimationFAQ";

const EstimationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Project Cost Estimation | Architecture Website</title>
        <meta name="description" content="Get a free estimate for your architectural project. Our estimation tool helps you understand potential costs for your construction or renovation project." />
      </Helmet>
      
      <Header variant="navigation"/>
      
      <main className="flex-grow">
        <EstimationHero />
        <EstimationForm />
        <EstimationFAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default EstimationPage;