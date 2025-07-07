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
  CardActions,
  useMediaQuery,
  Grow,
  Paper
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
  MonetizationOn
} from '@mui/icons-material';

const tournamentRules = [
  { text: 'All matches are best of 3 until finals', icon: <AccessTime /> },
  { text: 'Finals are best of 5', icon: <EmojiEvents /> },
  { text: 'Must check in 30 minutes before tournament start', icon: <LockClock /> },
  { text: 'All players must be registered on the team roster', icon: <People /> },
  { text: 'Standard The Association rules apply', icon: <SportsEsports /> },
  { text: 'No player may compete on multiple teams', icon: <Person /> }
];

// Helper function to get status chip props
const getStatusChipProps = (status) => {
  if (!status) return { label: 'Unknown', color: 'default' };
  
  const statusLower = status.toLowerCase();
  if (statusLower.includes('open')) {
    return { label: status, color: 'success' };
  }
  if (statusLower.includes('upcoming') || statusLower.includes('soon')) {
    return { label: status, color: 'info' };
  }
  if (statusLower.includes('complete') || statusLower.includes('ended')) {
    return { label: status, color: 'secondary' };
  }
  return { label: status };
};

// TournamentCard component
const TournamentCard = ({ tournament }) => {
  const theme = useTheme();
  // Keep useMediaQuery hook for future responsive features
  useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Card 
      elevation={2} 
      sx={{ 
        borderRadius: 2, 
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[6]
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        flexGrow: 1
      }}>
        {/* Tournament Image */}
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
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
            zIndex: 1
          }
        }}>
          <CardMedia
            component="img"
            image={tournament.image || '/images/tournament-default.jpg'}
            alt={tournament.name}
            sx={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover'
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
              color={getStatusChipProps(tournament.status).color}
              size="small"
              sx={{ 
                mb: 1,
                color: 'white',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '0.7rem',
                '& .MuiChip-label': {
                  px: 1
                }
              }}
            />
            <Typography variant="h6" component="h3" sx={{ 
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              {tournament.name}
            </Typography>
          </Box>
        </Box>

        {/* Tournament Details */}
        <Box sx={{ 
          p: 3, 
          width: { xs: '100%', lg: '65%' },
          display: 'flex',
          flexDirection: 'column'
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
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">Date</Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {tournament.date}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 1.5, 
                    textAlign: 'center',
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">Prize</Typography>
                  <Typography variant="subtitle2" fontWeight={600} color="primary">
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
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">Teams</Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {tournament.teams}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 1.5, 
                    textAlign: 'center',
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">Format</Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {tournament.format || '5v5'}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          <CardActions sx={{ 
            mt: 'auto', 
            px: 0,
            '& .MuiButton-root': {
              width: '100%',
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem'
            }
          }}>
            <Button 
              variant="contained" 
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
};

// Main Tournament Component
const Tournament = () => {
  const theme = useTheme();
  // Keep useMediaQuery hook for future responsive features
  useMediaQuery(theme.breakpoints.down('md'));

  // Tournament data - Updated to match the 2025-2026 schedule
  const upcomingTournaments = [
    {
      id: 1,
      name: 'October Open',
      date: 'October 3-5, 2025',
      time: '7:00 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Registration Open',
      type: 'Open',
      format: '5v5',
      description: 'Kick off the 2025-2026 season with the October Open! Compete in the first tournament of the season and set the tone for the year.',
      image: '/images/october-open.jpg',
      featured: true,
      notes: 'Preseason Oct 1-6. No expansion allowed yet.'
    },
    {
      id: 2,
      name: 'November Open',
      date: 'November 14-16, 2025',
      time: '8:00 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Second tournament of the season. Season 1 Top 2 teams get free entry.',
      image: '/images/november-open.jpg',
      notes: 'S1 Top 2 get free entry. Minimum 2-team expansion allowed.'
    },
    {
      id: 3,
      name: 'Holiday Festival',
      date: 'December 13-15, 2025',
      time: '7:30 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Special holiday tournament with a condensed schedule. Season 2 Top 2 teams get free entry.',
      image: '/images/holiday-festival.jpg',
      notes: 'Condensed season due to holidays.'
    },
    {
      id: 4,
      name: 'January Open',
      date: 'January 9-11, 2026',
      time: '8:00 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Start the new year with competitive play. Season 3 Top 2 teams get free entry.',
      image: '/images/january-open.jpg',
      notes: 'Full season resumes after holidays.'
    },
    {
      id: 5,
      name: 'February Open',
      date: 'February 13-15, 2026',
      time: '8:00 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Mid-season tournament with final expansion window.',
      image: '/images/february-open.jpg',
      notes: 'Final expansion window for the season.'
    },
    {
      id: 6,
      name: 'March Madness',
      date: 'March 28-30, 2026',
      time: '7:30 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Season finale tournament before league locks.',
      image: '/images/march-madness.jpg',
      notes: 'League locks after this tournament.'
    },
    {
      id: 7,
      name: 'April Open',
      date: 'April 10-12, 2026',
      time: '7:00 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Open format tournament for all teams.',
      image: '/images/april-open.jpg',
      notes: 'Open format for all teams.'
    },
    {
      id: 8,
      name: 'May Open',
      date: 'May 15-17, 2026',
      time: '8:00 PM EST',
      prize: 'TBD',
      teams: '0/64',
      status: 'Upcoming',
      type: 'Open',
      format: '5v5',
      description: 'Final online open tournament of the season.',
      image: '/images/may-open.jpg',
      notes: 'Last chance to qualify for LAN events.'
    },
    {
      id: 9,
      name: 'Franchise Playoffs',
      date: 'June 2-6, 2026',
      time: '7:30 PM EST',
      prize: 'TBD',
      teams: '8/8',
      status: 'Upcoming',
      type: 'Invite Only',
      format: '5v5',
      description: 'Top 8 teams compete for the franchise championship.',
      image: '/images/playoffs.jpg',
      notes: 'Top 8 teams qualify based on season performance.'
    },
    {
      id: 10,
      name: 'East Coast LAN',
      date: 'June 12-14, 2026',
      time: '7:00 PM EST',
      prize: 'TBD',
      teams: '0/32',
      status: 'Upcoming',
      type: 'LAN',
      format: '5v5',
      description: 'East Coast regional championship.',
      image: '/images/east-coast-lan.jpg',
      notes: 'Franchise Champion qualifies for Summer Championships.'
    },
    {
      id: 11,
      name: 'West Coast LAN',
      date: 'July 10-12, 2026',
      time: '7:00 PM PST',
      prize: 'TBD',
      teams: '0/32',
      status: 'Upcoming',
      type: 'LAN',
      format: '5v5',
      description: 'West Coast regional championship.',
      image: '/images/west-coast-lan.jpg',
      notes: 'Final LAN qualifier for Summer Championships.'
    },
    {
      id: 12,
      name: 'Summer Championships',
      date: 'August 14-17, 2026',
      time: '7:00 PM EST',
      prize: 'TBD',
      teams: '0/16',
      status: 'Upcoming',
      type: 'Championship',
      format: '5v5',
      description: 'Season finale featuring the best teams from the year.',
      image: '/images/summer-championships.jpg',
      notes: 'Invite-only: Franchise Champ + Open + LAN winners.'
    }
  ];

  // No past tournaments yet - this will be updated as the season progresses
  const pastTournaments = [];

  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
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
            Compete in The Association franchise league for a chance to win part of the $52,000 prize pool. 
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
            mb: 4
          }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 700, color: 'text.primary' }}>
              The Association Tournament Schedule
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
                  <div>
                    <TournamentCard tournament={tournament} />
                  </div>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Past Tournaments */}
        <Box>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, lineHeight: 1.1 }}>
            The Association: Battle for $52K
          </Typography>
          
          <Grid container spacing={3}>
            {pastTournaments.map((tournament) => (
              <Grid item key={tournament.id} xs={12} md={6} lg={4}>
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
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box sx={{ 
                    height: '160px',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
                      zIndex: 1
                    }
                  }}>
                    <CardMedia
                      component="img"
                      image={tournament.image || '/images/tournament-default.jpg'}
                      alt={tournament.name}
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
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
                        label="Completed"
                        color="secondary"
                        size="small"
                        sx={{ 
                          mb: 1,
                          color: 'white',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontSize: '0.7rem',
                          '& .MuiChip-label': {
                            px: 1
                          }
                        }}
                      />
                      <Typography variant="h6" component="h3" sx={{ 
                        fontWeight: 700,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {tournament.name}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Date
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {tournament.date}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Prize
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={600} color="primary">
                          {tournament.prize}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Winner
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {tournament.winner}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Runner-up
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {tournament.runnerUp}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button 
                      size="small" 
                      color="primary"
                      endIcon={<ArrowForward />}
                      fullWidth
                    >
                      View Results
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Rules Section */}
      <Box sx={{ 
        bgcolor: 'background.paper',
        py: 8,
        mt: 8
      }}>
        <Container maxWidth="xl">
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 700
            }}
          >
            Tournament Rules
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <Card elevation={0} sx={{ 
                height: '100%',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                p: 3
              }}>
                <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  General Rules
                </Typography>
                <List disablePadding>
                  {tournamentRules.map((rule, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        {rule.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={rule.text}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <Card elevation={0} sx={{ 
                height: '100%',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                p: 3
              }}>
                <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  Prizes
                </Typography>
                <List disablePadding>
                  {[
                    '1st Place: 60% of prize pool',
                    '2nd Place: 25% of prize pool',
                    '3rd Place: 10% of prize pool',
                    '4th Place: 5% of prize pool'
                  ].map((prize, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        <MonetizationOn />
                      </ListItemIcon>
                      <ListItemText 
                        primary={prize}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <Card elevation={0} sx={{ 
                height: '100%',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                p: 3
              }}>
                <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  How to Join
                </Typography>
                <List disablePadding>
                  {[
                    '1. Create an account on our platform',
                    '2. Form or join a team',
                    '3. Register for an upcoming tournament',
                    '4. Pay the entry fee (if applicable)',
                    '5. Check in before the tournament starts',
                    '6. Compete and win!'
                  ].map((step, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={step}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 8,
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 4, 
              fontWeight: 700
            }}
          >
            Ready to Join The Association?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Register now for the 2025-2026 season and compete for your share of the $52,000 prize pool.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
            }}
          >
            Register Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Tournament;
