import { Button } from '@/shared/ui/kit/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/kit/form';
import { Input } from '@/shared/ui/kit/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useLogin } from '../model/use-login';

const loginSchema = z.object({
  email: z.email({ error: 'Неверный email' }),
  password: z.string('Пароль обязателен').min(6, 'Пароль должен быть не менее 6 символов'),
});

export function LoginForm() {
  const { login, errorMessage, isPending } = useLogin();

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = form.handleSubmit(data => {
    login(data);
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder="Пароль" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        {errorMessage && <p className="text-destructive">{errorMessage}</p>}
        <Button disabled={isPending} type="submit">
          Войти
        </Button>
      </form>
    </Form>
  );
}
