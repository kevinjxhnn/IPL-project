# IPL Data Analysis Project

## Introduction

This repository is created for an IPL (Indian Premier League) data assignment. The goal of this project is to transform raw IPL data and calculate various statistics as specified in the project requirements.

## Data Files

The project uses two data files:

1. `deliveries.csv` - Contains data about the deliveries bowled in IPL matches.
2. `matches.csv` - Contains data about IPL match details.

## Project Tasks

The project involves implementing several functions to calculate the following statistics:

1. Number of matches played per year for all the years in IPL.
2. Number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016.
4. Top 10 economical bowlers in the year 2015.
5. Find the number of times each team won the toss and also won the match.
6. Find a player who has won the highest number of Player of the Match awards for each season.
7. Find the strike rate of a batsman for each season.
8. Find the highest number of times one player has been dismissed by another player.
9. Find the bowler with the best economy in super overs.

The results of these functions will be stored in JSON files in the `output` folder.

## Project Structure

The project structure is organized as follows:

- `src/`: The main source directory.
  - `server/`: Contains JavaScript files for implementing the functions.
    - `1-matches-per-year.js`: Calculates the number of matches played per year.
    - `2-matches-won-per-team-per-year.js`: Computes the number of matches won per team per year.
    - ... (and other function implementation files)
  - `public/`: The public directory for output files.
    - `output/`: Stores JSON files with calculated statistics.
      - `matchesPerYear.json`: Contains the number of matches played per year.
      - ... (and other JSON files)
- `data/`: Contains the input data files `matches.csv` and `deliveries.csv`.
- `package.json`: Specifies project dependencies.
- `index.js`: The file to run to write the output in json format into output folder.
- `package-lock.json`: Lock file for dependency versions.
- `.gitignore`: Excludes unnecessary files from version control.

## Running the Project

To run the IPL Data Analysis Project, follow these steps:

1. Clone the project repository from GitHub:

   ```bash
   git clone https://github.com/kevinjxhnn/IPL-project.git
  ```

2. Change your working directory to the project folder:
 ```bash
   cd IPL-project
  ```

3. Install project dependencies using npm:

  ```bash
  npm install
  ```

4. After installing the dependencies, you can run the project to calculate the IPL statistics by executing the index.js file using Node.js:
  ```bash
  node index.js
  ```

5. Once the project is run, the calculated statistics will be stored in JSON files inside the public/output folder. You can access the results in these JSON files.

