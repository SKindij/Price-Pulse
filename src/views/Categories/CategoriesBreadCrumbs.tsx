// @/views/Categories/Beverages/CategoriesBreadCrumbs
import {createElement} from 'react';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography/Typography';

// interface for "breadcrumbs"
type BreadCrumbInfo = [
  {
    label:string;
    href:string;
    icon:JSX.Element;
  },
  {
    label:string;
    href:string;
    icon:JSX.Element;
  },
  {
    label:string;
    icon:JSX.Element;
  }
];

// responsible for displaying breadcrumbs in the user interface
export default function CategoriesBreadCrumbs({ breadcrumbs }:{
  breadcrumbs:BreadCrumbInfo; // an array of breadcrumbs to display
}) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }} >
      {/*  */}
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href={breadcrumbs[0].href}
      >
        {createElement(breadcrumbs[0].icon.type, {
          ...breadcrumbs[0].icon.props,
          sx: { marginRight: 0.5, fontSize: 'inherit' },
        })}
        {breadcrumbs[0].label}
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href={breadcrumbs[1].href}
      >
        {createElement(breadcrumbs[1].icon.type, {
          ...breadcrumbs[1].icon.props,
          sx: { marginRight: 0.5, fontSize: 'inherit' },
        })}
        {breadcrumbs[1].label}
      </Link>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="text.primary"
      >
        {createElement(breadcrumbs[2].icon.type, {
          ...breadcrumbs[2].icon.props,
          sx: { marginRight: 0.5, fontSize: 'inherit' },
        })}
        {breadcrumbs[2].label}
      </Typography>
    </Breadcrumbs>
  );
}





