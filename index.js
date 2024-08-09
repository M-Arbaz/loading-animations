function get(x){
  return  document.querySelector(`.${x}`)
}
const containerFill = get("container_inner");
const containerFillTotal=get("container_outer");
const bat= get("bat");
const bbTry= get("battery")
// new commit
function filler(){
return Math.floor((
    (containerFill.offsetHeight+2)/
    (containerFillTotal.offsetHeight-1)
    )*100);
}



setInterval(()=>{
    containerFill.innerHTML=`
    <span class="filer_count">${filler()}%</span>`;
},100)

 async function Battery(){
    try{
        const battery = await navigator.getBattery();
        const level = Math.floor(battery.level*100);
        // console.log(battery)
        bat.value=level;
        return level;
    }
    catch (err){
console.error(err);
return "error";
    }
} 
Battery()
   

const targets = document.querySelectorAll('.sec');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
                if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
targets.forEach(view => {
    observer.observe(view);
});

