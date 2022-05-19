import { Card, Container, Grid, Button, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './loginpage.css'


function Validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {
        alert("Login Success !!!");
        
    }
    else {
        alert("Login Failed !!!");
        
    }
}


const LoginPage = () => {

    return (
        <div>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 4, md: 4 }}
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Card
                        sx={{
                            minWidth: 500,
                            minHeight: 500,
                            borderRadius: "40px",
                            border: "4px solid #C7364D",
                            boxShadow: 10,
                        }}
                    >
                        <CardContent>

                            <div className="login-title" style={{ width: "400px", margin: "10px 0px 0px 40px" }}>
                                LOG IN 
                            </div>

                            <div  >
                                <input style={{ width: "400px", margin: "70px 0px 10px 0px" }}
                                    className="abc"
                                    placeholder="user name"
                                    id="username"
                                >
                                </input>
                            </div>

                            <div  >
                                <input style={{ width: "400px", margin: "10px 0px 0px 0px" }}
                                    className="abc"
                                    placeholder="password"
                                    id="password"
                                >
                                </input>
                            </div>

                            <div style={{ width: "400px", margin: "80px 10px 0px 20px"}}>
                                    <Link to='/todo-list'><button className="submit-btn" onClick={Validation}> Login</button></Link>
                                    
                            </div>
                            


                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </div>
    );
}

export default LoginPage;