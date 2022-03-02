const total_months_year = 12;
const max_age = 90;
const max_life_months = total_months_year * max_age;
const max_months_in_row = 36;
const now_date = new Date;

let birth_month = document.querySelector('.birth-month');
const min_year = (new Date).getFullYear() - 90;
const min_month = String((new Date()).getMonth()+1).padStart(2, '0');
const max_year = (new Date).getFullYear();

birth_month.setAttribute("min", min_year+'-'+min_month);
birth_month.setAttribute("max", max_year+'-'+min_month);

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

document.getElementById('app').innerHTML = '<div class="life-month"></div>'.repeat(max_life_months)

function cleanGrid() {
    let divs = document.querySelectorAll("#app div");
    divs.forEach(div => div.classList.remove('life-month-used'))
}

function generateLivedLife() {
    cleanGrid();
    let year_month = document.querySelector('.birth-month').value;
    let year_month_parts = year_month.split('-');
    let birth_year  = parseInt(year_month_parts[0]);
    let birth_month = parseInt(year_month_parts[1])-1; // -1 is for JS Date api compatibility, january starts at 0 

    let my_birth_date = new Date(birth_year, birth_month, 1); 
    
    let total_months = monthDiff(my_birth_date, now_date);
    
    let divs = document.querySelectorAll("#app div");

    for (let counter = 0; counter < total_months; counter++) {
        divs[counter].classList.add('life-month-used');
    }

}


document.querySelector(".birth-month").addEventListener("change", generateLivedLife)
document.querySelector(".birth-month").addEventListener("blur", generateLivedLife)
