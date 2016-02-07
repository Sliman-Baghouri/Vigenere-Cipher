function vigenere(key,msg,type){
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	cipher,
	init = [],
	res = [],
	j=0,
	ptr = /^(?!\d\s)[a-zA-Z]+$/;
	
// check if there is non-alpha characters. . .
if(ptr.test(key) && ptr.test(msg)){
cipher = {
	// @encrypt the plain text. . .
	enc:function (){
		 init.forEach(function(a,k){
			(alpha.indexOf(init[k]) + init[k+1] >= alpha.length) ? 
				res.push(alpha[((alpha.indexOf(init[k])+init[k+1])-alpha.length)]) : false
			// removing the undefined from the array. . .
			alpha[alpha.indexOf(init[k])+init[k+1]] == undefined ?
			false:res.push(alpha[alpha.indexOf(init[k])+init[k+1]])
	})},

	// @decrypt the cipher text. . .	
	dec:function (){
		init.forEach(function(a,k){
			(alpha.indexOf(init[k]) - init[k+1] <= alpha.length) ? 
				res.push(alpha[((alpha.indexOf(init[k])-init[k+1])+alpha.length)]) : false
			// removing the undefined from the array. . .
			alpha[alpha.indexOf(init[k])-init[k+1]] == undefined ?
			false:res.push(alpha[alpha.indexOf(init[k])-init[k+1]])
	})}	
}

msg.toUpperCase().split('').forEach(function(a,i){
		(j >= key.toUpperCase().length) ? j = 0 : false
			init.push(msg.toUpperCase()[i])
 			init.push(alpha.indexOf(key.toUpperCase()[j]))
		j+=1

});

// choosing the encrypt or the decrypt function. . .
(type === "dec") ? cipher.dec() : (type === "enc") ?  cipher.enc():false
	
	return document.getElementById("result").textContent = res.join("")

	// clean all the result to start again. . .
		 	   init = []; 
			   res = [];
	}else{
		throw new Error("Invalid input");
    }			
}