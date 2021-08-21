import React from "react";
import { BsGear, BsPersonFill } from "react-icons/bs";
import TextField from "@material-ui/core/TextField";
const Navbar = () => {
  const styles = (theme) => ({
    textField: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    },
    input: {
      color: "white",
    },
  });
  return (
    <nav>
      <span>
        <img src="/images/white_logo_transparent_background.png" alt="logo" />
      </span>

      <div className="nav-actions">
        <TextField
          id="outlined-basic"
          label="Search for location"
          variant="filled"
          size="small"
          style={{
            backgroundColor: "#f5f5f5",
            marginRight: "1em",
            borderRadius: "5px",
          }}
          InputProps={{
            style: {
              color: "#444",
            },
          }}
        />
        <span>
          EN <BsGear />
        </span>
        <span>
          My Account <BsGear />
        </span>
        <span>
          Sign in <BsPersonFill />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
