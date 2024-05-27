import React, { useContext } from 'react'
import Container from './Container';
import { Button } from "flowbite-react";
import { GeneralContext } from '../context/GeneralProvider';

const Footer = () => {
  const { handleDrawer } = useContext(GeneralContext);
  return (
    <footer className=" mt-auto mb-5">
      <Container>
        <div className="flex justify-end gap-3">
          <Button onClick={handleDrawer} color="light">
            Manage Product
          </Button>
          <Button>Print</Button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer