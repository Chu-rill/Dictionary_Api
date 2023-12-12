let display = document.querySelector('.diff');
let btn = document.querySelector('button');
let input = document.querySelector('.word');

function getData() {
  let word = input.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.length > 0) {
        const meanings = data[0].meanings;

        if (meanings.length > 0) {
          const definitions = meanings[0].definitions;

          if (definitions.length > 0) {
            const plainTextValue = definitions[0].definition;
            display.innerHTML = plainTextValue;
          } else {
            display.innerHTML = "No definitions found.";
          }
        } else {
          display.innerHTML = "No meanings found.";
        }
      } else {
        display.innerHTML = "No data found.";
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

btn.addEventListener('click', getData);
