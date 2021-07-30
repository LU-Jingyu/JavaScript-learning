class Mouseevent {

    constructor(id) {
        this.box = document.querySelectorAll(id);
        this.trs = document.querySelectorAll("tr");
        
        this.init();
    }

    init(){
        console.log("tr event...");
        // 增加鼠标移入事件
        this.trs.forEach(tr => {
            tr.addEventListener("mouseenter", ()=>{
                tr.style.backgroundColor = "yellow";
            })
        });
        //增加鼠标移开事件
        this.trs.forEach(tr => {
            tr.addEventListener("mouseleave", ()=>{
                tr.style.backgroundColor = "#fff";
            })
        });
    }
}