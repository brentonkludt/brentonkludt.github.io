/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);


  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
	
	const allCapsCheckBox = document.querySelector('#all-caps');
	const encryptButton = document.querySelector('#encrypt-it');
	
	/**Encrypt Text**/
	function encryptText() {
      let inputStr = textAreaInput.value;
      let outputStr = "";
      
      for(let i in inputStr) {
        if((inputStr.charCodeAt(i) > 96 && inputStr.charCodeAt(i) < 122) || (inputStr.charCodeAt(i) > 64 && inputStr.charCodeAt(i) < 90)) {
          outputStr = outputStr.concat(String.fromCharCode(inputStr.charCodeAt(i) + 1));
        } 
        else if(inputStr.charCodeAt(i) == 122) {
          outputStr = outputStr.concat(String.fromCharCode(97));
        }
        else if(inputStr.charCodeAt(i) == 90)
        {
          outputStr = outputStr.concat(String.fromCharCode(65));
        }
        else {
          outputStr = outputStr.concat(String.fromCharCode(inputStr.charCodeAt(i)));
        }

        result.textContent = outputStr;
      }
	  
	/** All caps option */
    allCapsCheckBox.addEventListener('change', function() 
	{	
		if(this.checked) 
		{
			textAreaInput.value = textAreaInput.value.toUpperCase();
			result.textContent = result.textContent.toUpperCase();
		} 
		else 
		{
			textAreaInput.value = textAreaInput.value.toLowerCase();
			result.textContent = result.textContent.toLowerCase();
		}
    });
	  
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }
 
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
