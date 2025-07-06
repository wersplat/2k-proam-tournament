const fs = require('fs');
const path = require('path');

// Define all pages and their content
const pages = [
    {
        filename: 'index.html',
        title: 'The Association: Battle for $52K',
        page: 'index',
        content: `
            <section class="hero">
                <div class="container">
                    <h1>Welcome to The Association: Battle for $52K</h1>
                    <p>Compete against the best players in NBA 2K and prove your skills on the virtual court.</p>
                    <div class="cta-buttons">
                        <a href="#upcoming-tournaments" class="btn btn-primary">View Tournaments</a>
                        <a href="#how-it-works" class="btn btn-secondary">How It Works</a>
                    </div>
                </div>
            </section>
            
            <section id="upcoming-tournaments" class="section">
                <div class="container">
                    <h2>Upcoming Tournaments</h2>
                    <div class="tournaments-grid">
                        <div class="tournament-card">
                            <div class="tournament-header">
                                <h3>Summer Showdown</h3>
                                <span class="tournament-date">July 15, 2024</span>
                            </div>
                            <div class="tournament-details">
                                <div class="detail">
                                    <i class="fas fa-trophy"></i>
                                    <span>$5,000 Prize Pool</span>
                                </div>
                                <div class="detail">
                                    <i class="fas fa-users"></i>
                                    <span>32 Teams</span>
                                </div>
                                <div class="detail">
                                    <i class="fas fa-gamepad"></i>
                                    <span>PS5 / XSX / PC</span>
                                </div>
                            </div>
                            <a href="#register" class="btn btn-block">Register Now</a>
                        </div>
                        <!-- More tournament cards... -->
                    </div>
                </div>
            </section>
            
            <section id="how-it-works" class="section bg-light">
                <div class="container">
                    <h2>How It Works</h2>
                    <div class="features-grid">
                        <div class="feature">
                            <div class="feature-icon">
                                <i class="fas fa-user-plus"></i>
                            </div>
                            <h3>Register</h3>
                            <p>Create an account and register for upcoming tournaments.</p>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>Build Your Team</h3>
                            <p>Assemble your dream team within the salary cap.</p>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <h3>Compete</h3>
                            <p>Play against other teams and climb the leaderboards.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="register" class="section">
                <div class="container">
                    <h2>Register Now</h2>
                    <p>Join the 2K Pro-Am Tournament today and start your journey to becoming a champion!</p>
                    <div class="register-form">
                        <form>
                            <div class="form-group">
                                <label for="team-name">Team Name</label>
                                <input type="text" id="team-name" class="form-control" placeholder="Enter your team name" required>
                            </div>
                            <div class="form-group">
                                <label for="platform">Gaming Platform</label>
                                <select id="platform" class="form-control" required>
                                    <option value="">Select platform</option>
                                    <option value="ps5">PlayStation 5</option>
                                    <option value="xsx">Xbox Series X|S</option>
                                    <option value="pc">PC</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" class="form-control" placeholder="Enter your email" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit Registration</button>
                        </form>
                    </div>
                </div>
            </section>
            
            <section id="current" class="visually-hidden"></section>
            <section id="upcoming" class="visually-hidden"></section>
            <section id="past" class="visually-hidden"></section>
            <section id="contact" class="visually-hidden"></section>
        `
    },
    {
        filename: 'schedule.html',
        title: 'Tournament Schedule - The Association: Battle for $52K',
        page: 'schedule',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>Tournament Schedule</h1>
                    <p>Stay up to date with all upcoming tournaments and events.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="schedule-filters">
                        <button class="btn btn-outline active">All Tournaments</button>
                        <button class="btn btn-outline">Upcoming</button>
                        <button class="btn btn-outline">Ongoing</button>
                        <button class="btn btn-outline">Completed</button>
                    </div>
                    
                    <div class="schedule-list">
                        <!-- Schedule items will be populated here -->
                        <div class="schedule-item">
                            <div class="schedule-date">
                                <span class="month">JUL</span>
                                <span class="day">15</span>
                            </div>
                            <div class="schedule-details">
                                <h3>Summer Showdown</h3>
                                <div class="schedule-meta">
                                    <span><i class="far fa-clock"></i> 12:00 PM EST</span>
                                    <span><i class="fas fa-users"></i> 32 Teams</span>
                                    <span><i class="fas fa-trophy"></i> $5,000 Prize Pool</span>
                                </div>
                                <p>The biggest tournament of the summer featuring the best 2K players from around the world.</p>
                                <a href="#register" class="btn btn-sm">Register Now</a>
                            </div>
                        </div>
                        
                        <!-- More schedule items... -->
                    </div>
                </div>
            </section>
            
            <section id="register" class="section bg-light">
                <div class="container">
                    <h2>Register for Tournaments</h2>
                    <p>Fill out the form below to register for upcoming tournaments.</p>
                    <div class="register-form">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="team-name-schedule">Team Name</label>
                                    <input type="text" id="team-name-schedule" class="form-control" placeholder="Enter your team name" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="platform-schedule">Gaming Platform</label>
                                    <select id="platform-schedule" class="form-control" required>
                                        <option value="">Select platform</option>
                                        <option value="ps5">PlayStation 5</option>
                                        <option value="xsx">Xbox Series X|S</option>
                                        <option value="pc">PC</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email-schedule">Email Address</label>
                                <input type="email" id="email-schedule" class="form-control" placeholder="Enter your email" required>
                            </div>
                            <div class="form-group">
                                <label for="tournament-select">Select Tournament</label>
                                <select id="tournament-select" class="form-control" required>
                                    <option value="">Choose a tournament</option>
                                    <option value="summer-showdown">Summer Showdown - July 15, 2024</option>
                                    <option value="fall-classic">Fall Classic - September 10, 2024</option>
                                    <option value="winter-championship">Winter Championship - December 5, 2024</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit Registration</button>
                        </form>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="section">
                <div class="container">
                    <h2>Contact Us</h2>
                    <p>Have questions about the tournament schedule? Reach out to our support team.</p>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> schedule@2kproam.com</p>
                        <p><i class="fas fa-phone"></i> (555) 123-4567</p>
                        <p><i class="fas fa-clock"></i> Support Hours: Mon-Fri, 9AM-5PM EST</p>
                    </div>
                </div>
            </section>
        `
    },
    // Add more pages following the same structure
    {
        filename: 'global-ranking.html',
        title: 'Global Ranking - The Association: Battle for $52K',
        page: 'global-ranking',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>Global Rankings</h1>
                    <p>See where you stand against the best 2K players in the world.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="ranking-filters">
                        <div class="search-box">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Search players...">
                        </div>
                        <select class="form-select">
                            <option>All Platforms</option>
                            <option>PlayStation 5</option>
                            <option>Xbox Series X</option>
                            <option>PC</option>
                        </select>
                    </div>
                    
                    <div class="ranking-table-container">
                        <table class="ranking-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Player</th>
                                    <th>Team</th>
                                    <th>Wins</th>
                                    <th>Losses</th>
                                    <th>Win %</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="player-cell">
                                        <img src="https://via.placeholder.com/40" alt="Player" class="player-avatar">
                                        <span>DribbleKing23</span>
                                    </td>
                                    <td>Lakers</td>
                                    <td>42</td>
                                    <td>8</td>
                                    <td>84%</td>
                                    <td>1250</td>
                                </tr>
                                <!-- More ranking rows... -->
                            </tbody>
                        </table>
                        
                        <div class="ranking-notes">
                            <p><strong>Note:</strong> Rankings are updated in real-time. Last updated: <span id="last-updated">Just now</span></p>
                            <p>Points are calculated based on win/loss record, strength of schedule, and performance metrics.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="faq" class="section bg-light">
                <div class="container">
                    <h2>Rankings FAQ</h2>
                    <div class="faq-item">
                        <h3>How are the rankings calculated?</h3>
                        <p>Rankings are based on a combination of win/loss record, strength of schedule, and performance metrics. More weight is given to recent performance.</p>
                    </div>
                    <div class="faq-item">
                        <h3>How often are the rankings updated?</h3>
                        <p>Rankings are updated in real-time as game results are reported. The leaderboard refreshes automatically.</p>
                    </div>
                    <div class="faq-item">
                        <h3>How can I improve my ranking?</h3>
                        <p>Winning games against highly ranked opponents will improve your ranking the most. Consistent performance is also important.</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="section">
                <div class="container">
                    <h2>Rankings Support</h2>
                    <p>Questions about the ranking system or notice an issue? Contact our support team.</p>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> rankings@2kproam.com</p>
                        <p><i class="fas fa-phone"></i> (555) 123-7890</p>
                        <p><i class="fas fa-clock"></i> Support Hours: Mon-Fri, 10AM-6PM EST</p>
                    </div>
                </div>
            </section>
        `
    },
        {
        filename: 'the-association.html',
        title: 'The Association - Franchise League',
        page: 'the-association',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>Franchise League</h1>
                    <p>Manage your franchise and compete in the ultimate 2K Pro-Am experience.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="franchise-overview">
                        <div class="franchise-stats">
                            <div class="stat-card">
                                <h3>Season Progress</h3>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 45%"></div>
                                    <span>45% Complete</span>
                                </div>
                                <div class="stat-details">
                                    <div class="stat">
                                        <span class="stat-value">24</span>
                                        <span class="stat-label">Games Played</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">16-8</span>
                                        <span class="stat-label">Record</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">3rd</span>
                                        <span class="stat-label">In Division</span>
                                    </div>
                                </div>
                            </div>
                            <!-- More stat cards... -->
                        </div>
                        
                        <div class="franchise-updates">
                            <h2>Recent Activity</h2>
                            <div class="updates-list">
                                <div class="update">
                                    <div class="update-icon">
                                        <i class="fas fa-basketball-ball"></i>
                                    </div>
                                    <div class="update-content">
                                        <h4>Game Completed</h4>
                                        <p>Defeated Lakers 105-98</p>
                                        <span class="update-time">2 hours ago</span>
                                    </div>
                                </div>
                                <!-- More updates... -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="faq" class="section bg-light">
                <div class="container">
                    <h2>Franchise League FAQ</h2>
                    <div class="faq-item">
                        <h3>How do I join the Franchise League?</h3>
                        <p>You can join the Franchise League by creating a team and registering for the upcoming season through your dashboard.</p>
                    </div>
                    <div class="faq-item">
                        <h3>What are the season lengths?</h3>
                        <p>Each season runs for 8 weeks, with playoffs following for qualifying teams.</p>
                    </div>
                    <div class="faq-item">
                        <h3>Can I make roster changes during the season?</h3>
                        <p>Yes, you can make roster changes during designated trade and free agency periods throughout the season.</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="section">
                <div class="container">
                    <h2>Franchise League Support</h2>
                    <p>Need help with your franchise? Our support team is here to assist you.</p>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> franchise@2kproam.com</p>
                        <p><i class="fas fa-phone"></i> (555) 555-5678</p>
                        <p><i class="fas fa-clock"></i> Support Hours: Mon-Fri, 10AM-8PM EST</p>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'standings.html',
        title: 'League Standings - The Association',
        page: 'standings',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>League Standings</h1>
                    <p>Current season standings and team statistics.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="standings-filters">
                        <select class="form-select">
                            <option>Eastern Conference</option>
                            <option>Western Conference</option>
                        </select>
                        <select class="form-select">
                            <option>Atlantic</option>
                            <option>Central</option>
                            <option>Southeast</option>
                        </select>
                    </div>
                    
                    <div class="standings-table-container">
                        <table class="standings-table">
                            <thead>
                                <tr>
                                    <th>Team</th>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>PCT</th>
                                    <th>GB</th>
                                    <th>L10</th>
                                    <th>STRK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="team-cell">
                                        <img src="https://via.placeholder.com/30" alt="Team Logo" class="team-logo">
                                        <span>Boston Celtics</span>
                                    </td>
                                    <td>20</td>
                                    <td>4</td>
                                    <td>.833</td>
                                    <td>--</td>
                                    <td>9-1</td>
                                    <td>W5</td>
                                </tr>
                                <!-- More team rows... -->
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="standings-notes">
                        <p><strong>Note:</strong> Standings are updated daily. For the most current information, please check back regularly.</p>
                        <p>Tiebreakers: 1) Head-to-head record, 2) Division record, 3) Conference record, 4) Point differential</p>
                    </div>
                </div>
            </section>
            
            <section id="faq" class="section bg-light">
                <div class="container">
                    <h2>Standings FAQ</h2>
                    <div class="faq-item">
                        <h3>How often are standings updated?</h3>
                        <p>Standings are updated in real-time as game results are reported and verified by our league officials.</p>
                    </div>
                    <div class="faq-item">
                        <h3>What do the abbreviations mean?</h3>
                        <p>W: Wins, L: Losses, PCT: Winning Percentage, GB: Games Behind, L10: Last 10 Games, STRK: Current Streak</p>
                    </div>
                    <div class="faq-item">
                        <h3>How are tiebreakers determined?</h3>
                        <p>Tiebreakers are determined in this order: 1) Head-to-head record, 2) Division record, 3) Conference record, 4) Point differential</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="section">
                <div class="container">
                    <h2>Standings Questions?</h2>
                    <p>If you notice any discrepancies in the standings or have questions, please contact our league office.</p>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> standings@2kproam.com</p>
                        <p><i class="fas fa-phone"></i> (555) 555-1234</p>
                        <p><i class="fas fa-clock"></i> Support Hours: Mon-Fri, 9AM-5PM EST</p>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'player-tracker.html',
        title: 'Player Value Tracker - The Association',
        page: 'player-tracker',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>Player Value Tracker</h1>
                    <p>Track player values, performance, and statistics.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="player-filters">
                        <div class="search-box">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Search players...">
                        </div>
                        <select class="form-select">
                            <option>All Positions</option>
                            <option>PG</option>
                            <option>SG</option>
                            <option>SF</option>
                            <option>PF</option>
                            <option>C</option>
                        </select>
                        <select class="form-select">
                            <option>Sort by: Value</option>
                            <option>Sort by: Name</option>
                            <option>Sort by: Team</option>
                        </select>
                    </div>
                    
                    <div class="players-grid">
                        <div class="player-card">
                            <div class="player-header">
                                <img src="https://via.placeholder.com/80" alt="Player" class="player-image">
                                <div class="player-info">
                                    <h3>Luka Dončić</h3>
                                    <div class="player-meta">
                                        <span>DAL • PG/SG</span>
                                        <span class="player-rating">96 OVR</span>
                                    </div>
                                </div>
                            </div>
                            <div class="player-stats">
                                <div class="stat">
                                    <span class="stat-value">28.4</span>
                                    <span class="stat-label">PPG</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">9.1</span>
                                    <span class="stat-label">APG</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">8.7</span>
                                    <span class="stat-label">RPG</span>
                                </div>
                            </div>
                            <div class="player-value">
                                <span class="value-label">Current Value:</span>
                                <span class="value-amount">$45.2M</span>
                                <span class="value-change positive">+2.1%</span>
                            </div>
                        </div>
                        <!-- More player cards... -->
                    </div>
                </div>
            </section>
            
            <section id="faq" class="section bg-light">
                <div class="container">
                    <h2>Player Tracker FAQ</h2>
                    <div class="faq-item">
                        <h3>How often are player values updated?</h3>
                        <p>Player values are updated daily based on their recent performance and market trends in the 2K Pro-Am league.</p>
                    </div>
                    <div class="faq-item">
                        <h3>What factors affect a player's value?</h3>
                        <p>Player values are influenced by performance statistics, team success, injuries, and overall league trends.</p>
                    </div>
                    <div class="faq-item">
                        <h3>Can I track specific players?</h3>
                        <p>Yes, you can use the search and filter options to track specific players or groups of players.</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="section">
                <div class="container">
                    <h2>Need Help With Player Tracking?</h2>
                    <p>Our support team is here to help with any questions about player values or statistics.</p>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> tracker@2kproam.com</p>
                        <p><i class="fas fa-phone"></i> (555) 987-6543</p>
                        <p><i class="fas fa-clock"></i> Support Hours: Mon-Fri, 10AM-6PM EST</p>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'salary-structure.html',
        title: 'Salary Structure - The Association',
        page: 'salary-structure',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>Salary Structure</h1>
                    <p>Understand the salary cap and player contracts in the 2K Pro-Am league.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="salary-structure">
                        <div class="salary-info">
                            <h2>Salary Cap Rules</h2>
                            <p>The 2K Pro-Am league operates under a hard salary cap system. Each team must manage their roster to stay under the $150M salary cap.</p>
                            
                            <h3>Salary Tiers</h3>
                            <div class="tier-list">
                                <div class="tier">
                                    <span class="tier-name">Superstar</span>
                                    <span class="tier-range">$40M+</span>
                                </div>
                                <div class="tier">
                                    <span class="tier-name">All-Star</span>
                                    <span class="tier-range">$25M - $39.9M</span>
                                </div>
                                <div class="tier">
                                    <span class="tier-name">Starter</span>
                                    <span class="tier-range">$10M - $24.9M</span>
                                </div>
                                <div class="tier">
                                    <span class="tier-name">Role Player</span>
                                    <span class="tier-range">$5M - $9.9M</span>
                                </div>
                                <div class="tier">
                                    <span class="tier-name">Bench</span>
                                    <span class="tier-range">$1M - $4.9M</span>
                                </div>
                            </div>
                            
                            <h3>Contract Rules</h3>
                            <ul class="rules-list">
                                <li>Maximum contract length: 5 years</li>
                                <li>Player options allowed in final year</li>
                                <li>10% trade kicker maximum</li>
                                <li>No-trade clauses require league approval</li>
                            </ul>
                        </div>
                        
                        <div class="salary-calculator">
                            <h2>Salary Calculator</h2>
                            <div class="calculator-form">
                                <div class="form-group">
                                    <label>Current Salary Cap</label>
                                    <div class="form-control">$150,000,000</div>
                                </div>
                                <div class="form-group">
                                    <label>Current Team Salary</label>
                                    <div class="form-control">$142,750,000</div>
                                </div>
                                <div class="form-group">
                                    <label>Available Cap Space</label>
                                    <div class="form-control highlight">$7,250,000</div>
                                </div>
                                <button class="btn btn-block">View Full Roster</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'rules.html',
        title: 'The Association: Battle for $52K - Rules',
        page: 'rules',
        content: `
            <section class="page-header">
                <div class="container">
                    <h1>Tournament Rules</h1>
                    <p>Official rules and regulations for The Association: Battle for $52K.</p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="rules-container">
                        <div class="rules-sidebar">
                            <div class="rules-nav">
                                <h3>Table of Contents</h3>
                                <ul>
                                    <li><a href="#general-rules" class="active">General Rules</a></li>
                                    <li><a href="#gameplay-rules">Gameplay Rules</a></li>
                                    <li><a href="#roster-rules">Roster Rules</a></li>
                                    <li><a href="#schedule-rules">Schedule Rules</a></li>
                                    <li><a href="#code-of-conduct">Code of Conduct</a></li>
                                    <li><a href="#penalties">Penalties</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="rules-content">
                            <section id="general-rules" class="rules-section">
                                <h2>General Rules</h2>
                                <ol>
                                    <li>All participants must be at least 13 years of age.</li>
                                    <li>Players must maintain good sportsmanship at all times.</li>
                                    <li>No cheating, hacking, or exploiting game glitches will be tolerated.</li>
                                    <li>All decisions made by tournament administrators are final.</li>
                                    <li>Players must use their registered account for all tournament matches.</li>
                                    <li>Any disputes must be reported within 24 hours of match completion.</li>
                                </ol>
                            </section>
                            
                            <section id="gameplay-rules" class="rules-section">
                                <h2>Gameplay Rules</h2>
                                <h3>Game Settings</h3>
                                <ul>
                                    <li><strong>Game Mode:</strong> Pro-Am 5v5</li>
                                    <li><strong>Difficulty:</strong> Hall of Fame</li>
                                    <li><strong>Quarter Length:</strong> 6 minutes</li>
                                    <li><strong>Fatigue:</strong> On</li>
                                    <li><strong>Injuries:</strong> Off</li>
                                    <li><strong>Timeouts:</strong> 7 per team (4 full, 3 20-second)</li>
                                    <li><strong>Substitutions:</strong> Manual only</li>
                                </ul>
                                
                                <h3>Allowed/Disallowed Plays</h3>
                                <ul>
                                    <li>Fullcourt press is only allowed in the 4th quarter when trailing by 10+ points</li>
                                    <li>Zone defense is limited to 3 seconds in the key</li>
                                    <li>Intentional fouling to stop fast breaks is not allowed</li>
                                    <li>No 5-second back to the basket violation will be called</li>
                                    <li>No intentional fouling in the last 2 minutes of the game</li>
                                </ul>
                            </section>
                            
                            <section id="roster-rules" class="rules-section">
                                <h2>Roster Rules</h2>
                                <h3>Team Composition</h3>
                                <ul>
                                    <li>Each team must have a minimum of 5 players and a maximum of 10</li>
                                    <li>Teams must have at least 4 players to start a match</li>
                                    <li>Player substitutions are allowed between games in a series</li>
                                </ul>
                                
                                <h3>Player Eligibility</h3>
                                <ul>
                                    <li>Players may only be on one team per tournament</li>
                                    <li>All players must be registered on the team roster before playing</li>
                                    <li>No player may use another participant's account</li>
                                </ul>
                            </section>
                            
                            <section id="schedule-rules" class="rules-section">
                                <h2>Schedule Rules</h2>
                                <h3>Match Scheduling</h3>
                                <ul>
                                    <li>Matches must be played within the scheduled time window</li>
                                    <li>Teams have a 15-minute grace period before a forfeit is declared</li>
                                    <li>Rescheduling is only allowed with 24-hour notice and opponent approval</li>
                                    <li>Tournament admins must be notified of any schedule changes</li>
                                </ul>
                                
                                <h3>Match Reporting</h3>
                                <ul>
                                    <li>Winning team is responsible for reporting match results</li>
                                    <li>Screenshots of final score must be submitted as proof</li>
                                    <li>Disputes must be reported within 1 hour of match completion</li>
                                </ul>
                            </section>
                            
                            <section id="code-of-conduct" class="rules-section">
                                <h2>Code of Conduct</h2>
                                <p>All participants are expected to adhere to the following code of conduct:</p>
                                <ul>
                                    <li>Respect all players, officials, and spectators</li>
                                    <li>No harassment, hate speech, or discrimination will be tolerated</li>
                                    <li>No cheating or exploiting game mechanics</li>
                                    <li>No intentional disconnections or game manipulation</li>
                                    <li>Follow all instructions from tournament officials</li>
                                    <li>Maintain good sportsmanship at all times</li>
                                </ul>
                            </section>
                            
                            <section id="penalties" class="rules-section">
                                <h2>Penalties</h2>
                                <p>Violation of tournament rules may result in the following penalties:</p>
                                <ul>
                                    <li><strong>Warning:</strong> For minor first-time offenses</li>
                                    <li><strong>Game Forfeiture:</strong> For repeated or moderate violations</li>
                                    <li><strong>Tournament Disqualification:</strong> For serious or repeated violations</li>
                                    <li><strong>Season Ban:</strong> For severe violations or cheating</li>
                                    <li><strong>Permanent Ban:</strong> For extreme violations or repeated offenses</li>
                                </ul>
                                
                                <h3>Appeals Process</h3>
                                <p>Penalties may be appealed by submitting a formal appeal to the tournament committee within 48 hours of the penalty being issued. The committee's decision is final.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    {
        filename: 'handbook.html',
        title: 'Player Handbook - The Association: Battle for $52K',
        page: 'handbook',
        content: `
            <section class="handbook">
                <div class="container">
                    <h1>Player Handbook</h1>
                    <p>Everything you need to know about participating in The Association: Battle for $52K.</p>
                    
                    <div class="handbook-nav">
                        <h3>Table of Contents</h3>
                        <ul>
                            <li><a href="#welcome">Welcome</a></li>
                            <li><a href="#getting-started">Getting Started</a></li>
                            <li><a href="#tournament-structure">Tournament Structure</a></li>
                            <li><a href="#team-management">Team Management</a></li>
                            <li><a href="#player-development">Player Development</a></li>
                            <li><a href="#faq">Frequently Asked Questions</a></li>
                        </ul>
                    </div>
                    
                    <div class="handbook-content">
                        <section id="welcome">
                            <h2>Welcome to The Association</h2>
                            <p>Welcome to The Association: Battle for $52K! We're excited to have you join our competitive gaming community.</p>
                            <p>This handbook will guide you through everything you need to know to participate in and enjoy our tournaments.</p>
                            <p>Whether you're a seasoned pro or new to competitive 2K, we have something for everyone.</p>
                        </section>
                        
                        <section id="getting-started">
                            <h2>Getting Started</h2>
                            <p>Follow these steps to begin your journey in The Association:</p>
                            <ol>
                                <li>Create an account on our platform</li>
                                <li>Complete your player profile</li>
                                <li>Join or create a team</li>
                                <li>Register for upcoming tournaments</li>
                                <li>Familiarize yourself with the rules and schedule</li>
                            </ol>
                        </section>
                        
                        <section id="tournament-structure">
                            <h2>Tournament Structure</h2>
                            <p>Our tournaments are organized into several divisions based on skill level:</p>
                            <ul>
                                <li><strong>Rookie Division:</strong> For new players and those still learning the game</li>
                                <li><strong>Pro Division:</strong> For experienced players looking for competition</li>
                                <li><strong>Elite Division:</strong> For the most skilled competitors</li>
                            </ul>
                            <p>Each tournament consists of group stages followed by single-elimination playoffs.</p>
                        </section>
                        
                        <section id="team-management">
                            <h2>Team Management</h2>
                            <p>Effective team management is key to success in The Association:</p>
                            <ul>
                                <li>Recruit players that complement your playstyle</li>
                                <li>Develop team chemistry through regular practice</li>
                                <li>Assign roles and positions strategically</li>
                                <li>Analyze game footage to identify areas for improvement</li>
                            </ul>
                        </section>
                        
                        <section id="player-development">
                            <h2>Player Development</h2>
                            <p>Improve your skills with these development tips:</p>
                            <ul>
                                <li>Practice regularly in both MyCareer and Pro-Am modes</li>
                                <li>Focus on mastering your player's archetype</li>
                                <li>Watch and learn from top players</li>
                                <li>Experiment with different playstyles to find what works best for you</li>
                            </ul>
                        </section>
                        
                        <section id="faq">
                            <h2>Frequently Asked Questions</h2>
                            
                            <div class="faq-item">
                                <h3>How do I register for a tournament?</h3>
                                <p>You can register for tournaments through our website or mobile app. Navigate to the Tournaments section and follow the registration prompts.</p>
                            </div>
                            
                            <div class="faq-item">
                                <h3>What are the system requirements?</h3>
                                <p>You'll need a compatible gaming console or PC with the latest version of NBA 2K installed, along with a stable internet connection.</p>
                            </div>
                            
                            <div class="faq-item">
                                <h3>How are teams matched up in tournaments?</h3>
                                <p>Teams are matched based on skill level, win/loss record, and division placement to ensure fair competition.</p>
                            </div>
                            
                            <div class="faq-item">
                                <h3>What happens if there's a disconnection during a match?</h3>
                                <p>In case of disconnection, the game may be replayed if it occurs within the first quarter. Otherwise, the current score stands.</p>
                            </div>
                            
                            <div class="faq-item">
                                <h3>How do I report a problem or dispute?</h3>
                                <p>Use the support section of our website to submit a ticket with details of your issue. Include any relevant screenshots or video evidence.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        `
    }
];

// Read the base template
const baseTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'base.html'), 'utf8');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Generate each page
pages.forEach(page => {
    // Replace template variables
    let pageContent = baseTemplate
        .replace('{{ title }}', page.title)
        .replace('{{ page }}', page.page);
    
    // Insert page-specific content
    pageContent = pageContent.replace('{% block content %}{% endblock %}', page.content);
    
    // Write the file
    fs.writeFileSync(path.join(outputDir, page.filename), pageContent);
    console.log(`Generated: ${page.filename}`);
});

console.log('\nAll pages generated successfully!');
