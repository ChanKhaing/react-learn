import { Button } from 'flowbite-react';
import React, { useState } from 'react'
import Container from './components/Container';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Header from './components/Header';
import Footer from './components/Footer';
import CheckoutForm from './components/CheckoutForm';
import CheckoutFormList from './components/CheckoutFormList';
import Drawer from './components/Drawer';



const App = () => {
    const [products, setProduct] = useState([
      {
        id: 1,
        title: "Apple",
        price: 0.99,
        stock: 100,
      },
      {
        id: 2,
        title: "Banana",
        price: 0.49,
        stock: 80,
      },
      {
        id: 3,
        title: "Orange",
        price: 1.29,
        stock: 70,
      },
      {
        id: 4,
        title: "Grapes",
        price: 2.99,
        stock: 50,
      },
      {
        id: 5,
        title: "Strawberry",
        price: 3.49,
        stock: 40,
      },
    ]);
  
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  
  const [items, setItems] = useState([
    {
      id: 22,
      product: {
        id: 23,
      title: "macbook pro m1",
      price: 50,
      quantity: 2,
      cost: 100,
      },
      quantity: 2,
      cost: 100,
    }
  ]);
  

 
  // const additem = (newitem) => {
  //   setitems(...items,newitem)
  // }

  const addItem = (newItem) => {
    // setItems([...items, newItem]);
    console.log(newItem);
  };

    const handleDrawer = () => {
      setDrawerOpen(!isDrawerOpen);
    };

  return (
    <main className=" flex flex-col min-h-screen">
      {/* <header className="mb-10">
  <h1 className="font-bold text-3xl"></h1>
  <p className="text-neutral-500"></p>
</header> */}
      <Header>
        <Container>
          <Heading>MMS Solutions</Heading>
          <SubHeading>Invoice App</SubHeading>
        </Container>
      </Header>

      <CheckoutForm products={products} addItem={addItem} />
      <CheckoutFormList items={items} />

      <Footer>
        <Container>
          <div className="flex justify-end gap-3">
          <Button onClick={handleDrawer} color="light">
              Manage Product</Button>
            <Button>Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer
        products={products}
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
      />
    </main>
  );
}

export default App