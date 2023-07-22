# website-revamp
** Repository for all files relating to the Website Revamp project (2023) **
### Setup Instructions
1. Create a virtual environment. On Mac, that would be `python3 -m venv venv`. To activate this virtual environment, `cd venv` and run `source bin/activate`. Please `cd ..` out of the venv directory to install the necessary packages.
2. Open two terminals. In the first terminal, to set up the server, run `cd server`. In both the parent directory and server terminal, run `npm install`. Note, there might be other requirements to `npm install`. If that doesn't work, try `npm install --legacy-peer-deps`.
3. Create a `.env` file in the server directory using the contents posted by Arielle in the #website-revamp channel on Slack. It is a pinned message. Be sure to add the .env file to .gitignore in the server directory.
4. In the project directory terminal run `npm start` and then in the server terminal run `node server.js` to start up the react app.
### Need Help?
Arielle: Let me know if you run into any issues. If it runs and it's just broken I might just be working on something and haven't patched a bug yet.
