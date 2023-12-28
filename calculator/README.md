# Simple Calculator

A basic calculator application built using vanilla JavaScript. The application allows users to perform standard arithmetic operations and displays the result.

## Features

- **Basic Arithmetic**: Perform addition, subtraction, multiplication, and division.
- **Dynamic Screen**: A display screen that shows the current number or result.
- **Interactive Buttons**: Clickable buttons for digits (0-9) and operations (+, -, ×, ÷, =, C, ←).
  
## Functions

### `handleClick(value)`
Detects if the clicked value is a number or a symbol and delegates to appropriate handler functions.

### `handleNumber(value)`
Manages number inputs and updates the display buffer.

### `handlesymbol(symbol)`
Handles utility and arithmetic symbols. Based on the symbol, it either updates the display buffer or initiates an arithmetic operation.

### `handleMath(value)`
Prepares the application for arithmetic operations. It either sets the running total or delegates to `flushOperation` to perform the math.

### `flushOperation(intBuffer)`
Executes the arithmetic operation based on the previous operator and updates the running total.

### `rerender()`
Updates the calculator's display screen with the current buffer's value.

### `init()`
Initializes the application by setting up event listeners for button clicks.

