import { Button } from '@/shared/ui/kit/button';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/shared/ui/kit/form';
import { Input } from '@/shared/ui/kit/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { useRegister } from '../model/use-register';

const registerSchema = z
  .object({
    email: z.email({ error: 'Неверный email' }),
    password: z.string('Пароль обязателен').min(6, 'Пароль должен быть не менее 6 символов'),
    confirmPassword: z.string().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают',
  });

export function RegisterForm() {
  const { register, errorMessage, isPending } = useRegister();

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = form.handleSubmit(data => {
    console.log(data);
    register(data);
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
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтвердите пароль</FormLabel>
              <FormControl>
                <Input placeholder="Подтвердите пароль" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        {errorMessage && <p className="text-destructive">{errorMessage}</p>}
        <Button disabled={isPending} type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
}
