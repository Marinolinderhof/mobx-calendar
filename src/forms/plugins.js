import validatorjs from 'validatorjs';

const rules = {
  time: {
    function: value => value.match(/^(?:\d|[01]\d|2[0-3]):[0-5]\d$/),
    message: 'Invalid time format (e.g. 12:00)'
  }
};

const plugins = {
  dvr: {
    package: validatorjs,

    extend: $validator => {
      Object.keys(rules).forEach(key =>
        $validator.register(key, rules[key].function, rules[key].message)
      );
    }
  }
};

export default plugins;
