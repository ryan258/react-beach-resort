import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Error = () => {
  return (
    <Hero>
      <Banner title="404 page not found!" subtitle="what have you done!?">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
