Quiz TikTok Live
A real-time quiz system designed for TikTok Live Studio broadcasts. This project allows broadcasters to engage viewers with interactive questions, where viewers can submit answers (1-4) within a 45-second window. The system uses Node.js for the server, Socket.IO for real-time communication, and HTML/CSS for the client interface.
Features

Display a random question with four answer options.
Real-time answer submission from viewers.
45-second timer per question.
Display of results and correct answers after the timer ends.
Integration-ready for TikTok Live Studio broadcasts.

Prerequisites

Node.js (v20.x.x recommended, v22.x.x compatible)
TikTok Live Studio (requires a TikTok account with 1000+ followers for live streaming)
Internet connection for server and client communication
A web browser for viewers to access the quiz interface

Installation
1. Clone the Repository
git clone https://github.com/yourusername/quiz-tiktok-live.git
cd quiz-tiktok-live

2. Install Dependencies
Ensure you have a valid package.json file. If not, create one with:
npm init -y

Then install the required packages:
npm install express socket.io

3. Configure the Project

Ensure the following files are in place:
server.js: The Node.js server script.
public/index.html: The client interface.
public/style.css: Styling for the interface.
questions.json: Contains the quiz questions and answers.


Update questions.json with your own questions if needed.

4. Run the Server
Start the server by running:
node server.js

The server will be accessible at http://localhost:3000.
Usage
Starting a Quiz

Open a browser and navigate to http://localhost:3000 to view the quiz interface.
Start a new question by visiting http://localhost:3000/start (this can be triggered by the broadcaster).
Share the URL (http://localhost:3000 or your public IP address) with viewers during the TikTok live stream.

Viewer Interaction

Viewers can select an answer (1-4) by clicking the corresponding button on the interface.
Answers are submitted in real-time and tallied for 45 seconds.
Results, including the correct answer, are displayed after the timer expires.

TikTok Live Studio Integration

Install and open TikTok Live Studio on your computer.
Log in with a TikTok account that has 1000+ followers.
During the live stream, share the quiz URL with viewers via the chat or display the browser window using screen sharing.
Announce the results verbally or update viewers through the stream interface.

Configuration

Broadcaster Username: Edit server.js and update the broadcasterUsername variable with your TikTok username (e.g., "YourUsername").
Questions: Modify questions.json to add or edit questions and their options.

Troubleshooting

Empty package.json Error: Ensure package.json contains the required dependencies (see Installation). Run npm init -y and npm install if needed.
Server Not Running: Check that Node.js is installed and the port (3000) is not in use. Use netstat -a -n | find "3000" to check.
TikTok Live Issues: Verify your TikTok account eligibility and internet stability. Consider using OBS with TikTok’s RTMP key as an alternative.
Logs: Check the terminal output or Node.js logs for errors.

Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Contributions for adding TikTok API integration, enhancing the UI, or adding more features are welcome!
License
This project is licensed under the ISC License. See the LICENSE file for details (if added).
Contact
For support or questions, contact the project maintainer at [your-email@example.com] (replace with your email).
Acknowledgments

Built with Node.js, Express, and Socket.IO.
Designed for use with TikTok Live Studio.

