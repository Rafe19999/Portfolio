const scriptURL = 'https://script.google.com/macros/s/AKfycbwfgRObkM_DC2GwhDMaxk7dAjt4YLBYt8P4zdnsYM1hQKTatEPqlQkMhrCrp9Lbn_hyJA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit',e =>{
  e.preventDefault()
  fetch(scriptURL, { method: 'POST',body: new FormData(form)})
  .then(Response => alert("Thank you! your form is submitted successfully."))
  .then(() => { window.location.reload();})
  .catch(error => console.error('Error!',error.message))
})