let dateInput = document.getElementById("date"); //user input date
dateInput.max = new Date().toISOString().split("T")[0]; //to restrict choosing future dates
let result = document.getElementById("result");

/************************************************************************
 function to calculate age based on the user given input
*************************************************************************/
function calculateAge() {
    //user given date and its day, month, year
    let birthDate = new Date(dateInput.value);
    // console.log(dateInput.value);
    // console.log(birthDate);
    
    let date = birthDate.getDate();
    let month = birthDate.getMonth() + 1;
    let year = birthDate.getFullYear();

    // current date and its day, month, year
    let today = new Date();

    let curDate = today.getDate();
    let curMonth = today.getMonth() + 1;
    let curYear = today.getFullYear();

    //calculating the years, months and days of age 
    let dd, mm, yy;

    yy = curYear - year;
    if(curMonth >= month) {
        mm = curMonth - month;
    }
    else {
        yy --;
        mm = 12 + curMonth - month;
    }

    if(curDate >= date) {
        dd = curDate - date;
    }
    else {
        mm--;
        dd = getDaysInMonth(year, month) + curDate - date;
    }
    if(mm < 0){
        mm = 11;
        yy--;
    }
    if(dateInput.value === ""){
        alert("Please enter your birthday!")
    }
    else{
        result.innerHTML = `You are <span>${yy}</span> years, <span>${mm}</span> months and <span>${dd}</span> days old!`
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

