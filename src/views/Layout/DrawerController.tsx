// @/views/Layout/DrawerController.tsx
'use client';
import { useState } from 'react';
import { useTheme, Theme } from '@mui/material/styles';

export interface DrawerControllerProps {
  children:(
    theme:Theme,
    open:boolean,
    handleDrawerOpen:()=>void,
    handleDrawerClose:()=>void
  )=>React.ReactNode;
}

const DrawerController:React.FC<DrawerControllerProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return children(theme, open, handleDrawerOpen, handleDrawerClose);
};

export default DrawerController;