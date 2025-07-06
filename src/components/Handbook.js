import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Paper,
  Divider,
  useTheme
} from '@mui/material';
import { EmojiEvents, SportsBasketball, Event, Public, Timeline, CalendarToday, ArrowForward, Star, Description } from '@mui/icons-material';

const Handbook = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "🏁 Introduction",
      icon: <SportsBasketball />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              What is The Association: Battle for $52K?
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 3 }}>
              The Association: Battle for $52K is a competitive NBA 2K ecosystem combining a league circuit with monthly Open Tournaments, special events, and a global championship. Designed to blend team management, competitive play, and community-driven content, the series offers multiple entry points for elite and aspiring teams alike.
            </Typography>

            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center', mt: 4 }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              Season Timeline Overview
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              The series runs from October 2025 through August 2026 and is structured into three main phases:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 3, '& li': { mb: 1 } }}>
              <li><strong>The Association (November–June):</strong> Monthly league play with playoffs in June.</li>
              <li><strong>Open Tournaments (Oct, Nov, Jan, Feb, Apr, May):</strong> Public competitions with prize pools and Series Points.</li>
              <li><strong>Championship Stage (June–August):</strong> Local LAN invitationals and the World Championship Finals.</li>
            </Box>

            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center', mt: 4 }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              Prize Structure & Event Types
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              The series offers a combined prize pool of <strong>$52,000</strong>, with winnings distributed across online events, local LANs, and the World Championship Finals. Event types include:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1.5 } }}>
              <li><strong>The Association Seasons:</strong> Salary-capped competition for 12 core franchises, with playoff qualification and rewards.</li>
              <li><strong>Monthly Open Tournaments:</strong> Public double-elimination brackets with cash prizes and franchise integration.</li>
              <li><strong>Special Events:</strong> March Madness (64-team bracket), Holiday Festival (fan-voted), and Local Invitationals (LANs).</li>
              <li><strong>World Championship Finals:</strong> Culminating global event featuring top teams from across the series.</li>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: "🏢 The Association (Season-Based)",
      icon: <EmojiEvents />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 2.1 The Association Overview */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.1 The Association Overview
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 3 }}>
              The Association is a closed-circuit, conference-based league featuring 12 founding teams (6 East, 6 West). It runs from November through June and offers structured monthly match play, stat tracking, salary cap management, and postseason qualification.
            </Typography>
          </Box>

          {/* 2.2 Entry Requirements & Team Structure */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.2 Entry Requirements & Team Structure
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 3, '& li': { mb: 1 } }}>
              <li><strong>Franchise Buy-In:</strong> $100 one-time entry fee</li>
              <li><strong>Team Size:</strong> 6-player roster</li>
              <li><strong>Coach Requirement:</strong> Each team must designate a coach (can be playing or non-playing)</li>
              <li><strong>No Monthly League Fees:</strong> One-time buy-in covers full season access</li>
            </Box>
          </Box>

          {/* 2.3 Monthly Salary Cap System */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.3 Monthly Salary Cap System
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Each team has a <strong>$100/month cap</strong> to build its 6-player roster. Players are assigned monthly salary values based on stats and performance. Teams can:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Retain</strong> players</li>
              <li><strong>Trade</strong> with other franchises</li>
              <li><strong>Redraft</strong> from the available player pool</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, mb: 2, fontStyle: 'italic' }}>
              Note: Playing coaches count toward the cap and roster. Non-playing coaches do not.
            </Typography>
          </Box>

          {/* 2.4 Match Format & Scheduling */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.4 Match Format & Scheduling
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>6 league games per month:</strong>
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>4 in-conference games (2 home, 2 away vs. 2 opponents)</li>
                  <li>2 out-of-conference games (1 each)</li>
                </Box>
              </li>
              <li>Matches scheduled across <strong>Mon–Thu over 3–4 weeks</strong></li>
              <li>Final week is reserved for <strong>makeups/flex play</strong></li>
            </Box>
          </Box>

          {/* 2.5 Roster Management */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.5 Roster Management: Retain, Trade, Redraft
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Roster updates allowed at the end of each month. Teams may:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Lock in top performers</li>
              <li>Enter trade agreements with other franchises</li>
              <li>Join the redraft pool to build new rosters</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, mb: 2, fontStyle: 'italic' }}>
              All changes must be finalized before the next season window begins.
            </Typography>
          </Box>

          {/* 2.6 Expansion Rules & Deadlines */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.6 Expansion Rules & Deadlines
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Expansion is allowed after each of the first five seasons (Oct–Feb). <strong>Minimum of 2 teams</strong> must enter together.
            </Typography>
            <Typography variant="subtitle2" sx={{ pl: 3, mb: 1, fontWeight: 'bold' }}>Expansion teams must:</Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Pay $100 franchise buy-in</li>
              <li>Submit a full 6-man roster</li>
              <li>Provide coach, branding, and logo assets</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, mb: 2, fontStyle: 'italic' }}>
              <strong>No expansion allowed after March Madness</strong>
            </Typography>
          </Box>

          {/* 2.7 Monthly Rewards & Open Tournament Access */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.7 Monthly Rewards & Open Tournament Access
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Top 2 teams (1 East, 1 West) each season earn:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Free entry</strong> into the next Monthly Open Tournament</li>
              <li>Selection based on W–L record and tiebreakers</li>
            </Box>
          </Box>

          {/* 2.8 League Playoffs & Championship Path */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.8 League Playoffs & Championship Path
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>June Playoffs:</strong> Top 8 teams across all standings qualify</li>
              <li>Format: Double elimination or hybrid bracket</li>
              <li>Winner secures automatic entry into the <strong>World Championship Finals</strong> in August</li>
            </Box>
          </Box>

          {/* 2.9 Tools & Infrastructure */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              2.9 Tools & Infrastructure (Discord, Sheets, OCR)
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Centralized management via:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Discord bot with OCR stat capture</li>
              <li>Google Sheets dashboards for standings, contracts, salary validation</li>
              <li>Draft board and trade tracker</li>
              <li>Weekly MVPs, stat leaderboards, and media drops</li>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: "🎯 Monthly Open Tournaments",
      icon: <Event />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 3.1 Open Event Format & Schedule */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              3.1 Open Event Format & Schedule
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              The Monthly Opens are public-entry tournaments held six times throughout the season:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 3, '& li': { mb: 1 } }}>
              <li><strong>Dates:</strong> October, November, January, February, April, May</li>
              <li><strong>Structure:</strong> 32 teams · Double elimination</li>
              <li><strong>Finals:</strong> Best-of-7 series</li>
              <li><strong>Entry Fee:</strong> $100 per team</li>
              <li><strong>Prize Pool:</strong> $2,000–$3,000 depending on the month</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, fontStyle: 'italic' }}>
              These events are ideal for non-franchise teams or for franchises looking to stay sharp between league games.
            </Typography>
          </Box>

          {/* 3.2 Entry Fees, Payouts & Free Entry Rules */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              3.2 Entry Fees, Payouts & Free Entry Rules
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Standard entry is <strong>$100/team per event</strong></li>
              <li>Top teams receive <strong>cash prizes</strong> split among finalists</li>
              <li>
                <strong>The Association Bonus</strong>:
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li><strong>Top 2 teams (1 East, 1 West)</strong> each month earn <strong>free entry</strong> into the next Monthly Open</li>
                  <li>Based on final standings and league tiebreakers</li>
                </Box>
              </li>
            </Box>
          </Box>

          {/* 3.3 Qualification from The Association */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              3.3 Qualification from The Association
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Performance in The Association directly impacts eligibility and access:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Strong league results unlock free Open slots</li>
              <li>Gives franchises dual incentives: league standing and Open success</li>
              <li>Reinforces season-long engagement and stat performance</li>
            </Box>
          </Box>

          {/* 3.4 Series Points & Rankings */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              3.4 Series Points & Rankings
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Each Monthly Open contributes to the global ranking system:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Points awarded based on bracket placement</li>
              <li>
                Influences:
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li><strong>World Championship seeding</strong></li>
                  <li><strong>Auto-invites to special events</strong></li>
                  <li><strong>Player MVP and Stat Leader honors</strong></li>
                </Box>
              </li>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: "🎄 Special Events",
      icon: <Star />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 4.1 December Holiday Festival */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              4.1 December Holiday Festival
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              A mid-season community celebration featuring unique formats and fan engagement:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Dates:</strong> December 13–15 or 20–22</li>
              <li><strong>Format:</strong> Fan-voted rules and themes</li>
              <li><strong>Prize Pool:</strong> $5,000</li>
              <li>
                <strong>Highlights:</strong>
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>All-Star lineups</li>
                  <li>Fun or surprise challenges</li>
                  <li>Unique gameplay modifiers</li>
                </Box>
              </li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, fontStyle: 'italic' }}>
              Community votes on rules, teams, or formats in advance
            </Typography>
          </Box>

          {/* 4.2 March Madness: NCAA-Style Bracket */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              4.2 March Madness: NCAA-Style Bracket
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              A single-elimination bracket modeled after the NCAA tournament, open to all competitors:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 3, '& li': { mb: 1 } }}>
              <li><strong>Dates:</strong> March 7–30</li>
              <li><strong>Teams:</strong> 64</li>
              <li><strong>Format:</strong> Single elimination</li>
              <li><strong>Entry Fee:</strong> $50/team</li>
              <li><strong>Prize Pool:</strong> $5,000</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, mb: 2 }}>
              Each round advances weekly, culminating in high-stakes Finals. Ideal stage for breakout squads and Cinderella stories.
            </Typography>
          </Box>

          {/* 4.3 June & July Local Invitationals (LANs) */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              4.3 June & July Local Invitationals (LANs)
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              In-person showcase events for elite performers and top-ranked teams:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>East Coast Invitational:</strong> June 7–8 (NYC or Miami)</li>
              <li><strong>West Coast Invitational:</strong> July 12–13 (LA or Denver)</li>
              <li><strong>Teams:</strong> 8 invited per region</li>
              <li><strong>Entry Fee:</strong> $250/team</li>
              <li><strong>Prize Pool:</strong> $5,000 per LAN</li>
            </Box>
            <Typography variant="subtitle2" sx={{ pl: 3, mb: 1, fontWeight: 'bold' }}>Features:</Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Real-life gameplay</li>
              <li>Streamed matchups</li>
              <li>Local media + sponsor activation</li>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: "🌍 World Championship Finals",
      icon: <Public />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 5.1 August World Finals Format */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              5.1 August World Finals Format
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              The Unified Pro-Am: 2K26 World Championship Finals is the culmination of the entire series, bringing together top-performing teams from every circuit:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Dates:</strong> August 15–17</li>
              <li>
                <strong>Structure:</strong>
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li><strong>32-Team Double Elimination</strong> (remote play)</li>
                  <li><strong>Final 4</strong> advance to <strong>LAN Championship</strong></li>
                </Box>
              </li>
              <li><strong>Entry Fee:</strong> $500/team</li>
              <li><strong>Format:</strong> Best-of series, increasing in intensity each round</li>
            </Box>
          </Box>

          {/* 5.2 Qualification Paths */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              5.2 Qualification Paths
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Teams can qualify for the World Finals through multiple channels:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>The Association Champion</strong> (June playoffs winner)</li>
              <li><strong>Top teams from Monthly Opens</strong> (based on Series Points)</li>
              <li><strong>LAN Invitational Winners</strong> (East + West)</li>
              <li><strong>Global Rankings:</strong> Top Series Points leaders earn remaining slots</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, mb: 2, fontStyle: 'italic' }}>
              This ensures that franchise loyalty, Open consistency, and LAN excellence are all rewarded with championship access.
            </Typography>
          </Box>

          {/* 5.3 Prize Pool, Structure, and Seeding System */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              5.3 Prize Pool, Structure, and Seeding System
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Total Prize Pool:</strong> $15,000</li>
              <li>
                <strong>Seeding:</strong> Determined by cumulative Series Points across:
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>Monthly Opens</li>
                  <li>The Association performance</li>
                  <li>March Madness</li>
                  <li>LAN Invitationals</li>
                </Box>
              </li>
              <li><strong>Remote Rounds:</strong> Played online through organized lobbies</li>
              <li><strong>LAN Final Four:</strong> High-stakes in-person showdown</li>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, fontStyle: 'italic' }}>
              This final stage crowns the Unified Pro-Am World Champion and closes out the 2K26 Series with a global spotlight.
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      title: "📊 Rankings, Awards, and Media",
      icon: <Timeline />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 6.1 Global Ranking System & Series Points */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              6.1 Global Ranking System & Series Points
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              The Unified Pro-Am Series uses a centralized ranking system to track performance across all major events:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>
                <strong>Points awarded</strong> for bracket placement in:
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>Monthly Opens</li>
                  <li>The Association Seasons</li>
                  <li>March Madness</li>
                  <li>LAN Invitationals</li>
                </Box>
              </li>
              <li>
                <strong>Series Points</strong> determine:
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>World Finals seeding</li>
                  <li>Auto-invites to March Madness and LANs</li>
                  <li>MVP and Stat Leader recognition</li>
                </Box>
              </li>
              <li>Rankings are updated weekly and published publicly</li>
            </Box>
          </Box>

          {/* 6.2 MVP, Stat Leader, and Media Coverage */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              6.2 MVP, Stat Leader, and Media Coverage
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              Top individual and team performers are recognized throughout the season:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Monthly MVPs</strong> selected based on stats and impact</li>
              <li><strong>Stat Leaders</strong> for PPG, APG, RPG, SPG, BPG, and more</li>
              <li>
                <strong>Highlights and Features:</strong>
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>Weekly social media graphics</li>
                  <li>"Player of the Week" shoutouts</li>
                  <li>Team Power Rankings and narrative recaps</li>
                </Box>
              </li>
            </Box>
          </Box>

          {/* 6.3 Branding, Streaming, and Community Highlights */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              6.3 Branding, Streaming, and Community Highlights
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              The series prioritizes visibility, brand integration, and media storytelling:
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Branded Overlays</strong> for all streamed games</li>
              <li><strong>Highlight Packages</strong> delivered weekly</li>
              <li><strong>Discord Hub</strong> for real-time updates and announcements</li>
              <li>
                <strong>Content Support:</strong>
                <Box component="ul" sx={{ pl: 4, mt: 1, '& li': { mb: 1 } }}>
                  <li>Match graphics, stat templates, and MVP posts</li>
                  <li>Franchise branding kits (logos, overlays, jersey mockups)</li>
                </Box>
              </li>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: "📅 Full Season Schedule",
      icon: <CalendarToday />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 7.1 Master Monthly Schedule */}
          <Box sx={{ mb: 4, overflowX: 'auto' }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              7.1 Master Monthly Schedule (League + Tournaments)
            </Typography>
            
            <Box component="div" sx={{ overflowX: 'auto', maxWidth: '100%', mb: 3 }}>
              <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '1rem' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Month</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Franchise Season</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>League Play</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Expansion Window</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Open Tournament</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['**October**', 'Franchise Season 1', 'Oct 7–31', '—', 'Oct 3–5 – **October Open**', 'Preseason Oct 1–6. No expansion allowed yet.'],
                    ['**November**', 'Franchise Season 2', 'Nov 1–30', 'Oct 31–Nov 2', 'Nov 14–16 – **November Open**', 'S1 Top 2 get free entry. Minimum 2-team expansion allowed.'],
                    ['**December**', 'Franchise Season 3', 'Dec 2–20', 'Nov 30–Dec 1', 'Dec 13–15 – **Holiday Festival**', 'S2 Top 2 get free entry. Condensed season due to holidays.'],
                    ['**January**', 'Franchise Season 4', 'Jan 6–31', 'Jan 1–5', 'Jan 9–11 – **January Open**', 'S3 Top 2 get free entry. Full season resumes.'],
                    ['**February**', 'Franchise Season 5', 'Feb 3–28', 'Feb 1–2', 'Feb 13–15 – **February Open**', 'S4 Top 2 get free entry. Final expansion window.'],
                    ['**March**', 'Franchise Season 6', 'Mar 3–28', '❌ No Expansion', 'Mar 28–30 – **March Madness**', 'S5 Top 2 get free entry. League locks after this season.'],
                    ['**April**', '—', '—', '—', 'Apr 10–12 – **April Open**', 'S6 Top 2 get free entry. Open format for all teams.'],
                    ['**May**', '—', '—', '—', 'May 15–17 – **May Open**', 'Final online open tournament.'],
                    ['**June**', 'Franchise Playoffs', 'Jun 2–6 (Top 8)', '—', 'Jun 12–14 – **East Coast LAN**', 'Franchise Champion qualifies for Summer Championships.'],
                    ['**July**', '—', '—', '—', 'Jul 10–12 – **West Coast LAN**', 'Final LAN qualifier.'],
                    ['**August**', '—', '—', '—', 'Aug 14–17 – **Summer Championships**', 'Invite-only: Franchise Champ + Open + LAN winners.']
                  ].map((row, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? theme.palette.background.paper : theme.palette.action.hover }}>
                      {row.map((cell, cellIndex) => (
                        <td 
                          key={cellIndex} 
                          style={{ 
                            border: '1px solid #ddd', 
                            padding: '8px',
                            '& strong': { fontWeight: 'bold' }
                          }}
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>

            {/* 7.2 Match Windows and Deadlines */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
                7.2 Match Windows, Flex Weeks, and Deadlines
              </Typography>
              <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
                <li><strong>League Matches:</strong> Played Monday–Thursday each week</li>
                <li><strong>Suggested Pacing:</strong> 2 games per week per team</li>
                <li><strong>Flex Week:</strong> Final week of each month is reserved for makeup games or reschedules</li>
                <li><strong>Roster Deadlines:</strong> Final roster submissions due before the first game of each month</li>
                <li><strong>Expansion Submissions:</strong> Accepted only during official windows (after S1–S5)</li>
              </Box>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: "📎 Appendices",
      icon: <Description />,
      content: (
        <Box sx={{ mt: 2, lineHeight: 1.7 }}>
          {/* 8.1 Glossary of Terms */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              8.1 Glossary of Terms
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Franchise:</strong> A team that has paid the one-time buy-in to participate in the full league season.</li>
              <li><strong>Open Tournament:</strong> Monthly double-elimination events open to the public.</li>
              <li><strong>Salary Cap:</strong> Budget limit ($100/month) used by franchises to build 6-player rosters.</li>
              <li><strong>Redraft:</strong> The process where teams rebuild their rosters from a shared player pool.</li>
              <li><strong>Series Points:</strong> Ranking points earned through event performance, used for seeding and invites.</li>
              <li><strong>LAN Invitational:</strong> In-person showcase tournament held in major cities like NYC, LA, or Miami.</li>
            </Box>
          </Box>

          {/* 8.2 Tiebreaker Rules */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              8.2 Tiebreaker Rules
            </Typography>
            <Typography variant="body1" sx={{ pl: 3, mb: 2 }}>
              When teams are tied in standings or playoff contention, the following tiebreakers apply in order:
            </Typography>
            <Box component="ol" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li>Head-to-head record</li>
              <li>Total point differential</li>
              <li>Strength of schedule (based on opponent win %)</li>
              <li>Coin flip or admin decision (if all else is equal)</li>
            </Box>
          </Box>

          {/* 8.3 Example Salary Structures */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              8.3 Example Salary Structures
            </Typography>
            <Box sx={{ overflowX: 'auto', mb: 3, border: '1px solid #ddd', borderRadius: 1, p: 1 }}>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Player Name</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Stat Rating</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Assigned Value</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: theme.palette.primary.main, color: 'white' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Top Scorer', '95', '$30', 'High usage, MVP tier'],
                    ['Role Defender', '80', '$15', 'Balanced with versatility'],
                    ['Bench Utility', '70', '$5', 'Value pick, situational play']
                  ].map((row, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? theme.palette.background.paper : theme.palette.action.hover }}>
                      {row.map((cell, cellIndex) => (
                        <td 
                          key={cellIndex} 
                          style={{ 
                            border: '1px solid #ddd', 
                            padding: '8px'
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Typography variant="body2" sx={{ pl: 3, fontStyle: 'italic', mb: 3 }}>
              Salary values are re-evaluated monthly using automated stat metrics and admin review.
            </Typography>
          </Box>

          {/* 8.4 Contact + Support Info */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ArrowForward sx={{ fontSize: '1.2rem', mr: 1, color: theme.palette.primary.main }} />
              8.4 Contact + Support Info
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 2, '& li': { mb: 1 } }}>
              <li><strong>Discord Server:</strong> <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Join here</a></li>
              <li><strong>League Admin Email:</strong> <a href="mailto:support@theassociation.gg" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>support@theassociation.gg</a></li>
              <li><strong>Media & Branding:</strong> <a href="mailto:media@theassociation.gg" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>media@theassociation.gg</a></li>
              <li><strong>Reporting Issues or Violations:</strong> DM @Commissioner or submit via the Discord support channel</li>
              <li><strong>Official Docs:</strong> Updated handbook, standings, and stat dashboards available via the league portal</li>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 'bold', color: theme.palette.text.secondary }}>
            End of Handbook
          </Typography>
        </Box>
      )
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          mb: 4,
          color: theme.palette.primary.main,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
      >
        The Association: Battle for $52K
      </Typography>
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom 
        sx={{ 
          color: theme.palette.text.secondary,
          textAlign: 'center',
          mb: 6
        }}
      >
        Official Handbook & Rules
      </Typography>

      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {sections.map((section, sectionIndex) => (
          <Paper 
            key={sectionIndex} 
            elevation={3} 
            sx={{ 
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: theme.palette.background.paper,
              '&:hover': {
                boxShadow: theme.shadows[6]
              },
              transition: 'box-shadow 0.3s ease-in-out'
            }}
          >
            <Box 
              sx={{ 
                bgcolor: theme.palette.primary.main, 
                color: 'white',
                p: 2,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box sx={{ mr: 1 }}>{section.icon}</Box>
              <Typography variant="h6" component="h3">
                {section.title}
              </Typography>
            </Box>
            {section.content || (
              <List dense disablePadding>
                {section.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <ListItem sx={{ py: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: theme.palette.primary.main,
                            opacity: 0.7
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{
                          variant: 'body1',
                          sx: {
                            '&:hover': {
                              color: theme.palette.primary.main,
                              cursor: 'pointer'
                            },
                            transition: 'color 0.2s',
                            fontWeight: 500
                          }
                        }}
                      />
                    </ListItem>
                    {itemIndex < section.items.length - 1 && (
                      <Divider component="li" variant="inset" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            )}
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Handbook;
