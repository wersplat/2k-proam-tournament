import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Box, Divider } from '@mui/material';
import { Event, SportsEsports, EmojiEvents, CalendarMonth } from '@mui/icons-material';

const Schedule = () => {
  const scheduleData = [
    { 
      month: 'October', 
      franchiseSeason: 'Franchise Season 1', 
      leaguePlay: 'Oct 7–31', 
      expansionWindow: '—', 
      openTournament: 'Oct 3–5 – October Open', 
      notes: 'Preseason Oct 1–6. No expansion allowed yet.' 
    },
    { 
      month: 'November', 
      franchiseSeason: 'Franchise Season 2', 
      leaguePlay: 'Nov 1–30', 
      expansionWindow: 'Oct 31–Nov 2', 
      openTournament: 'Nov 14–16 – November Open', 
      notes: 'S1 Top 2 get free entry. Minimum 2-team expansion allowed.' 
    },
    { 
      month: 'December', 
      franchiseSeason: 'Franchise Season 3', 
      leaguePlay: 'Dec 2–20', 
      expansionWindow: 'Nov 30–Dec 1', 
      openTournament: 'Dec 13–15 – Holiday Festival', 
      notes: 'S2 Top 2 get free entry. Condensed season due to holidays.' 
    },
    { 
      month: 'January', 
      franchiseSeason: 'Franchise Season 4', 
      leaguePlay: 'Jan 6–31', 
      expansionWindow: 'Jan 1–5', 
      openTournament: 'Jan 9–11 – January Open', 
      notes: 'S3 Top 2 get free entry. Full season resumes.' 
    },
    { 
      month: 'February', 
      franchiseSeason: 'Franchise Season 5', 
      leaguePlay: 'Feb 3–28', 
      expansionWindow: 'Feb 1–2', 
      openTournament: 'Feb 13–15 – February Open', 
      notes: 'S4 Top 2 get free entry. Final expansion window.' 
    },
    { 
      month: 'March', 
      franchiseSeason: 'Franchise Season 6', 
      leaguePlay: 'Mar 3–28', 
      expansionWindow: '❌ No Expansion Allowed', 
      openTournament: 'Mar 28–30 – March Madness', 
      notes: 'S5 Top 2 get free entry. League locks after this season.' 
    },
    { 
      month: 'April', 
      franchiseSeason: '—', 
      leaguePlay: '—', 
      expansionWindow: '—', 
      openTournament: 'Apr 10–12 – April Open', 
      notes: 'S6 Top 2 get free entry. Open format for all teams.' 
    },
    { 
      month: 'May', 
      franchiseSeason: '—', 
      leaguePlay: '—', 
      expansionWindow: '—', 
      openTournament: 'May 15–17 – May Open', 
      notes: 'Final online open tournament.' 
    },
    { 
      month: 'June', 
      franchiseSeason: 'Franchise Playoffs', 
      leaguePlay: 'Jun 2–6 (Top 8 teams)', 
      expansionWindow: '—', 
      openTournament: 'Jun 12–14 – East Coast LAN', 
      notes: 'Franchise Champion qualifies for Summer Championships.' 
    },
    { 
      month: 'July', 
      franchiseSeason: '—', 
      leaguePlay: '—', 
      expansionWindow: '—', 
      openTournament: 'Jul 10–12 – West Coast LAN', 
      notes: 'Final LAN qualifier.' 
    },
    { 
      month: 'August', 
      franchiseSeason: '—', 
      leaguePlay: '—', 
      expansionWindow: '—', 
      openTournament: 'Aug 14–17 – Summer Championships', 
      notes: 'Invite-only: Franchise Champ + Open + LAN winners.' 
    },
  ];

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();
  const isCurrentSeason = currentYear === 2025 || currentYear === 2026;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CalendarMonth sx={{ mr: 2, color: 'primary.main' }} />
          2025-2026 Season Schedule
        </Typography>
        {isCurrentSeason && (
          <Chip 
            label={`Current Month: ${currentMonth}`} 
            color="primary" 
            variant="outlined"
            sx={{ mb: 2, fontWeight: 'medium' }}
          />
        )}
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          All dates and events are subject to change. Please check back regularly for updates.
        </Typography>
      </Box>

      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <Event color="primary" sx={{ mr: 1 }} /> Key Events
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    <SportsEsports sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Regular Season
                  </Typography>
                  <Typography variant="body2">
                    Six franchise seasons from October to March, with monthly open tournaments and expansion opportunities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    <EmojiEvents sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Playoffs & Championships
                  </Typography>
                  <Typography variant="body2">
                    Franchise Playoffs in June, followed by East and West Coast LAN events, culminating in the Summer Championships in August.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    <CalendarMonth sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Important Dates
                  </Typography>
                  <Typography variant="body2" component="div">
                    <Box component="ul" sx={{ pl: 2, mb: 0, '& li': { mb: 0.5 } }}>
                      <li>Final Expansion: Feb 1-2, 2026</li>
                      <li>League Lock: March 1, 2026</li>
                      <li>Franchise Playoffs: June 2-6, 2026</li>
                      <li>Summer Championships: August 14-17, 2026</li>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <CalendarMonth color="primary" sx={{ mr: 1 }} /> Full Season Schedule
          </Typography>
          <TableContainer component={Paper} elevation={0} variant="outlined">
            <Table sx={{ minWidth: 650 }} aria-label="season schedule">
              <TableHead>
                <TableRow sx={{ bgcolor: 'action.hover' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Franchise Season</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>League Play</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Expansion Window</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Open Tournament</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Notes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scheduleData.map((row, index) => (
                  <TableRow 
                    key={row.month}
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: 'action.hover' },
                      bgcolor: row.month === currentMonth && isCurrentSeason ? 'primary.light' : 'inherit'
                    }}
                  >
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'medium' }}>
                      {row.month}
                    </TableCell>
                    <TableCell>{row.franchiseSeason}</TableCell>
                    <TableCell>{row.leaguePlay}</TableCell>
                    <TableCell>{row.expansionWindow}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.openTournament}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{row.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Note:</strong> This schedule is subject to change. All times are in Eastern Time (ET).
              Please check the official Discord server for the most up-to-date information.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Schedule;
