let countries = [
    ["_somaliland","Somaliland"],
    ["ae","United Arab Emirates"],
    ["af","Afghanistan"],
    ["al","Albania"],
    ["am","Armenia"],
    ["ao","Angola"],
    ["ar","Argentina"],
    ["at","Austria"],
    ["au","Australia"],
    ["az","Azerbaijan"],
    ["ba","Bosnia and Herzegowina"],
    ["bd","Bangladesh"],
    ["be","Belgium"],
    ["bf","Burkina Faso"],
    ["bg","Bulgaria"],
    ["bi","Burundi"],
    ["bj","Benin"],
    ["bn","Brunei"],
    ["bo","Bolivia"],
    ["br","Brazil"],
    ["bs","Bahamas"],
    ["bt","Bhutan"],
    ["bw","Botswana"],
    ["by","Belarus"],
    ["bz","Belize"],
    ["ca","Canada"],
    ["cd","Democratic Republic of the Congo"],
    ["cf","Central African Republic"],
    ["cg","Congo"],
    ["ch","Switzerland"],
    ["ci","Cote d'Ivoire"],
    ["cl","Chile"],
    ["cm","Cameroon"],
    ["cn","China"],
    ["co","Colombia"],
    ["cr","Costa Rica"],
    ["cu","Cuba"],
    ["cy","Cyprus"],
    ["cz","Czech"],
    ["de","Germany"],
    ["dj","Djibouti"],
    ["dk","Denmark"],
    ["do","Dominican Republic"],
    ["dz","Algeria"],
    ["ec","Ecuador"],
    ["ee","Estonia"],
    ["eg","Egypt"],
    ["eh","West Sahara"],
    ["er","Eritrea"],
    ["es","Spain"],
    ["et","Ethiopia"],
    ["fi","Finland"],
    ["fj","Fiji"],
    ["fk","Falkland Islands"],
    ["fr","France"],
    ["ga","Gabon"],
    ["gb","United Kingdom"],
    ["ge","Georgia"],
    ["gh","Ghana"],
    ["gl","Greenland"],
    ["gm","Gambia"],
    ["gn","Guinea"],
    ["gq","Equatorial Guinea"],
    ["gr","Greece"],
    ["gt","Guatemala"],
    ["gw","Guinea-Bissau"],
    ["gy","Guyana"],
    ["hn","Honduras"],
    ["hr","Croatia"],
    ["ht","Haiti"],
    ["hu","Hungary"],
    ["id","Indonesia"],
    ["ie","Ireland"],
    ["in","India"],
    ["iq","Iraq"],
    ["ir","Iran"],
    ["is","Iceland"],
    ["it","Italy"],
    ["jm","Jamaica"],
    ["jo","Jordan"],
    ["jp","Japan"],
    ["ke","Kenya"],
    ["kg","Kyrgyzstan"],
    ["kh","Cambodia"],
    ["kp","North Korea"],
    ["kr","South Korea"],
    ["kw","Kuwait"],
    ["kz","Kazakhstan"],
    ["la","Laos"],
    ["lb","Lebanon"],
    ["lk","Sri Lanka"],
    ["lr","Liberia"],
    ["ls","Lesotho"],
    ["lt","Lithuania"],
    ["lu","Luxembourg"],
    ["lv","Latvia"],
    ["ly","Libya"],
    ["ma","Morocco"],
    ["md","Moldova"],
    ["me","Montenegro"],
    ["mg","Madagascar"],
    ["mk","Macedonia"],
    ["ml","Mali"],
    ["mm","Myanmar"],
    ["mn","Mongolia"],
    ["mr","Mauritania"],
    ["mw","Malawi"],
    ["mx","Mexico"],
    ["my","Malaysia"],
    ["mz","Mozambique"],
    ["na","Namibia"],
    ["nc","New Caledonia"],
    ["ne","Niger"],
    ["ng","Nigeria"],
    ["ni","Nicaragua"],
    ["nl","Netherlands"],
    ["no","Norway"],
    ["np","Nepal"],
    ["nz","New Zealand"],
    ["om","Oman"],
    ["pa","Panama"],
    ["pe","Peru"],
    ["pg","Papua New Guinea"],
    ["ph","Philippines"],
    ["pk","Pakistan"],
    ["pl","Poland"],
    ["pr","Puerto Rico"],
    ["ps","Palestine"],
    ["pt","Portugal"],
    ["py","Paraguay"],
    ["qa","Qatar"],
    ["ro","Romania"],
    ["rs","Serbia"],
    ["ru","Russia"],
    ["rw","Rwanda"],
    ["sa","Saudi Arabia"],
    ["sb","Solomon Islands"],
    ["sd","Sudan"],
    ["se","Sweden"],
    ["sg","Singapore"],
    ["si","Slovenia"],
    ["sk","Slovakia"],
    ["sl","Sierra Leone"],
    ["sn","Senegal"],
    ["so","Somalia"],
    ["sr","Suriname"],
    ["ss","South Sudan"],
    ["sv","El Salvador"],
    ["sy","Syria"],
    ["sz","Swaziland"],
    ["td","Chad"],
    ["tf","Fr. S. Antarctic Lands"],
    ["tg","Togo"],
    ["th","Thailand"],
    ["tj","Tajikistan"],
    ["tl","Timor-Leste"],
    ["tm","Turkmenistan"],
    ["tn","Tunisia"],
    ["tr","Turkey"],
    ["tt","Trinidad and Tobago"],
    ["tw","Taiwan"],
    ["tz","Tanzania"],
    ["ua","Ukraine"],
    ["ug","Uganda"],
    ["us","United States"],
    ["uy","Uruguay"],
    ["uz","Uzbekistan"],
    ["ve","Venezuela"],
    ["vn","Vietnam"],
    ["vu","Vanuatu"],
    ["ye","Yemen"],
    ["za","South Africa"],
    ["zm","Zambia"],
    ["zw","Zimbabwe"],
];

let randArray = [];

function ArrayRandomizer (){
    for ( i=0 ; i < 4 ; i++){  
        let num1 = Math.floor(Math.random() * countries.length);
        randArray.push(countries[num1]);
    }

};

function correctPicker(){
    let num2 = Math.floor(Math.random() * 4);
    let correct = randArray[num2][0];
    console.log(correct);
};

function display (){
    for ( i=0 ; i < 4 ; i++){  
        let button = document.getElementsByClassName("b");
        button[i].textContent = randArray[i][1];
    }
};


function timer() {
    let total = 1;
    let time = document.getElementById("time");

    setInterval(function() {
        let minutes = Math.floor(total / 60);
        let seconds = total % 60;
        if (minutes > 0) {
            time.innerHTML = minutes + "m " + seconds + "s";
        } else {
            time.innerHTML = seconds + "s";
        }
        total++;
    }, 1000);
}


ArrayRandomizer ();

correctPicker();

display();

timer();