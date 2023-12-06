
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const x = 50;
    const y = 60;
    const width = 1200;
    const height = 785;
    const color = 'red';

    function drawRectangle(x, y, width, height, color) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set the fill color for the rectangle
        ctx.fillStyle = color;
        
        // Draw the rectangle
        ctx.fillRect(x, y, width, height);
      }
      
      // Call the function to draw the rectangle
      drawRectangle(x, y, width, height, color);
      
      // Don't edit the code below here!
      
      const section = document.querySelector('section');