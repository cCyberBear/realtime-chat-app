import React from "react";
import "./Register.scss";
import { Divider, Paper, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../action/userActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.userReducer.loading);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(register(data));
  };
  return (
    <div className="Register">
      <Paper className="paper">
        <Typography className="title" variant="h5">
          REGISTER
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors?.username ? true : false}
                helperText={errors?.username && "Incorrect username."}
                className="text-field"
                label="Username"
                autoFocus
                name="username"
                variant="outlined"
                fullWidth
              />
            )}
          />
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
            REGISTER
          </LoadingButton>
        </form>
        <div className="divider">
          <Divider className="did" />
          <span>OR</span>
          <Divider className="did" />
        </div>
        <div className="create">
          <span className="font-medium">Already have an acount ?</span>
          <p onClick={() => navigate("/")}>Login here</p>
        </div>
      </Paper>
    </div>
  );
};

export default Register;
