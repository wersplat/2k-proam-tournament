import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField, 
  InputAdornment,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
  Collapse,
  TableSortLabel
} from '@mui/material';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  TrendingFlat,
  Info as InfoIcon,
  KeyboardArrowDown,
  KeyboardArrowUp,
  AttachMoney
} from '@mui/icons-material';

// Mock data with expanded stats
const mockPlayers = [
  { 
    id: 1, 
    name: 'John Doe', 
    position: 'PG', 
    team: 'Lakers', 
    currentValue: 85, 
    lastWeekValue: 82, 
    stats: {
      ppg: 28.5, ppgChange: 1.2,
      apg: 9.3,  apgChange: 0.5,
      rpg: 4.2,  rpgChange: 0.3,
      spg: 1.8,  spgChange: -0.2,
      bpg: 0.5,  bpgChange: 0.1,
      fg: 48.7,  fgChange: 1.1,
      threePt: 39.2, threePtChange: -0.8,
      ft: 88.5,  ftChange: 0.5
    },
    trend: 'up' 
  },
  { 
    id: 2, 
    name: 'Mike Smith', 
    position: 'SG', 
    team: 'Warriors', 
    currentValue: 78, 
    lastWeekValue: 80, 
    stats: {
      ppg: 24.8, ppgChange: -0.5,
      apg: 4.2,  apgChange: 0.2,
      rpg: 5.1,  rpgChange: 0.1,
      spg: 1.5,  spgChange: 0.0,
      bpg: 0.3,  bpgChange: -0.1,
      fg: 45.2,  fgChange: -0.8,
      threePt: 37.8, threePtChange: -1.2,
      ft: 85.3,  ftChange: 0.3
    },
    trend: 'down' 
  },
  { 
    id: 3, 
    name: 'Alex Johnson', 
    position: 'SF', 
    team: 'Bucks', 
    currentValue: 92, 
    lastWeekValue: 90, 
    stats: {
      ppg: 31.2, ppgChange: 2.1,
      apg: 6.7,  apgChange: 0.8,
      rpg: 7.8,  rpgChange: 0.5,
      spg: 2.1,  spgChange: 0.3,
      bpg: 1.2,  bpgChange: 0.2,
      fg: 50.1,  fgChange: 1.5,
      threePt: 41.5, threePtChange: 2.1,
      ft: 89.2,  ftChange: 0.7
    },
    trend: 'up' 
  },
  { 
    id: 4, 
    name: 'Chris Davis', 
    position: 'PF', 
    team: 'Nuggets', 
    currentValue: 88, 
    lastWeekValue: 88, 
    stats: {
      ppg: 18.7, ppgChange: 0.0,
      apg: 2.1,  apgChange: 0.0,
      rpg: 10.5, rpgChange: 0.0,
      spg: 0.9,  spgChange: 0.0,
      bpg: 2.3,  bpgChange: 0.0,
      fg: 52.3,  fgChange: 0.0,
      threePt: 36.7, threePtChange: 0.0,
      ft: 75.4,  ftChange: 0.0
    },
    trend: 'neutral' 
  },
  { 
    id: 5, 
    name: 'James Wilson', 
    position: 'C', 
    team: 'Celtics', 
    currentValue: 84, 
    lastWeekValue: 82, 
    stats: {
      ppg: 22.3, ppgChange: 1.1,
      apg: 3.4,  apgChange: 0.3,
      rpg: 11.8, rpgChange: 0.7,
      spg: 0.7,  spgChange: 0.1,
      bpg: 1.9,  bpgChange: 0.2,
      fg: 54.6,  fgChange: 0.8,
      threePt: 32.1, threePtChange: 0.5,
      ft: 72.8,  ftChange: 0.4
    },
    trend: 'up' 
  },
];

const StatCell = ({ value, change, isPercentage = false }) => {
  const hasChange = change !== 0 && change !== undefined;
  const isPositive = change > 0;
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="body2" component="span">
          {isPercentage ? `${value.toFixed(1)}%` : value.toFixed(1)}
        </Typography>
        {hasChange && (
          <Typography 
            variant="caption" 
            sx={{ 
              ml: 0.5, 
              color: isPositive ? 'success.main' : 'error.main',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            {isPositive ? '+' : ''}{change.toFixed(1)}
            {isPositive ? <TrendingUp fontSize="inherit" /> : <TrendingDown fontSize="inherit" />}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const PlayerValueTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPlayer, setExpandedPlayer] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'currentValue', direction: 'desc' });
  
  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedPlayers = [...mockPlayers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredPlayers = sortedPlayers.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up':
        return <TrendingUp color="success" />;
      case 'down':
        return <TrendingDown color="error" />;
      default:
        return <TrendingFlat color="disabled" />;
    }
  };

  const getValueChange = (current, last) => {
    const change = current - last;
    return (
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        color: change > 0 ? 'success.main' : change < 0 ? 'error.main' : 'text.secondary'
      }}>
        {getTrendIcon(change > 0 ? 'up' : change < 0 ? 'down' : 'neutral')}
        <Typography variant="body2" sx={{ ml: 0.5 }}>
          {Math.abs(change) || 'No change'}
        </Typography>
      </Box>
    );
  };

  const CombinedLegend = () => (
    <Box sx={{ 
      mb: 3, 
      p: 2, 
      bgcolor: 'background.paper', 
      borderRadius: 1, 
      border: '1px solid', 
      borderColor: 'divider' 
    }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        {/* Stats Legend Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
            <InfoIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1" color="text.primary">
              Stats Legend
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrendingUp color="success" fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">Improving</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrendingDown color="error" fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">Declining</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrendingFlat color="disabled" fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">No Change</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ 
                mt: 1, 
                p: 1.5, 
                bgcolor: 'rgba(0, 0, 0, 0.02)', 
                borderRadius: 1,
                borderLeft: '3px solid',
                borderColor: 'primary.main'
              }}>
                <Typography variant="body2" fontWeight="medium" color="text.primary" gutterBottom>
                  Team Salary Cap: $100/month
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • 6-player active roster<br />
                  • +$5 "Player-Coach" bonus available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Salary Tiers Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
            <AttachMoney color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1" color="text.primary">
              Salary Tiers
            </Typography>
          </Box>
          <TableContainer>
            <Table size="small" sx={{ '& .MuiTableCell-root': { px: 1, py: 0.5 } }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Tier</TableCell>
                  <TableCell>Label</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                  <TableCell>Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>S</TableCell>
                  <TableCell>Superstar</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>$30</TableCell>
                  <TableCell>90+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>A</TableCell>
                  <TableCell>All-Star</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>$20</TableCell>
                  <TableCell>80-89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>B</TableCell>
                  <TableCell>Starter</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>$15</TableCell>
                  <TableCell>70-79</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>C</TableCell>
                  <TableCell>Role Player</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>$10</TableCell>
                  <TableCell>60-69</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>D</TableCell>
                  <TableCell>Reserve</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>$5</TableCell>
                  <TableCell>0-59</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Player Value Tracker
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Track player values, trends, and performance metrics
          </Typography>
          <CombinedLegend />
          <Divider sx={{ my: 3 }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Search Players</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by name, team, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={3}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Player</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell align="right">
                      <TableSortLabel
                        active={sortConfig.key === 'currentValue'}
                        direction={sortConfig.direction}
                        onClick={() => handleSort('currentValue')}
                      >
                        Current Value
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">Last Week</TableCell>
                    <TableCell align="right">Change</TableCell>
                    <TableCell align="center">Stats</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPlayers.map((player) => (
                    <React.Fragment key={player.id}>
                      <TableRow hover>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                              <Typography variant="subtitle1">{player.name}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell>{player.team}</TableCell>
                        <TableCell align="right">
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Typography variant="subtitle1">{player.currentValue}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              ${player.currentValue >= 90 ? '30' : 
                                player.currentValue >= 80 ? '20' : 
                                player.currentValue >= 70 ? '15' : 
                                player.currentValue >= 60 ? '10' : '5'} (Tier {player.currentValue >= 90 ? 'S' : 
                                player.currentValue >= 80 ? 'A' : 
                                player.currentValue >= 70 ? 'B' : 
                                player.currentValue >= 60 ? 'C' : 'D'})
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" color="text.secondary">
                            {player.lastWeekValue}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          {getValueChange(player.currentValue, player.lastWeekValue)}
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setExpandedPlayer(expandedPlayer === player.id ? null : player.id)}
                          >
                            {expandedPlayer === player.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                          <Collapse in={expandedPlayer === player.id} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                              <Typography variant="subtitle2" gutterBottom component="div">
                                Season Averages (Change from last week)
                              </Typography>
                              <Grid container spacing={2}>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">Points</Typography>
                                  <StatCell value={player.stats.ppg} change={player.stats.ppgChange} />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">Assists</Typography>
                                  <StatCell value={player.stats.apg} change={player.stats.apgChange} />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">Rebounds</Typography>
                                  <StatCell value={player.stats.rpg} change={player.stats.rpgChange} />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">Steals</Typography>
                                  <StatCell value={player.stats.spg} change={player.stats.spgChange} />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">Blocks</Typography>
                                  <StatCell value={player.stats.bpg} change={player.stats.bpgChange} />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">FG%</Typography>
                                  <StatCell value={player.stats.fg} change={player.stats.fgChange} isPercentage />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">3P%</Typography>
                                  <StatCell value={player.stats.threePt} change={player.stats.threePtChange} isPercentage />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                  <Typography variant="caption" color="text.secondary">FT%</Typography>
                                  <StatCell value={player.stats.ft} change={player.stats.ftChange} isPercentage />
                                </Grid>
                              </Grid>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlayerValueTracker;
