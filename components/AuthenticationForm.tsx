'use client';

import { useState } from 'react';
import { IconAt, IconLock } from '@tabler/icons-react';
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Container,
  Flex
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { JumboTitle } from './JumboTitle';

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

export function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
}: AuthenticationFormProps) {
  const [formType, setFormType] = useState<'register' | 'login'>('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      contact: false,
      marketing: false
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(
        formType === 'register'
          ? 'User with this email already exists'
          : 'User with this email does not exist'
      );
    }, 3000);
  };

  return (
    <Container size="xs" px="md" style={{ height:'vh:100px'}} mt="calc(var(--mantine-spacing-xl) * 1)">
            <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm">
            Contact Us Now
            </JumboTitle>
        <Flex justify="center" align="center">
            <Paper
                p={noPadding ? 0 : 'lg'}
                shadow={noShadow ? 'none' : 'sm'}
                style={{
                    ...style,
                    position: 'relative',
                    backgroundColor: 'var(--mantine-color-body)',
                }}
                >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <LoadingOverlay visible={loading} />
                {formType === 'register' && (
                <Group grow>
                    <TextInput
                    data-autofocus
                    required
                    placeholder="Your first name"
                    label="First name"
                    {...form.getInputProps('firstName')}
                    />

                    <TextInput
                    required
                    placeholder="Your last name"
                    label="Last name"
                    {...form.getInputProps('lastName')}
                    />
                </Group>
                )}

                <TextInput
                mt="md"
                required
                placeholder="Your email"
                label="Email"
                leftSection={<IconAt size={16} stroke={1.5} />}
                {...form.getInputProps('email')}
                />
                <Checkbox
                    mt="xl"
                    label="I agree that I may be contacted by a member of Asset Alley"
                    {...form.getInputProps('contact', { type: 'checkbox' })}
                />
                <Checkbox
                    mt="xl"
                    label="I agree to receive marketing materials"
                    {...form.getInputProps('marketing', { type: 'checkbox' })}
                />

                {error && (
                <Text c="red" size="sm" mt="sm">
                    {error}
                </Text>
                )}

                {!noSubmit && (
                <Group justify="center" mt="xl">
                    <Button color="#01E194" type="submit">
                    {formType === 'register' ? 'Submit' : 'Submit'}
                    </Button>
                </Group>
                )}
            </form>
            </Paper>
        </Flex>
    </Container>
  );
}