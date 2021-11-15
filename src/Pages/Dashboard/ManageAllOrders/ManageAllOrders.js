import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect( () =>{
        fetch('https://mighty-ridge-44167.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])


    return (
        <div>
            <h1>Manage all Orders.</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="bookingInfo table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Service Name</TableCell>
                        <TableCell align="right">Service Price</TableCell>
                        <TableCell align="right">Service Description</TableCell>
                        <TableCell align="right">Service Location</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name_1}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;