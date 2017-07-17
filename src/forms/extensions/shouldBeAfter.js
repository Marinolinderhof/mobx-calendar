import { moment } from 'utils';

export function shouldBeAfter(target) {
  return ({ field, form }) => {
    const fieldsAreAfter = moment(form.$(target).value, 'H:mm').isBefore(
      moment(field.value, 'H:mm')
    );
    return [
      fieldsAreAfter,
      `The ${field.label} should be after ${form.$(target).label}`
    ];
  };
}
