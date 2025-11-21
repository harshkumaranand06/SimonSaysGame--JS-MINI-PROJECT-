# Simon Says Game

A classic memory game built with HTML, CSS, and JavaScript.

## Features
- **4 Colored Buttons**: Red, Green, Yellow, Purple.
- **Sound Effects**: Unique tones for each color and game over sounds.
- **Visual Feedback**: Buttons flash when pressed or activated by the game.
- **Score Tracking**: Tracks current level and high score.
- **Responsive Design**: Works on different screen sizes.

## How to Run Locally
1.  **Simply Open the File**: Navigate to the project folder and double-click `index.html` to open it in your default web browser.
2.  **VS Code Live Server**: If you are using VS Code, you can install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".

## How to Deploy on Vercel

### Option 1: Vercel CLI (Command Line)
1.  Open your terminal in this project directory.
2.  Run the following command:
    ```bash
    npx vercel
    ```
3.  Follow the prompts:
    -   **Set up and deploy?** `y`
    -   **Which scope?** (Select your account)
    -   **Link to existing project?** `n`
    -   **Project name?** (Press Enter for default or type a name)
    -   **In which directory?** (Press Enter for `./`)
    -   **Want to modify these settings?** `n` (No build settings needed for this static site)
4.  Wait for deployment to finish. It will give you a Production URL.

### Option 2: Vercel Dashboard (Web UI)
1.  Push this code to a GitHub repository.
2.  Go to [Vercel.com](https://vercel.com) and log in.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  Vercel will detect it's a static site. Click **"Deploy"**.
