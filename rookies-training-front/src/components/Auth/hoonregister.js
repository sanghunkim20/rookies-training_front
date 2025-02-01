import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

function HoonRegister() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // 전체 데이터를 카피하고, 변경된 부분만 대체 처리
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(user);
      await axios.post('/users/create', user);
      alert('회원가입 성공');
      // 홈으로 이동(로그인)
      window.location.href = '/';
    } catch (error) {
      console.log('회원가입 오류: ' + error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = {
  //       name: e.target.name.value,
  //       email: e.target.email.value,
  //       password: e.target.password.value,
  //     };
  //     axios.post("/users/create", data).then((res) => {
  //       alert("회원가입이 완료되었습니다.");
  //       window.location.href = "/";
  //     });
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          회원가입
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={inputChangeHandler}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            href="/"
          >
            로그인으로
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HoonRegister;
