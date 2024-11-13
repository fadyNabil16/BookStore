import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TableContainer,
} from "@mui/material";
import "./style.css";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { Grid } from "lucide-react";

const Entites = ["Author", "Book", "Discounts"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
const BookCol: string[] = [
  "ISBN",
  "Title",
  "PublicationDate",
  "Edition",
  "AvailableQuantity",
  "price",
  "PhotoUri",
];

const AddInfoPanel = () => {
  const [selected, setSelected] = useState<string>("");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className={`container px-8`}>
      <div className={`flex flex-grow items-baseline`}>
        <FormControl
          sx={{
            m: 1,
            width: 300,
            mt: 3,
            display: "flex",
            "& .Mui-focused": {
              boxShadow: "#94c4ee 0px 1px 4px 3px",
              borderColor: "transparent",
            },
          }}
        >
          <Select
            displayEmpty
            value={selected}
            onChange={handleChange}
            input={<OutlinedInput />}
            placeholder="Add to database"
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {Entites.map((entity, idx) => (
              <MenuItem key={idx} value={entity}>
                {entity}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button
          className={`px-[4rem] py-3 rounded bg-[rgb(214,198,7)] font-[600] text-[white] text-[1.2rem]`}
        >
          Select
        </button>
      </div>
      <div className="book-form">
        <label className={` label`}>ISBN</label>
        <input className={`inp`} type={"text"} />
        <label className={` label`}>ISBN</label>
        <input className={`inp`} type={"text"} />
        <label className={` label`}>ISBN</label>
        <input className={`inp`} type={"text"} />
        <label className={` label`}>ISBN</label>
        <input className={`inp`} type={"text"} /
      </div>
    </div>
  );
};

export default AddInfoPanel;
