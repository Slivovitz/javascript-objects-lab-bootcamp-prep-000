var recipes = {object:'', key:'', value:''}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // object[key] = value
  var recipes = {prop:1, prop2:'', 2:''}
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object[key])
  delete newObj.key
  return newObj
}

// function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return recipes
}
