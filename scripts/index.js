const url = "https://huairanimrod.github.io/TA/presentations.json";

// const URL = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json"

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayPresentations(data.presentation);
}

getProphetData(url);

const displayPresentations = (students) => {
  const cards = document.querySelector('div.cards'); // select the output container element

  students.sort(function(a,b){
    return a.week - b.week;
  });


  students.forEach((student) => {
    // Create elements to add to the div.cards element
    
    let card = document.createElement('section');
    let h4 = document.createElement('h4');
    let paragraph = document.createElement('p');

    
    // Build the h2 content out to show the prophet's full name - finish the template string
    h4.textContent = student.name;

    // Build the paragraph
   
    paragraph.textContent = `${student.topic} - ${student.week}`;
    
    // Append the section(card) with the created elements
    
    card.appendChild(h4);
    card.appendChild(paragraph);

    cards.appendChild(card);
  }) // end of forEach loop
} // end of function expression


