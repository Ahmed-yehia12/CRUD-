var productNameInput= document.getElementById('productName');
var productPriceInput= document.getElementById('productPrice');
var productCategoryInput= document.getElementById('productCategory');
var productDiscInput= document.getElementById('productDisc');
var searchInput = document.getElementById('searchInput')
var addBtn = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')
var updateIndex = 0;
var productContainer =[];
if(localStorage.getItem("products")!=null){
    productContainer =JSON.parse(localStorage.getItem("products"))
displayData()

}
function addProduct(){
    var product ={
        name: productNameInput.value,
        price: productPriceInput.value,
        category:productCategoryInput.value,
        disc:productDiscInput.value
    }
    productContainer.push(product)
    setLocal()
    displayData()
    clrData()
    
}
function displayData(){
    var cartona ='';
    for(var i=0 ; i<productContainer.length ; i++ ){
     cartona +=` <tr>
     <td>${i}</td>
     <td>${productContainer[i].name}</td>
     <td>${productContainer[i].price}</td>
     <td>${productContainer[i].category}</td>
     <td>${productContainer[i].disc}</td>
     <td>
         <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">update</button>
         <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
     </td>

 </tr>   `}

    
    document.getElementById("tableData").innerHTML=cartona

}
function setLocal(){
    localStorage.setItem("products" , JSON.stringify(productContainer))

}
function deleteProduct(index){
    productContainer.splice( index , 1)
    setLocal()
    displayData()
}
function clrData(){
    productNameInput.value ='';
     productPriceInput.value ='';
        productCategoryInput.value ='';
        productDiscInput.value ='';
    }

function searchProduct(){
var term = searchInput.value.toLowerCase()


var cartona ='';
for(var i=0 ; i<productContainer.length ; i++ ){
    if(productContainer[i].name.toLowerCase().includes(term)){
        cartona +=` <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].disc}</td>
        <td>
            <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">update</button>
            <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td>
       
       </tr>   `}
       
    }


document.getElementById("tableData").innerHTML=cartona


}
function setData(index){
    updateIndex = index;
    
var curent = productContainer[index]
productNameInput.value = curent.name;
productPriceInput.value = curent.price;
productCategoryInput.value = curent.category;
productDiscInput.value = curent.disc
addBtn.classList.add("d-none")
updateBtn.classList.remove("d-none")
}
function updateProduct(){
    var product ={
        name: productNameInput.value,
        price: productPriceInput.value,
        category:productCategoryInput.value,
        disc:productDiscInput.value
    }
productContainer.splice(updateIndex, 1 , product)
    setLocal()
    displayData()
    clrData()

     addBtn.classList.remove("d-none")
updateBtn.classList.add("d-none")
}


// loop - array = map.arraymethods
// sites.map((item, i)=>{
//     tableBody += `
//      <tr>
//          <td >${i}</td>
//          <td>${item.name}</td>
//          <td>
//            <button class="btn btn-warning" onclick="visit('${item.url}')">
//            Visit
//            </button>
//          </td>
//          <td>
//            <button class="btn btn-danger" onclick="deleteSite(${i})">Delete</button>
//          </td>
//      </tr>
//  `;
// })
function regexName(){
    var ragexName = /^[A-Z][a-z]{2,8}$/
    var text = productNameInput.value
    var messageName = document.getElementById('messageName')
    if (ragexName.test(text)==true){
productNameInput.classList.add('is-valid')
productNameInput.classList.remove('is-invalid')
messageName.classList.add('d-none')
    }
    else{
        productNameInput.classList.add('is-invalid')
        productNameInput.classList.remove('is-valid')
        messageName.classList.remove('d-none')

    }
}