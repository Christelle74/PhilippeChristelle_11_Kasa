export function findApparts() {
  return fetch(
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
  )
    .then((response) => response.json())

    .catch((error) => {
      console.log(error)
    })
}

//export function findOneAppart(id)  {
//   return fetch(`http://localhost:3000/${id}`).then((res) => res.json())
// }
