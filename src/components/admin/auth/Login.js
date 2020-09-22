import React, { memo, useCallback, useEffect, useState } from "react";
import API from "../../../utils/API";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Typography, Link } from "@material-ui/core";
import theme from "../../../styles/theme";
import { withStyles } from "@material-ui/styles";

const LoginContainer = withStyles({
  root: {
    height: "100vh",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
  },
})(Box);

const LoginInput = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",

    // override font color
    " & .MuiInputBase-input": {
      color: theme.palette.secondary.light,
    },

    //override border color
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: "#FFBA0A",
      },
    },

    // override label color
    "& .MuiInputLabel-outlined": {
      color: theme.palette.secondary.light,
    },
  },
})(TextField);

const HomeLink = withStyles({
  root: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2rem",
    color: theme.palette.secondary.light,
    "&:hover": {
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.secondary.main,
    },
  },
})(Link);

const Login = memo(() => {
  const history = useHistory();
  const [quote, setQuote] = useState("");
  const { register, handleSubmit, reset } = useForm();

  // API Call to kanye.rest
  const getQuote = useCallback(async () => {
    try {
      const res = await axios.get("https://api.kanye.rest/");
      setQuote(res.data.quote);
    } catch (err) {
      console.log("You fucked up: ", err.response);
    }
  }, [setQuote]);

  // Submit Handler
  const onSubmit = useCallback(
    async (data) => {
      try {
        const res = await API.post("/login", data);
        localStorage.setItem("token", res.data.token);
        history.push("/admin/dash");
      } catch (err) {
        console.log("There was an error: ", err.response);
      } finally {
        reset();
      }
    },
    [history, reset]
  );

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <LoginContainer>
      <Typography variant="h2" component="p">
        Welcome Back, Coding God
      </Typography>
      <Typography
        component="p"
        variant="h3"
        style={{ width: "60%", textAlign: "center" }}
      >
        {quote}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "2rem" }}>
        <LoginInput
          name="username"
          id="username"
          type="text"
          inputRef={register({ required: true }, { name: "username" })}
          variant="outlined"
          margin="dense"
          label="Username"
          fullWidth
          color="secondary"
        />
        <LoginInput
          name="password"
          id="password"
          type="password"
          inputRef={register({ required: true }, { name: "password" })}
          variant="outlined"
          margin="dense"
          label="Password"
          color="secondary"
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          size="large"
          variant="outlined"
          color="secondary"
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginBottom: "2rem" }}
        >
          Submit
        </Button>
      </form>
      <HomeLink href="/" onClick={() => localStorage.clear()}>
        Back Home
      </HomeLink>
    </LoginContainer>
  );
});

export default Login;
