import React, { PureComponent } from 'react';

// import inputs i use
import Textarea from 'forms/inputs/TextArea';
import Text from 'forms/inputs/Text';
import Date from 'forms/inputs/Date';
import Button from 'forms/inputs/Button';
import Error from 'forms/inputs/Error';
// import the form setup
import formHandler from './handlers';

class AppointmentForm extends PureComponent {
  render() {
    return (
      <form>
        <Text field={formHandler.$('title')} />
        <Date field={formHandler.$('start')} />
        <Date field={formHandler.$('end')} />
        <Textarea field={formHandler.$('desc')} />

        <Button type="submit" text={'Save'} handler={formHandler.onSubmit} />
        <Button type="button" text={'Cancel'} handler={formHandler.onReset} />

        <Error>
          {formHandler.error}
        </Error>
      </form>
    );
  }
}

export default AppointmentForm;
