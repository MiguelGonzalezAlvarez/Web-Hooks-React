import { useEffect, useState } from 'react';
import { Message } from './Message';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@google.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

  return (
    <Card className="animate-fade-in-up mt-4" elevated>
      <CardHeader title="Formulario Simple" description="Uso básico de useEffect" />
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
              placeholder="fernando@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
              aria-label="Email Address"
            />
          </div>

          {username === 'strider2' && <Message />}
        </div>
      </CardBody>
    </Card>
  );
};
