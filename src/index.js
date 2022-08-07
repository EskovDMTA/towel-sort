
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []
  if(matrix===undefined)
  return []
  for (let x=0;x< matrix.length; x++) {
    if (x%2===0){
      for (let i = 0; i< matrix[x].length; i++)
    newArr.push(matrix[x][i])
    }else {
    for (let i = matrix[x].length-1; i >= 0; i--)
    newArr.push(matrix[x][i])
  }
}
  return newArr;
}
