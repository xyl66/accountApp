function getLocalTime(nS) {  
 return new Date(parseInt(nS) * 1000).toLocaleDateString().replace(/\//g,'-');  
}