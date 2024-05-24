import { Button } from 'flowbite-react';
import React from 'react'
import Container from './components/Container';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Header from './components/Header';
import Footer from './components/Footer';



const App = () => {
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
      <Container>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
          possimus. Dolore eveniet fuga unde laudantium ipsa mollitia
          reprehenderit tempore dicta. Officiis ad aspernatur molestiae nesciunt
          officia sequi, blanditiis libero accusamus. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Voluptatem veniam aspernatur vero
          numquam, quidem facilis! Animi magni minima ex odit vel repudiandae
          dolores porro, dicta id culpa ducimus veniam distinctio.
        </p>
      </Container>

      <Footer>
        <Container>
          <div className="flex justify-end gap-3">
            <Button color="light">Manage Invetory</Button>
            <Button>Print</Button>
          </div>
        </Container>
      </Footer>
    </main>
  );
}

export default App