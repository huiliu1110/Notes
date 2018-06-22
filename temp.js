

const MIN_LENGTH = 10;

const match = (ps) => {
  
  // is string
  // length
  // a - z
  // A - Z
  // 0 - 9
  // !$#%

  const MIN_LENGTH = 10;
  
      const rules = [
      ps => ps,
      ps => typeof ps === 'string',
      ps => ps.trim() < MIN_LENGTH,
      ps => ps.match(/[a-z]+/g), 
      ps => ps.match(/[A-Z]+/g), 
      ps => ps.match(/[0-9]+/g), 
      ps => ps.match(/[!$#%]+/g),
      ];

      const messages = [
        'should not be empty',
        'string',
        'length',
        'a - z',
        'A - Z',
        '0 - 0',
        'special chars'
      ]
 
      if (rules[0](ps) && rules[1](ps)) {
      console.log('i am here')
        return rules.reduce((acc, rule, index) => {
          if (index > 1 && !rule(ps)) {
            acc.push(messages[index]);
          }
          
          return acc;   
        }, [])
      } else {
        return messages;
      }
  
}



var fibonacci = function () {
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if (typeof result != "number") {
       result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
return fib;
} (); 
