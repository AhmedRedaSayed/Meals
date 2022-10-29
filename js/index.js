let userName = document.getElementById("userName");
let userPhone = document.getElementById("userPhone");
let userPassword = document.getElementById("userPassword");
let userEmail = document.getElementById("userEmail");
let userAge = document.getElementById("userAge");
let userRePassword = document.getElementById("userRePassword");
userNameAlert = document.getElementById("nameAlert"),
userEmailAlert = document.getElementById("emailAlert"),
userPhoneAlert = document.getElementById("phoneAlert"),
userAgeAlert = document.getElementById("ageAlert"),
userPasswordAlert = document.getElementById("passwordAlert"),
userRePasswordAlert = document.getElementById("rePasswordAlert");


function  userNameValidate() {

  
  let regex = /^[a-zA-Z ]+$/;
  if(regex.test(userName.value) == true)
  {
    return true;
  }
  else 
  {
    return false;
  }

 

}
function userPhoneValidate(){
  let regex = /^(002)?01[0125][0-9]{8}$/;
  if(regex.test(userPhone.value)== true)
  {
   return true;
 
  }
  else
  {
   return false;
 
  }
 }
 function userPasswordValidate(){
  let regex = /^[A-Za-z][A-Za-z\d]{8}$/;
  if(regex.test(userPassword.value) == true)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function userEmailValidate(){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(regex.test(userEmail.value)==true)
  {
    return true;
    
  }
  else
  {
    return false;
  }

}
function userAgeValidate(){

  let regex = /^[1-9][0-9]?$|^100$/;
  if(regex.test(userAge.value) == true)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function validateUserRePassword(){
  if ((userRePassword.value == userPassword.value)==true) {


    return true;
    
  }
  else
  {
    return false;
  }

}       


function validation()
{
  if(userNameValidate()== true)
  {
    userName.classList.remove("is-invalid")
    userName.classList.add("is-valid")
    userNameAlert.classList.replace('d-block','d-none');

  }
  else
  { 
    
    userName.classList.add("is-invalid")
    userNameAlert.classList.replace('d-none','d-block');
  }

 

    if(userPhoneValidate()== true)
{
  userPhone.classList.remove("is-invalid");
  userPhone.classList.add("is-valid");
  userPhoneAlert.classList.replace('d-block','d-none');

}
else
{
  userPhone.classList.add("is-invalid");
  userPhoneAlert.classList.replace('d-none','d-block');

}

  if(userPasswordValidate()==true)
  {
    userPassword.classList.remove("is-invalid");
    userPassword.classList.add("is-valid");
    userPasswordAlert.classList.replace('d-block','d-none');

  }
  else
  {
    userPassword.classList.add("is-invalid");
    userPasswordAlert.classList.replace('d-none','d-block');

  }

 

    if(userEmailValidate()== true)
{
  userEmail.classList.remove("is-invalid");
  userEmail.classList.add("is-valid");
  userEmailAlert.classList.replace('d-block','d-none');

}
else
{
  userEmail.classList.add("is-invalid");
  userEmailAlert.classList.replace('d-none','d-block');

}



if(userAgeValidate()== true)
{

  userAge.classList.remove("is-invalid");
  userAge.classList.add("is-valid");
  userAgeAlert.classList.replace('d-block','d-none');

}
else
{
  userAge.classList.add("is-invalid");
  userAgeAlert.classList.replace('d-none','d-block');

}



if(validateUserRePassword()==true){

  userRePassword.classList.remove("is-invalid");
  userRePassword.classList.add("is-valid");
  userRePasswordAlert.classList.replace('d-block','d-none');

}


else
{

userRePassword.classList.add("is-invalid");
userRePasswordAlert.classList.replace('d-none','d-block');

}


if (userNameValidate() && validateUserRePassword()&&userAgeValidate()&&userEmailValidate() && userPasswordValidate() && userPhoneValidate()) 
{

  $("#submitBtn").removeAttr("disabled");

}
else
{
$("#submitBtn").prop("disabled",true)
}
}
$(userName).on('keyup',function(){
  validation();
})
$(userPhone).on('keyup' , function(){
  validation();

})
$(userPassword).on('keyup', function(){
  validation();
})
$(userEmail).on('keyup',function () {

  validation();
})
$(userAge).on('keyup' , function(){
  validation();
})

$(userRePassword).on('keyup' , function(){
  validation();
})



async function getData() {
  let random = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);

  let randomResult = await random.json();
  return randomResult;
}

let getApi = async()=>
{

    let meal = await getData();
   let container = ``;
   for (let i = 0 ; i < meal.meals.length;i++)
   {
    container +=  `<div class="col-md-6 my-3 col-lg-3 ">  
    <div class="first  position-relative overflow-hidden">
      <img class="w-100 rounded " src="${meal.meals[i].strMealThumb}" alt="">
      <div id="layer" class="layer d-flex align-items-center">
        <h2>${meal.meals[i].strMeal}</h2>
        </div>
        </div>
        </div>
`
   }
   $('#rowData').html(container);

}
getApi();

let getName = async()=>
{

  let mealName = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`);
  let nameResult = await mealName.json();
  return nameResult;

}

$('#searchInput').on('input' , async()=>{

  let search = await getName();
  let mealsContainer='';
  for(let i = 0 ; i < search.meals.length ; i++)
  {
    mealsContainer +=  `<div class="col-md-6 my-3 col-lg-3 ">  
    <div class="first  position-relative overflow-hidden">
      <img class="w-100 rounded " src="${search.meals[i].strMealThumb}"alt="">
       <div id="layer" class="layer d-flex align-items-center">
        <h2>${search.meals[i].strMeal}</h2>
        </div>
        </div>
         </div>`
  }
  $('#mealsData').html(mealsContainer);

  getName();

})

let getLetter = async()=>
{
  let letter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter.value}`);
  let letterResult = await letter.json();
  return letterResult;
}

$('#searchLetter').on('input' , async()=>{
  let searchLetter = await getLetter();
  let letterContainer = '';
  for( let i = 0 ; i < searchLetter.meals.length; i++)
  {
    letterContainer +=  `<div class="col-md-6 my-3 col-lg-3 ">  
    <div class="first  position-relative overflow-hidden">
      <img class="w-100 rounded " src="${searchLetter.meals[i].strMealThumb}"alt="">
       <div id="layer" class="layer d-flex align-items-center">
        <h2>${searchLetter.meals[i].strMeal}</h2>
        </div>
        </div>
         </div>`
  }
  $('#mealsData').html(letterContainer);
  getLetter();

})


$('.sideBar i').click(function(){
  let boxWidth = $('.sideBar-item').outerWidth();
  if($('.sideBar').css('translate') === '0px'){

       $('.sideBar').animate({translate:`${boxWidth}px`},100);
       

  }
  else
  {
   $('.sideBar').animate({translate:'0px'},100);


  }
   
})

let getArea = async()=>
{
  let randomArea = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  let areaResult = await randomArea.json();
 
  return areaResult;
}

let apiData = async()=>
{
  area = await getArea();
  let areaContainer = '';
  for(let i = 0 ; i < area.meals.length ; i++)
  {
    areaContainer += `    <div class="col-md-6 col-lg-3 my-3 py-5 ">
    <a href="AreaMeals.html" class="holder text-decoration-none">
    <i class="fa fa-city fa-3x area "></i> 
    <h3 class=" holder-text text-white" >${area.meals[i].strArea}</h3>
    </a>

</div> 
    `

    $('#area').html(areaContainer);


        let areaMeals = document.querySelectorAll(".holder");
        let areaLocation = document.querySelectorAll(".holder-text");
        for( let i = 0 ; i < areaMeals.length ; i++)
        {

          areaMeals[i].addEventListener('click' ,function(){

            localStorage.setItem("AreaMeals",JSON.stringify(areaLocation[i].innerText))



          })
        }
  }

}

apiData();

let areaFilter = async(locationArea)=>{

  locationArea = JSON.parse(localStorage.getItem('AreaMeals'))
  let filArea = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${locationArea}`);
  let filAreaResult = await filArea.json();
  return filAreaResult;
}

let felAreaApi = async()=>
 {

  
  let filterArea = await areaFilter();
  let filAreaContainer = '';
  for(let i = 0 ; i < filterArea.meals.length ; i++ )
  {
    filAreaContainer +=`<div class="col-md-6 my-3 col-lg-3 ">  
    <div class="first  position-relative overflow-hidden">
      <img class="w-100 rounded " src="${filterArea.meals[i].strMealThumb}" alt="">
      <div id="layer" class="layer d-flex justify-content-center align-items-center">
        <h2>${filterArea.meals[i].strMeal}</h2>
        </div>
        </div>
        </div>`


  }
  $('#areaMeals').html(filAreaContainer);


 }
 felAreaApi();







let catData = async()=>
{
  let category = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let categoryResult = await category.json();
  return categoryResult;

}

let catApi = async()=>
{
  
  
  
  let cat= await catData();
  let catContainer = '';


  
  
  for(let i = 0 ; i < cat.categories.length;i++ )
  {  

    catContainer +=  `<div class="col-md-6 my-3 col-lg-3 ">  
    <a href="Meals.html"  class="first d-block text-black   position-relative overflow-hidden">
      <img class="w-100 rounded " src="${cat.categories[i].strCategoryThumb}" alt="">
      <div id="layer" class="layer">
        <h2 id="meal-text"  >${cat.categories[i].strCategory}</h2>
        <p>${cat.categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")} </p>
        </div>
        </a>
        </div>`



        $('#catData').html(catContainer);

        let meal = document.querySelectorAll(".first");
        let mealName = document.querySelectorAll("#meal-text")

        for( let i = 0 ; i < meal.length ; i++)
        {

          meal[i].addEventListener('click' ,function(){

            localStorage.setItem("catMeal",JSON.stringify(mealName[i].innerText))



          })
        }

  }

  
}

catApi();






 let filterCat = async(catName)=>{

  catName = JSON.parse(localStorage.getItem('catMeal'))


  let filCat = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
  let filCatResult = await filCat.json();
  return filCatResult;
}

 let felCatApi = async()=>
 {
 

 
  let filterCategory = await filterCat();
  let filCatContainer = '';
  for(let i = 0 ; i < filterCategory.meals.length ; i++ )
  {
    filCatContainer +=`<div class="col-md-6 my-3 col-lg-3 ">  
    <div class="first  position-relative overflow-hidden">
      <img class="w-100 rounded " src="${filterCategory.meals[i].strMealThumb}" alt="">
      <div id="layer" class="layer d-flex justify-content-center align-items-center">
        <h2>${filterCategory.meals[i].strMeal}</h2>
        </div>
        </div>
        </div>`


  }
  $('#mealData').html(filCatContainer);




 }
 felCatApi();




 let ingredientData = async()=>
 {
   let ingredientmeals = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
   let ingredientResult = await ingredientmeals.json();
   return  ingredientResult;
 }
 
 let ingredientApi = async()=>
 {
   let ing= await ingredientData();
   let ingContainer='';
   for(let i = 0 ; i < 20 ; i++ )
   {
     ingContainer +=`<div class="col-md-6 col-lg-3 my-3 py-5 px-3">
     <a href="IngredientsFilter.html" class="content d-block text-black ">
         <i class="fa fa-bowl-food fa-3x"></i>
         <h3 class=" ing-holder text-white">${ing.meals[i].strIngredient}</h3>
         <p class="text-white">${ing.meals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
     </a>
     </div>`


     $('#ingData').html(ingContainer);

     let ingMeals = document.querySelectorAll(".content");
     let ingName = document.querySelectorAll(".ing-holder");
     
     for(let i = 0 ; i < ingMeals.length;i++ )
     {
      ingMeals[i].addEventListener('click' , function(){

        localStorage.setItem("ingMeal",JSON.stringify(ingName[i].innerText))

      })
     }




   }
   
 
 }
 ingredientApi();
 

 let filtering = async(ingredName)=>{

  ingredName = JSON.parse(localStorage.getItem('ingMeal'))


  let filing = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredName}`);
  let filingResult = await filing.json();
  return filingResult;
}


let felingApi = async()=>
{



 let filterIngredients = await filtering();
 let filingContainer = '';
 for(let i = 0 ; i < filterIngredients.meals.length ; i++ )
 {
  
  filingContainer +=`<div class="col-md-6 my-3 col-lg-3 ">  
   <div class="first  position-relative overflow-hidden">
     <img class="w-100 rounded " src="${filterIngredients.meals[i].strMealThumb}" alt="">
     <div id="layer" class="layer d-flex justify-content-center align-items-center">
       <h2>${filterIngredients.meals[i].strMeal}</h2>
       </div>
       </div>
       </div>`

   


 }
 $('#ingFilter').html(filingContainer);
}
felingApi();
 











