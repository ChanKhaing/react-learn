import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import { Container } from "../components/Container";
import Saleinfo from "../components/Saleinfo";

const SalePage = () => {
  return (
    <Container>
      <section>
        <Breadcrumb currentPageTitle={"Sale Module"} />

      <Saleinfo/>
      </section>
    </Container>
  );
};

export default SalePage;
