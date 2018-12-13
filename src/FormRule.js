import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Input from './Input';
import Submit from './Submit';

const Wrapper = styled.div`
    width: 500px;
    border: 1px solid;
    border: 1px solid #d6d0d0 !important;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    border-radius: 5px;
    background: #af9517;
    
`
/**
 * 
 * @param {object} email {value, isDirty, valid, onChange, onValidate} 
 */
const FromRuleTpl = ({
    email,
    pwd,
    onChangePwd,
    onSubmit,
    pwd_confirm,
    onChangePwdConfirm,
    className
}) => (
        <Wrapper>
            <Title title="LOGIN" />
            <Input
                label="Email"
                isDirty={email.isDirty}
                value={email.value}
                onChange={email.onChange}
                validate={{
                    required: true,
                    email: true,
                    confirm: pwd.value
                }}
                placeholder={"Input your email"}
            />

            <Input
                label="Pasword"
                className="PW"
                value={pwd.value}
                onChange={pwd.onChange}
                isDirty={pwd.isDirty}
                validate={{
                    required: true,
                    email: false,
                    confirm: pwd.value
                }}
                placeholder={"Input your pwd"}
            />


            <Input
                label="Pasword confirm"
                value={pwd_confirm.value}
                onChange={pwd_confirm.onChange}
                isDirty={pwd_confirm.isDirty}
                validate={{
                    required: true,
                    email: false,
                    value_confirm: pwd_confirm,
                    confirm: pwd.value
                }}
                pwdPass={pwd.value}
                placeholder={"Input your pwd_confirm"}

            />
            <Submit name="Submit Button" onClick={onSubmit} />
        </Wrapper>
    )


class FromRule extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: {
                value: "",
                isDirty: false,
                valid: false,
            },
            pwd: {
                value: "",
                isDirty: false,
            },
            pwd_confirm: {
                value: "",
                isDirty: false,
            },
            item: {

            }
        }
    }

    onChange = (event, valid, name) => {
        this.setState({
            [name]: {
                ...this.state[name],
                value: event.target.value,
                isDirty: true,
                valid: valid
            }
        })
    }

    onFocus = (name) => {
        if (!this.state[name].isDirty) {
            this.setState({
                [name]: {
                    ...this.state[name],
                    isDirty: true
                }
            })
        }
    }

    onSubmit = () => {
        let item = {};
        item.email = this.state.email.value;
        item.pass = this.state.pwd.value;
        item.pwd_confirm = this.state.pwd_confirm.value;
        console.log(item);
        this.setState({
            item: item
        })

    }

    render() {
        return (
            <FromRuleTpl
                email={{
                    ...this.state.email,
                    onChange: (e, valid) => this.onChange(e, valid, 'email'),
                }}

                pwd={{
                    ...this.state.pwd,
                    onChange: (e, valid) => this.onChange(e, valid, 'pwd'),
                }}

                pwd_confirm={{
                    ...this.state.pwd_confirm,
                    onChange: (e, valid) => this.onChange(e, valid, 'pwd_confirm'),
                }}
                //onChangeEmail={e => this.onChange(e, 'email')}
                // pwd={this.state.pwd}
                // onChangePwd={e => this.onChange(e, 'pwd')}
                // pwd_confirm={this.state.pwd_confirm}
                onSubmit={this.onSubmit}
            // onChangePwdConfirm={e => this.onChange(e, 'pwd_confirm')}
            />
        )
    }
}

export default FromRule;