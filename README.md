# Passenger Counter App

A simple JavaScript practice project that tracks passenger counts with the ability to increment and save entries.

## Overview

This is a beginner-friendly counter application designed to track the number of people entering a space (like a train or bus). It demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, and variable management.

## Features

- **Increment Button**: Click to increase the passenger count by 1
- **Save Button**: Save the current count and reset the counter to 0
- **Previous Entries**: Displays a history of all saved entries
- **Visual Display**: Large, easy-to-read count display with a themed background

## How It Works

1. **Increment**: Click the `INCREMENT` button to add 1 to the current count
2. **Save**: Click the `SAVE` button to:
   - Store the current count in the previous entries list
   - Reset the counter to 0
   - Prepare for the next count

## Technical Stack

- **HTML**: Semantic structure with buttons and display elements
- **CSS**: Styled with a train-themed background and responsive button styling
- **JavaScript (Vanilla)**: DOM manipulation and event handling

## File Structure

```
├── index.html       # HTML markup for the UI
├── index.css        # Styling for the counter app
├── index.js         # JavaScript functionality
├── README.md        # Project documentation
└── oldtrain.jpg     # Background image
```

## Key JavaScript Concepts Demonstrated

- DOM element selection with `getElementById()`
- Event handling with `onclick` attributes
- Variable management (`count` tracking)
- Dynamic text content updates with `textContent`
- String concatenation for building entry history

## How to Run

1. Open `index.html` in your web browser
2. Start clicking the `INCREMENT` button to count passengers
3. Click `SAVE` to record your count and start a new count
4. View your previous entries below the buttons

## Learning Outcomes

This project is great for practicing:
- Basic HTML structure and forms
- CSS styling and layout
- DOM manipulation with vanilla JavaScript
- Event-driven programming
- Simple state management with variables

---

**Status**: Personal JavaScript practice project  
**Level**: Beginner-friendly
