const div = document.getElementById('cont')

const getImg = async () => {
  const response = await fetch(
    'https://dog.ceo/api/breed/hound/images/random/10',
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((e) => console.log(e))

  return response
}

// const addEle = (oneimg) => {
//   const img = document.createElement('img')
//   img.src = oneimg
//   div.appendChild(img)
// }

let img = getImg()
console.log(img.message)

// map((a) => {
//   console.log(a)
// })
