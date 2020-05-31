$(() => {

  console.log('index')

  const paragraphs = $('p:odd');

  $.each(paragraphs, (index, element) => {
    $(element).click(() => {
      $(element).fadeOut(500)
    })
  })
})