import React, { useRef } from "react";
import Container from "./Container";
import { Label, TextInput, Select, Button } from "flowbite-react";

const CheckoutForm = ({ products, addItem }) => {
  const selectRef = useRef();
  const quantityRef = useRef();
  const id = Date.now();
  const handleform = (event) => {
    event.preventDefault();
    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);
    const currentproduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );
    const quantity = parseInt(quantityRef.current.value);
    // console.log(currentproduct);
    // console.log(selectquantity);
      const cost = (quantity * currentproduct.price).toFixed(2);

    const newitem = {
      id,
      product: currentproduct,
      quantity,
      cost,
    };
    addItem(newitem);
  }


  // const handleForm = (event) => {
  //   event.preventDefault();

  //   const id = Date.now();

  //   const currentProduct = products.find(
  //     (product) => product.id === parseInt(selectRef.current.value)
  //   );

  //   const quantity = parseInt(quantityRef.current.value);

  //   const cost = (quantity * currentProduct.price).toFixed(2);

  //   console.log(currentProduct);

  //   const newItem = {
  //     id,
  //     product: currentProduct,
  //     quantity,
  //     cost,
  //   };

  //   addItem(newItem);

  //   formRef.current.reset();

  //   // selectRef.current.value = 1;
  //   // quantityRef.current.value = null;

  //   // console.log(selectRef.current.value);
  //   // console.log(quantityRef.current.value);
  // };
    

    
  return (
    <Container>
      <form action="" onSubmit={handleform} className=" w-full block mb-10">
        <div className=" grid grid-cols-5  gap-3">
          {/* select  */}
          <div className=" col-span-2 ">
            <div className="mb-2 block">
              <Label htmlFor="product" value="Select your Products" />
            </div>
            <Select ref={selectRef} id="product" required>
              
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
            <TextInput ref={quantityRef} id="Quantity" type="number" sizing="md" />
          </div>

          {/* input end  */}

          <div className=" col-span-1">
            <Button type="submit" className=" w-full h-full flex justify-center items-center">
              Buy
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default CheckoutForm;
