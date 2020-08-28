import { makeStyles } from "@material-ui/core";

export const columns = 
// [
//   { title: 'ID', field: 'id' },
//   { title: 'Name', field: 'name' },
//   { title: 'Country', field: 'country' },
//   { title: 'First Contact', field: 'firstContact' },
//   { title: 'Email', field: 'email' },
//   { title: 'Sold', field: 'sold' },
//   { title: 'Owner', field: 'owner' }
// ]
[
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'country', label: 'Country', minWidth: 100 },
  {
    id: 'firstContact',
    label: 'First Contact',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'sold',
    label: 'Sold',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'owner',
    label: 'Owner',
    minWidth: 170,
    align: 'right',
  },
];

export const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '90%',
  },
});