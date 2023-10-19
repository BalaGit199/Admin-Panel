import * as React from "react";
import './table.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Frozen yoghurt", 159, "2 March 2023", "Pending"),
  createData("Ice cream sandwich", 237,"5 March 2023", "Approved"),
  createData("Eclair", 262,"7 March 2023", "Approved"),
  createData("Cupcake", 305,"1 April 2023", "Pending"),
  createData("Gingerbread", 356, "5 April 2023", "Approved"),
];

export default function BasicTable() {
  const makeStyle = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 130 /47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#5bfff",
        color: "white",
      };
    }
  };
  return (
    <div className="Table">
      <h3>Recent Order</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0 #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
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
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className="details">Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
