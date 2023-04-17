const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const subject = "Data Subject Access Request";
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('From', email);
  headers.append('Reply-To', email);

  fetch('https://example.com/send-email', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      to: 'contact@vintsweden.se',
      subject: subject,
      body: body
    })
  })
  .then(response => {
    if (response.ok) {
      console.log('Your message has been sent successfully.');
    } else {
      console.log('Sorry, there was a problem sending your message.');
    }
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
});