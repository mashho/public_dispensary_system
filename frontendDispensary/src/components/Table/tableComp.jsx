import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#255674',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const TableComp = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              props.header.map((item, index) => {
                return (<StyledTableCell key={index}>{item}</StyledTableCell>);
              })
            }

          </TableRow>
        </TableHead>
        <TableBody>

          {
            props.data.map((item, index) => {
              return (
                {
                  // Please watch the Video for full code
                }
              );
            })
          }


          {
            props.data.length === 0 ? <StyledTableRow><StyledTableCell colSpan={props.header.length}>No Any Data yet</StyledTableCell></StyledTableRow> : null
          }




        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp