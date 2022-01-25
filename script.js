//console.log("hello");
let filterInput = document.getElementById("filterInput");
filterInput.addEventListener('keyup',filterNames);
function filterNames(){
  //get the value of input function 
  let filterValue=document.getElementById('filterinput').value.toUpperCase();
  //get names ul
  let ul=document.getElementById("names");
  let li=ul.querySelectorAll("li.collection-item");
  //loop through collection items
  for(let i=0;i<li.length;i++)
  {
      let a = li[i].getElementsByTagName('a')[0];
      // if matched
      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1 ){
          li[i].style.display='';
      }
      else{
          li[i].style.display='none';
      }
  }
}

