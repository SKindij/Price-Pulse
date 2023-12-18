// @/app/layout.tsx
import ThemeRegistry from '@/views/ThemeRegistry/ThemeRegistry';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { AppBar } from '@/views/Layout/AppBar';
import { DrawerHeader } from '@/views/Layout/DrawerHeader';
import { Drawer } from '@/views/Layout/Drawer';
import DrawerController from '@/views/Layout/DrawerController';

const DrawerWidth = process.env.DRAWER_WIDTH ? parseInt(process.env.DRAWER_WIDTH, 10) : 240;

export const metadata = {
  title: 'Price-Pulse App',
  description: 'Information about the lowest prices available in retail chains of Ukraine.',
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <DrawerController>
            {(theme, open, handleDrawerOpen, handleDrawerClose) => (
              <Box sx={{ display: 'flex' }}>
                {/*  */}
                <AppBar position="fixed" open={open} drawerWidth={DrawerWidth}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                Price-Pulse App
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <DrawerHeader />
                  {/* основний вміст сайту*/}
                  {children}
                </Box>
              </Box>
            )}
          </DrawerController>
        </ThemeRegistry>
      </body>
    </html>
  );
}