document.addEventListener('DOMContentLoaded', function () {
  const pepperonis = document.querySelectorAll('.pepperoni')
  const mauraButtons = document.querySelectorAll('.maura-button')
  console.log(typeof mauraButtons)
  const mauraButtonsDiv = document.querySelector('#maura-button-container')
  const defs = document.querySelector('#defs')

  // javaScript for generating patterns
  const createPatterns = i => {
    let pattern = document.createElement('pattern') // create button
    pattern.setAttribute('id', i) // add id
    pattern.setAttribute('patternUnits', 'objectBoundingBox')
    pattern.setAttribute('width', '100%')
    pattern.setAttribute('height', '100%')
    pattern.setAttribute('viewBox', '0 0 1 1')
    pattern.setAttribute('preserveAspectRatio', 'xMidYMid slice')

    let image = document.createElement('image') // add image child
    image.setAttribute('href', `assets/maura/${i}.png`)
    image.setAttribute('width', '1')
    image.setAttribute('height', '1')
    image.setAttribute('preserveAspectRatio', 'none')
    pattern.appendChild(image)
    defs.appendChild(pattern)
  }

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

  for (i = 0; i < 12; i++) {
    createPatterns(i)
    createMauraButtons(i)
  }

  const updateTopping = pictureId => {
    // update each pepperoni with the background picture
    pepperonis.forEach(pepperoni => {
      pepperoni.setAttribute('fill', `url(#${pictureId})`)
    })
  }
})
