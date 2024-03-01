# WellnessTrackingSystem

## Basic GitHub Command  which might be useful:

### Configure your username and email if it asks:

Configure your GitHub username and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

```


Note: Take the latest pull request from the master before push to the repository:

### Initialize & pushing to your dedicated name Custom branch:

```bash
# git status and git checkout are optional and do to check what you are pushing and adding a custom branch respectively.
# git pull must be taken if there is code existing in the branch where you are pushing

git init
git add .
git status                  
git commit -m "Initial commit"
git checkout -b <custom_name_of_your_branch>    
git remote add origin <repository_url>
git push -u origin <branch_name>
git pull <branch_name>

```


## Node.js Project Setup and Troubleshooting Guide

### Running a Node.js Project

To run your Node.js project, follow these steps:

1. **Install Dependencies:**
   Open a terminal or command prompt, navigate to the project directory, and run:

   ```bash
   npm install


2. ***Start the Application:***
   ```bash
   npm start

   
3. ***If the port is already in use:***
   ```bash
   PORT=4000 npm start
4.***Pay attention to security warnings during dependency installation:***
  ```bash
   npm audit fix
   ```







