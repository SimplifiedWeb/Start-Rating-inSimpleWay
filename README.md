# Start-Rating-inSimpleWay
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/Start-Rating-inSimpleWay/

I've developed a simple star rating project. Allow me to explain the approach I used to create it in a simplified manner:

Imagine the star rating system: When you click on the stars, they turn yellow, and corresponding emojis change accordingly. Here's how it works:

Visualize that emojis appear based on the clicked star. If you click star 1, a sad emoji appears; for star 5, an excellent emoji, and so on.

Think of the emojis being associated with the index of the clicked star. Index 1 corresponds to a sad emoji, index 5 to an excellent emoji, etc.

Start by looping through the star container and applying a click event to each star. The click event targets the index of the clicked star, which starts from 0.

Inside the loop, call a function and pass the index as an argument. This helps in sending the index to the emojis.

stars.forEach((star, index) => {

    star.addEventListener("click", () => {
    
        updateProgress(index);
        
    });
});
In the updateProgress function, loop through the stars again. Use a condition if (ind <= index) to add the active class to stars up to the clicked star. This class turns the stars yellow. 

Remove the class for the rest of the stars.

function updateProgress(index) {

    stars.forEach((elm, ind) => {
    
        if (ind <= index) {
        
            elm.classList.add("active");
            
        } else {
        
            elm.classList.remove("active");
            
        }
    });
}
Similarly, use the index to manipulate the emojis. Adjust their position using the transform property. 

The emojis are placed in a container with a width of 50px and a display of flex. This aligns them horizontally, and any overflowing emojis are hidden with overflow: hidden.

emogies.forEach(elm => {

    elm.style.transform = `translateX(-${index * 50}px)`;
    
});
In essence, the logic involves targeting the user's click, extracting the index of the clicked star, and using that index to color the stars and adjust the emojis. 

This process lets us determine which star was clicked, color it, and position the corresponding emoji accordingly.

I hope these explanations help you understand the project's logic better. If you encounter any mistakes or confusion, please let me know, and I'll be glad to assist.

