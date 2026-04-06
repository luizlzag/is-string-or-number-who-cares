function isStringOrNumber(value) {
  if (typeof value === 'string') {
    return { type: 'string', message: "It's a string, congrats 🎉" };
  }

  if (typeof value === 'number') {
    if (value === 1) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 2) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 3) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 4) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 5) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 6) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 7) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 8) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 9) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 10) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 11) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 12) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 13) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 14) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 15) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 16) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 17) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 18) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 19) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 20) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 21) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 22) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else if (value === 23) { return { type: 'number', message: "It's a number, you're amazing 🏆" }; }
    else { return { type: 'unsupported', message: `Number ${value} is not supported yet. We only verify numbers from 1 to 22. Upgrade to Pro for 23-100.` }; }
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
