function updateObjectWithKeyAndValue(key, value) {
  var key = key
  console.log(key)
  var value = value
  console.log (value)
  var obj = Object.assign({}, { prop: 1 }, { key: value })
  return obj

}
updateObjectWithKeyAndValue('prop2', 2)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
var obj = object
obj.key = 'value'

return obj
}

function deleteFromObjectByKey(object, key) {

}

function estructivelyDeleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {

}
