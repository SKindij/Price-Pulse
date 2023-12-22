// @/views/Categories/BeverageCardTable.tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { RetailPrices } from '@/models/types';
type BeverageCardTableProps = {
  prices:RetailPrices;
};

const BeverageCardTable:React.FC<BeverageCardTableProps> = ({ prices }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Мережа</TableCell>
            <TableCell align="right">Ціна</TableCell>
            <TableCell align="right">На дату</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(prices).map(([chain, priceInfo]) => (
            <TableRow key={chain}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{chain}</TableCell>
              <TableCell align="right">{priceInfo.price}</TableCell>
              <TableCell align="right">{priceInfo.lastUpdated.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BeverageCardTable;