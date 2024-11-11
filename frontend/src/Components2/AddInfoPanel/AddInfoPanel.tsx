import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TableContainer,
} from "@mui/material";
import "./style.css";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";

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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const AddInfoPanel = () => {
  const [selected, setSelected] = useState<string>("");
  const [bookTablevisibilty, setBookTablevisibilty] = useState<boolean>(false);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const showTable = () => {
    setBookTablevisibilty(!bookTablevisibilty);
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
            width: "90%",
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
          onClick={showTable}
          className={`px-[4rem] py-3 rounded bg-[rgb(214,198,7)] font-[600] text-[white] text-[1.2rem]`}
        >
          Select
        </button>
      </div>
      <div>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: bookTablevisibilty ? 200 : 0,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AddInfoPanel;
