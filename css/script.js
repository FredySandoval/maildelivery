function change(){
    let x = document.querySelector('.email').value
    let y = document.querySelector('.update').innerHTML 

    if (x == "" || x == null || y !== "Valid Email!") {
        alert("An email address is required!");
        return false;
      } else {
        let email = document.querySelector('.email').value;
        sending(email);

      }

}

const sending = async (email) => {
  const emailaddress = { username: email };
  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(emailaddress)
  }

  const emailresponse = await fetch('https://me.fredy.dev/api', options)
  const emailjson = await emailresponse.json();
  console.log(emailjson.receive + " to " + emailaddress.username);
  if(emailresponse){
    document.querySelector('button').disabled = true;
    document.querySelector('.button').textContent = 'SENT OK';
    document.querySelector('button').style.color = 'black';
    document.querySelector('button').style.backgroundColor = 'rgba(0, 255, 0, .6'
    document.querySelector('.success').innerText = emailjson.receive + " to " + emailaddress.username;

  }
}
//Email Validator

const email = document.querySelector('.email');
const update = document.querySelector('.update');

// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)
email.addEventListener('input', inputEmail);

function inputEmail(e) {
  const input = e.target.value;
  // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
  // Why: because we don't want to start validating before the user has started typing; after that it's fair game
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'Valid Email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'Keep Going...';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};


