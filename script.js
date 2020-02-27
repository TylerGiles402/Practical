var wrapperEle = document.body.querySelector(".wrapper");
var nameList = [
  {
    name:"Harry",
    age:25,
  },
  {
    name:"Larry",
    age:15,
  },
  {
    name:"Bert",
    age:45
  },
  {
    name:"Jerry",
    age:35
  },
  {
    name:"Berry",
    age:5
  },
  {
    name:"Bart",
    age:55
  }
];
for (var i = 0; i < nameList.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML = nameList[i].name+" "+nameList[i].age;
  
  if (nameList[i].name == "Larry") {
    ele.style.color = "Blue";
  }
    
  if (nameList[i].name == "Bert") {
    ele.style.color = "Red";
  }
  
  if (nameList[i].name == "Berry") {
    ele.style.color = "Blue";
  }
  
  if (nameList[i].name == "Bart") {
    ele.style.color = "Red";
  }
  
  wrapperEle.appendChild(ele);
}

var valueEle = 
document.body.querySelector(".value");
var numberEle = 
document.body.querySelector(".number");
var number=0;
numberEle.innerHTML=number;

function value(){
  number=number+1;
  numberEle.innerHTML=number;
}

valueEle.addEventListener("click", function(){
  value();
})