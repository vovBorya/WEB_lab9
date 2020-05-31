$(() => {
  // xxx@xxx.xxx
  const emailPattern = new RegExp('^[.\\-_A-Za-z0-9]+?@[.\\-A-Za-z0-9]+?\\.[A-Za-z0-9]{2,6}$');
  const namePattern = new RegExp('^\\D+$')
  $('.checkBtn').click(() => {
    
    const emailField = $('.emailField').val()
    const nameField = $('.nameField').val()
    
    const isDateCorrect = emailPattern.test(emailField) && namePattern.test(nameField)

    if (isDateCorrect) {
      alert('Data is correct')
    } else {
      alert('Data wrong!!!')
    }
  })
})