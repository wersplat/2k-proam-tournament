import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  Stack,
  CardActions,
  useMediaQuery
} from '@mui/material';
import { 
  EmojiEvents, 
  CheckCircle,
  ArrowForward,
  AccessTime,
  LockClock,
  People,
  SportsEsports,
  Person,
  Description,
  Leaderboard,
  GroupAdd,
  Forum,
  CalendarMonth,
  MonetizationOn
} from '@mui/icons-material';
import { Grow, Paper } from '@mui/material';

const tournamentRules = [
  { text: 'All matches are best of 3 until finals', icon: <AccessTime /> },
  { text: 'Finals are best of 5', icon: <EmojiEvents /> },
  { text: 'Must check in 30 minutes before tournament start', icon: <LockClock /> },
  { text: 'All players must be registered on the team roster', icon: <People /> },
  { text: 'Standard 2K Pro-Am rules apply', icon: <SportsEsports /> },
  { text: 'No player may compete on multiple teams', icon: <Person /> }
];

const Tournament = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const upcomingTournaments = [
    {
      id: 1,
      name: 'October Open',
      date: 'October 3-5, 2025',
      prize: 'TBD',
      status: 'Registration Open',
      type: 'Open',
      format: '5v5',
      entry: 'Free',
      description: 'Kickoff tournament for the 2025-2026 season. Open to all teams.',
      image: '/october-open.jpg',
      featured: true,
      region: 'Global',
      registered: '24/32',
      deadline: 'Oct 1, 2025'
    },
    {
      id: 2,
      name: 'November Open',
      date: 'November 14-16, 2025',
      prize: 'TBD',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      entry: 'Free for S1 Top 2',
      description: 'Second tournament of the season. Franchise Season 1 top 2 teams get free entry.',
      image: '/november-open.jpg',
      featured: true,
      region: 'Global',
      registered: '8/32',
      deadline: 'Nov 12, 2025'
    },
    {
      id: 3,
      name: 'Holiday Festival',
      date: 'December 13-15, 2025',
      prize: 'TBD',
      status: 'Upcoming',
      type: 'Themed',
      format: '5v5',
      entry: 'Free for S2 Top 2',
      description: 'Special holiday-themed tournament with festive rewards and special in-game items.',
      image: '/holiday-festival.jpg',
      region: 'Global',
      registered: 'Coming Soon',
      deadline: 'Dec 10, 2025'
    },
  ];

  // Quick links for the sidebar
  const quickLinks = [
    { text: 'Tournament Rules', icon: <Description />, url: '/rules' },
    { text: 'Global Rankings', icon: <Leaderboard />, url: '/rankings' },
    { text: 'Team Registration', icon: <GroupAdd />, url: '/register' },
    { text: 'Discord Community', icon: <Forum />, url: 'https://discord.gg/2kproam' }
  ];

  const pastTournaments = [
    {
      id: 4,
      name: 'Pre-Season Showcase',
      date: 'September 20-22, 2025',
      winner: 'TBD',
      prize: 'Bragging Rights',
      status: 'Completed',
      image: '/preseason-showcase.jpg',
      featured: false,
      region: 'Global',
      participants: '16 teams',
      champion: 'TBD'
    }
  ];

  // Status chip styling
  const getStatusChipProps = (status) => {
    switch (status.toLowerCase()) {
      case 'registration open':
        return { label: status, color: 'success' };
      case 'upcoming':
        return { label: status, color: 'info' };
      case 'completed':
        return { label: status, color: 'secondary' };
      default:
        return { label: status };
    }
  };

  const getTournamentCard = (tournament) => (
    <Card 
      elevation={2} 
      sx={{ 
        borderRadius: 2, 
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[6]
        }
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        height: '100%'
      }}>
        <Box sx={{ 
          width: { xs: '100%', lg: '35%' }, 
          height: { xs: '200px', lg: 'auto' },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1
          }
        }}>
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={tournament.image}
            alt={tournament.name}
            sx={{ 
              objectFit: 'cover',
              position: 'relative',
              zIndex: 0
            }}
          />
          <Box sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            zIndex: 2,
            color: 'white'
          }}>
            <Chip 
              label={tournament.status} 
              color={tournament.status === 'Registration Open' ? 'success' : 'default'}
              size="small"
              sx={{ 
                mb: 1,
                fontWeight: 'bold',
                backdropFilter: 'blur(4px)',
                bgcolor: 'rgba(0,0,0,0.4)'
              }}
            />
            <Typography variant="h5" component="h3" sx={{ 
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              {tournament.name}
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.9,
              display: 'flex',
              alignItems: 'center',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>
              <CalendarMonth fontSize="small" sx={{ mr: 0.5 }} />
              {tournament.date}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ 
          p: 3, 
          width: { xs: '100%', lg: '65%' },
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              {tournament.description}
            </Typography>
            
            <Grid container spacing={1} sx={{ mb: 2 }}>
              <Grid item xs={6} sm={3}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 1.5, 
                    textAlign: 'center',
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <MonetizationOn color="primary" sx={{ mb: 0.5 }} />
                  <Typography variant="caption" display="block" color="text.secondary">
                    Prize Pool
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {tournament.prize}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 1.5, 
                    textAlign: 'center',
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <People color="primary" sx={{ mb: 0.5 }} />
                  <Typography variant="caption" display="block" color="text.secondary">
                    Format
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {tournament.format}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 1.5, 
                    textAlign: 'center',
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <AccessTime color="primary" sx={{ mb: 0.5 }} />
                  <Typography variant="caption" display="block" color="text.secondary">
                    Deadline
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {tournament.deadline}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <CardActions sx={{ mt: 'auto', px: 2, pb: 2 }}>
            <Button 
              size="small" 
              color="primary"
              endIcon={<ArrowForward />}
              fullWidth
            >
              {tournament.status === 'Registration Open' ? 'Register Now' : 'View Details'}
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: 8, md: 12 },
        mb: 6,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
          zIndex: 1,
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' }
            }}
          >
            The Association: Battle for $52K
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            sx={{
              mb: 4,
              maxWidth: '800px',
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Compete in the most prestigious 2K Pro-Am tournament series with over $52,000 in cash prizes.
            Join the competition and prove you're the best in the world.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
            }}
          >
            Register Your Team
          </Button>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Upcoming Tournaments */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3
          }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
              Upcoming Tournaments
            </Typography>
            <Button 
              endIcon={<ArrowForward />}
              sx={{ textTransform: 'none' }}
            >
              View All
            </Button>
          </Box>

          <Grid container spacing={3}>
            {upcomingTournaments.map((tournament) => (
              <Grid item key={tournament.id} xs={12} md={6} lg={4}>
                <Grow in={true} timeout={500}>
                  <Card 
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[8]
                      },
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 2
                    }}
                  >
                    {tournament.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'secondary.main',
                          color: 'secondary.contrastText',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          zIndex: 1,
                          boxShadow: 1
                        }}
                      >
                        <Star fontSize="small" sx={{ mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.7rem' }}>
                          Featured
                        </Typography>
                      </Box>
                    )}
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                        {tournament.description}
                      </Typography>
                      <Grid container spacing={1} sx={{ mb: 2 }}>
                        <Grid item xs={6} sm={3}>
                          <Paper elevation={0} sx={{ p: 1.5, textAlign: 'center', borderRadius: 2, bgcolor: 'rgba(25, 118, 210, 0.05)' }}>
                            <MonetizationOn color="primary" sx={{ mb: 0.5 }} />
                            <Typography variant="caption" display="block" color="text.secondary">Prize Pool</Typography>
                            <Typography variant="subtitle2" fontWeight="bold">{tournament.prize}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper elevation={0} sx={{ p: 1.5, textAlign: 'center', borderRadius: 2, bgcolor: 'rgba(25, 118, 210, 0.05)' }}>
                            <People color="primary" sx={{ mb: 0.5 }} />
                            <Typography variant="caption" display="block" color="text.secondary">Format</Typography>
                            <Typography variant="subtitle2" fontWeight="bold">{tournament.format}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper elevation={0} sx={{ p: 1.5, textAlign: 'center', borderRadius: 2, bgcolor: 'rgba(25, 118, 210, 0.05)' }}>
                            <EventAvailable color="primary" sx={{ mb: 0.5 }} />
                            <Typography variant="caption" display="block" color="text.secondary">Type</Typography>
                            <Typography variant="subtitle2" fontWeight="bold">{tournament.type}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper elevation={0} sx={{ p: 1.5, textAlign: 'center', borderRadius: 2, bgcolor: 'rgba(25, 118, 210, 0.05)' }}>
                            <Person color="primary" sx={{ mb: 0.5 }} />
                            <Typography variant="caption" display="block" color="text.secondary">Entry</Typography>
                            <Typography variant="subtitle2" fontWeight="bold">{tournament.entry}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* Close Box for flexGrow: 1 above */}
                    <Box sx={{ mt: 'auto' }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        disabled={tournament.status !== 'Registration Open'}
                        endIcon={<ArrowForward />}
                        size="large"
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 'bold',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 3
                          },
                          transition: 'all 0.2s'
                        }}
                      >
                        {tournament.status === 'Registration Open' 
                          ? 'Register Now' 
                          : 'View Details'}
                      </Button>
                    </Box>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mt: 8,
        mb: 3,
        p: 2,
        bgcolor: 'rgba(25, 118, 210, 0.04)',
        borderRadius: 2,
        borderLeft: `4px solid ${theme.palette.primary.main}`
      }}>
        <Typography variant="h5" component="h3" sx={{ 
          display: 'flex', 
          alignItems: 'center',
          fontWeight: 'bold',
          m: 0
        }}>
          <MilitaryTech color="primary" sx={{ mr: 1.5, fontSize: '1.75rem' }} />
          Past Tournaments
        </Typography>
        <Chip 
          label={`${pastTournaments.length} Events`} 
          color="default" 
          variant="outlined"
          size="small" />
      </Box>

      <Grid container spacing={3}>
        {pastTournaments.map((tournament) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={tournament.id}>
            <Card 
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <Box sx={{ position: 'relative', height: '140px' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={tournament.image}
                  alt={tournament.name}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 1.5,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                  color: 'white'
                }}>
                  <Typography variant="subtitle1" fontWeight="bold" noWrap>
                    {tournament.name}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.9 }}>
                    {tournament.date}
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Winner
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <EmojiEvents sx={{ color: 'gold', mr: 1, fontSize: '1.1rem' }} />
                      <Typography variant="body2" fontWeight="medium">
                        {tournament.winner}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Prize
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {tournament.prize}
                    </Typography>
                  </Box>
                  <Box>
                    <Chip label={`${pastTournaments.length} Events`} color="default" variant="outlined" size="small" />
                  </Box>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    endIcon={<ArrowForward fontSize="small" />}
                    fullWidth
                    sx={{ mt: 1 }}
                  >
                    View Results
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Tournament Info Sidebar */}
      <Grid item xs={12} lg={4}>
        <Card elevation={0} sx={{ 
          mb: 3, 
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden'
        }}>
          <Box sx={{
            p: 2,
            bgcolor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center'
          }}>
            <EmojiEvents sx={{ mr: 1.5, fontSize: '1.5rem' }} />
            <Typography variant="h6" component="h3" sx={{ m: 0, fontWeight: 'bold' }}>
              Tournament Rules
            </Typography>
          </Box>
          <CardContent>
            <List disablePadding>
              {tournamentRules.map((rule, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    px: 0,
                    py: 1.5,
                    borderBottom: index < tournamentRules.length - 1 ? '1px dashed' : 'none',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'flex-start',
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32, color: 'primary.main' }}>
                    <CheckCircle fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography variant="body2">
                        {rule.text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
      
      {/* Quick Links Sidebar */}
      <Grid item xs={12} lg={4}>
        <Card elevation={0} sx={{ 
          mb: 3, 
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden'
        }}>
          <Box sx={{
            p: 2,
            bgcolor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center'
          }}>
            <EmojiEvents sx={{ mr: 1.5, fontSize: '1.5rem' }} />
            <Typography variant="h6" component="h3" sx={{ m: 0, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
          </Box>
          <List disablePadding>
            {quickLinks.map((link, index) => (
              <ListItem 
                button 
                key={index}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  px: 3,
                  py: 2,
                  borderBottom: index < quickLinks.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'action.hover'
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {React.cloneElement(link.icon, { fontSize: 'small' })}
                </ListItemIcon>
                <ListItemText primary={link.text} />
                <ArrowForward color="action" fontSize="small" />
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </Container>
  </Box>
  );
};

export default Tournament;
