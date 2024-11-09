import React from "react";
import Divider from "@mui/material/Divider";
import paypal from "./PayPal.svg";
import Radio from "@mui/material/Radio";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
} from "@mui/material";
import book1 from "../../assets/book1.jpg";

type Props = {};

const OrderSummary = (props: Props) => {
  const [value, setValue] = React.useState("Ship this item");
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };
  return (
    <div className="container px-7 mt-8">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-10 col-start-2 order-1 md:col-span-4 md:col-start-auto md:order-2">
          <div className="border border-[#ccccccff] flex flex-col px-1">
            <div className="text-center text-[#000] w-[100] mt-[1rem]">
              <h1 className="px-[1rem] text-[1.5rem] font-[200] font-serif">
                Order Summary
              </h1>
            </div>
            <div className="flex justify-between min-w-[100%] px-[6.5%] py-[4%]">
              <p className="text-[#a1a1a1f]">Subtotal</p>
              <p className="text-[#a1a1a1f]">63$</p>
            </div>
            <div className="flex justify-between  min-w-[100%] px-[6.5%] py-[4%]">
              <p className="text-[#a1a1a1f]">Estimated Shipping</p>
              <p className="text-[#a1a1a1f]">Free</p>
            </div>
            <div className="flex justify-between  min-w-[100%] px-[6.5%] py-[4%]">
              <p className="text-[#a1a1a1f]">Estimated Tax</p>
              <p className="text-[#a1a1a1f]">0$</p>
            </div>
            <div className="flex justify-between  min-w-[100%] px-[6.5%] py-[4%]">
              <p className="text-[#a1a1a1f]">Order Total:</p>
              <p className="text-[#a1a1a1f]">63$</p>
            </div>
            <hr className="m-6" />
            <button className="bg-[#3d5861ff] text-[#fff] w-[80%] text-[larger] py-[0.7rem] rounded-sm self-center">
              CHECKOUT
            </button>
            <Divider
              component="div"
              sx={{ marginTop: "1rem", justifySelf: "center", marginX: "1rem" }}
            >
              or Checkout With
            </Divider>
            <button className="flex justify-center self-center bg-[#ffc338ff] w-[75%] h-[2.5rem] my-[1.2rem] rounded-sm">
              <img
                src={paypal}
                alt=""
                className="w-[75%] max-h-[70%] self-center"
              />
            </button>
          </div>
        </div>
        {/* ========================Second Part ====================== */}
        <div className="col-span-12 order-2 md:col-span-8 md:order-1">
          <Divider
            component="div"
            sx={{
              marginTop: "1rem",
              fontFamily: "serif",
              fontSize: 22,
              paddingX: "1rem",
              color: "#636060ff",
              marginY: "1.8rem",
            }}
          >
            My Shopping Cart
          </Divider>
          <div className="border border-[#ccccccff] pb-7">
            <div className="row-span-1 text-[#282828] bg-[#f2f2f2ff] width-[100%] py-5 text-xl font-serif px-4">
              (3) Items For purchase
            </div>
            <div className="grid grid-cols-9 grid-rows-auto px-7 pt-7 gap-4">
              <div className="col-span-9 mb-4">
                <p className="text-xl font-serif text-[#444343] mb-2">
                  Lies He Told Me: She's in love-with a liar.
                </p>
                <p className="text-md font-serif text-[#444343]">
                  by James Patterson, David Ellis
                </p>
              </div>
              <div className="col-span-2">
                <img
                  src={"https://placehold.co/1200x2000/000000/FFFFFF/png"}
                  //src={book1}
                  alt="placeholder"
                  className="aspect-[80/120] w-full"
                />
              </div>
              <div className="col-span-3 px-4">
                <RadioGroup
                  aria-labelledby="book-pickup-location"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="Ship this item"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                    }
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    label="Ship to home"
                  />
                  <FormControlLabel
                    value="Pick in store"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                    }
                    label="pick in store"
                  />
                </RadioGroup>
              </div>
              <div className="col-span-4 flex flex-col items-center gap-4">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={quantity}
                    onChange={handleChange}
                    label="quantity"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(
                      (option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <div className="font-bold italic text-[#161616] border border-[text-[#444343] p-2 rounded-sm bg-[#ddd]">
                  Total Price: <span className="px-2 ">{quantity * 10}$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
