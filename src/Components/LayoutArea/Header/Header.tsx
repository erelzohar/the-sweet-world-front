import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoImg from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';


function Header(): JSX.Element {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLInputElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className='Header' position="fixed" color='default' dir='rtl'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="inherit"
                        noWrap
                        sx={{
                            m: 2,
                            mr: 0,
                            display: { xs: 'none', md: 'flex' },
                            color: 'default',
                        }}
                    >
                        <Link to="/"><img src={logoImg} alt="" style={{ width: '7vw' }} /></Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/concepts" ><Typography textAlign="center" color="red">הפעלות ואירועים </Typography></Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/gallery" ><Typography textAlign="center" color="red">גלריה</Typography></Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/reviews"><Typography textAlign="center" color="red">ביקורות</Typography></Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="inherit"
                        noWrap
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            color: 'inherit',
                            justifyContent:'left'
                            
                        }}
                    >
                        <Link to="/"><img src={logoImg} alt="" style={{ width: '12vw' }} /></Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/concepts">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'red', display: 'block', fontSize: 'medium' }}
                            >
                                הפעלות ואירועים 
                            </Button>
                        </Link>
                        <Link to="/gallery" >
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'red', display: 'block', fontSize: 'medium' }}
                            >
                                גלריה
                            </Button>
                        </Link>
                        <Link to="/reviews">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'red', display: 'block', fontSize: 'medium' }}
                            >
                                ביקורות
                            </Button>
                        </Link>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Header;
