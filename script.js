document.addEventListener('DOMContentLoaded', function () {
  const pepperonis = document.querySelectorAll('.pepperoni')
  const mauraButtonsDiv = document.querySelector('#maura-button-container')

  // javaScript for generating buttons
  const createMauraButtons = i => {
    let button = document.createElement('button') // create button
    button.classList.add('maura-button', 'button', 'margin-small') // add classes
    button.setAttribute('id', i) // add id
    button.onclick = () => updateTopping(button.id) // add onclick function to each button
    let image = document.createElement('img') // add image child
    image.classList.add('maura-thumbnail')
    image.setAttribute('src', `assets/maura/${i}.png`)
    button.appendChild(image)
    mauraButtonsDiv.appendChild(button)
  }

  //generate 12 buttons
  for (i = 0; i < 12; i++) {
    createMauraButtons(i)
  }

  const updateTopping = pictureId => {
    // update each pepperoni with the background picture
    pepperonis.forEach(pepperoni => {
      pepperoni.setAttribute('fill', `url(#${pictureId})`)
    })
  }
})
