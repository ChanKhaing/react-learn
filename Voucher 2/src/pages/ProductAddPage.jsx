import React from 'react'
import { Container } from '../components/Container';
import Breadcrumb from '../components/BreadCrumb';
import ProductCreateCard from '../components/ProductCreateCard';

const ProductAddPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Product Add Module"}
          links={[{ title: "Product Module", path: "/product" }]}
        />
              <h1>Add new Product</h1>
              <ProductCreateCard/>
        {/* <ProductList /> */}
      </Container>
    </section>
  );
}

export default ProductAddPage