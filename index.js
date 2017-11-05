var recipes = {object:'', key:'', value:''}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return recipes
}
destructivelyUpdateObjectWithKeyAndValue(object, key, value)
