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

    const timer = 15

    repeater(repeatAction, timer)
    setTimeout(() => 
    {
        const caption = document.getElementsByClassName("head")[0];
        caption.innerHTML = arr[n]
        button.innerHTML = "press me"
        
    }, (timer + 1) * 1000);
    // define array 
    // changetext 
}

function repeater(x, timer)
{
    let counter = 0;
const intervalId = setInterval(() => {
    x(counter + 1);
    counter++;
    if (counter === timer ) {
        clearInterval(intervalId);
    }
}, 1000);
}

function repeatAction(x) {
    console.log("Action performed!");
    const button = document.getElementsByClassName("button")[0]
    button.innerHTML = x
}

// Repeat action every second for 5 seconds
alotofk();
function alotofk()
{
    let k = "k";
    for (i = 0; i < 1000; i++)
    {
        k = k.concat("k")
    }
    console.log(k)
}