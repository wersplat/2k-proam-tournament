import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Tabs, 
  Tab, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  SportsBasketball,
  EmojiEvents,
  Group,
  Schedule,
  Gavel,
  AttachMoney,
  SwapHoriz,
  PersonAdd,
  PersonRemove,
  Score,
  Security,
  SportsEsports,
  Help
} from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`rules-tabpanel-${index}`}
      aria-labelledby={`rules-tab-${index}`}
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
    id: `rules-tab-${index}`,
    'aria-controls': `rules-tabpanel-${index}`,
  };
}

const Rules = () => {
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ruleSections = [
    {
      title: 'League Format',
      icon: <SportsBasketball />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Schedule color="primary" sx={{ mr: 1 }} />
            Season Structure
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><Schedule color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Regular Season: November 2025 - June 2026"
                secondary="6-month season with monthly matchups"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><EmojiEvents color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Playoffs: July 2026"
                secondary="Top 4 teams from each conference advance"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Group color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Team Composition"
                secondary="6 players per team (5 starters, 1 bench)"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
            <Score color="primary" sx={{ mr: 1 }} />
            Game Rules
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Game Length: 4 quarters (6 minutes each)"
                secondary="24-minute total game time"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Difficulty: Hall of Fame"
                secondary="For consistent competition"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Injuries: Off"
                secondary="To ensure fair play"
              />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'Player Contracts',
      icon: <AttachMoney />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <AttachMoney color="primary" sx={{ mr: 1 }} />
            Salary Cap System
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="$100 Monthly Salary Cap"
                secondary="Per team per month"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Player Values"
                secondary="Based on performance and demand (updated monthly)"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Minimum Contract: $5"
                secondary="For developing players"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
            <SwapHoriz color="primary" sx={{ mr: 1 }} />
            Trades & Free Agency
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><SwapHoriz color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Trade Window"
                secondary="Open from the 1st to the 25th of each month"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><PersonAdd color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Free Agency"
                secondary="Unattached players can be signed at any time"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><PersonRemove color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Waivers"
                secondary="24-hour waiver period for dropped players"
              />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'Code of Conduct',
      icon: <Gavel />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Security color="primary" sx={{ mr: 1 }} />
            Sportsmanship
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Respect All Players"
                secondary="No trash talking, harassment, or unsportsmanlike conduct"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Fair Play"
                secondary="No exploits, glitches, or intentional disconnects"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Timely Play"
                secondary="Be punctual for scheduled matches"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
            <Gavel color="primary" sx={{ mr: 1 }} />
            Violations & Penalties
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="First Offense"
                secondary="Warning and possible suspension for 1 game"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Second Offense"
                secondary="Suspension for 3 games and salary cap penalty"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Third Offense"
                secondary="Possible removal from the league"
              />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'FAQ',
      icon: <Help />,
      content: (
        <Box>
          {[
            {
              question: "How do I join a team?",
              answer: "Register through our website and attend one of our monthly tryouts. Teams looking for players will be scouting new talent."
            },
            {
              question: "When are games played?",
              answer: "Games are scheduled on weekends, with weeknight options available. Each team will play 6 games per month."
            },
            {
              question: "How are player values determined?",
              answer: "Player values are based on performance metrics, playing time, and team success. Values are adjusted monthly."
            },
            {
              question: "What happens if I can't make a scheduled game?",
              answer: "Teams are responsible for fielding a full roster. If you can't make a game, notify your team captain in advance."
            },
            {
              question: "How are disputes resolved?",
              answer: "All disputes should be submitted to the league office within 24 hours with video evidence if available."
            }
          ].map((faq, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `faq${index}`} 
              onChange={handleAccordionChange(`faq${index}`)}
              sx={{ mb: 1 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq${index}-content`}
                id={`faq${index}-header`}
              >
                <Typography sx={{ fontWeight: 'medium' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          <Gavel sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
          League Rules & Policies
        </Typography>
        <Typography variant="h6" color="text.secondary">
          2025-2026 Season • Last Updated: {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="rules tabs"
          sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}
        >
          {ruleSections.map((section, index) => (
            <Tab 
              key={index} 
              label={section.title} 
              icon={React.cloneElement(section.icon, { sx: { mb: 0.5 } })}
              iconPosition="start"
              {...a11yProps(index)} 
              sx={{ minHeight: 64 }}
            />
          ))}
        </Tabs>

        {ruleSections.map((section, index) => (
          <TabPanel key={index} value={value} index={index}>
            {section.content}
          </TabPanel>
        ))}
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <SportsEsports />
                </Avatar>
              }
              title="Need Help?"
              subheader="Contact our support team"
            />
            <CardContent>
              <Typography variant="body1" paragraph>
                If you have any questions about the rules or need clarification, please don't hesitate to reach out to our support team.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Chip 
                  label="Email: support@2kproamleague.com" 
                  component="a" 
                  href="mailto:support@2kproamleague.com"
                  clickable
                  sx={{ mr: 1, mb: 1 }}
                />
                <Chip 
                  label="Discord" 
                  component="a" 
                  href="https://discord.gg/2kproam"
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                  color="primary"
                  sx={{ mr: 1, mb: 1 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <EmojiEvents />
                </Avatar>
              }
              title="Championship Prizes"
              subheader="Season 2025-2026"
            />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon><EmojiEvents color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="1st Place"
                    secondary="$2,000 + Championship Rings"
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><EmojiEvents color="action" /></ListItemIcon>
                  <ListItemText 
                    primary="2nd Place"
                    secondary="$1,000"
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><EmojiEvents sx={{ color: '#cd7f32' }} /></ListItemIcon>
                  <ListItemText 
                    primary="3rd Place"
                    secondary="$500"
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><SportsBasketball color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Regular Season MVP"
                    secondary="$250"
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rules;
