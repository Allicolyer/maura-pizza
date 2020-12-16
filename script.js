document.addEventListener('DOMContentLoaded', function () {
  const numberOfMauras = 11
  // parts of the pizza
  const pepperonis = document.querySelectorAll('.pepperoni')
  const pepperoniBackgrounds = document.querySelectorAll(
    '.pepperoni-background'
  )

  const orangeSquiggles = document.querySelectorAll('.squiggle-orange')
  const greenSquiggles = document.querySelectorAll('.squiggle-green')
  const pizzaSpecs = document.querySelectorAll('.pizza-spec')
  const sliceLines = document.querySelectorAll('.slice-line')

  const pieFill = document.querySelector('.pie-fill')
  const mauraButtonsDiv = document.querySelector('#maura-button-container')
  const colorButtonsDiv = document.querySelector('#color-button-container')
  const extraButtonsDiv = document.querySelector('#extra-button-container')
  const resetButtonDiv = document.querySelector('#reset-button-container')

  // javaScript for generating buttons
  const createMauraButton = i => {
    let button = document.createElement('button') // create button
    button.classList.add('maura-button', 'button', 'margin-small') // add classes
    button.setAttribute('id', i) // add id
    button.onclick = () => updateTopping(button.id) // add onclick function to each button
    let image = document.createElement('img') // add image child
    image.classList.add('thumbnail')
    image.setAttribute('src', `assets/maura/${i}.png`)
    button.appendChild(image)
    mauraButtonsDiv.appendChild(button)
  }

  //create a button that updates each topping with any picture
  const createRandomButton = () => {
    let button = document.createElement('button') // create button
    button.classList.add('random-button', 'button', 'margin-small') // add classes
    button.setAttribute('id', 'randomButton') // add id
    button.onclick = () => updateToppingRandomly() // add onclick function to each button
    let span = document.createElement('span') // add image child
    span.innerHTML = '?'
    span.classList.add('button-text')
    button.appendChild(span)
    mauraButtonsDiv.appendChild(button)
  }

  const createColorButton = color => {
    let button = document.createElement('button') // create button
    button.classList.add('color-button', 'button', 'margin-small') // add classes
    button.setAttribute('id', color) // add id
    button.style.backgroundColor = color // add id
    button.style.borderColor = color // add id
    button.onclick = () => updatePieColor(color) // add onclick function to each button
    colorButtonsDiv.appendChild(button)
  }
  const createExtraButton = type => {
    let button = document.createElement('button') // create button
    button.classList.add('extra-button', 'button', 'margin-small') // add classes
    button.setAttribute('id', type.name) // add id
    button.onclick = () => toggleExtra(type.collection) // add onclick function to each button
    let image = document.createElement('img') // add image child
    image.classList.add('thumbnail')
    image.setAttribute('src', `assets/extras/${type.name}.png`)
    button.appendChild(image)

    extraButtonsDiv.appendChild(button)
  }
  //create a button that updates each topping with any picture
  const createResetButton = () => {
    let button = document.createElement('button') // create button
    button.classList.add('button', 'margin-small') // add classes
    button.setAttribute('id', 'reset-button') // add id
    button.onclick = () => location.reload() // add onclick function to each button
    let span = document.createElement('span') // add image child
    span.innerHTML = 'Reset'
    span.classList.add('button-text')
    button.appendChild(span)
    resetButtonDiv.appendChild(button)
  }

  const updateTopping = pictureId => {
    // update each pepperoni with the background picture
    pepperonis.forEach(pepperoni => {
      pepperoni.style.visibility = 'visible'
      pepperoni.setAttribute('fill', `url(#${pictureId})`)
    })
    pepperoniBackgrounds.forEach(pepperoni => {
      pepperoni.style.visibility = 'visible'
    })
  }
  const updateToppingRandomly = () => {
    // update each pepperoni with a random picture
    pepperonis.forEach(pepperoni => {
      const pictureId = Math.floor(Math.random() * numberOfMauras)
      pepperoni.style.visibility = 'visible'
      pepperoni.setAttribute('fill', `url(#${pictureId})`)
    })
    pepperoniBackgrounds.forEach(pepperoni => {
      pepperoni.style.visibility = 'visible'
    })
  }

  const updatePieColor = color => {
    //update color of pie
    pieFill.setAttribute('fill', color)
  }

  const toggleExtra = collection => {
    //update color of pie
    collection.forEach(extra => {
      if (extra.style.visibility === 'visible') {
        extra.style.visibility = 'hidden'
      } else {
        extra.style.visibility = 'visible'
      }
    })
  }
  // when site runs
  for (i = 0; i < numberOfMauras; i++) {
    createMauraButton(i)
  }
  createRandomButton()
  ;[
    '#fef0bd',
    'maroon',
    'Khaki',
    'brown',
    'yellow',
    'olive',
    'blue',
    'purple',
    'aquamarine',
    'hotpink',
    'darkslategray',
    'lime'
  ].forEach(color => createColorButton(color))

  // create an extra for each type
  ;[
    { name: 'orangeSquiggle', collection: orangeSquiggles },
    { name: 'greenSquiggle', collection: greenSquiggles },
    { name: 'pizzaSpec', collection: pizzaSpecs },
    { name: 'sliceLine', collection: sliceLines }
  ].forEach(type => createExtraButton(type))
  createResetButton()
})
