import React from "react";
import { render } from "react-dom";
// import Styles from "./styles";
import { Form, Field } from "react-final-form";
import Switch from "react-switch";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

// TODO: Convert to typescript types
// TODO: Add a data payload to get the caption. name, styles, etc
const SwitchAdapter = ({ input: { onChange, value }, label, ...rest }) => (
  <Switch
    label={label}
    // toggled={!!value}
    onChange={checked => onChange(checked)}
    checked={!!value}
    // red
    onColor="#FF4136"
    checkedIcon={<i className="fa fa-fw fa-lg fa-times white ml1" />}
    // green
    offColor="#19A974"
    uncheckedIcon={<i className="fa fa-fw fa-lg fa-check white mr1" />}
    {...rest}
  />
);

export const CheckboxForm = () => (
  <div className="animated slideInRight">
    {/* <Styles> */}
    <Form
    className="animated  slideInRight"
      onSubmit={onSubmit}
      initialValues={{ gender: false, creditCard: false, homeAddress: false}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="ba br3 b--black-10 pa3 mb1 shadow-4">
            <div className="f4 black-80 fw4 mb2">Basic Personal</div>
            
            <label
              className="ba br3 b--black-10 pa2 bg-blue white w-100 pointer hover-black"
              labelfor="gender"
            >
              <div className="fl">Gender</div>

              <Field name="gender" component={SwitchAdapter} className="fr" />
            </label>

            <label
              className="ba br3 b--black-10 pa2 bg-blue white w-100 pointer hover-black"
              labelfor="homeAddress"
            >
              <div className="fl">Home Address</div>
              <Field
                name="homeAddress"
                component={SwitchAdapter}
                className="fr"
              />
            </label>

            <label
              className="ba br3 b--black-10 pa2 bg-blue white w-100 pointer hover-black"
              labelfor="creditCard"
            >
              <div className="fl">Credit Card</div>
              <Field
                name="creditCard"
                component={SwitchAdapter}
                className="fr"
              />
            </label>

            {/* <pre className="f6">{JSON.stringify(values, 0, 2)}</pre> */}
            <div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    />
    {/* </Styles> */}
  </div>
);
