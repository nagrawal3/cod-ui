import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';

const TextField = ({ label, field, form: { dirty, touched, errors }, ...other }) => {
  const errorText = errors[field.name];
  const hasError = dirty && touched[field.name] && errorText !== undefined;
  const adornments = { startAdornment: other.startAdornment, endAdornment: other.endAdornment };

  return (
    <MUITextField
      label={label}
      error={hasError}
      helperText={hasError ? errorText : ''}
      InputProps={adornments}
      {...field}
      {...other}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
};

TextField.defaultProps = {
  label: '',
  fullWidth: true,
  margin: 'normal',
};

export default TextField;
