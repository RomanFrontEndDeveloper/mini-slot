# Mini Slot (PixiJS + TypeScript)

Test task implementation of a simple 5x3 slot machine using PixiJS and TypeScript.

## Features

- 5x3 slot grid
- Spin button
- Balance display
- Current bet display
- Win amount display
- Win line highlighting
- Scatter bonus highlighting
- Bonus notification
- Reel spin animation
- Game logic based on the provided JSON file
- Object-oriented architecture with separated game logic and rendering

## Tech Stack

- TypeScript
- PixiJS
- Vite

## Project Structure

```
src/
├── config/
│   └── game.json
├── controllers/
│   └── GameController.ts
├── core/
│   └── Game.ts
├── models/
│   └── GameModel.ts
├── services/
│   └── SpinService.ts
├── views/
│   ├── SlotGrid.ts
│   ├── SymbolView.ts
│   ├── SpinButton.ts
│   └── UI.ts
└── main.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mini-slot.git
```

Go to the project folder:

```bash
cd mini-slot
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Gameplay

Each press of the **SPIN** button loads the next predefined spin from `game.json`.

Implemented features:

- Balance update
- Bet deduction
- Win calculation
- Win amount display
- Winning symbols highlighting
- Scatter bonus highlighting
- BONUS notification
- Reel spin animation

## Notes

The project uses the predefined spin results from the provided JSON file exactly as required by the test task.
