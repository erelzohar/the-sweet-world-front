import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from "react";
import { AddIcCall, Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";

function SpeedDialComponent(): JSX.Element {
  const actions = [
    { icon: <Call />, name: 'Call' },
    { icon: <WhatsApp />, name: 'WhatsApp' },
    { icon: <Instagram />, name: 'Instagram' },
    { icon: <Facebook />, name: 'Facebook' },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="SpeedDialComponent" component={'span'} sx={{
      height: 330,
      transform: 'translateZ(0px)',
      flexGrow: 1,
      position: 'fixed',
      top: '50vh',
      right:'1vw',
      display: 'flex'
    }}>
      <Backdrop sx={{ backgroundColor: 'transparent' }} open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'relative', display: 'flex' }}
        icon={<AddIcCall />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              if (action.name === "Call") {
                return window.open('tel:0584562302', '_self');
              }
              if (action.name === "WhatsApp") {
                return window.open('https://wa.me/972584006014', '_self');
              }
              if (action.name === "Instagram") {
                return window.open('https://www.instagram.com/dina.amira1998/', '_self');
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default SpeedDialComponent;




