// import { useParams } from "react-router-dom";
import * as React from "react";
import { useEffect, useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../components/navbar";
import "../styles/pages/login.css";
import {
  TextField,
  Select,
  MenuItem,
  Autocomplete,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="App">
        <Navbar />
      </div>
      <div className="login_container">
        <main className="login_form">
          <h1>Let's <span className="manage">Manage!</span></h1>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            size="small"
            sx={{ m: 1, width: "100%" }}
          />

          <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
            size="small"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            sx={{
              color: "#000",
              background:
                "linear-gradient(294.3deg, rgba(77, 254, 15, 0.83) 0%, rgba(254, 246, 58, 0.7968) 83.16%)",
              width: "100%",
              fontWeight: "600",
            }}
          >
            Log In
          </Button>
        </main>
      </div>
    </div>
  );
}

export default Login;
