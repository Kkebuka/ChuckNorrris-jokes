document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    // const number = document.querySelector('input[type="number"]').value;
    console.log('workiing ')
    let category = document.getElementById('myjoke').value
    console.log(category)
    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}`, true)
    
    xhr.onload = function(){
        
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response)
   
            let output = '';

            output += `<li>THE JOKE : ${response.value} 😂🤣</li>` 
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault()
}
