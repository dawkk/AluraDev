const likeIcon = document.querySelectorAll('.like')

likeIcon.forEach(function (elem) {
  let isLikeGiven = false

  elem.addEventListener('click', function () {
    const paragraph = elem.querySelector('p')
    const iconColor = elem.querySelector('i')

    let likeCount = Number(paragraph.innerText)

    if (isLikeGiven) {
      paragraph.innerText = likeCount - 1
      iconColor.style.color = 'white'
      isLikeGiven = false
    } else {
      paragraph.innerText = likeCount + 1
      iconColor.style.color = 'red'
      isLikeGiven = true
    }
  })
})
