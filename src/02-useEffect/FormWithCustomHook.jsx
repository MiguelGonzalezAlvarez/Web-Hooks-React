import { useForm } from '../hooks/useForm';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <Card className="animate-fade-in-up mt-4 stagger-1" elevated>
      <CardHeader title="Formulario con Custom Hook" description="Uso del custom hook useForm" />
      <CardBody>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-muted mb-1 block">Username</label>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
              aria-label="Username"
            />
          </div>

          <div>
            <label className="text-sm text-muted mb-1 block">Email Address</label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              aria-label="Email Address"
            />
          </div>

          <div>
            <label className="text-sm text-muted mb-1 block">Password</label>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              aria-label="Password"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={onResetForm} variant="outline">
              Borrar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
