# Daily_Planner

[![HTML](https://img.shields.io/badge/HTML-5-orange?style=flat&logo=html5&logoColor=white)](https://www.w3.org/TR/html52/)
![Bootstrap](https://img.shields.io/badge/bootstrap-5-blue?style=style=flat&logo=bootstrap&logoColor=white)
![jquery](https://img.shields.io/badge/jquery-5-orange?style=style=flat&logo=jquery&logoColor=orange)


## Table of Contents

- [Description](#description)
- [Features](#features)
- [User Acceptance Criteria](#user-acceptance)

# Description 



I created a dynamic daily planner using HTML, CSS, and JavaScript. The planner displays time blocks from 9 AM to 5 PM, allowing users to schedule events and tasks for each hour. The time blocks are color-coded to indicate whether an hour is in the past, present, or future.

To enhance user experience, I utilized the Day.js library to handle date and time operations. The current date is prominently displayed at the top of the page. Each time block consists of an hour indicator, a textarea for entering event details, and a save button with an icon.

Events are stored in the browser's local storage, ensuring that scheduled tasks persist even after a page refresh.

The code structure involves creating time blocks dynamically within a loop, with a function to handle the logic for each block. The save button click event manages the storage of user input, and a success message is displayed to confirm the addition of an appointment to local storage.

The overall design is clean and user-friendly, offering a practical and efficient tool for organizing daily activities.

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## User Acceptance Criteria

Create a code quiz that contains the following requirements:

* Display the current day at the top of the calendar when a user opens the planner.

* Present timeblocks for standard business hours when the user scrolls down.

* Color-code each timeblock based on past, present, and future when the timeblock * is viewed.

* Allow a user to enter an event when they click a timeblock.

* Save the event in local storage when the save button is clicked in that * timeblock.

* Persist events between refreshes of a page.

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./challenge/images/05-third-party-apis-homework-demo.gif)


## Repository Setup Instructions
### 1. Clone the Repository:
- git clone https://github.com/khubaibshah786/Daily_Planner

### 5. Deploy to GitHub Pages:
After completing my Daily Planner project, I deployed it to GitHub Pages for public access.

### Technologies Used
- HTML
- jQuery
- CSS

 ## Deployed application

 - Click here [Live Site](https://khubaibshah786.github.io/Daily_Planner).