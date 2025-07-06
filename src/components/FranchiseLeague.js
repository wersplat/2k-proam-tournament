import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Divider, Box, Chip } from '@mui/material';
import { EmojiEvents, AttachMoney, Group, Event, SportsBasketball } from '@mui/icons-material';

const FranchiseLeague = () => {
  const franchises = [
    { id: 1, name: 'New York Titans', conference: 'East', record: '12-3', salaryUsed: '$95' },
    { id: 2, name: 'LA Warriors', conference: 'West', record: '10-5', salaryUsed: '$100' },
    { id: 3, name: 'Chicago Ballers', conference: 'East', record: '11-4', salaryUsed: '$98' },
    { id: 4, name: 'Houston Hoops', conference: 'West', record: '9-6', salaryUsed: '$92' },
  ];

  const leagueInfo = {
    season: 'November 2025 - June 2026',
    teams: '12 (6 East · 6 West)',
    entryFee: '$100 One-Time Franchise Fee',
    rosterSize: '6 players',
    salaryCap: '$100 per month',
    matchFormat: '6 games per month (4 in-conference, 2 out-of-conference)'
  };

  const keyFeatures = [
    'Weekly match scheduling',
    'League stats, standings, and MVP tracking',
    'Media coverage + playoff eligibility',
    'Monthly performance-based tournament rewards',
    'Free agency, trades, and redraft windows'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        <SportsBasketball sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
        The Association
      </Typography>

      <Grid container spacing={4}>
        {/* League Overview */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} className="franchise-card">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <Group color="primary" sx={{ mr: 1 }} /> League Overview
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Season"
                    secondary={leagueInfo.season}
                    secondaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Teams"
                    secondary={leagueInfo.teams}
                    secondaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Entry Fee"
                    secondary={leagueInfo.entryFee}
                    secondaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Roster Size"
                    secondary={leagueInfo.rosterSize}
                    secondaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Monthly Salary Cap"
                    secondary={leagueInfo.salaryCap}
                    secondaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Match Format"
                    secondary={leagueInfo.matchFormat}
                    secondaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
              </List>

              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'medium' }}>
                Key Features:
              </Typography>
              <List dense>
                {keyFeatures.map((feature, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText primary={`• ${feature}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Current Standings */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} className="franchise-card">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <EmojiEvents color="primary" sx={{ mr: 1 }} /> Current Standings
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="East Conference" 
                  color="primary" 
                  variant="outlined" 
                  size="small" 
                  sx={{ mb: 1, fontWeight: 'medium' }} 
                />
                <List dense>
                  {franchises
                    .filter(team => team.conference === 'East')
                    .map((team) => (
                      <ListItem key={team.id} sx={{ py: 1 }}>
                        <ListItemText 
                          primary={team.name}
                          secondary={`Record: ${team.record} • Salary Used: ${team.salaryUsed}`}
                        />
                        <Chip 
                          label={team.record} 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                      </ListItem>
                    ))}
                </List>
              </Box>

              <Box>
                <Chip 
                  label="West Conference" 
                  color="secondary" 
                  variant="outlined" 
                  size="small" 
                  sx={{ mb: 1, fontWeight: 'medium' }} 
                />
                <List dense>
                  {franchises
                    .filter(team => team.conference === 'West')
                    .map((team) => (
                      <ListItem key={team.id} sx={{ py: 1 }}>
                        <ListItemText 
                          primary={team.name}
                          secondary={`Record: ${team.record} • Salary Used: ${team.salaryUsed}`}
                        />
                        <Chip 
                          label={team.record} 
                          size="small" 
                          color="secondary" 
                          variant="outlined"
                        />
                      </ListItem>
                    ))}
                </List>
              </Box>

              <Box sx={{ mt: 3, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Note:</strong> Standings are updated after each game day. Playoff seeding is determined by overall record, with tiebreakers going to head-to-head results.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Salary Cap Info */}
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <AttachMoney color="primary" sx={{ mr: 1 }} /> Salary Cap System
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                    How It Works:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText 
                        primary="$100 Monthly Budget"
                        secondary="Each team has $100/month to build a 6-player roster"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Dynamic Player Values"
                        secondary="Players receive monthly salary values based on stats and impact"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Roster Management"
                        secondary="Teams can retain, trade, or redraft players each month"
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                    Key Rules:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="• Final rosters must be submitted before the first match of each month" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• Teams must stay under the $100 salary cap" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• Trades must be approved by league officials" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• Player values adjust monthly based on performance" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FranchiseLeague;
