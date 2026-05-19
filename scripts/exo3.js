console.log(`Script Loaded`);

const nb1Input = document.getElementById("nb1");
const nb2Input = document.getElementById("nb2");
const resultInput = document.getElementById("result");
const btnAddition = document.getElementById("btnAddition");
const btnSoustraction = document.getElementById("btnSoustraction");
const btnMultiplication = document.getElementById("btnMultiplication");
const btnDivision = document.getElementById("btnDivision");

if(!btnAddition)
    console.error('btnAddition is not set');
    
btnAddition.addEventListener('click', function(){
    console.log('Clique sur addition');        
    compute(function(x, y) { return x + y; });
});

if(!btnSoustraction)
    console.error('btnSoustraction is not set');

btnSoustraction.addEventListener('click', function(){
    console.log('Clique sur soustraction');
    compute(function(x, y) { return x - y; });
});

if(!btnMultiplication)
    console.error('btnMultiplication is not set');

btnMultiplication.addEventListener('click', function(){
    console.log('Clique sur multiplication');
    compute(function(x, y) { return x * y; });
});

if(!btnDivision)
    console.error('btnDivision is not set');

btnDivision.addEventListener('click', function(){
    console.log('Clique sur division');
    compute(function(x, y) { return x / y; });
});

function compute(func)
{
    if(nb1Input.value === '')
    {
        console.warn(`nombre 1 is not set`);        
        nb1Input.focus();
        return;
    }

    if(nb2Input.value === '')
    {
        console.warn(`nombre 2 is'nt set`);        
        nb2Input.focus();
        return;        
    }

    let nb1 = Number(nb1Input.value);
    let nb2 = Number(nb2Input.value);

    resultInput.value = func(nb1, nb2);
}