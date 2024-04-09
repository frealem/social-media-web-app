import { Field } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputField = ({ field, form, ...props }) => {
  return (
    <PhoneInput
      defaultCountry="et"
      value={field.value}
      onChange={(phone, country) => {
        form.setFieldValue(field.name, phone);
        // You can also access the selected country using the country parameter
        console.log('Selected country:', country);
      }}
      {...props}
    />
  );
};

export default PhoneInputField;