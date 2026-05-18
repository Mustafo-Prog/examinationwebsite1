//slider

function slider1(){
    document.getElementById("directorLeftSlide").src = "./img/co-working-background.jpg"
    document.getElementById("directorLeftSlide1").src = "./img/co-working-background.jpg"
    document.getElementById("change1").innerText = "Elena Vostrova"
    document.getElementById("change2").innerText = "Chief Information Officer, Global Logistics Corp"
    document.getElementById("change3").innerText = "Partnering with this team redefined our approach to scalability. The transition from legacy systems to a cloud-native architecture wasn't just a technical upgrade; it was a fundamental shift in how we deliver value to our global customers."
    document.getElementById("previous").style.background = "#4579CB"
    document.getElementById("next").style.background = "#e6e6e6"
}

function slider2(){
    document.getElementById("directorLeftSlide").src = "./img/director-left-img.png"
    document.getElementById("directorLeftSlide1").src = "./img/director-left-img.png"
    document.getElementById("change1").innerText = "Skylar George"
    document.getElementById("change2").innerText = "Managing Director, Lovgency Company"
    document.getElementById("change3").innerText = "You'll want to use a format that's viewable for your potential leads and aligns closely with their values. To give you an idea of how testimonials can be portrayed, below are the different testimonial types that you can use to show off your customers' stories"
    document.getElementById("previous").style.background = "#e6e6e6"
    document.getElementById("next").style.background = "#4579CB"
}

//droplist

function droplist1(){
    const list1 = document.getElementById('list1')
    const rotate1 = document.getElementById('rotate1')

    if(list1.style.height === '0%'){
        list1.style.height = '1000%'
        list1.style.padding = '20px'
        rotate1.style.transform = 'rotate(180deg)'
    }else{
        list1.style.height = '0%'
        list1.style.padding = '0px'
        rotate1.style.transform = 'rotate(0deg)'
    }
}

function droplist2(){
    const list2 = document.getElementById('list2')
    const rotate2 = document.getElementById('rotate2')

    if(list2.style.height === '0%'){
        list2.style.height = '1000%'
        list2.style.padding = '20px'
        rotate2.style.transform = 'rotate(180deg)'
    }else{
        list2.style.height = '0%'
        list2.style.padding = '0px'
        rotate2.style.transform = 'rotate(0deg)'
    }
}

function droplist3(){
    const list3 = document.getElementById('list3')
    const rotate3 = document.getElementById('rotate3')

    if(list3.style.height === '0%'){
        list3.style.height = '1000%'
        list3.style.padding = '20px'
        rotate3.style.transform = 'rotate(180deg)'
    }else{
        list3.style.height = '0%'
        list3.style.padding = '0px'
        rotate3.style.transform = 'rotate(0deg)'
    }
}

function droplist4(){
    const list4 = document.getElementById('list4')
    const rotate4 = document.getElementById('rotate4')

    if(list4.style.height === '0%'){
        list4.style.height = '600px'
        list4.style.padding = '20px'
        rotate4.style.transform = 'rotate(180deg)'
    }else{
        list4.style.height = '0%'
        list4.style.padding = '0px'
        rotate4.style.transform = 'rotate(0deg)'
    }
}

function droplist5(){
    const list5 = document.getElementById('list5')
    const rotate5 = document.getElementById('rotate5')

    if(list5.style.height === '0%'){
        list5.style.height = '1000%'
        list5.style.padding = '20px'
        rotate5.style.transform = 'rotate(180deg)'
    }else{
        list5.style.height = '0%'
        list5.style.padding = '0px'
        rotate5.style.transform = 'rotate(0deg)'
    }
}

function droplist6(){
    const list6 = document.getElementById('list6')
    const rotate6 = document.getElementById('rotate6')

    if(list6.style.height === '0%'){
        list6.style.height = '1000%'
        list6.style.padding = '20px'
        rotate6.style.transform = 'rotate(180deg)'
    }else{
        list6.style.height = '0%'
        list6.style.padding = '0px'
        rotate6.style.transform = 'rotate(0deg)'
    }
}

function droplist7(){
    const list7 = document.getElementById('list7')
    const rotate7 = document.getElementById('rotate7')

    if(list7.style.height === '0%'){
        list7.style.height = '1000%'
        list7.style.padding = '20px'
        rotate7.style.transform = 'rotate(180deg)'
    }else{
        list7.style.height = '0%'
        list7.style.padding = '0px'
        rotate7.style.transform = 'rotate(0deg)'
    }
}

function droplist8(){
    const list8 = document.getElementById('list8')
    const rotate8 = document.getElementById('rotate8')

    if(list8.style.height === '0%'){
        list8.style.height = '1000%'
        list8.style.padding = '20px'
        rotate8.style.transform = 'rotate(180deg)'
    }else{
        list8.style.height = '0%'
        list8.style.padding = '0px'
        rotate8.style.transform = 'rotate(0deg)'
    }
}

//navbar

function openNavbar(){
    document.querySelector('.navbar-a-right').style.top = '0'
}

function closeNavbar(){
    document.querySelector('.navbar-a-right').style.top = '-100%'
}

//backtop


window.addEventListener('scroll', () => {
    togglebacktop()
})

function togglebacktop() {
    let backtop = document.getElementById("backtop")

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backtop.style.bottom = "30px"
        backtop.style.opacity = '1'
    } else {
        backtop.style.opacity = '0'
        backtop.style.bottom = "-100%"
    }
}