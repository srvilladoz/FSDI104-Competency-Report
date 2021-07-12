var salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"206-k"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

var c=0;
class Pet{
    constructor(name,age,gender,breed,weight,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.weight=weight;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=c++;
    }
}


function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p>Amount of Pets: ${salon.pets.length}</p>`;
    //console.log(salon.pets.length);
    for(var i=0;i<salon.pets.length;i++){

        tmp+=`
        <div id="${salon.pets[i].id}" class="pet">
            <div class="pet-title">
        <p>Name: ${salon.pets[i].name}</p> 
        <button onclick="deletePet(${salon.pets[i].id});">❌</button></div>
        <p>Age: ${salon.pets[i].age}</p>
        <p>Gender: ${salon.pets[i].gender}</p>
        <p>Breed: ${salon.pets[i].breed}</p>
        <p>Weight: ${salon.pets[i].weight}</p>
        <p>Service: ${salon.pets[i].service}</p>
        <p>Pet Owner: ${salon.pets[i].ownerName}</p>
        <p>Contact Phone: ${salon.pets[i].contactPhone}</p>

        </div>`
    }

    

    document.getElementById("pets").innerHTML=tmp;
    



}

//displayPet();

function deletePet(id){

    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if(aPet.id==id){
            deleteIndex=i;
        }
    }
    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
    //console.log("delete function", aPet)
}


function validation(i1,i2,i3,i4,i5,i6,i7,i8){
    if(i1!="" &&
        i2!="" &&
        i3!="" &&
        i4!="" &&
        i5!="" &&
        i6!="" &&
        i7!="" &&
        i8!=""){
            var flag=true;
        }
        return flag;
}

function onFormRegister(){
    var formData = registerPet();
    insertNewPet(formData);
}


function registerPet(){
    // get and store the values
    var formData = {};

    formData["petName"]=document.getElementById("petName").value;
    formData["petAge"]=document.getElementById("petAge").value;
    formData["petGender"]=document.getElementById("petGender").value;
    formData["petBreed"]=document.getElementById("petBreed").value;
    formData["petWeight"]=document.getElementById("petWeight").value;
    formData["petService"]=document.getElementById("petService").value;
    formData["ownerName"]=document.getElementById("ownerName").value;
    formData["contactPhone"]=document.getElementById("contactPhone").value;
    

    //console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwner,inputPhone);
    // create the generic object
    if(validation(formData["petName"],formData["petAge"],formData["petGender"],formData["petBreed"], formData["petWeight"],formData["petService"],formData["ownerName"],formData["contactPhone"])){
    var thePet=new Pet(formData["petName"],formData["petAge"],formData["petGender"],formData["petBreed"], formData["petWeight"],formData["petService"],formData["ownerName"],formData["contactPhone"])
    console.log(thePet)
    // push the object into the array
    salon.pets.push(thePet);
    //clear the inputs
    
    clearInputs();
    displayPet(); 
    var element=document.getElementById('alert');
    element.classList.remove("hide");
    setTimeout(function(){
        element.classList.add("hide");
    },3000);

    
}else{
    var failed=document.getElementById('failed');
    failed.classList.remove("hide");
    setTimeout(function(){
        failed.classList.add("hide");
    },3000);
}
}

function insertNewPet(data){
    var table = document.getElementById("petList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.petName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.petAge;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.petGender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.petBreed;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.petWeight;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.petService;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.ownerName;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.contactPhone;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;

    row++;
    

}
displayPet();


function onDelete(td){
    if(confirm('Are you sure you want to delete this pet?'))
    row = td.parentElement.parentElement;
    document.getElementById("petList").deleteRow(row.rowIndex);
    resetForm();
}

function clearInputs(){
    //clear the inputs
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petWeight").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("contactPhone").value="";
}



function searchPet(){
    //getting the search string
    var searchString=document.getElementById('searchPet').value;
    //travel the array to search the string
    salon.pets.forEach(pet => {
        var petBox=document.getElementById(pet.id);
        console.log(petBox)
        //compare the search string with all the names
        if(pet.name.toLowerCase().includes(searchString.toLowerCase()) || pet.service.toLowerCase().includes(searchString.toLowerCase())){
            //highlight the element in the DOM
            petBox.classList.add('show');
        }else{
            console.log('Not here!');
            petBox.classList.remove('show');
            petBox.classList.add('hide');
        }
    });
        
        

}


function init(){
    console.log("init");
    var scooby=new Pet("Scooby",50,"Male","Dane",50, "Bath Services","Shaggy","555-555-5555");
    var scrappy=new Pet("Scrappy",40,"Male","Dane",75, "Full Service Grooming","Shaggy","666-666-6666");
    var genie=new Pet("Genie",5,"Female","Maltipoo",15, "Self-Service Pet Wash","Jane","777-777-7777");
    var pebbles=new Pet("Pebbles",2,"Female","Schnauzer",14,"Light Trim & Bath","Jane","888-888-8888");
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(genie);
    salon.pets.push(pebbles);
    displayPet();
    //hook events
    document.querySelector('#btn-register').addEventListener("click", registerPet);
    document.querySelector('#searchPet').addEventListener("keyup", searchPet);
    
}

window.onload=init;
