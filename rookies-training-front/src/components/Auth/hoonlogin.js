import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";

// axios 통신을 위해 기본 URL 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function HoonLogin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", e.target.email.value);
    formData.append("password", e.target.password.value);

    const response = await axios({
      url: "/loginCheck",
      method: "POST",
      data: formData,
      withCredentials: true,
    });

    if (response.status === 200) {
      alert("로그인에 성공하였습니다.");
      console.log("결과 확인 : " + response.data);
      navigate("/home", { state: { userDetailData: response.data } });
    } else {
      alert("로그인에 실패하였습니다.");
      console.log("결과 확인 : " + response);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = {
  //       email: e.target.email.value,
  //       password: e.target.password.value,
  //     };
  //     axios.post("/users/login", data).then((res) => {
  //       alert("로그인이 되었습니다.");
  //       window.location.href = "/";
  //     });
  //   } catch (error) {
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
          로그인
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            href="/HoonRegister"
          >
            회원가입
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HoonLogin;
