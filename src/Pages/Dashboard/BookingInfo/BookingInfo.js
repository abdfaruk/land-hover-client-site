import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BookingInfo = () => {
    const {user} = useAuth();
    const [bookingInfo, setBookingInfo] = useState([]);

    useEffect( ()=>{
        const url= `https://mighty-ridge-44167.herokuapp.com/bookingInfo?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBookingInfo(data))
    },[])

    return (
        <div>
            <h1>You booked : {bookingInfo.length} items</h1>
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
                    {bookingInfo.map((row) => (
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

export default BookingInfo;