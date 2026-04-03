function isStringOrNumber(value) {
  if (typeof value === 'string') {
    return { type: 'string', message: 'It\'s a string, congrats 🎉' };
  }

  if (typeof value === 'number') {
    return { type: 'number', message: 'It\'s a number, you\'re amazing 🏆' };
  }

  return { type: 'garbage', message: 'Not a string or number. Go back to school.' };
}

function stringToNumber(value) {
  if (typeof value === 'string') {
    return { result: NaN, message: `"${value}" is a string, genius. To convert it needs to be a number.` };
  }

  if (typeof value === 'number') {
    return {
      result: value,
      message: `It's already a number (${value}). Are you testing me?`
    };
  }

  return { result: NaN, message: 'That is nothing. Give up.' };
}

module.exports = { isStringOrNumber, stringToNumber };
