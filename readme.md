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
- `package-lock.json`: Lock file for dependency versions.
- `.gitignore`: Excludes unnecessary files from version control.

## Adding Web App Functionality

To add the web app functionality, follow these instructions:

1. Create a new branch called `webapp` in your previously created IPL Project repository.
2. Use a static webserver to serve your output JSON files. You can use a tool like `http-server` or Python's `http.server`. For example, to use Python's simple server, navigate to your `public/output` directory and run `python -m http.server` to serve your JSON files.
3. Build a simple client web app that makes an HTTP GET request to get the JSON file and display the data as a visualization. You can use the Highcharts library to create visualizations. Highcharts is a popular JavaScript charting library that allows you to create interactive charts.
4. The visualization should be done using Highcharts. You can include the Highcharts library in your web app by adding it to your HTML file using a `<script>` tag.
5. Use JavaScript to make an HTTP GET request to fetch the JSON data, and then use Highcharts to create the desired visualizations based on the fetched data.
6. You can run the index.html code in the public folder to run the webapp.

With these steps, you'll have a web app that serves and visualizes the calculated IPL data using Highcharts.



