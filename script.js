let box = document.querySelector("#infi-list")
let count = 10;
box.onscroll = ()=>{
    if((box.clientHeight 
            + box.scrollTop) >=
            box.scrollHeight){
                count++
                let li1 = document.createElement("li")
                let li2 = document.createElement("li")
                li1.innerHTML = `Item ${count}`
                box.appendChild(li1)
                count++
                li2.innerHTML = `Item ${count}`
                box.appendChild(li2)
            }
        }