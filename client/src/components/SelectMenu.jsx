import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectMenu = ({ cityData, cityId, handleChange }) => {
  const classes = useStyles();

  let menuItems =
    cityData &&
    cityData.map((city) => (
      <MenuItem key={city.id} value={city.id}>
        {city.name}, {city.country}
      </MenuItem>
    ));
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          id="demo-controlled-open-select"
          value={cityId}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuItems}
        </Select>
        <FormHelperText>Please select city to see the forecast</FormHelperText>
      </FormControl>
    </>
  );
};

export default SelectMenu;
