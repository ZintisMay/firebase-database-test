var fibo = {
	arr:[1,1],
	go:function(counter){
		if(counter > 0){
			let end = this.arr.length
			this.arr.push(this.arr[end-1] + this.arr[end-2])
			return this.go(--counter);
		}else{
			return this.arr;
		}
	}
}

console.log(fibo.go(100));