module.exports = function check(str, bracketsConfig) {

  const openArr = [];
  const closeArr = [];
  
  for(let i = 0, len = bracketsConfig.length; i < len; i++) {
    openArr.push(bracketsConfig[i][0]);
    closeArr.push(bracketsConfig[i][1]);
  }	

  const stack  = [];
	
  for(let k = 0, len = str.length; k < len; k++) {

    if(openArr.includes(str.charAt(k)) && !closeArr.includes(str.charAt(k))) { //opening and non-closing bracket

      stack.push(str.charAt(k));

    } else if(openArr.includes(str.charAt(k)) && closeArr.includes(str.charAt(k))) { //same opening and non-closing brackets
      
      if(stack.includes(str.charAt(k))) {
        if(stack.pop() != str.charAt(k)) {
          return false;
        } 
      } else {
        stack.push(str.charAt(k));
      }

    } else if(closeArr.includes(str.charAt(k))) { //closing bracket

      const matchOpenBracket = openArr[closeArr.indexOf(str.charAt(k))];  
        
      if(stack.length == 0 || (stack.pop() != matchOpenBracket)) {
        return false;
      }
    }
  }

  return stack.length == 0;
}