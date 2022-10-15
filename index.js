const drawElements = (response) => {
    const div = document.getElementById('root');

    for(let elem of response) {
        const text = document.createTextNode(JSON.stringify(elem));
        const newDiv = document.createElement('div');
        newDiv.appendChild(text);
        div.appendChild(newDiv);
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => drawElements(json));