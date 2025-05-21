import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/AppIcon";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <Icon name="FileQuestion" size={80} className="mx-auto text-accent" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-primary mb-6">Page Not Found</h2>
          <p className="text-dark-gray mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/homepage"
            className="btn btn-primary px-6 py-3 inline-flex items-center"
          >
            <Icon name="Home" size={20} className="mr-2" />
            Back to Homepage
          </Link>
        </div>
      </main>
      <Footer variant="simple" />
    </div>
  );
};

export default NotFound;