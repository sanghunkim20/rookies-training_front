import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";

function HoonLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted");
  };

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
