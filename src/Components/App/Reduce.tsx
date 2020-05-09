const Reduce =(arr: []) =>{
    let result = arr.reduce(function(acc,num){
        return acc+num;}, 0);
    return result;
};

export default Reduce;