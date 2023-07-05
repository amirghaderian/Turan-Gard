import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
//image
import page404 from "../../public/assets/gif/page404.gif"
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
             متاسفانه صفحه ای که شما به دنبالش هستید پیدا نشد
            </Typography>
            <Button variant="contained"> <Link to="/">رفتن به صفحه اصلی</Link></Button>
          </Grid>
          <Grid xs={6}>
            <img
              src={page404}
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Error;
