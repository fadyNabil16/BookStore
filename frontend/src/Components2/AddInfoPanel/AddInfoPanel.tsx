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
import { useDbManagement } from "@/Context/BookManipulationContext";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { BookInputForm } from "@/Models/Book";
import { yupResolver } from "@hookform/resolvers/yup";
import { log } from "console";

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
const BookAttributes: string[] = [
  "ISBN",
  "Title",
  "PublicationDate",
  "Edition",
  "AvailableQuantity",
  "price",
  "PhotoUri",
];

const validation = Yup.object().shape({
  ISBN: Yup.string().required("please enter isbn"),
  Title: Yup.string().required("please enter title"),
  PublicationDate: Yup.date().required("Okay man"),
  Edition: Yup.string().required("please enter title"),
  AvailableQuantity: Yup.string().required("please enter title"),
  price: Yup.string().required("please enter title"),
  PhotoUri: Yup.string().required("please enter"),
});

const AddInfoPanel = () => {
  const { addBook } = useDbManagement();
  const [selected, setSelected] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookInputForm>({ resolver: yupResolver(validation) });
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleCock = (form: BookInputForm) => {
    console.log(form);
    addBook(
      form.ISBN,
      form.Title,
      form.PublicationDate,
      form.Edition,
      form.AvailableQuantity,
      form.price,
      form.PhotoUri
    );
    console.log("finish");
  };

  return (
    <div className={`px-8`}>
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
      <form onSubmit={handleSubmit(handleCock)} className="book-form">
        {BookAttributes.map((attr, idx) => (
          <React.Fragment key={idx}>
            <label className={` label`}>{attr}</label>
            <input
              className={`inp`}
              type={attr !== "PublicationDate" ? "text" : "date"}
              placeholder={attr}
              {...register(attr)}
            />
          </React.Fragment>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddInfoPanel;
