const  score = document.getElementsByClassName("score")[0]
const  minusprompt = document.getElementsByClassName("minusprompt")[0]
const  prize = document.getElementsByClassName("prize")[0]
const  pprompt = document.getElementsByClassName("pPrompt")[0]
const  mprompt = document.getElementsByClassName("mPrompt")[0]
const clicker = document.getElementsByClassName("clicker")
const nClicker = document.getElementsByClassName("nClicker")
const points = document.getElementsByClassName("points")
const npoints = document.getElementsByClassName("npoints")
const e = document.getElementsByClassName("E")[0]
const hour =  60 * 60 * 1000 //no of miliseconds in a hour
const day = 24 * hour//no of miliseconds in a day
const date = document.getElementsByClassName("date")[0];
const nColor = 14;

let random;


{
    prize.style.display = "none"
    pprompt.style.display = "none"
    mprompt.style.display = "none"
    
    e.innerHTML = localStorage.getItem('ed');
    
    // alert("? k ")
    onclickers()
    onNegative()

    let today = Math.floor((Date.now() + ((hour)* 4)) / day);// today duh
    date.innerHTML = today - 19759 ;
    
    // let today = prompt("today?")
    
    dateCheck(today)
    score.innerHTML = getFromCache(); 
     random = localStorage.getItem('cachedColor');
    if (random == null)
    {
        localStorage.setItem('cachedColor', Math.floor(Math.random() * nColor))
    }



    colorchange(random)
    
    for (let i = 0; i < points.length; i++)
    {
        let done = document.getElementsByClassName('done')[i]
        done.style.color = "sliver"
        done.innerHTML = localStorage.getItem('cachedLimit' + i)
    }
    sizeOfChecker()
}


function minus_prompt(e)
{
    e.style.display = "block"
    return;
}


function customMinus()
{
    // const x = 5;
    const x = localStorage.getItem('cachedDice');
    mprompt.style.display = "none"
    let today = Math.floor((Date.now() + ((hour)* 4)) / day);// today duh
    console.log(x +  "today" + today - 19759)

    if (x == 6 || (today - 19759 >= 90 && parseInt(e.innerHTML) >= 1000) )
    {
        prize.style.display = "block"
        return;

    }
    alert(x)
    return;
}

function CalcMinus()
{ 
    
    
    let n = parseInt(score.innerHTML);
    let c = minusprompt.value;

     const Tpoints = localStorage.getItem('cachedTpoints');
    
    if (n < c)
    {
        alert("Invalid value")
        return;
    }
    else if (((Tpoints / 4) * 3)  <= n - c)
    {
        alert("To much energy")
        n -= c;
    }

    score.innerHTML = n
    prize.style.display = "none"

    saveToCache(n);


    return;
}

function additon_calc(i)
{
    const limit = document.getElementsByClassName("limit")[i];
    const done = document.getElementsByClassName("done")[i];
    let value = localStorage.getItem('cachedLimit' + i);
    const maxvalue = parseInt(limit.innerHTML)

    if (!(value < maxvalue))
    {
        pprompt.style.display = "none"
        return;
    }

    
    value++
    localStorage.setItem('cachedLimit' + i , value);
    done.innerHTML = value
    
    if (value == maxvalue)
    {
        done.style.color = "red"
    }
    let c = parseInt(points[i].innerHTML);
    let n = parseInt(score.innerHTML);



    n += c;

    score.innerHTML = n
    pprompt.style.display = "none"

 
    
    saveToCache(n);
    sizeOfChecker()

    return;
    
}
function substraction_calc(i)
{
  
    let c = parseInt(npoints[i].innerHTML);
    let n = parseInt(score.innerHTML);



    n -= c;

    score.innerHTML = n
    mprompt.style.display = "none"

    
    saveToCache(n);
    sizeOfChecker()

    return;
    
}

function onclickers()
{
    for (let i = 0; i < clicker.length; i++)
    {
        clicker[i].onclick = function ()
        {
        additon_calc(i)
        }
            
    }
}

function onNegative()
{
    for (let i = 0; i < nClicker.length; i++)
    {
        nClicker[i].onclick = function ()
        {
        substraction_calc(i)
        }
        console.log("negative number " + i)    
    }
}

function saveToCache(i) {
    localStorage.setItem('cachedValue', i);
}

function getFromCache()
 {
    let x = localStorage.getItem('cachedValue');
    if (!(x == null))
    {
        return x;
    }
    localStorage.setItem('cachedValue', 0)
    return 0;
}

function dateCheck(today)
{
    let x = localStorage.getItem('cachedDate')
    if (x == null)
    {
        localStorage.setItem('cachedDate', today)
        return 100;
    }
    if (!(today == x))
    {

        dateChange(today)
    }
    else
    {
        return;
    }
    
}
function sizeOfChecker()
{
    const done = document.getElementsByClassName("done");
    const limit = document.getElementsByClassName("limit");
    for (let i = 0, n = clicker.length; i < n; i++)
    {
        const m = parseInt(done[i].innerHTML);
        const n = parseInt(limit[i].innerHTML);
        if (m == n)
        {
            clicker[i].style.height = "0px"
        }
        else 
        {
            clicker[i].style.height = "auto"
        }
    }
    return;
} 

function colorchange(random)
{

    const color = ["#172D13", "#FDF5DF", "#FECD45", "#1A2238", "#3FD2C7", "#FB8122","#D48166", "#051622", "#5DAA68", "#141824", "#182978", "#191919", "#000010", ".F0F0F0", "009B4D", "#DDD0C8"];
    const textureColor = ["#D76F30", "#5EBEC4", "#2568FB", "#FF6A3D", "#99DDFF", "#1D2228", "#373A36", "#1BA098", "#3F6844", "#FFB600", "#6688CC", "#FAB162", "#ffd700", "#E7473C", "#FFCC00", "#323232"];
    const accentColor = ["#6BB77B", "#F92C85", "#2568FB", "#F4DB7D", "#00458B", "#E1E2E2", "#E6E2DD", "#DEB992", "#FAF1CF", "#0049FF", "#ACBFE6", "#FAB162", "#ffffff", "#E7473C", "#FAF5E9", "#323232"];
    

    console.log(random);

    
    document.documentElement.style.setProperty('--color', hexToHSL(color[random]));
    document.documentElement.style.setProperty('--accentColor', hexToHSL(accentColor[random]));
    document.documentElement.style.setProperty('--textureColor', hexToHSL(textureColor[random]));
    
    return ;

}

function dateChange(today)
{
    
    const temp = localStorage.getItem('cachedValue')
    const ed = localStorage.getItem('ed')
    localStorage.clear();

    localStorage.setItem('cachedValue', temp)

    localStorage.setItem('cachedDate', today);

    localStorage.setItem('ed',ed);
    
    const dice = Math.floor(Math.random() * 6) + 1; 

    if (dice == 6)
    {
        localStorage.setItem('cachedTpoints', temp)
    }

    localStorage.setItem('cachedDice', dice);
    colorRandomize();

    alert("luck? " + dice)
    console.log("dice:" + dice)

    for (let i = 0; i < n.length; i++)
    {
        localStorage.setItem('cachedLimit' + i, 0)
    }

    alert("date change has being detected today:- " + today + "local storage");


    return;
}

function hexToHSL(hex) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else if (hex.length == 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }
    
    // Then to HSL
    r /= 255, g /= 255, b /= 255;
    let cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin;
    let h = 0, s = 0, l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    const hsl =  h + ", " + s + "%, " + l + "%"
    return hsl;
  }

function colorRandomize()
{
    random = Math.floor(Math.random() * nColor) ; 

    
    localStorage.setItem('cachedColor', random);
    location.reload(); //reloads the doc


}

function edgeLord()
{
    let x = parseInt(localStorage.getItem('ed'))
    console.log("done" + x)
    if (isNaN(x))
    {
        prompt("dfa")
        x = 0
    }
    x++
    localStorage.setItem('ed',x);
    location.reload();

}