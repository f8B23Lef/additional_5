module.exports = function check(str, bracketsConfig) {
 
  let tmpStr = str;
	
	for(let strKey = tmpStr.length-1; strKey >= 0; strKey--) {
	  for(let bracketKey = 0; bracketKey < bracketsConfig.length; bracketKey++) {
		  if(tmpStr[strKey] === bracketsConfig[bracketKey][0]) {
			  tmpStr = tmpStr.replace(bracketsConfig[bracketKey].join(''), '');
			  break;
		  }
	  }
  }
  
  return tmpStr === '';
}