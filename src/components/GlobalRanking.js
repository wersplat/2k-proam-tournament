import React from 'react';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Grid, 
  useTheme,
  Card,
  CardContent,
  CardHeader,
  Container,
  Paper,
  Chip,
  Divider
} from '@mui/material';
import { 
  EmojiEvents, 
  MilitaryTech, 
  TableChart, 
  Info,
  Score,
  EmojiEventsOutlined,
  BarChart,
  Group
} from '@mui/icons-material';

const franchiseLeagueRP = [
  { performance: 'Win', rp: '+30 RP' },
  { performance: 'Loss', rp: '+10 RP' },
  { performance: 'Win over Top 10', rp: '+10 RP' },
  { performance: 'Clean Sweep', rp: '+5 RP' },
  { performance: 'Weekly MVP', rp: '+10 RP' },
  { performance: 'Team of the Week', rp: '+20 RP' }
];

const GlobalRanking = () => {
  const theme = useTheme();

  const eventTiers = [
    { tier: 'T1', type: 'Major LANs (e.g. Worlds, UPA)', maxRP: 1000 },
    { tier: 'T2', type: 'Monthly Franchise + Open Events', maxRP: 600 },
    { tier: 'T3', type: 'Qualifiers, Redraft Events', maxRP: 300 },
    { tier: 'T4', type: 'Showmatches, Invitationals', maxRP: '100–150' },
  ];

  const eventRPAllocation = [
    { placement: '1st', rp: 600 },
    { placement: '2nd', rp: 450 },
    { placement: '3rd–4th', rp: 300 },
    { placement: '5th–8th', rp: 150 },
    { placement: 'Group Exit', rp: 75 },
    { placement: 'Forfeit', rp: 0 },
  ];

  const rpDecay = [
    { source: 'Event RP', decayStarts: '30 days', fullDecay: '90 days' },
    { source: 'Franchise Weekly RP', decayStarts: '60 days', fullDecay: '120 days' },
    { source: 'Franchise Placement', decayStarts: '90 days', fullDecay: '150 days' },
  ];

  const leaderboardTiers = [
    { tier: 'S-Tier', rankRange: 'Top 4' },
    { tier: 'A-Tier', rankRange: '5–12' },
    { tier: 'B-Tier', rankRange: '13–30' },
    { tier: 'C-Tier', rankRange: '31–100' },
    { tier: 'Unranked', rankRange: '>100' },
  ];

  const exampleTeam = {
    name: 'Team RT25K',
    eventRP: 1350,
    franchiseWeeklyRP: 400,
    franchisePlacementRP: 400,
    bonusRP: 100,
    totalRP: 2250,
    rank: 6
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            mb: 2,
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
        >
          Global Ranking System
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Track team performance across The Association: Battle for $52K
        </Typography>
      </Box>

      {/* Combined Overview & Goals */}
      <Card sx={{ mb: 4, boxShadow: 2 }}>
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Info color="primary" sx={{ mr: 1 }} />
              <span>Ranking System Overview</span>
            </Box>
          }
          titleTypographyProps={{
            variant: 'h6',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }}
          sx={{ 
            bgcolor: 'rgba(25, 118, 210, 0.04)',
            py: 1.5,
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        />
        <CardContent sx={{ pt: 2, pb: '16px !important' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                The Global Ranking System tracks team performance across all sanctioned events in The Association: Battle for $52K, including league play, monthly opens, qualifiers, and LAN tournaments. <strong>Ranking Points (RP)</strong> determine team standing, event seeding, and eligibility for special invitations.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ 
                bgcolor: 'rgba(25, 118, 210, 0.04)',
                p: 2,
                borderRadius: 1,
                borderLeft: `3px solid ${theme.palette.primary.main}`
              }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.dark }}>
                  <EmojiEvents sx={{ fontSize: '1rem', mr: 0.5, mb: -0.2 }} />
                  System Goals
                </Typography>
                <Box component="ul" sx={{ 
                  pl: 2, 
                  m: 0, 
                  '& li': { 
                    fontSize: '0.9rem',
                    mb: 1,
                    lineHeight: 1.4,
                    '&::marker': {
                      color: theme.palette.primary.main
                    }
                  } 
                }}>
                  <li>Reward consistent, high-level performance</li>
                  <li>Balance tournament success with league play</li>
                  <li>Enable fair cross-region comparisons</li>
                  <li>Provide clear structure for LAN invites</li>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Ranking Points */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 2, height: '100%' }}>
            <CardHeader
              title={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MilitaryTech color="primary" sx={{ mr: 1 }} />
                  <span>Ranking Points (RP) Sources</span>
                </Box>
              }
              titleTypographyProps={{
                variant: 'h6',
                fontWeight: 'bold',
                color: theme.palette.text.primary
              }}
              sx={{ 
                bgcolor: 'rgba(25, 118, 210, 0.04)',
                py: 1.5,
                borderBottom: `1px solid ${theme.palette.divider}`
              }}
            />
            <CardContent sx={{ pt: 2, pb: '16px !important' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 1, 
                    bgcolor: 'rgba(25, 118, 210, 0.04)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'rgba(25, 118, 210, 0.12)'
                  }}>
                    <EmojiEvents sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>Official Events</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      Tournaments, Qualifiers, and LAN events
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 1, 
                    bgcolor: 'rgba(25, 118, 210, 0.04)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'rgba(25, 118, 210, 0.12)'
                  }}>
                    <Score sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>The Association</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      League performance and achievements
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ 
                mt: 2,
                p: 1.5, 
                bgcolor: 'rgba(0, 0, 0, 0.02)', 
                borderRadius: 1,
                borderLeft: `3px solid ${theme.palette.primary.main}`,
                '& p': { m: 0, fontSize: '0.85rem' }
              }}>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                  <strong>Note:</strong> Points decay over time to emphasize recent results and maintain competitive integrity.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Combined Event Tiers & RP Allocation */}
      <Card sx={{ mb: 4, boxShadow: 2 }}>
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TableChart color="primary" sx={{ mr: 1 }} />
              <span>Event Tiers & Points</span>
            </Box>
          }
          titleTypographyProps={{
            variant: 'h6',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }}
          sx={{ 
            bgcolor: 'rgba(25, 118, 210, 0.04)',
            py: 1.5,
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        />
        <CardContent sx={{ pt: 2, pb: '16px !important' }}>
          <Grid container spacing={2}>
            {/* Event Tiers */}
            <Grid item xs={12} md={5}>
              <Box sx={{ 
                p: 2, 
                bgcolor: 'rgba(25, 118, 210, 0.02)',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'rgba(25, 118, 210, 0.1)',
                height: '100%'
              }}>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 'bold', 
                  mb: 1.5, 
                  color: theme.palette.primary.dark,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <EmojiEventsOutlined sx={{ fontSize: '1rem', mr: 0.5 }} />
                  Event Tiers
                </Typography>
                <TableContainer>
                  <Table size="small" sx={{ '& td, & th': { px: 1, py: 0.75 } }}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Tier</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Event Type</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.8rem', textAlign: 'right' }}>Max RP</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {eventTiers.map((row) => (
                        <TableRow 
                          key={row.tier}
                          sx={{ 
                            '&:nth-of-type(odd)': { bgcolor: 'rgba(0, 0, 0, 0.02)' },
                            '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.04)' }
                          }}
                        >
                          <TableCell sx={{ fontWeight: 'medium', fontSize: '0.8rem' }}>{row.tier}</TableCell>
                          <TableCell sx={{ fontSize: '0.8rem' }}>{row.type}</TableCell>
                          <TableCell sx={{ textAlign: 'right', fontWeight: 'medium', fontSize: '0.8rem' }}>{row.maxRP}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>

            {/* RP Allocation */}
            <Grid item xs={12} md={7}>
              <Box sx={{ 
                p: 2, 
                bgcolor: 'rgba(25, 118, 210, 0.02)',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'rgba(25, 118, 210, 0.1)',
                height: '100%'
              }}>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 'bold', 
                  mb: 1.5, 
                  color: theme.palette.primary.dark,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <BarChart sx={{ fontSize: '1rem', mr: 0.5 }} />
                  Tier 2 Event RP Allocation
                </Typography>
                
                <Grid container spacing={1} sx={{ mb: 2 }}>
                  <Grid item xs={8} sm={9}>
                    <TableContainer>
                      <Table size="small" sx={{ '& td, & th': { px: 1, py: 0.5 } }}>
                        <TableBody>
                          {eventRPAllocation.map((row, index) => (
                            <TableRow 
                              key={index}
                              sx={{ 
                                '&:nth-of-type(odd)': { bgcolor: 'rgba(0, 0, 0, 0.02)' },
                                '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.04)' }
                              }}
                            >
                              <TableCell sx={{ fontSize: '0.8rem' }}>{row.placement}</TableCell>
                              <TableCell sx={{ textAlign: 'right', fontWeight: 'medium', fontSize: '0.8rem' }}>{row.rp}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  
                  <Grid item xs={4} sm={3}>
                    <Box sx={{ 
                      p: 1.5, 
                      bgcolor: 'rgba(25, 118, 210, 0.04)',
                      borderRadius: 1,
                      borderLeft: `2px solid ${theme.palette.primary.main}`,
                      height: '100%',
                      '& ul': { 
                        pl: 1.5, 
                        m: 0, 
                        '& li': { 
                          fontSize: '0.7rem',
                          mb: 0.75,
                          lineHeight: 1.3,
                          '&::marker': {
                            color: theme.palette.primary.main,
                            fontSize: '0.9em'
                          }
                        }
                      }
                    }}>
                      <Typography variant="subtitle2" sx={{ 
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        mb: 0.5,
                        color: theme.palette.primary.dark
                      }}>
                        Bonus RP:
                      </Typography>
                      <ul>
                        <li>+25 RP per win over Top 10 team</li>
                        <li>+50 RP for undefeated run</li>
                        <li>+10 RP per knockout win</li>
                      </ul>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ 
            mt: 1.5,
            p: 1.25, 
            bgcolor: 'rgba(0, 0, 0, 0.015)', 
            borderRadius: 1,
            borderLeft: `2px solid ${theme.palette.primary.light}`,
            '& p': { 
              m: 0, 
              fontSize: '0.75rem',
              color: theme.palette.text.secondary
            }
          }}>
            <Typography variant="body2">
              <strong>Note:</strong> Higher tiers offer more Ranking Points based on event prestige and competition level. 
              Points are awarded based on placement with additional bonuses for exceptional performance.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* The Association RP */}
      <Card sx={{ mb: 4, boxShadow: 2 }}>
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmojiEventsOutlined color="primary" sx={{ mr: 1 }} />
              <span>The Association RP</span>
            </Box>
          }
          titleTypographyProps={{
            variant: 'h6',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }}
          sx={{ 
            bgcolor: 'rgba(25, 118, 210, 0.04)',
            py: 1.5,
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        />
        <CardContent sx={{ pt: 2, pb: '16px !important' }}>
          <Grid container spacing={2}>
            {/* RP Table */}
            <Grid item xs={12} md={5}>
              <Box sx={{ 
                p: 2, 
                bgcolor: 'rgba(25, 118, 210, 0.02)',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'rgba(25, 118, 210, 0.1)',
                height: '100%'
              }}>
                <TableContainer>
                  <Table size="small" sx={{ '& td, & th': { px: 1, py: 0.5 } }}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Performance</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.8rem', textAlign: 'right' }}>RP</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {franchiseLeagueRP.map((row, index) => (
                        <TableRow 
                          key={index}
                          sx={{ 
                            '&:nth-of-type(odd)': { bgcolor: 'rgba(0, 0, 0, 0.02)' },
                            '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.04)' }
                          }}
                        >
                          <TableCell sx={{ fontSize: '0.8rem' }}>{row.performance}</TableCell>
                          <TableCell sx={{ textAlign: 'right', fontWeight: 'medium', fontSize: '0.8rem' }}>{row.rp}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>

            {/* Bonuses */}
            <Grid item xs={12} md={7}>
              <Box sx={{ 
                p: 2, 
                bgcolor: 'rgba(25, 118, 210, 0.02)',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'rgba(25, 118, 210, 0.1)',
                height: '100%'
              }}>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 'bold', 
                  mb: 1.5, 
                  color: theme.palette.primary.dark,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <MilitaryTech sx={{ fontSize: '1rem', mr: 0.5 }} />
                  Season Achievements
                </Typography>
                
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ 
                      p: 1.5, 
                      bgcolor: 'rgba(25, 118, 210, 0.03)',
                      borderRadius: 1,
                      height: '100%',
                      '& ul': { 
                        pl: 1.5, 
                        m: 0, 
                        '& li': { 
                          fontSize: '0.75rem',
                          mb: 0.5,
                          lineHeight: 1.4,
                          '&::marker': {
                            color: theme.palette.primary.main,
                            fontSize: '0.9em'
                          }
                        }
                      }
                    }}>
                      <ul>
                        <li><strong>Season Champion:</strong> +200 RP</li>
                        <li><strong>Season Runner-up:</strong> +150 RP</li>
                        <li><strong>Conference Champion:</strong> +100 RP</li>
                        <li><strong>Division Champion:</strong> +50 RP</li>
                        <li><strong>Playoff Qualification:</strong> +25 RP</li>
                      </ul>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ 
                      p: 1.5, 
                      bgcolor: 'rgba(0, 0, 0, 0.015)', 
                      borderRadius: 1,
                      borderLeft: `2px solid ${theme.palette.primary.light}`,
                      height: '100%',
                      '& p': { 
                        m: 0, 
                        fontSize: '0.7rem',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5
                      }
                    }}>
                      <Typography variant="body2">
                        <strong>Note:</strong> The Association RP is awarded at the end of each season based on team performance and achievements. Additional RP may be awarded for exceptional achievements at the discretion of league officials.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {/* RP Decay */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <BarChart sx={{ mr: 1, color: theme.palette.primary.main }} />
            RP Decay
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Source</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Decay Starts</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Full Decay</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rpDecay.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.source}</TableCell>
                    <TableCell>{row.decayStarts}</TableCell>
                    <TableCell>{row.fullDecay}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Global Leaderboard Tiers */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <Group sx={{ mr: 1, color: theme.palette.primary.main }} />
            Global Leaderboard Tiers
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Tier</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Rank Range</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboardTiers.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell><Chip label={row.tier} size="small" color={index === 0 ? 'primary' : 'default'} /></TableCell>
                    <TableCell>{row.rankRange}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
            Teams must compete in at least <strong>one ranked event or league week every 60 days</strong> to remain active.
          </Typography>
        </Grid>
      </Grid>

      {/* Example Team Breakdown */}
      <Box sx={{ mb: 6, p: 3, bgcolor: theme.palette.background.paper, borderRadius: 1, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          🧾 Example Team Breakdown
        </Typography>
        <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 'bold' }}>
          {exampleTeam.name}
        </Typography>
        <Box sx={{ pl: 2 }}>
          <Typography>• Event RP: <strong>{exampleTeam.eventRP}</strong></Typography>
          <Typography>• Franchise Weekly RP: <strong>{exampleTeam.franchiseWeeklyRP}</strong></Typography>
          <Typography>• Franchise Placement RP: <strong>{exampleTeam.franchisePlacementRP}</strong></Typography>
          <Typography>• Bonus RP: <strong>{exampleTeam.bonusRP}</strong></Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" component="div">
            Total: <strong>{exampleTeam.totalRP} RP</strong> → Global Rank <strong>#{exampleTeam.rank}</strong>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default GlobalRanking;
