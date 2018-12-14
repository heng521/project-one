

/*商品分类三级下拉花洒专区*/ 
var ly=document.querySelectorAll(".huasa>ul>li");
var zq_bg=document.querySelectorAll(".zq_bg");
// console.log(ly)
for(var t of ly){
    t.onmouseover=function(){
        for( var n of ly){
             n.className="";
             n.lastElementChild.style.opacity=0;
        }       
        this.className="zq_bg";
        this.lastElementChild.style.opacity=1;
    }
    t.onmouseout=function(){
       for(var i of zq_bg){
           i.lastElementChild.style.opacity=1;
           i.className="zq_bg";
       }
       this.className="";
       this.lastElementChild.style.opacity=0;
    }
}

/*轮播*/
window.onload=function(){
var slider=document.querySelector(".slider");
var img=document.querySelectorAll(".slider>img");
var h2=document.querySelectorAll('.gang>h2');
for(var i=0;i<img.length;i++){

}
for(var h of h2){
    h.onclick = function(){
        var h = this;
        for(var im of img){
            if(h.dataset.id == im.dataset.id){
                im.className = 't1'
                if(im.dataset.id == 2){
                    im.previousElementSibling.className='t'+4
                    im.nextElementSibling.className='t'+2
                    im.nextElementSibling.nextElementSibling.className='t'+3
                }else if(im.dataset.id == 3){
                    im.previousElementSibling.className='t'+4
                    im.nextElementSibling.className='t'+2
                    im.previousElementSibling.previousElementSibling.className='t'+3
                }else if(im.dataset.id == 4){
                    im.parentNode.children[0].className='t'+4
                    im.previousElementSibling.className='t'+2
                    im.previousElementSibling.previousElementSibling.className='t'+3
                }
            }
        }
       
    }
}

function n(){
    for(var g of img){
    if(g.className=="t1"){
        g.className="t4";
    }else if(g.className=="t2"){
        g.className="t1";
    }else if(g.className=="t3"){
        g.className="t2"
    }else
        g.className="t3";
        
    }
}
//setInterval(n,3000)
}

var gang=document.querySelector(".gang");
var h2=document.querySelectorAll("gang>h2");
var slider=document.querySelector(".slider");
var img=document.querySelectorAll(".slider>img");

/*中间主体 第一层 img变大 */
var imgs=document.querySelectorAll(".largen>img");
for (var g of imgs){
g.onmouseover=function(e){
    e.target.style.transform="scale(1.1)";
}
g.onmouseout=function(e){
    e.target.style.transform="scale(1)";
}
}
/*中间主体 第二层 img变大 */
var imgs=document.querySelectorAll(".fd>img")
for (var g of imgs){
    g.onmouseover=function(e){
        e.target.style.transform="scale(1.1)";
    }
    g.onmouseout=function(e){
        e.target.style.transform="scale(1)";
    }
}

/*第三层 */
var lis=document.querySelectorAll(".three_floor-subject>ul>li")
for (var s of lis){
   
   
    s.onmouseover=function(){
       var m =parseInt(this.dataset.id)+1
       this.children[0].lastElementChild.style.opacity="0";
       this.children[1].lastElementChild.style.color="#002B5C";    
       this.children[1].style.background="white";
       this.children[1].firstElementChild.src="img/0"+m+".png"
       this.children[2].style.width="250px";
       this.children[2].style.height="400px";s
    }
    s.onmouseout=function(){
        var m =parseInt(this.dataset.id)
       this.children[0].lastElementChild.style.opacity="1";
       this.children[1].lastElementChild.style.color="white";   
       this.children[1].style.background="none";
       this.children[1].firstElementChild.src="img/0"+m+".png"
       this.children[2].style.width="100px";
       this.children[2].style.height="140px";   
    }
}
/*第四层 */
var xia=document.querySelectorAll(".xia")
    for(var n of xia){
        
        n.onmouseover=function(){
            if(this.className=="ffs_center xia"){
                this.lastElementChild.style.transform="translateY(610px)"
            }else{
                this.lastElementChild.style.transform="translateY(295px)" 
            }

        }
        n.onmouseout=function(){
            this.lastElementChild.style.transform="translateY(-295px)"
        }
    }
/*底部 */