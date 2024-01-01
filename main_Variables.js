const btns = document.querySelectorAll('.btn');


btns.forEach(item=>{
    item.addEventListener('click',even=>{
        even.target.classList.toggle('click')
    })
})


