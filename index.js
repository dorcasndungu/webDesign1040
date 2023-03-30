function getProducts()  {
    fetch("./data/male.json")
       .then(res=>res.json())
       .then(json => maleProducts(json))
    
    fetch("./data/female.json")
       .then(res=>res.json())
       .then(json => femaleProducts(json))
    
    fetch("./data/kids.json")
       .then(res=>res.json())
       .then(json => kidsProducts(json))
    
 }

function maleProducts(data) {
    let products = ``
    for (let i of data) {
    products += `
        <div class="item">
            <img src="${i.img}">
            <div class="wrapper">
                <h6 style="font-weight: 100;">${i.title}</h6>
                <div class="item-inner">
                    <h4>Ksh${i.price}</h4>
                    <button>Cart+</button>  
                </div>
            </div>
        </div> 
    `
}
document.getElementById('male').innerHTML = products
}
function femaleProducts(data) {
    let products = ``
    for (let i of data) {
        products += `
            <div class="item">
                <img src="${i.img}">
                <div class="wrapper">
                    <h6 style="font-weight: 100;">${i.title}</h6>
                    <div class="item-inner">
                        <h4>Ksh${i.price}</h4>
                        <button>Cart+</button>  
                    </div>
                </div>
            </div> 
        `
    }
    document.getElementById('female').innerHTML = products
}
function kidsProducts(data) {
    let products = `` 
    for (let i of data) {
        products += `
            <div class="item">
                <img src="${i.img}">
                <div class="wrapper">
                    <h6 style="font-weight: 100;">${i.title}</h6>
                    <div class="item-inner">
                        <h4>Ksh${i.price}</h4>
                        <button>Cart+</button>  
                    </div>
                </div>
            </div> 
        `
    }
    document.getElementById('kids').innerHTML = products
}


function main () {
    getProducts() 
  }
  
main()
  
  