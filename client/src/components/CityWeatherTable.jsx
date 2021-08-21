import React, { useState } from "react";
import * as CityProfileHelpers from "../helpers/CityProfileHelpers";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const {
  temperatureConversion,
  temperatureConversionMinMax,
  windSpeedConversionTableCell,
  convertDate,
} = CityProfileHelpers;
const CityWeatherTable = ({ tableData }) => {
  const classes = useStyles();
  const [dayOne, dayTwo, dayThree, dayFour, dayFive] = tableData;
  const [tableMode, setTableMode] = useState(dayOne);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Min Temp</TableCell>
            <TableCell align="right">Max Temp</TableCell>
            <TableCell align="right">Wind</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableMode &&
            tableMode.map((row, i) => {
              return row.map((cell, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {convertDate(cell.dt_txt)}
                  </TableCell>
                  <TableCell align="right">
                    {temperatureConversion(cell.main.temp)}
                  </TableCell>
                  <TableCell align="right">
                    {temperatureConversionMinMax(cell.main.temp_min)}
                  </TableCell>
                  <TableCell align="right">
                    {temperatureConversionMinMax(cell.main.temp_max)}
                  </TableCell>
                  <TableCell align="right">
                    {windSpeedConversionTableCell(cell.wind.speed)}
                  </TableCell>
                  <TableCell align="right">
                    {cell.weather[0].description}
                  </TableCell>
                </TableRow>
              ));
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CityWeatherTable;
