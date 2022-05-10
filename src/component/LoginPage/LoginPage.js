import { Divider, Paper, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import "./LoginPage.scss";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/userActions";
const LoginPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data));
    // console.log(data);
  };
  return (
    <div className="LoginPage">
      <Paper className="paper">
        <Typography className="title" variant="h5">
          LOGIN TO YOUR ACCOUNT
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors?.email ? true : false}
                helperText={errors?.email && "Incorrect email."}
                className="text-field"
                label="Email"
                autoFocus
                name="email"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.password?.type === "required"}
                helperText={
                  errors.password?.type === "required" && "Password is require."
                }
                className="text-field"
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <LoadingButton
            loading={loading}
            className="login"
            variant="contained"
            color="primary"
            aria-label="LOG IN"
            type="submit"
          >
            LOGIN
          </LoadingButton>
        </form>
        <div className="divider">
          <Divider className="did" />
          <span>OR</span>
          <Divider className="did" />
        </div>
        <div className="create">
          <span className="font-medium">Don't have an account?</span>
          <p to="/pages/auth/register">Create an account</p>
        </div>
      </Paper>
    </div>
  );
};

export default LoginPage;
