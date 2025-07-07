import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Container, 
  Button, 
  Menu, 
  MenuItem, 
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  SportsBasketball, 
  ExpandMore, 
  ExpandLess,
  EmojiEvents,
  CalendarMonth,
  Leaderboard,
  Menu as MenuIcon,
  Info,
  AttachMoney,
  Gavel,
  PersonSearch
} from '@mui/icons-material';

const NavButton = ({ to, children, icon: Icon, onClick, isActive, hasDropdown, isOpen }) => {
  return (
    <Button
      component={to ? Link : 'button'}
      to={to}
      onClick={onClick}
      sx={{
        color: 'white',
        mr: 1,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        ...(isActive && {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)'
          }
        })
      }}
    >
      {Icon && <Icon sx={{ mr: 0.5, fontSize: '1.1rem' }} />}
      {children}
      {hasDropdown && (isOpen ? <ExpandLess /> : <ExpandMore />)}
    </Button>
  );
};

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [leagueAnchor, setLeagueAnchor] = useState(null);
  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuAnchor(null);
    setLeagueAnchor(null);
  };

  const handleLeagueMenuOpen = (event) => {
    setLeagueAnchor(event.currentTarget);
  };

  const isLeagueMenuOpen = Boolean(leagueAnchor);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const renderDesktopNav = () => {
    const isAssociationSection = [
      '/franchise-league',
      '/standings',
      '/salary-structure',
      '/rules',
      '/player-tracker'
    ].includes(window.location.pathname);

    return (
      <>
        {/* Tournaments */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <NavButton 
            to="/tournaments"
            icon={EmojiEvents}
            isActive={window.location.pathname === '/tournaments'}
          >
            Tournaments
          </NavButton>
        </Box>

        {/* The Association Dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Button
            onClick={handleLeagueMenuOpen}
            sx={{
              color: 'white',
              mr: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              },
              ...(isAssociationSection && {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)'
                }
              })
            }}
            endIcon={isLeagueMenuOpen ? <ExpandLess /> : <ExpandMore />}
          >
            <SportsBasketball sx={{ mr: 0.5, fontSize: '1.1rem' }} />
            The Association
          </Button>
          <Menu
            anchorEl={leagueAnchor}
            open={isLeagueMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                width: 220,
              },
            }}
          >
            <MenuItem 
              component={Link} 
              to="/franchise-league" 
              onClick={handleMenuClose}
              selected={window.location.pathname === '/franchise-league'}
            >
              League Overview
            </MenuItem>
            <Divider />
            <MenuItem 
              component={Link} 
              to="/standings" 
              onClick={handleMenuClose}
              selected={window.location.pathname === '/standings'}
            >
              <Leaderboard sx={{ mr: 1, fontSize: '1rem' }} /> Standings
            </MenuItem>
            <MenuItem 
              component={Link} 
              to="/player-tracker" 
              onClick={handleMenuClose}
              selected={window.location.pathname === '/player-tracker'}
            >
              <PersonSearch sx={{ mr: 1, fontSize: '1rem' }} /> Player Tracker
            </MenuItem>
            <MenuItem 
              component={Link} 
              to="/salary-structure" 
              onClick={handleMenuClose}
              selected={window.location.pathname === '/salary-structure'}
            >
              <AttachMoney sx={{ mr: 1, fontSize: '1rem' }} /> Salary Structure
            </MenuItem>
            <Divider />
            <MenuItem 
              component={Link} 
              to="/rules" 
              onClick={handleMenuClose}
              selected={window.location.pathname === '/rules'}
            >
              <Gavel sx={{ mr: 1, fontSize: '1rem' }} /> Rules
            </MenuItem>
          </Menu>
        </Box>

        {/* Schedule */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <NavButton 
            to="/schedule"
            icon={CalendarMonth}
            isActive={window.location.pathname === '/schedule'}
          >
            Schedule
          </NavButton>
        </Box>

        {/* Global Rankings */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <NavButton 
            to="/global-ranking"
            icon={Leaderboard}
            isActive={window.location.pathname === '/global-ranking'}
          >
            Global Rankings
          </NavButton>
        </Box>

        {/* Handbook */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <NavButton 
            to="/handbook"
            icon={Info}
            isActive={window.location.pathname === '/handbook'}
          >
            Handbook
          </NavButton>
        </Box>


      </>
    );
  };

  const renderMobileNav = () => {
    return (
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
        <Button
          onClick={handleMobileMenuOpen}
          sx={{ color: 'white' }}
          startIcon={<MenuIcon />}
        >
          Menu
        </Button>
        <Menu
          anchorEl={mobileMenuAnchor}
          open={isMobileMenuOpen}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              width: 250,
            },
          }}
        >
          {/* Tournaments */}
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'bold' }}>
            TOURNAMENTS
          </Typography>
          <MenuItem 
            component={Link} 
            to="/tournaments" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/tournaments'}
          >
            <EmojiEvents sx={{ mr: 1 }} /> Tournaments
          </MenuItem>
          
          <Divider />
          
          {/* The Association */}
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'bold' }}>
            THE ASSOCIATION
          </Typography>
          <MenuItem 
            component={Link} 
            to="/franchise-league" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/franchise-league'}
          >
            <SportsBasketball sx={{ mr: 1 }} /> League Overview
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/standings" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/standings'}
          >
            <Leaderboard sx={{ mr: 1, fontSize: '1rem' }} /> Standings
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/player-tracker" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/player-tracker'}
          >
            <PersonSearch sx={{ mr: 1, fontSize: '1rem' }} /> Player Tracker
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/salary-structure" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/salary-structure'}
          >
            <AttachMoney sx={{ mr: 1, fontSize: '1rem' }} /> Salary Structure
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem 
            component={Link} 
            to="/rules" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/rules'}
          >
            <Gavel sx={{ mr: 1, fontSize: '1rem' }} /> Rules
          </MenuItem>
          
          <Divider />
          
          {/* Schedule */}
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'bold' }}>
            SCHEDULE
          </Typography>
          <MenuItem 
            component={Link} 
            to="/schedule" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/schedule'}
          >
            <CalendarMonth sx={{ mr: 1 }} /> Schedule
          </MenuItem>
          
          <Divider />
          
          {/* Global Rankings */}
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'bold' }}>
            GLOBAL RANKINGS
          </Typography>
          <MenuItem 
            component={Link} 
            to="/global-ranking" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/global-ranking'}
          >
            <Leaderboard sx={{ mr: 1, fontSize: '1rem' }} /> View Rankings
          </MenuItem>
          
          <Divider />
          
          {/* Handbook */}
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'bold' }}>
            HANDBOOK
          </Typography>
          <MenuItem 
            component={Link} 
            to="/handbook" 
            onClick={handleMenuClose}
            selected={window.location.pathname === '/handbook'}
          >
            <Info sx={{ mr: 1, fontSize: '1rem' }} /> View Handbook
          </MenuItem>
        </Menu>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <SportsBasketball sx={{ mr: 1, color: '#ffd700' }} />
              <Typography 
                variant="h6" 
                component={Link} 
                to="/" 
                sx={{ 
                  textDecoration: 'none', 
                  color: 'white',
                  fontWeight: 'bold',
                  mr: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  padding: '6px 12px',
                  borderRadius: 1
                }}
              >
                The Association: Battle for $52K
              </Typography>
              
              {!isMobile && (
                <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                  {renderDesktopNav()}
                </Box>
              )}
              
              {isMobile && renderMobileNav()}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
