import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import CheckboxGroup from "./CheckboxGroup";
import ChakraInput from "./chakra-ui/ChakraInput";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
