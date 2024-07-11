import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from './styles/signUpForm.module.scss';
import { useNavigate } from "react-router-dom";
import ISignUpForm from "./types/formDataType";

const SignUpForm: FC = () => {
    const navigator = useNavigate();
    const [formstate, setformState] = useState<ISignUpForm>({'full-name': '', email: '', password: ''});
    
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setformState({...formstate, [event.currentTarget.name]: event.currentTarget.value})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigator('/')
    }

    return (
        <form className={styles.signUpForm} onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)} >
            <h2 className="sign-in-form__title">Sign Up</h2>
            <Input value={formstate['full-name']} onChange={(event: ChangeEvent<HTMLInputElement>) => changeInput(event)} title={"Full name"} type={"text"} name={"full-name"} dataTestId={"auth-full-name"} />
            <Input value={formstate.email} onChange={(event: ChangeEvent<HTMLInputElement>) => changeInput(event)} title={"Email"} type={"email"} name={"email"} dataTestId={"auth-email"} />
            <Input value={formstate.password} min={3} max={20} onChange={(event: ChangeEvent<HTMLInputElement>) => changeInput(event)} title={"Password"} type={"password"} name={"password"} dataTestId={"auth-password"} />
            <Button title={"Sign In"} dataTextId={"auth-submit"} type={"submit"} />
        </form>
    );
};

export default SignUpForm;