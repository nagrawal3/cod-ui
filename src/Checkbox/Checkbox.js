import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';

const Checkbox = ({ label, value, field, form: { dirty, touched, errors }, ...other }) => {
  const errorText = errors[field.name];
  const hasError = dirty && touched[field.name] && errorText !== undefined;

  return (
    <FormControlLabel
      control={
        <MUICheckbox
          color="primary"
          checked={value}
          value={value}
          helperText={hasError ? errorText : ''}
          {...other}
          {...field}
        />
      }
      label={label}
    />
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
    touched: PropTypes.shape({}),
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
};

Checkbox.defaultProps = {
  label: '',
  fullWidth: true,
  margin: 'normal',
  value: false,
};

export default Checkbox;
