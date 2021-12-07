import axios from 'axios'
import { camelCase } from 'lodash'

async function fetchMembers () {
  try {
    // from ecosystem main
    const res = await axios.get(
      'https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/members.json'
    )
    const membersArray = Object.values(res.data.MAIN).concat(Object.values(res.data.COMMUNITY))
    const convertedArray = membersArray.map((obj: any) => {
      return toCamelCase(obj)
    })
    const shuffled = fyShuffle(convertedArray)
    return shuffled
  } catch (err) {
    console.error(err)
  }
}

function fyShuffle (array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

function toCamelCase (obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCase(v))
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCase(obj[key])
      }),
      {}
    )
  }
  return obj
}

export {
  fetchMembers
}
