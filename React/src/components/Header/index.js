import React, {useState} from 'react';


// == Import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

// == Import images
import Logo from 'src/assets/logo.png';

// == Import styles
import headerStyles from './headerStyles';

// == Composant
const Header = () => {
  const classes = headerStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Connexion</MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
    <AppBar position="fixed" className={classes.navbar} color="transparent">

        <Toolbar>
        <div className={classes.title}>
            <Tooltip title="Retour acceuil" aria-label="retour-accueil" placement="bottom">
                <img className={classes.logo} src={Logo} alt="O'local Logo" />
            </Tooltip>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >  
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Tooltip title="Films" aria-label="films" placement="bottom">
              <Button  className={classes.headerLink}>Films</Button>
            </Tooltip>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Tooltip title="Favoris" aria-label="favoris" placement="bottom">
              <Button className={classes.headerLink}>Favoris</Button>
            </Tooltip>  
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Tooltip title="Collections" aria-label="collections" placement="bottom">
              <Button className={classes.headerLink}>Collections</Button>
            </Tooltip>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Tooltip title="Genres" aria-label="genres" placement="bottom">
             <Button className={classes.headerLink}>Genres</Button>
            </Tooltip>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Tooltip title="recherche" aria-label="recherche" placement="bottom">
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </Tooltip>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Tooltip title="Compte utilisateur" aria-label="compte utilisateur" placement="bottom">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

// == Export 
export default Header;
