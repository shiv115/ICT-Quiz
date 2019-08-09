//use strict
// vragen Arrays
var pos = 0, question, correct = 0;
var x = document.getElementById(x);
    var questions = [
       ["var name = 'peter parker'. Van welk datatype is deze zin een voorbeeld van?", "A.number", "B.string", "C.boolean", "D.object", "B"],
       ["noem een voorbeeld van een inline element", "A.table", "B.article", "C.p", "D.span", "C"],
       ["Waar staat HTML voor?", "A.HyperText Markup Languange", "B.Hypertest Markup Language", "C. Hyper text Markup Language", "D.Hypertest Makeup Lang", "A"],
       ["Wat is een (javascrip)Variabele?", "A.Een container die data vasthoudt", "B.Een functie", "C.Een datatype", "D.Een manier om de functies uit te voeren", "A"],
       ["Wat is de functie van '//' in JavaScript?", "A. Het voert een functie uit", "B.Je kan door middel van die code een stukje tekst schrijven die door JS genegeerd wordt", "C.Het roept een functie op", "D. All of the above", "B"],
       ["'var nummer = 10' Van Welk datatype is deze zijn een voorbeeld van?", "A.string", "B.Boolean", "C.number", "D.object", "C"],
       ["Wat doet een function?", "A.Het voert meerdere taken uit ", "B.Het voert een bepaalde taak uit", "C.het roept een taak op", "D.geen van de bovenstaande antwoorden", "B"],
       ["Wat is een Commit?", "A.je stuurt informatie naar git", "B.je importeert informatie", "C.je publiceert informatie", "D.je slaat informatie op", "D"],
       ["Wat doet de git add command?", "A.het voegt een verandering van de working directory naar de staging area toe ", "B.het legt je verandering in je code vast", "C.het stuurt je code toe naar de server", "D. alle genoemde antwoorden", "A"],
       ["|var x = true;| Van welk datatype is deze zin een voorbeeld van?", "A.number", "B.string", "C.boolean", "D.object", "C"],
       ["Math.round(4.7);. wat geeft te return terug?", "A.4", "B.5", "C. 4.7", "D.4.5", "B"],
       ["Math.floor(Math.random() * 10); welk getal komt er in de return tevoorschijn", "A.11", "B.17", "C.100", "D. geen van de bovenstaande antwoorden", "D"],
       ["Met welke Javascript syntax kan je de content van de HTML veranderen?", "A.document.getElementById('voorbeeld').innerHTML='no u';", "B.document.getElement('voorbeeld').innerHTML='dit is het goede antwoord';", "C.document.getId('voorbeeld')='nee dit';", "D.document.getElementById('voorbeeld').innerHTML=no u;", "A"],
       ["Met welke code krijg ik een alert op mijn scherm met de tekst 'nee jij?'", "A.alertbox(“nee jij”);", "B.alert(“nee jij”);", "C.msgbox(“nee jij”);", "D.msg(“nee jij”);", "B"],
       ["welke functies worden door de QUIZ-API ondersteund??", "A.Het controleren van een studentnummer ", "B.Het versturen van de score van een student ", "C.Het ophalen van de hoogste scores", "D.Alle genoemde antwoorden", "D"],
       ["Wat is de juiste manier om een javascript array te schrijven?", "A.var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "B.var colors = (1:'red', 2:'green', 3:'blue')", "C.var colors = ['red', 'green', 'blue']", "D.var colors = 'red', 'green', 'blue'", "C"],
       ["Wat event gebeurt er als de user op een HTML element klikt?", "A.onmouseclick", "B.onclick", "C.onmouseover", "D.onchange", "B"],
       ["Hoe declareer je een javascript variabele?", "A.var carName;", "B.variable carName;", "C.v carName;", "D.geen van de bovenstaande", "A"],
       ["Waar staat API voor?", "A.Application Programming interface", "B.Accecible Program Interface ", "C.Acceptable Programming Interface", "D.Acces Programming Interface", "A"],
       ["Wat is een API?", "A.een API is een verzameling definities op basis waarvan een computerprogramma niet kan communiceren met een ander programma of onderdeel", "B.een API is een middel waarmee een computerprogramma kan communiceren met een ander programma of onderdeel", "C.een API is een verzameling van codes op basis waarvan een computerprogramma kan communiceren met een ander programma of onderdeel", "D. een API is een verzameling definities op basis waarvan een computerprogramma kan communiceren met een ander programma of onderdeel", "D"],
    ];

    function x(){
        var x = document.getElementById(x);
        return document.getElementById(x);
    }
    function renderQuestion(){
        var chA = document.getElementById("chA");
        var chB = document.getElementById("chB");
        var chC = document.getElementById("chC");
        var chD = document.getElementById("chD");
        var quizResultaat = document.getElementById("quiz_resultaat");
        var score = document.getElementById("score");
        var quizStatus = document.getElementById("quiz_status");
        var quiz = document.getElementById("quizvraag");
        if(pos >= questions.length){
            showEindPagina();
            quizResultaat.innerHTML = "<h3>Je hebt "+correct+" van de "+questions.length+" vragen correct.<br><br> Je score is "+correct+"</h3>";
            pos = 0;
            correct = 0;
            renderQuestion();
            return false;
        }
        
        score.innerHTML = "<p>score: "+correct+"/ 20</p>";
        quizStatus.innerHTML = "Vraag "+(pos+1)+" van de "+questions.length;
        question = questions[pos][0];
        quiz.innerHTML = "<h3>"+question+"</h3>";
        chA.innerHTML = questions[pos][1];
        chB.innerHTML = questions[pos][2];
        chC.innerHTML = questions[pos][3];
        chD.innerHTML = questions[pos][4];
         
//checkAnser functie
    }
    function checkAnswer(choice){
        if(choice == questions[pos][5]){
            var score = document.getElementById("score");
            correct++;
            alert("Je hebt gekozen voor "+questions[pos][5]+"."+" Antwoord is correct, ga zo door!!!");
            score.innerHTML = "<p>score: "+correct+"/ 20</p>";
        } 
        else {
            alert("Je hebt gekozen voor "+choice+"."+" Antwoord is fout. Het juiste antwoord is " + questions[pos][5]);

        }
        
        pos++;
        renderQuestion();
    }
/**
 * Add actions to page buttons 
 */


 function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var studentNummerInput = document.getElementById("studentnummer");
    var checkButton = document.getElementById("checkbutton");
    var chA = document.getElementById("chA");
    var chB = document.getElementById("chB");
    var chC = document.getElementById("chC");
    var chD = document.getElementById("chD");

    

    window.addEventListener("load", renderQuestion, false);

    
    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    chA.addEventListener("click", function() {
        checkAnswer('A');
    });
    chB.addEventListener("click", function() {
        checkAnswer('B');
    });
    chC.addEventListener("click", function() {
        checkAnswer('C');
    });
    chD.addEventListener("click", function() {
        checkAnswer('D');
    });
    checkButton.addEventListener("click", function() {
        checkStudent(studentNummerInput.value);
    });
 }
 // eerst llr invoeren als je met quiz wilt beginnen

 

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var eindPagina = document.getElementById('eindpagina');
    startPage.style.display = 'none';   
    questionsPage.style.display = 'none';
    eindPagina.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');
    
    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
    
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');
    
    hideAllPages();

    page.style.display = 'block';

}
// Show einde pagina na de quiz
function showEindPagina(){
    var page = document.getElementById('eindpagina');
    hideAllPages();
    page.style.display = 'block';
}
/**
 * Check student number using the API
 */
function checkStudent(number) {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
            if (xHttp.status == 200) {
                studentIdentificationSucces(response);
            } else {
                studentIdentificationFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        studentIdentificationFailed(xHttp.statusText);
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
    xHttp.send();
}

/**
 * Student is successfully identified
 */
function studentIdentificationSucces(student) {
    console.info(student); // Een Javascript-object met studentnummer, voornaam en achternaam
    var showLlr = document.getElementById("showllr");
    var studentNummerInput = document.getElementById("studentnummer");
    alert("Je bent ingelogd!");
    showQuestionsPage();
    showLlr.innerHTML = "<p>naam: "+studentNummerInput.value+" </p>";

}


    
    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer klopt


/**
 * Student number is incorrect
 */
function studentIdentificationFailed(errorMessage) {
    console.error(errorMessage);
    alert("Leerlingnummer onbekend");
    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt
}

// Initialize
addButtonActions();
showStartPage();

