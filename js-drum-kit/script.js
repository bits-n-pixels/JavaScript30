// Original 
// window.addEventListener("keydown", (e) => {
//     // checkout keycode.info to check keycodes
//     // e.keyCode is deprecates thus using key 
//     const audio = document.querySelector(`audio[data-key="${e.key}"]`)
//     const key = document.querySelector(`.key[data-key=${e.key}]`)
//     if (!audio) return;
//     audio.currentTime = 0; //rewind to the start
//     audio.play();
//     key.classList.add("playing"); 
// });

//     function removeTransition(e) {
//         if (e.propertyName !== 'transform') return; //skip if it's not a transform
//         console.log("e", this);
//         this.classList.remove("playing")
//     }
//     const keys = document.querySelectorAll(".key");
//     keys.forEach(key => key.addEventListener("transitionend", removeTransition))

// Optimized
function playSound(e) {
    // checkout keycode.info to check keycodes
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)     // e.keyCode is deprecates thus using key
    const key = document.querySelector(`.key[data-key=${e.key}]`)
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound);


// key takeways
// 1. Script Timing & DOM Availability
// Problem: Event listeners didn’t work because the script ran before the .key elements were parsed.
// Fixes:
// Move script to the end of <body>, or
// Use <script defer>, or
// Wrap logic in DOMContentLoaded.
// Takeaway:
// Always ensure the DOM is ready before querying elements.
// 2.keyCode is deprecated — prefer event.key (e.g. "a", "s", "d").
// Debugging Mindset Takeaways
// console.log('keys found at script run:', document.querySelectorAll('.key').length);
// Use console.log() to confirm assumptions (querySelectorAll count, event firing, property names).
// When something “should” work, check timing and element availability first.
// Understand why something works, not just that it works.
// 3. Class Manipulation
// Used element.classList.add() and classList.remove() for animations.
// Also explored classList.toggle() and understood its conditional behavior.
// 4. Dynamic Element Selection
// Used template literals and data attributes for linking keys and sounds: