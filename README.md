# Start-Rating-inSimpleWay
I made a Simple Star Rating project ... let me explain you in simple way what approach i follwed to make this,

so simple star rating project 

let first visualize and think about it, how is the working and what steps are their,

so when we click on the stars first of all it gets the Yellow color and the corresponding to that 
the emogi changes.

so how it is working,
so think it like for the emogi that coming one by one when we click the 
number of stars. so The emogi depends on the stars.

so think it like emogi targeting the index of the stars. if the index is 1 give me the sad emogi. if it 5 give me the excellent emogi.

so like 3 index of stars color than 3 index of emogi should be shown.

simple, we first loop the stars container and inside that we use the
click event to target the index of the stars whatever the star user click on.
like it click on the third star we get the second index. index start from 0.
and send that index to the emogi.
how we are sending it ? 
By calling a function inside the loop and sending the index.
Why we using the Loop? 
Bcz user click on 4th star so how we gonna take that index. that's why we loop it and target the user by click event and get the index.
stars.forEach((check, index) => {
    check.addEventListener("click", ()=>{
        // console.log("clicked", index)
        console.log(index)
        updateProgess(index);
    })
});
like that we call the function inside that we pass down the index. whatever the user clicked on.
so emogi only want the index if it 4th index than good smile if it 5th index than great smile if it 2nd index then upset smile.
so emogi want only index.
function updateProgess(index){
    stars.forEach((elm, ind)=>{
        if(ind <= index){
            // console.log(ind, index)
            elm.classList.add("active")
        }else{
            elm.classList.remove("active")
        }
    })

    emogies.forEach(elm =>{
        elm.style.transform  = `translateX(-${index * 50}px)`
    })

}
looping the stars and this time we set a condition if(ind <= index) means like 0 <= 4 means it go all over to the fourth one,
until the condition get falsed. we adding the active class that has the color Yellow. and after the condition get falsed we remove the rest
of the stars color.
And as i told you emogi only want a index.

we set the emogi container width 50px and border radius 50% and make it display flex
that they were align in the horizontal one after the other, emogies which 
are overflowing through the container bcz we set the width only 50px we use overflow hidden
to hide it and use the transform property to calculated it like index is 3 and width is 50 3 * 50 = 150% so the respective emogie will 
showed up.
that's how the working is going on.

first target the user click, than take that index thourgh this we can figure
out which star user clicked on then we color it, after thant we set the emogi by these index.
simple.


Hope these Explanation helps You.

