class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
    if(this.length > this.capacity){
      this.resize()
    }
    return this.length;
  }


  pop() {
    if(this.length > 0){
      this.length--
      return this.data[this.length]
    }
    return undefined;
  }

  shift() {
    if(this.length > 0){
      let result = this.data[0]
      for(let i = 0; i < this.length; i++){
        this.data[i] = this.data[i + 1]
      }
      this.length--;
      return result
    }
  }

  unshift(val) {
    for(let i = this.length; i > 0; i--){
       this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
    if(this.length > this.capacity){
      this.resize()
    }
  }

  indexOf(val) {
    for(let i = 0; i < this.length; i++){
      if(this.data[i] === val){
        return i; 
      }
    }
    return -1;
  }

  resize() {
   let resultArr = new Array(this.capacity *= 2);
    for(let i = 0; i < this.length; i++){
      resultArr[i] = this.data[i];
    }
    this.data = resultArr;
  }

}


module.exports = DynamicArray;
