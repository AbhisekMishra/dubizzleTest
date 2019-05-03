import deburr from 'lodash/deburr';

function getSuggestions(value, users) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0
      ? []
      : users.filter(user => {
          const keep =
            count < 5 && user.slice(0, inputLength).toLowerCase() === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
  }

export {getSuggestions};