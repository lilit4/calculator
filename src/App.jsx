import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function App() {
  useEffect(() => {
    // Set the background color of the body to black
    document.body.style.backgroundColor = "#141414";
  }, []);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            sx={{ mr: 2, color: "lightblue", fontWeight: "bold" }}
          >
            Calculator
          </Typography>
          <Typography
            variant="h8"
            sx={{ color: "darkgrey", fontWeight: "bold" }}
          >
            {" "}
            v2.5.6
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        height={500}
        width={800}
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <Grid container spacing={1}>
          {/* Left Section with 3 Buttons */}
          <Grid item xs={12} sm={4} md={3} container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{
                  borderRadius: "50%", // Makes the button round
                  width: "80px", // Equal width and height make the button circular
                  height: "80px",
                  minWidth: "40px", // Prevents the button from stretching
                  backgroundColor: "#222222",
                  fontWeight: "bold",
                }}
              >
                Button 1
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{
                  borderRadius: "50%", // Makes the button round
                  width: "80px", // Equal width and height make the button circular
                  height: "80px",
                  minWidth: "40px", // Prevents the button from stretching
                  backgroundColor: "#222222",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                12321
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{
                  borderRadius: "50%", // Makes the button round
                  width: "80px", // Equal width and height make the button circular
                  height: "80px",
                  minWidth: "40px", // Prevents the button from stretching
                  backgroundColor: "#222222",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Fib?
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{
                  borderRadius: "50%", // Makes the button round
                  width: "80px", // Equal width and height make the button circular
                  height: "80px",
                  minWidth: "40px", // Prevents the button from stretching
                  backgroundColor: "#222222",
                  fontWeight: "bold",
                }}
              >
                Button 4
              </Button>
            </Grid>
          </Grid>

          {/* Calculator Section */}
          <Grid item xs={12} sm={8} md={9} container spacing={1}>
            <Grid item xs={12}>
              <TextField id="filled-basic" label="" variant="filled" />
            </Grid>
            {/* Calculator Buttons */}
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                Root
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                \
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                7
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                8
              </Button>
            </Grid>

            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                9
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                      color: "#FAA0A0",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                C
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                Pow
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                X
              </Button>
            </Grid>

            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                4
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                5
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                6
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                color: "#FAA0A0",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                CE
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                MOD
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                +
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                1
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                2
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                3
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                      color: "#87CEEB",
                      fontWeight: "bold",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                ( )
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                Ans
              </Button>
            </Grid>

            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                -
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                +/-
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                0
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3b3b3b	",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                .
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#A8E4A0	",
                      color: "black",
                      fontWeight: "bold",
                  "&:hover": { backgroundColor: "darkgrey" },
                }}
              >
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
