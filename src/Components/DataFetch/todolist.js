import React, { useState, useEffect } from "react";
import './DataFetch.css'
import axios from "axios";
import { styled } from "@mui/material/styles";

import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Stack, Paper, Typography, Button, } from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

// LogOut Button

const MenuButton = styled(Button)(({ theme }) => ({
    margin: "2px",
    width: "60px",
    height: "60px",
    backgroundColor: "white",
    border: "2px solid  #C7364D",
    borderRadius: "10px",
    color: "#C7364D",
    "&:hover": {
        backgroundColor: "#dfd9dd",
    },
}));


const TodoList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>

            <Stack
                direction="row"
                sx={{ minWidth: "75%", margin: " 20px 75px 10px 75px" }}
                alignItems="right"
                justifyContent="right"
                spacing={0}
            >
                <div className="title-header">
                        TodoList
                </div>

            <Link to='/'>
            <MenuButton>
                    <AiOutlineLogout style={{ height: "2rem", width: "2rem" }} />
                </MenuButton>
            </Link>


            </Stack>

            <Stack sx={{ minWidth: "75%", boxShadow: 2, margin: " 50px 75px 50px 75px" }}>
                <TableContainer component={Paper}>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ background: "#F2F2F2" }}>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Completed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map(post => (
                                <TableRow key={post.id} >
                                    <TableCell>{post.id}</TableCell>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.completed}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </div>
    );
}

export default TodoList;