export default {
  log(logItem,key=null) {
    if(key){
      console.log(key,logItem);
    }
    else{
      console.log(logItem);
    }
  },

};
