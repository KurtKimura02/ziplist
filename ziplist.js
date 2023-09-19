function zipList(list1,list2){
  let zipped = [];
  for(let i=0;i<list1.length;i++){
    zipped.push(list1[i])
    zipped.push(list2[i])
  }
  return zipped
}

function zipListTheSimpleWay(list1,list2){
  let zipped = _.zip(list1,list2)
  return _.flatten(zipped)
}