var wordNum = word.length; //Ukupan broj reci
var includedWords = []; //Pamcenje rednog broja vec objasnjenih reci
var notes = new String(""); //ovde html za objasnjenja


function theMain(){
    var allTheP = document.getElementsByTagName("p"); //Handle list za svaki <p>
    var allTheLi = document.getElementsByTagName("li");
    var howMuchP = allTheP.length;
    var howMuchLi = allTheLi.length;
    console.log("howMuchP: " + howMuchP);
    var paragraph = new String(""); //Promenjiva za drzanje <p>

    for(aplpha=0; aplpha<howMuchP; aplpha++){ //Prolazak kroz sve <p>
        paragraph = allTheP[aplpha].innerHTML; //Citanje sledeceg <p>
        paragraph = replacement(paragraph); //Funkcija koja svakom <p> nadogradjuje kriticnu rec sa linkom i *
        allTheP[aplpha].innerHTML = paragraph; //Updatovanje <p>
    }

    for(aplpha=0; aplpha<howMuchLi; aplpha++){ //Prolazak kroz sve <p>
        paragraph = allTheLi[aplpha].innerHTML; //Citanje sledeceg <p>
        paragraph = replacement(paragraph); //Funkcija koja svakom <p> nadogradjuje kriticnu rec sa linkom i *
        allTheLi[aplpha].innerHTML = paragraph; //Updatovanje <p>
    }

    var footnotes = document.getElementById("footnotes"); //Ako vec ima div
    if(footnotes == null){// Ako je prvo pokretanje skripte
        var elementi = document.getElementsByTagName("body"); // Dobija niz elemenata tipa body
        elementi[0].insertAdjacentHTML('beforeend', '<div id="footnotes"></div><!--Icon made by Freepik from www.flaticon.com-->'); // Prvi i jednini body
        footnotes = document.getElementById("footnotes"); //Napisati posle svih ostalih elemenata
    }
    footnotes.innerHTML = notes + "<a id='toTop' href='#content'>Back to top</a>";
}

function replacement(paragraph) {
    for(beta=0; beta<wordNum; beta++){ //nije mogao i svuda beacuse JS
        var trazeniRegEx =  new RegExp("[^a-z]" + word[beta] + "[^a-z]|^" + word[beta] + "[^a-z]", "gi");
        paragraph = paragraph.replace(trazeniRegEx, function (match, offset, par){ //Ako nadje rec
            var test = includedWords.indexOf(beta); //Index of trazi rec u nizu ako nema -1
            var matchedWords = includedWords.length;
            if(test == -1){ //Ako rec nije ranije nadjena
                includedWords[matchedWords] = beta; //Zapis da je nadjena
                notes += "<p class='dP' id='" + beta + "'><b>" + word[beta] + "</b> - " + definition[beta] + "</p>"; //Zapis u html fajl
            }
            var matchLength = match.length;
            var final = new String("");
            if(word[beta].length == matchLength+2){ //Kod za slucaj da je pocetak reda
                y = match.slice(1, matchLength - 1); 
                final = match[0] + "<a class='dLink' data-balloon-length='medium' data-balloon='" + definition[beta] + "'data-balloon-pos='right' href='#" + beta + "' >" + y +"</a>" + match[matchLength - 1];//Replace fraza
            }else{
                y = match.slice(0, matchLength -1);
                final = "<a class='dLink' data-balloon-length='medium' data-balloon='" + definition[beta] + "'data-balloon-pos='right' href='#" + beta + "' >" + y +"</a>" + match[matchLength - 1];//Replace fraza
            }

            preText = par.slice(0,offset); //If text in link don't change
            if(preText.lastIndexOf("<a") > preText.lastIndexOf("</a>")){
                final = match;
            }

            return final;
        });
    }

    return paragraph; 
}

if(definition.length == wordNum){
    theMain();
}
console.log("Definicije: " + definition.length);
console.log("Reci: " + wordNum);

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target. offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not 
if(definition.length == wordNum){
    theMain();
}focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });