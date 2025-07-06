import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Chip,
  Tab,
  Tabs,
  Divider,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { 
  EmojiEvents, 
  TrendingUp, 
  TrendingDown, 
  Remove,
  SportsBasketball,
  MilitaryTech,
  Person
} from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`standings-tabpanel-${index}`}
      aria-labelledby={`standings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `standings-tab-${index}`,
    'aria-controls': `standings-tabpanel-${index}`,
  };
}

const Standings = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Sample data - in a real app, this would come from an API
  const eastTeams = [
    { id: 1, name: 'New York Titans', wins: 12, losses: 3, streak: 'W5', last10: '9-1', gb: '—', pointsFor: 112.3, pointsAgainst: 98.7 },
    { id: 2, name: 'Chicago Ballers', wins: 11, losses: 4, streak: 'W2', last10: '7-3', gb: 1, pointsFor: 108.9, pointsAgainst: 101.2 },
    { id: 3, name: 'Miami Storm', wins: 9, losses: 6, streak: 'L1', last10: '6-4', gb: 3, pointsFor: 105.5, pointsAgainst: 103.8 },
    { id: 4, name: 'Boston Celtics', wins: 8, losses: 7, streak: 'W1', last10: '5-5', gb: 4, pointsFor: 107.2, pointsAgainst: 106.5 },
    { id: 5, name: 'Toronto Huskies', wins: 7, losses: 8, streak: 'L2', last10: '4-6', gb: 5, pointsFor: 102.8, pointsAgainst: 105.3 },
    { id: 6, name: 'Philadelphia Founders', wins: 5, losses: 10, streak: 'L3', last10: '3-7', gb: 7, pointsFor: 98.6, pointsAgainst: 108.2 },
  ];

  const westTeams = [
    { id: 7, name: 'LA Warriors', wins: 13, losses: 2, streak: 'W7', last10: '9-1', gb: '—', pointsFor: 115.2, pointsAgainst: 99.8 },
    { id: 8, name: 'Houston Hoops', wins: 10, losses: 5, streak: 'W1', last10: '7-3', gb: 3, pointsFor: 110.5, pointsAgainst: 104.3 },
    { id: 9, name: 'Denver Mountaineers', wins: 9, losses: 6, streak: 'L1', last10: '6-4', gb: 4, pointsFor: 107.8, pointsAgainst: 105.6 },
    { id: 10, name: 'Phoenix Suns', wins: 7, losses: 8, streak: 'W2', last10: '5-5', gb: 6, pointsFor: 105.1, pointsAgainst: 106.9 },
    { id: 11, name: 'Portland Trail Blazers', wins: 6, losses: 9, streak: 'L2', last10: '4-6', gb: 7, pointsFor: 103.7, pointsAgainst: 108.4 },
    { id: 12, name: 'Seattle Storm', wins: 4, losses: 11, streak: 'L4', last10: '2-8', gb: 9, pointsFor: 99.2, pointsAgainst: 111.6 },
  ];

  const allTeams = [...eastTeams, ...westTeams]
    .sort((a, b) => (b.wins - a.wins) || (a.losses - b.losses));

  const topScorers = [
    { id: 1, name: 'Kevin Durant', team: 'Phoenix Suns', ppg: 32.5, rpg: 7.8, apg: 6.2, fg: '51.2%', threePt: '42.1%' },
    { id: 2, name: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 31.8, rpg: 8.4, apg: 8.9, fg: '49.7%', threePt: '38.5%' },
    { id: 3, name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 30.2, rpg: 11.3, apg: 5.8, fg: '55.6%', threePt: '31.8%' },
    { id: 4, name: 'Jayson Tatum', team: 'Boston Celtics', ppg: 29.7, rpg: 8.1, apg: 4.6, fg: '47.8%', threePt: '39.2%' },
    { id: 5, name: 'Stephen Curry', team: 'Golden State Warriors', ppg: 29.3, rpg: 5.1, apg: 6.4, fg: '48.9%', threePt: '43.7%' },
  ];

  const renderStreak = (streak) => {
    if (streak.startsWith('W')) {
      return <Chip icon={<TrendingUp />} label={streak} color="success" size="small" />;
    } else if (streak.startsWith('L')) {
      return <Chip icon={<TrendingDown />} label={streak} color="error" size="small" />;
    } else {
      return <Chip icon={<Remove />} label={streak} size="small" />;
    }
  };

  const renderStandingsTable = (teams) => (
    <TableContainer component={Paper} elevation={2}>
      <Table sx={{ minWidth: 650 }} aria-label="standings table">
        <TableHead>
          <TableRow sx={{ bgcolor: 'action.hover' }}>
            <TableCell>Team</TableCell>
            <TableCell align="center">W</TableCell>
            <TableCell align="center">L</TableCell>
            <TableCell align="center">PCT</TableCell>
            <TableCell align="center">GB</TableCell>
            <TableCell align="center">Streak</TableCell>
            <TableCell align="center">L10</TableCell>
            <TableCell align="center">PPG</TableCell>
            <TableCell align="center">OPPG</TableCell>
            <TableCell align="center">DIFF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow 
              key={team.id}
              hover
              sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={`/team-logos/${team.name.toLowerCase().replace(/\s+/g, '-')}.png`} 
                    alt={team.name}
                    sx={{ width: 24, height: 24, mr: 1, bgcolor: 'primary.main' }}
                  >
                    {team.name.charAt(0)}
                  </Avatar>
                  {team.name}
                </Box>
              </TableCell>
              <TableCell align="center">{team.wins}</TableCell>
              <TableCell align="center">{team.losses}</TableCell>
              <TableCell align="center">
                {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}%
              </TableCell>
              <TableCell align="center">{team.gb}</TableCell>
              <TableCell align="center">
                {renderStreak(team.streak)}
              </TableCell>
              <TableCell align="center">{team.last10}</TableCell>
              <TableCell align="center">{team.pointsFor}</TableCell>
              <TableCell align="center">{team.pointsAgainst}</TableCell>
              <TableCell align="center" sx={{ 
                color: team.pointsFor - team.pointsAgainst >= 0 ? 'success.main' : 'error.main',
                fontWeight: 'bold'
              }}>
                {(team.pointsFor - team.pointsAgainst).toFixed(1)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderTopScorersTable = (players) => (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: 'action.hover' }}>
            <TableCell>Player</TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">PPG</TableCell>
            <TableCell align="center">RPG</TableCell>
            <TableCell align="center">APG</TableCell>
            <TableCell align="center">FG%</TableCell>
            <TableCell align="center">3P%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, index) => (
            <TableRow 
              key={player.id}
              hover
              sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={`/player-photos/${player.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={player.name}
                    sx={{ width: 36, height: 36, mr: 2 }}
                  >
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Box>
                    <Typography variant="body1">{player.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      #{player.id} • {player.position}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="center">{player.team}</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>{player.ppg}</TableCell>
              <TableCell align="center">{player.rpg}</TableCell>
              <TableCell align="center">{player.apg}</TableCell>
              <TableCell align="center">{player.fg}</TableCell>
              <TableCell align="center">{player.threePt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          <MilitaryTech sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
          League Standings
        </Typography>
        <Typography variant="h6" color="text.secondary">
          2025-2026 Season • Updated: {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      <Box sx={{ width: '100%', mb: 4 }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="standings tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Eastern Conference" {...a11yProps(0)} />
          <Tab label="Western Conference" {...a11yProps(1)} />
          <Tab label="League" {...a11yProps(2)} />
          <Tab label="Top Scorers" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SportsBasketball color="primary" sx={{ mr: 1 }} />
            Eastern Conference
          </Typography>
          {renderStandingsTable(eastTeams)}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SportsBasketball color="secondary" sx={{ mr: 1 }} />
            Western Conference
          </Typography>
          {renderStandingsTable(westTeams)}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <EmojiEvents color="primary" sx={{ mr: 1 }} />
            League Standings
          </Typography>
          {renderStandingsTable(allTeams)}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Person color="primary" sx={{ mr: 1 }} />
            Top Scorers
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {renderTopScorersTable(topScorers)}
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Scoring Leaders
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {topScorers.slice(0, 3).map((player, index) => (
                    <Box key={player.id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          width: '30px', 
                          textAlign: 'center',
                          fontWeight: 'bold',
                          color: index === 0 ? 'gold' : index === 1 ? 'silver' : '#cd7f32'
                        }}
                      >
                        {index + 1}
                      </Typography>
                      <Avatar 
                        src={`/player-photos/${player.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={player.name}
                        sx={{ width: 40, height: 40, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1">{player.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                            {player.team}
                          </Typography>
                          <Chip 
                            label={`${player.ppg} PPG`} 
                            size="small" 
                            color="primary"
                            sx={{ height: '20px', fontSize: '0.7rem' }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Key Stats
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <List dense>
                    <ListItem>
                      <ListItemText 
                        primary="Highest PPG Team" 
                        secondary="LA Warriors (115.2)" 
                        secondaryTypographyProps={{ color: 'primary.main' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Best Defense" 
                        secondary="New York Titans (98.7)" 
                        secondaryTypographyProps={{ color: 'primary.main' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Best Home Record" 
                        secondary="Chicago Ballers (8-1)" 
                        secondaryTypographyProps={{ color: 'primary.main' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="Best Road Record" 
                        secondary="LA Warriors (6-1)" 
                        secondaryTypographyProps={{ color: 'primary.main' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'action.hover', borderRadius: 2 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> Standings are updated after each game day. Playoff seeding is determined by overall record, 
          with tiebreakers going to head-to-head results, followed by division record, and then conference record.
        </Typography>
      </Box>
    </Container>
  );
};

export default Standings;
