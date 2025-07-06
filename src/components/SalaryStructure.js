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
  Paper,
  Container,
  useTheme
} from '@mui/material';
import { AttachMoney, Calculate, Update, SwapHoriz, Save } from '@mui/icons-material';

const SalaryStructure = () => {
  const theme = useTheme();

  const salaryTiers = [
    { tier: 'S', label: 'Superstar', salary: '$30', description: 'MVP-level production and leader impact' },
    { tier: 'A', label: 'All-Star', salary: '$20', description: 'Top stat producers, consistent play' },
    { tier: 'B', label: 'Starter', salary: '$15', description: 'Solid contributors, reliable starters' },
    { tier: 'C', label: 'Role Player', salary: '$10', description: 'Limited minutes, but positive impact' },
    { tier: 'D', label: 'Reserve', salary: '$5', description: 'Bench players or low minutes played' },
  ];

  const percentileRanges = [
    { range: 'Top 5%', tier: 'S' },
    { range: '6–20%', tier: 'A' },
    { range: '21–50%', tier: 'B' },
    { range: '51–80%', tier: 'C' },
    { range: '81–100%', tier: 'D' },
  ];

  const rosterExample = [
    { player: 'J. Smith', tier: 'S', salary: 30 },
    { player: 'T. Jackson', tier: 'A', salary: 20 },
    { player: 'C. Reyes', tier: 'B', salary: 15 },
    { player: 'D. Fields', tier: 'C', salary: 10 },
    { player: 'K. Moore', tier: 'D', salary: 5 },
    { player: 'A. Clark', tier: 'D', salary: 5 },
  ];

  const totalSalary = rosterExample.reduce((sum, player) => sum + player.salary, 0);
  const remainingCap = 100 - totalSalary;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        🏀 2K26 Franchise League – Salary Structure Model
      </Typography>

      {/* Overview */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <AttachMoney sx={{ mr: 1, color: theme.palette.primary.main }} />
          Overview
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, pl: 3 }}>
          Each team has a <strong>$100/month salary cap</strong> and a <strong>6-player active roster</strong>. Players are assigned monthly salaries based on in-game performance and tiered rankings.
        </Typography>
      </Box>

      {/* Salary Tiers */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <AttachMoney sx={{ mr: 1, color: theme.palette.primary.main }} />
          Salary Tiers
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 3, maxWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Tier</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Label</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salaryTiers.map((row) => (
                <TableRow key={row.tier}>
                  <TableCell sx={{ fontWeight: 'bold' }}>{row.tier}</TableCell>
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{row.salary}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
          Optional: Add a <strong>+ $5 "Player-Coach" bonus</strong> for players with dual roles.
        </Typography>
      </Box>

      {/* Monthly Stat Formula */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Calculate sx={{ mr: 1, color: theme.palette.primary.main }} />
          Monthly Stat Formula
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, pl: 3 }}>
          Each player earns a <strong>Performance Score (PS)</strong> based on box score stats:
        </Typography>
        <Box sx={{ 
          bgcolor: theme.palette.background.paper, 
          p: 3, 
          borderRadius: 1,
          mb: 3,
          borderLeft: `4px solid ${theme.palette.primary.main}`
        }}>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'monospace' }}>
            PS = PTS + REB + AST + STL + BLK – TO – PF
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 2, pl: 3 }}>
          All players are ranked by PS monthly and assigned a tier using these cutoffs:
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 400, mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Percentile</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Tier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {percentileRanges.map((row) => (
                <TableRow key={row.range}>
                  <TableCell>{row.range}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{row.tier}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Monthly Process */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Update sx={{ mr: 1, color: theme.palette.primary.main }} />
          Monthly Process
        </Typography>
        <Box component="ol" sx={{ pl: 6, '& li': { mb: 1 } }}>
          <li><strong>End of Month:</strong> Lock all stats and calculate PS for each player.</li>
          <li><strong>Tier Assignment:</strong> Assign players to salary tiers based on percentile rank.</li>
          <li><strong>Cap Enforcement:</strong> Teams must submit rosters under $100 cap for next month.</li>
          <li>
            <strong>Updates Published:</strong>
            <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
              <li>Google Sheet (master salary table)</li>
              <li>JSON & CSV exports</li>
              <li>Discord announcement embed</li>
            </Box>
          </li>
        </Box>
      </Box>

      {/* Trades, Retention, and Redraft Rules */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <SwapHoriz sx={{ mr: 1, color: theme.palette.primary.main }} />
          Trades, Retention, and Redraft Rules
        </Typography>
        <Box component="ul" sx={{ pl: 6, '& li': { mb: 1 } }}>
          <li><strong>Trades:</strong> Salary remains fixed; new team absorbs the current contract.</li>
          <li><strong>Redraft:</strong> All players re-enter pool with their most recent tier/salary.</li>
          <li><strong>Retention:</strong> Teams may <strong>keep up to 2 players</strong> each month. Salaries still count against the cap.</li>
        </Box>
      </Box>

      {/* Roster Example */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Save sx={{ mr: 1, color: theme.palette.primary.main }} />
          Roster Example
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 600, mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Player</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Tier</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rosterExample.map((player, index) => (
                <TableRow key={index}>
                  <TableCell>{player.player}</TableCell>
                  <TableCell>{player.tier}</TableCell>
                  <TableCell>${player.salary}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ '&:last-child td': { borderBottom: 0 } }}>
                <TableCell colSpan={2} sx={{ fontWeight: 'bold', textAlign: 'right' }}>Total:</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>${totalSalary}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body1" sx={{ pl: 3 }}>
          Remaining cap: <strong>${remainingCap}</strong> (usable for trades or call-ups)
        </Typography>
      </Box>
    </Container>
  );
};

export default SalaryStructure;
