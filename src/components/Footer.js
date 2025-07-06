import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  List,
  ListItem
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Discord as DiscordIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  SportsBasketball
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', url: 'https://facebook.com/2kproam' },
    { icon: <TwitterIcon />, label: 'Twitter', url: 'https://twitter.com/2kproam' },
    { icon: <InstagramIcon />, label: 'Instagram', url: 'https://instagram.com/2kproam' },
    { icon: <YouTubeIcon />, label: 'YouTube', url: 'https://youtube.com/2kproam' },
    { icon: <DiscordIcon />, label: 'Discord', url: 'https://discord.gg/2kproam' },
  ];

  const quickLinks = [
    { text: 'Home', url: '/' },
    { text: 'Tournaments', url: '/tournaments' },
    { text: 'The Association', url: '/franchise-league' },
    { text: 'Schedule', url: '/schedule' },
    { text: 'Standings', url: '/standings' },
    { text: 'Rules', url: '/rules' },
  ];

  const contactInfo = [
    { icon: <EmailIcon fontSize="small" />, text: 'info@2kproam.com', url: 'mailto:info@2kproam.com' },
    { icon: <PhoneIcon fontSize="small" />, text: '(555) 123-4567', url: 'tel:5551234567' },
    { 
      icon: <LocationIcon fontSize="small" />, 
      text: '123 Basketball Court, Sports City, SC 12345',
      url: 'https://maps.google.com?q=123+Basketball+Court+Sports+City+SC+12345'
    },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.primary.dark,
        color: 'common.white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and Description */}
          <Grid item xs={12} md={4} sx={{ mb: isMobile ? 3 : 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box 
                sx={{ 
                  height: 40,
                  width: 40,
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  overflow: 'hidden'
                }}
              >
                <SportsBasketball sx={{ color: 'white', fontSize: 28 }} />
              </Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                2K Pro-Am Series
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              The premier competitive 2K basketball league for passionate gamers.
              Join us for thrilling tournaments and franchise league action.
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index} 
                  component="a" 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{ 
                    color: 'common.white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    mr: 1
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'medium' }}>
              Quick Links
            </Typography>
            <List component="div" dense>
              {quickLinks.map((link, index) => (
                <ListItem key={index} disableGutters disablePadding sx={{ mb: 1 }}>
                  <Link 
                    href={link.url} 
                    color="inherit" 
                    underline="hover"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        color: theme.palette.secondary.main,
                      },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'medium' }}>
              Contact Us
            </Typography>
            <List component="div" dense>
              {contactInfo.map((item, index) => (
                <ListItem key={index} disableGutters disablePadding sx={{ mb: 1.5 }}>
                  <Link 
                    href={item.url} 
                    color="inherit" 
                    underline="hover"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        color: theme.palette.secondary.main,
                      },
                      transition: 'color 0.2s',
                    }}
                  >
                    <Box component="span" sx={{ mr: 1.5, display: 'flex', opacity: 0.8 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="body2" component="span">
                      {item.text}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7, textAlign: isMobile ? 'center' : 'left', mb: isMobile ? 2 : 0 }}>
            © {new Date().getFullYear()} 2K Pro-Am Series. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <Link 
              href="/privacy-policy" 
              color="inherit" 
              underline="hover" 
              variant="body2" 
              sx={{ 
                mx: 1,
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              color="inherit" 
              underline="hover" 
              variant="body2" 
              sx={{ 
                mx: 1,
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Terms of Service
            </Link>
            <Link 
              href="/code-of-conduct" 
              color="inherit" 
              underline="hover" 
              variant="body2" 
              sx={{ 
                mx: 1,
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Code of Conduct
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
