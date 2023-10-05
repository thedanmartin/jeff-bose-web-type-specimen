

const weights = ['100','300','400','500','700','800','900']
let aztext;
let customtext;
let weightbtns;

let azelement
let weightstyle

function StartUp() {
    aztext = document.getElementById("AZ");
    customtext = document.getElementById("customtext");
    weightbtns = document.getElementsByClassName('weightbtn');
    azelement = document.querySelector('#AZ');
    weightstyle = getComputedStyle(azelement);

    for(let i = 0; i<weightbtns.length;i++) {
        weightbtns[i].style.fontWeight = weights[i];
        weightbtns[i].style.fontstyle = 'normal';
    }

}

function ChangeAZWeight(weight) {
    aztext.style.fontWeight = weight;
    customtext.style.fontWeight = weight;
}

function ChangeAZWeightLeft() {
    let index = weights.indexOf(weightstyle.fontWeight);
    aztext.style.fontWeight = weights[index - 1];
    customtext.style.fontWeight = weights[index - 1];
}

function ChangeAZWeightRight() {
    let index = weights.indexOf(weightstyle.fontWeight);
    aztext.style.fontWeight = weights[index + 1];
    customtext.style.fontWeight = weights[index + 1];
}


