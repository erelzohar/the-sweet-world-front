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


const pages = [
    {
        name: 'קונספטים לימי הולדת',
        route: "/concepts"
    },
    {
        name: 'ביקורות',
        route: "/reviews"
    },
    {
        name: 'גלריה ',
        route: "/gallery"
    }
];

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
                        component="a"
                        href="/"
                        sx={{
                            m: 2,
                            mr:0,
                            display: { xs: 'none', md: 'flex' },
                            color: 'default',
                        }}
                    >
                        <img src={logoImg} alt="" style={{ width: '7vw' }} />
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
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.route}><Typography textAlign="center" color="red">{page.name}</Typography></Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="inherit"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            color: 'inherit'
                        }}
                    >
                        <img src={logoImg} alt="" style={{ width: '11vw' }} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={page.route} key={page.name}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'red', display: 'block', fontSize: 'medium' }}
                                >
                                     {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Header;
