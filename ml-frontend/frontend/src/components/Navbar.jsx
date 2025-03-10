// import React, { useState } from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   IconButton, 
//   Drawer, 
//   List, 
//   ListItem, 
//   ListItemText,
//   Box 
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { styled } from '@mui/material/styles';

// const NavButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(0, 1),
//   color: 'white',
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
// }));

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'Instructions', path: 'instructions' },
//     { label: 'Check',  path: 'check' },
    
//   ];

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box sx={{  width: 250,  }} role="presentation" onClick={handleDrawerToggle}>
//       <List>
//         {navItems.map((item) => (
//           <ListItem 
//             key={item.label} 
//             component="a" 
//             href={item.path}
//             sx={  {  color: 'white',
//               '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                 },
//              }
//           }
//           >
//             <ListItemText primary={item.label} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="fixed" sx={{  background: "linear-gradient(135deg, #0d1321 0%, #1d3557 50%, #546e7a 100%)", zIndex: 1000,  }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         {/* Logo/Title */}
//         <Typography 
//           variant="h6" 
//           component="div" 
//           sx={{ flexGrow: 1, display: { xs: 'block' } }}
//         >
//           Currency Detector
//         </Typography>

//         {/* Desktop Menu */}
//         <Box sx={{ display: { xs: 'none', md: 'block' } }}>
//           {navItems.map((item) => (
//             <NavButton
//               key={item.label}
//               href={item.path}
//               sx={{ my: 2 }}
//             >
//               {item.label}
//             </NavButton>
//           ))}
//         </Box>

//         {/* Mobile Menu Button */}
//         <IconButton
//           color="inherit"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{ display: { md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         sx={{  
//           display: {  xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': { 
//             boxSizing: 'border-box', 
//             width: 250 ,
//             background: "linear-gradient(135deg, #0d1321 0%, #1d3557 50%, #546e7a 100%)",
//             borderRadius: 2,
//             borderColor: 'white',
//             borderWidth: 1,
//             borderStyle: 'solid',
//           },
          
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Instructions', path: 'instructions' },
    { label: 'Check',  path: 'check' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            component="a" 
            href={item.path}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ background: "linear-gradient(135deg, #0d1321 0%, #1d3557 50%, #546e7a 100%)", zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, display: { xs: 'block' } }}
        >
          Currency Detector
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navItems.map((item) => (
            <NavButton
              key={item.label}
              href={item.path}
              sx={{ my: 2 }}
            >
              {item.label}
            </NavButton>
          ))}
        </Box>

        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{  
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            background: "linear-gradient(135deg, #0d1321 0%, #1d3557 50%, #546e7a 100%)",
            borderRadius: 2,
            borderColor: 'white',
            borderWidth: 1,
            borderStyle: 'solid',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
