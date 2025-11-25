const menu = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6oMZH9pV1Pgl9HhgYQwBy5uW1udg4P-pLg&s",
        category:"breakfast",
        title: "Buttermilk Pancakes",
        price: "$13.99",
        disc: "Vaporware iPhone mumblecore selvage raw denim, slow-carb leggings gochujang helvetica man bra"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUfCpxM5DhQZee0I-ya9QKXPRgtUA62fvePuQHGgvtFWN85DxXVsUIIzETuHKYWZLxxw&usqp=CAU",
        category:"breakfast",
        title: "Donut",
        price: "$13.99",
        disc: "Vaporware iPhone mumblecore selvage raw denim, slow-carb leggings gochujang helvetica man bra"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzehVZxWZA_MOKko8zt1JRPpE3ok2Mz7bdWYin34kY-hvQAa2CYcX1aYfdbz-oTsLvdIA&usqp=CAU",
        category:"lunch",
        title: "Godzilla Milprice",
        price: "$12.34",
        disc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },

    {
        img: "https://etimg.etb2bimg.com/photo/122044618.cms",
        category:"breakfast",
        title: "Country Dprice",
        price: "$20.23",
        disc: "Shabby chic kefiyn neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGk8CD-mxTvjOt-MjC3IBxtJsrhBESJgMe7ePQGazbHsV8t7HEhc_vvj3fCrxWC2v0a3g&usqp=CAU",
        category:"lunch",
        title: "Egg",
        price: "$22.99",
        disc: "esanzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up."
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIQqYRejH8qTX8h06I4XAed5dw3a3xduvew&s",
        category:"shakes",
        title: "Milk Shake",
        price: "$32.99",
        disc: " a sweet beverage, a milkshake made with milk and ice cream."
    },
    {
        img: "https://i.pinimg.com/736x/5c/72/e8/5c72e82dd43cc076d6739b89ab098285.jpg",
        category:"shakes",
        title: "Oreoprice",
        price: "$18.99",
        disc: "esrtland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday."
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rdCFF8bNpMOBkvEPMDPBNzUuFZ_lj960rw&s",
        category:"shakes",
        title: "Chocolate Shake",
        price: "$30.99",
        disc: "chocolate shake is a classic, indulgent, and creamy cold beverage known for its deep, satisfying chocolate flavor"
    },
]

const menuGrid = document.querySelector(".menu-grid")
const filterBtns = document.querySelectorAll(".filter")

// load items
window.addEventListener('DOMContentLoaded',function(){
   displayMenuItems(menu);
})

// filter items
filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id ;  
        const menuCategory = menu.filter(function(menuItem){
            // console.log(menuItem.category)
            if(menuItem.category === category){
                return menuItem;
            }
           
        });
        if(category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }

    });
});

function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        return  `  
        <article class="menu-item">
        <div class="thumb">    
        <img src="${item.img}">
        </div>
        <div class="item-body">
        <div class="item-head">
              <h3 class="item-title">${item.title}</h3>
              <span class="price">${item.price}</span>
            </div>
            <p class="item-desc">${item.disc}</p>
              </div>
        </article>`;
    })
    
    displayMenu = displayMenu.join("");
    menuGrid.innerHTML = displayMenu;

}