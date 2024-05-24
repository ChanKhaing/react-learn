import React from "react";
import Container from "./Container";
import { Label, TextInput, Select, Button } from "flowbite-react";

const CheckoutForm = ({products}) => {
  return (
    <Container>
      <form action="" className=" w-full block mb-10">
        <div className=" grid grid-cols-5  gap-3">
          {/* select  */}
          <div className=" col-span-2 ">
            <div className="mb-2 block">
              <Label htmlFor="product" value="Select your Products" />
            </div>
            <Select id="product" required>
              
              {products.map((prodcut) => (
                  <option key={prodcut.id} value={prodcut.id}>{prodcut.title}</option>
              ))}
            </Select>
          </div>
          {/* select  */}

          {/* input  */}
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="Quantity" value="Quantity input" />
            </div>
            <TextInput id="Quantity" type="number" sizing="md" />
          </div>

          {/* input end  */}

          <div className=" col-span-1">
            <Button className=" w-full h-full flex justify-center items-center">
              Buy
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default CheckoutForm;
