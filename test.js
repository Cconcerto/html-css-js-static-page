//LSD Radix Sort  
var counter = [];  
function radixSort(arr, maxDigit) {  
	var mod = 10;  
	var dev = 1;  
 	for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {  
 		for(var j = 0; j < arr.length; j++) {  
 			var bucket = parseInt((arr[j] % mod) / dev);  
 			if(counter[bucket]==null) {  
 				counter[bucket] = [];  
 			}  
 			counter[bucket].push(arr[j]);  
 		}  
 		var pos = 0;  
 		for(var j = 0; j < counter.length; j++) {  
 		var value = null;  
 		if(counter[j]!=null) {  
 			while ((value = counter[j].shift()) != null) {  
 				arr[pos++] = value;  
 			}  
 		}  
 	}}  
 return arr;  
}
a = [10, 5, 45, 60, 23]
// print(radixSort(a, 100))
console.log(radixSort(a, a.length ))