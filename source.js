const asclist1 = ['U0815', 'U0845', 'U0915', 'U0945', 'U1015', 'U1045', 'U1115', 'U1145', 'U1215', 'U1245', 'U1315', 'U1345', 'U1415', 'U1445', 'U1515', 'U1545', 'U1615', 'U1645', 'U1715', 'U1745', 'M0815', 'M0845', 'M0915', 'M0945', 'M1015', 'M1045', 'M1115', 'M1145', 'M1215', 'M1245', 'M1315', 'M1345', 'M1415', 'M1445', 'M1515', 'M1545', 'M1615', 'M1645', 'M1715', 'M1745', 'T0815', 'T0845', 'T0915', 'T0945', 'T1015', 'T1045', 'T1115', 'T1145', 'T1215', 'T1245', 'T1315', 'T1345', 'T1415', 'T1445', 'T1515', 'T1545', 'T1615', 'T1645', 'T1715', 'T1745', 'W0815', 'W0845', 'W0915', 'W0945', 'W1015', 'W1045', 'W1115', 'W1145', 'W1215', 'W1245', 'W1315', 'W1345', 'W1415', 'W1445', 'W1515', 'W1545', 'W1615', 'W1645', 'W1715', 'W1745',]
const asclist2 = ['H0815', 'H0845', 'H0915', 'H0945', 'H1015', 'H1045', 'H1115', 'H1145', 'H1215', 'H1245', 'H1315', 'H1345', 'H1415', 'H1445', 'H1515', 'H1545', 'H1615', 'H1645', 'H1715', 'H1745', 'F0815', 'F0845', 'F0915', 'F0945', 'F1015', 'F1045', 'F1115', 'F1145', 'F1215', 'F1245', 'F1315', 'F1345', 'F1415', 'F1445', 'F1515', 'F1545', 'F1615', 'F1645', 'F1715', 'F1745', 'S0815', 'S0845', 'S0915', 'S0945', 'S1015', 'S1045', 'S1115', 'S1145', 'S1215', 'S1245', 'S1315', 'S1345', 'S1415', 'S1445', 'S1515', 'S1545', 'S1615', 'S1645', 'S1715', 'S1745']

function toggleOpen() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  currentDate = new Date();
  startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) /
      (24 * 60 * 60 * 1000));
      
  var weekNumber = Math.ceil(
      (currentDate.getDay() + 1 + days) / 7);
  document.getElementById("weekNumber").innerHTML = "Week " + weekNumber + "/52";


function init() {

fetch("./b.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
  var dropdown = document.getElementById("myDropdown")
  for (var k in jsondata) {
    var div = document.createElement("div")
    var option = document.createElement("a");
    option.className = "task__name";
    option.id = k;
    option.innerHTML = k;
    div.appendChild(option)
    //PUT FUNCTION HERE
    div.onclick = (k) => {
      const id = k.path[0].id

      var test = document.getElementById("myInput")
      test.innerHTML = id;

      var test2 = document.getElementById("test2")
      //test2.innerHTML = jsondata[id]
      const temp = jsondata[id]
      const times = []

      
      for (const sub of temp) {
        const x = sub[0]
        const arr2 = x.split(", ")
        const y = sub[1]
        const arr3 = y.split(",")
        times.push(arr2)
        times.push(arr3)
      }
      console.log(times)
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      for (let i of times){
        let element = i
        if (element == times[0] || element == times[2] || element == times[4]){

        if (asclist1.indexOf(element[0]) != -1) {
        for (let j = asclist1.indexOf(element[0]); j++; j <= asclist1.indexOf(times[times.indexOf(element)+ 1][0])){
            if (j < asclist1.indexOf(times[times.indexOf(element)+ 1][0])) {
            let m = asclist1[j]
            document.getElementById(m).style.backgroundColor = "#" + randomColor;
            }
            else{break}
        }
        }

        if (asclist2.indexOf(element[0]) != -1) {
        for (let j = asclist2.indexOf(element[0]); j++; j <= asclist2.indexOf(times[times.indexOf(element)+ 1][0])){
            if (j < asclist2.indexOf(times[times.indexOf(element)+ 1][0])) {
            let m = asclist2[j]
            document.getElementById(m).style.backgroundColor = "#" + randomColor;
            }
            else {break}
            }
          }
    
        }
      } 

    }
    dropdown.appendChild(div) 
  }
   

});

}


