/*
 * This function waits for the DOM content to be fully loaded before executing any JavaScript code
 */
document.addEventListener('DOMContentLoaded', () => {

    /* Get references to the container div and the resize button using their IDs */
    const container = document.getElementById('container');
    const resizeButton = document.getElementById('resize-button');
  
    /* Function to create the grid */
    function createGrid(size) 
    {
      /* Clear the container before creating a new grid */
      container.innerHTML = '';
  
      /* Loop to create 'size * size' number of square divs */
      for (let i = 0; i < size * size; i++) 
      {
        /* Create a new div element for each square */
        const square = document.createElement('div');

        /* Add the 'square' class to the div */
        square.classList.add('square');

        /* Append the square to the container */
        container.appendChild(square);
      }

      /* set CSS variable '--grid-size' to the size of the grid */
      container.style.setProperty('--grid-size', size);
    }
  
    /* Create the initial grid with a size of 16x16 */
    createGrid(16);
  
    /* Function to handle hover effect */
    function handleHover() 
    {
      /* Add event listener for 'mouseover' event on the container */
      container.addEventListener('mouseover', (e) => {

        /* Check if the mouseover event target has the 'square' class */
        if (e.target.classList.contains('square')) 
        {
          /* Add the 'hovered' class to the square */
          e.target.classList.add('hovered');
        }
      });
    }
  
    /* Call the handleHover function to add hover effect to the initial grid */
    handleHover();
  
    /* Event listener for 'click' event on the resize button */
     /** Prompt the user to enter the number of squares per side 
     * Parse the input as an integer
     * here ..................................................................
        */
    resizeButton.addEventListener('click', () => {
   
      let newSize = prompt('Enter the number of squares per side (max 100):');

      newSize = parseInt(newSize);
  
      /* Check if the input is a valid number between 1 and 100 */
      /* Call the createGrid function with the new size */
      if (newSize && newSize > 0 && newSize <= 100)
      {
        createGrid(newSize);

        /* Reapply hover effect to the new grid */
        handleHover();
      } 
      else 
      {
        /* If the input is not valid, display an alert message */
        alert('Hi Gamer, enter a valid number between 1 and 100.');
      }
    });
  });
  