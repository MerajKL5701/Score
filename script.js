function main()
{
    // setTimeout
    const arr = 
    [
        "Yes",
        "Likely yes",
        "Probably yes",
        "Maybe yes",
        "Neutral/Undecided",
        "Maybe no",
        "Probably no",
        "Likely no",
        "No"
    ];
    
    const n = Math.floor(Math.random() * arr.length)
    const button = document.getElementsByClassName("button")[0]
    button.style.display = "none"
    setTimeout(() => 
    {
        const caption = document.getElementsByClassName("head")[0];
        caption.innerHTML = arr[n]
        button.style.display = "block"
        
    }, 5 * 1000);
    // define array 
    // changetext 
}



