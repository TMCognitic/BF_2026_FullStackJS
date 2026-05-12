
function play() {
    const result = document.getElementById("oldResult");
    console.clear();
    let nombre;

    do {
        nombre = prompt("Entrez un nombre > 5 :");
    } while (isNaN(nombre) || Number(nombre) <= 5);

    let elements = new Array();
    for (let index = 0; index < nombre; index++) {
        let value;

        do {
            value = prompt(`Entrez le nombre ${index + 1} :`);
        } while (isNaN(value) || !value);

        console.log(`Le nombre encodé est : ${value}`);

        let foundIndex;

        let found = false;
        for (foundIndex = 0; !found && foundIndex < elements.length; foundIndex++) {
            if (elements[foundIndex] < value) {
                found = true;
            }
        }
        foundIndex--; // annule le dernier foundIndex++ de la boucle

        //Alternative
        // foundIndex = elements.findIndex(function(x) { return x < value; });
        // if(foundIndex !== -1) {
        if (found) {
            if (foundIndex === 0) {
                elements.unshift(value);
            }
            else {
                const startArray = elements.slice(0, foundIndex);
                startArray.push(value);
                const endArray = elements.slice(foundIndex);
                elements = startArray.concat(endArray);
            }
        }
        else {
            elements.push(value);
        }

        result.innerText = elements.join(", ");
        console.log('Le tableau encodé est', elements);
    }
}

//// Avec formulaire
let tab = [];
let size = -1;

const form = document.getElementById("form");
const label = document.getElementById("textLabel");
const error = document.getElementById("errorLabel");
const input = document.getElementById("valueInput");
const button = document.getElementById("submitButton");
const result = document.getElementById("result");

let count = 0;

form.addEventListener(`submit`, function (e) {
    e.preventDefault();

    error.innerText = "";
    let value = Number(input.value);
    input.value = "";

    if (isNaN(value) || !value) {
        error.innerText = "Entrez une valeur valide";
        return;
    }

    if (size === -1) {
        if (value < 5) {
            error.innerText = "Le tableau doit contenir au moins 5 éléments";
            return;
        }
        
        size = value;
        label.innerText = `Entrer la valeur :`;
        button.value = `Entrer la valeur ${count + 1} :`;
    }
    else {
        if(count === size)
            return;
        
        count++;        

        // if(count === size)
        // {
        //     form.className = "hidden";
        // }

        console.log(`Le nombre encodé est : ${value}`);
        
        console.log(`égalité : ${count === size} ${typeof(count)} ${typeof(size)}`);
        console.log(`size : ${size} - count : ${count}`);
        
        
        button.value = `Entrer la valeur ${count + 1} :`;

        let foundIndex;

        let found = false;
        for (foundIndex = 0; !found && foundIndex < tab.length; foundIndex++) {
            if (tab[foundIndex] < value) {
                found = true;
            }
        }
        foundIndex--; // annule le dernier foundIndex++ de la boucle

        //Alternative
        // foundIndex = elements.findIndex(x => x < value);
        // if(foundIndex !== -1)

        if (found) {
            if (foundIndex === 0) {
                tab.unshift(value);
            }
            else {
                const startArray = tab.slice(0, foundIndex);
                startArray.push(value);
                const endArray = tab.slice(foundIndex);
                tab = startArray.concat(endArray);
            }
        }
        else {
            tab.push(value);
        }

        result.innerHTML = "";

        tab.forEach(v => {
            const child = document.createElement("li");
            child.innerText = v;
            result.append(child);
        });
        
        console.log('Le tableau encodé est', tab);        
    }
});