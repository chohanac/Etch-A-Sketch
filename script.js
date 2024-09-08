function make(num)
{
    for (let i = 0; i < hold.length; i++)
        {
            container.removeChild(hold[i]);
        }
    hold = [];        
    for (let i = 0; i<num*num; i++)
        {
            hold[i] = document.createElement("div");
            hold[i].classList.add("square")
            hold[i].setAttribute("style", `opacity: 0%; width:${(16/num)*40}px; height:${(16/num)*40}px`);

            container.append(hold[i]);
            hold[i].addEventListener("mouseenter", ()=>
            {
                let opac = Number(hold[i].style.getPropertyValue("opacity"))+0.1;
                hold[i].setAttribute("style", `opacity: ${opac}; width:${(16/num)*40}px; height:${(16/num)*40}px`);
            })
                
        }
}


const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");
let grid = 16;
let hold = [];

make(grid);

buttons.addEventListener("click", (e)=>{
    if (e.target.id == "enter")
    {
        grid = prompt("Enter number of pixels (max 100)");
        grid = Number(grid);
        if (Number(grid)>0 && Number(grid)<=100)
        {
            make(grid);
        }
    }
    else if (e.target.id == "reset")
    {
        make(grid)
    }
})



