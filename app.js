document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    // const number = document.querySelector('input[type="number"]').value;
    console.log('workiing ')
    let category = document.getElementById('myjoke').value
    console.log(category)
    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}1`, true)
    
    xhr.onload = function(){
        
        if(this.status === 200){
            console.log(this.response)
            const response = JSON.parse(this.responseText);


            let output = '';

            output += `<li>THE JOKE : ${response.value} 😂🤣</li>` 
            document.querySelector('.jokes').innerHTML = output;
        } else {
            let errorMsg = `Error: ${this.status}` ;
            console.log(errorMsg)
            let output = '';
            output += `<li> ${errorMsg} 🤦‍♂️</li>` ;
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault()
}
