let sections=document.querySelectorAll('section'); //selecting all the sections in the page
let list=document.getElementById('navbar__list');
let fragment=document.createDocumentFragment();

//function creates the links of the navbar,setting their inner text according to data-nav of sections and add them dynamically into the page
sections.forEach(function(el){  
    let linkContent=el.getAttribute('data-nav');
    let link=document.createElement('a');
    link.href="#"+linkContent;
    link.innerText=linkContent;
    link.style.cssText=('color:white');
    link.style.textDecoration="none";
    let listitem=document.createElement('li');
    listitem.appendChild(link);
    fragment.appendChild(listitem); 
    
})
let allLinks=fragment.querySelectorAll('a'); //selecting all the links
list.appendChild(fragment);
list.style.cssText=('background-color:rgb(0,0,64)')

//function to select(highlight)the section in the viewport and also selecting its link in the navbar
document.addEventListener("scroll",function(){
    sections.forEach(function(el){
        let rect=el.getBoundingClientRect();
        if ((rect.top>=0) && (rect.bottom<=window.innerHeight))
        {
            sections.forEach(function(ele){
                ele.classList.remove('your-active-class');
                
            })
         el.classList.add("your-active-class");  //select the section in the viewport
            allLinks.forEach(function(a){
                    if(a.innerText==el.getAttribute('data-nav')){
                        allLinks.forEach(function(ll){
                            ll.style.cssText=('color:white');
                            ll.style.textDecoration="none";
                        })
                        a.style.cssText=('color:red'); //select the link of the selected section in the navbar
                        a.style.textDecoration="none";
                    }
                })
            
        }
    })
                      
                          })

//function to scroll to the section whose link is selected in the navbar
allLinks.forEach(function(el){
    el.addEventListener('click',function(){
        sections.forEach(function(e){
            if (el.innerText==e.getAttribute('data-nav')){
                e.scrollIntoView({behavior: "smooth"});
        }
            })
    })
})
