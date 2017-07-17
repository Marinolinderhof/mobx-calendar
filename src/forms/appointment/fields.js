import { shouldBeAfter } from 'forms/extensions/shouldBeAfter';

const fields = {
  title: {
    label: 'Title',
    placeholder: 'e.g. Dentist',
    rules: 'required|string'
  },
  desc: {
    label: 'Description',
    placeholder: 'e.g. Bring toothbrush',
    rules: 'string'
  },
  start: {
    label: 'Start time',
    placeholder: '10:00',
    rules: 'required|string|time'
  },
  end: {
    label: 'End time',
    placeholder: '11:00',
    rules: 'required|string|time',
    validators: [shouldBeAfter('start')]
  }
};

export default fields;
