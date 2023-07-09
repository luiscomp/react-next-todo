import Button from "./Button/Button";
import InputText from "./InputText/InputText";

interface User {
  email: string;
  password: string;
}

interface FormLoginProps {
    user: User,
    setForm: (user: User) => void;
    handlerLogin: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormLogin(props: FormLoginProps) {
    const { user, setForm, handlerLogin } = props;

    return (
        <form className="flex flex-col gap-4 min-w-[360px]" onSubmit={handlerLogin}>
          <InputText id="email" type="email" label="E-mail" value={user.email} onInput={(e) => setForm({
            ...user,
            email: e.currentTarget.value,
          })}/>
          <InputText id="password" type="password" label="Senha" value={user.password} onInput={(e) => {
            setForm({
              ...user,
              password: e.currentTarget.value
            })
          }}/>
          <Button type="submit" label="Entrar"></Button>
        </form>
    )
}