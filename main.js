const card =[
    {
        "id":1,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Classic-Agency-Uncode-2025-2048x1366.webp",
        "title":"Classic Agency"
    },
    {
        "id":2,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Shop-Ajax-Uncode-2025-2048x1366.webp",
        "title":"Shop Ajax"
    },
    {
        "id":3,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Creative-Hub-Uncode-2025-2048x1366.webp",
        "title":"Creative Lab"
    },
    {
        "id":4,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2023/05/demo-homepage-Creative-Agency-Uncode-2023-New-2048x1366.webp",
        "title":"Creative Agency"
    },
    {
        "id":5,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Classic-Innovators-New-Uncode-2025-2048x1366.webp",
        "title":"Classic Innovators"
    },
    {
        "id":6,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/02/demo-homepage-Portfolio-Cards-Def-Uncode-2025-2048x1366.webp",
        "title":"Portfolio Cards"
    },
    {
        "id":7,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2024/08/demo-homepage-Creative-Marketing-Uncode-2024-C-New-2048x1366.webp",
        "title":"Creative Marketing"
    },
    {
        "id":8,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/03/demo-homepage-Classic-Business-New-Uncode-2025-2048x1366.webp",
        "title":"Classic Business"
    },
     {
        "id":9,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Classic-Agency-Uncode-2025-2048x1366.webp",
        "title":"Classic Agency"
    },
    {
        "id":10,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Shop-Ajax-Uncode-2025-2048x1366.webp",
        "title":"Shop Ajax"
    },
    {
        "id":11,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Creative-Hub-Uncode-2025-2048x1366.webp",
        "title":"Creative Lab"
    },
    {
        "id":12,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2023/05/demo-homepage-Creative-Agency-Uncode-2023-New-2048x1366.webp",
        "title":"Creative Agency"
    },
    {
        "id":13,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Classic-Innovators-New-Uncode-2025-2048x1366.webp",
        "title":"Classic Innovators"
    },
    {
        "id":14,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/02/demo-homepage-Portfolio-Cards-Def-Uncode-2025-2048x1366.webp",
        "title":"Portfolio Cards"
    },
    {
        "id":15,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2024/08/demo-homepage-Creative-Marketing-Uncode-2024-C-New-2048x1366.webp",
        "title":"Creative Marketing"
    },
    {
        "id":16,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/03/demo-homepage-Classic-Business-New-Uncode-2025-2048x1366.webp",
        "title":"Classic Business"
    }
    
]

const mainGrid = document.querySelector(".mainGrid")
const visibleBtn = document.querySelector("#gridButton")


card.forEach(card =>{
    mainGrid.innerHTML += `
    
    <div class="mainCard">
                    <img src="${card.url}" alt="">
                    <h2>${card.title}</h2>
                </div>
    `
})

window.onload = function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        freeModeSticky: true,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.update();
};



function plusIcon(card) {
    const textCon = card.querySelector(".sectionBlogText")
    const icon = card.querySelector(".fa-solid")

    
    if(textCon.style.height ==="0px" || textCon.style.height === "" ) {
        textCon.style.height = textCon.scrollHeight + "px";

    }else{
        textCon.style.height = "0px"
    }

    icon.classList.toggle("fa-x")
    icon.classList.toggle("fa-plus")
}

visibleBtn.addEventListener('click',()=> {
    
    
    if(mainGrid.style.height == "550px" || mainGrid.style.height =="") {
        mainGrid.style.height = mainGrid.scrollHeight + "px"
        visibleBtn.innerHTML = "Close All Demos"
    }else {
        mainGrid.style.height = "550px"
        visibleBtn.innerHTML = " All Included Demos"
    }
})