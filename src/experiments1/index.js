$(() => {

  //скрываем элемент с атрибутом align="center"
  // P.S. тут я использовал fadeOut() и fadeIn(),
  // потому что они имеют красивее анимации,
  // нежели hide() и show()
  $('.hideBtn').click(() =>{
    $('p[align="center"]').fadeOut(500)
  })

  //показываем элемент с атрибутом align="center"
  $('.showBtn').click(() => {
    $('p[align="center"]').fadeIn(500)
  })
})