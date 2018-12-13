import React from 'react';
import styled from 'styled-components';
import { className } from 'postcss-selector-parser';

const Wrapper = styled.div`

`
const Label = styled.label`
    padding: 4px 8px;
`
const Value = styled.input.attrs({
    value: props => props.value,
    onChange: props => props.onChange,
    onFocus: props => props.onFocus,
    placeholder: props => props.placeholder,
    className: props => props.className,
    confirm: props => props.confirm

})`

`
const required = (value) => {
    if (!value || value.length === 0) return false;
    return true;
}

const email = (value) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

const value_confirm = (value, confirm) => {
    //in ra gia tri cua truong confirm
    //console.log(value);
    // in ra gia tri cua truong password
    /*if (value === confirm) return true;

    return false;*/
    //console.log(value);

    return value;
}
//console.log(value_confirm);

const onChangeInput = (event, fn, validate) => {
    let value = event.target.value;
    //in ra gia tri cac trương input 
    //console.log(value);
    let valid = true;
    if (validate.required && !required(value)) {
        valid = false;
    }

    if (validate.email && !email(value)) {
        valid = false;
    }

    if (validate.confirm != value_confirm(value)) {
        valid = false;
    }


    fn(event, valid);
}

/**
 * 
 * @param {object} validate {required: true/false, email: true/false, value_confirm: <value>/undefined} 
 */
const Input = ({
    label,
    onChange,
    placeholder,
    value,
    validate,
    isDirty,
    onFocus,
    onValidate,
    propsItem
}) => {
    //console.log(label, validate, required(value), isDirty);
    //let a = pwdPass;
    //let b = validate.confirm;
    //console.log('kkk');
    //console.log(b);
    return (
        <Wrapper>
            <Label>
                {label}{"  "}
                <Value
                    placeholder={placeholder}
                    value={value}
                    onChange={e => onChangeInput(e, onChange, validate)}
                    onFocus={onFocus}


                />
            </Label>
            {validate.required && !required(value) && isDirty ?
                <span className="mess">Required!</span>
                : null}
            {validate.email && !email(value) && isDirty ?
                <span className="mess">Must be email!</span>
                : null}
            {validate.confirm !== value_confirm(value) && isDirty ?
                <span className="mess">Pass word chưa đúng!</span>
                : null}
            {/*value != a ? <span> Pass chua dung </span> : null*/}
            <span>{propsItem}</span>


        </Wrapper>

    )
}

export default Input;