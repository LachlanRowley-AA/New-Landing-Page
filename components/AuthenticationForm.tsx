'use client';

import { useState } from 'react';
import { IconAt, IconHash } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Paper,
  Text,
  TextInput,
  Container,
  Flex
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { JumboTitle } from './JumboTitle';
import { createClient } from '@supabase/supabase-js';
import validator from 'validator';

const supabase = createClient("https://hfsysehrdshrbtmjsgcx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmc3lzZWhyZHNocmJ0bWpzZ2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjMyMzIsImV4cCI6MjA1NDk5OTIzMn0.S2q4Oza4s70afQlODHW-G3OUWIGWxOJ2nOxIzZJ8IIk")
const windowUrl = window.location.search;

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contact: false,
      ref: ''
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
  
    let hasError = false;
    if(form.values.contact === false) {
      form.setFieldError('contact', 'Please agree');
      hasError = true;
    }

    if (!form.values.firstName.trim()) {
      form.setFieldError('firstName', 'First name is required');
      hasError = true;
    }
  
    if (!form.values.lastName.trim()) {
      form.setFieldError('lastName', 'Last name is required');
      hasError = true;
    }
  
    if (!validator.isEmail(form.values.email)) {
      form.setFieldError('email', 'Invalid email address');
      hasError = true;
    }
  
    if (!validator.isMobilePhone(form.values.phone, 'en-AU')) {
      form.setFieldError('phone', 'Invalid Australian phone number');
      hasError = true;
    }


  
    if (hasError) {
      setLoading(false);
      return;
    }
  
    await submitFormAPI();
    setLoading(false);
  };
  
  async function submitFormAPI () {
    if(typeof window !== "undefined") {
      const params = new URLSearchParams(windowUrl);
      const { error } = await supabase
      .from('enquiries')
      .insert({first_name: form.values.firstName,
              last_name: form.values.lastName,
              phone: form.values.phone,
              email: form.values.email,
              referral: params.get('ref')
      });
    }
      else {
        const { error } = await supabase
        .from('enquiries')
        .insert({first_name: form.values.firstName,
                last_name: form.values.lastName,
                phone: form.values.phone,
                email: form.values.email
      });
    }    
  }

  return (
    <Container size="xs" px="md" style={{ height:'vh:100px'}} mt="calc(var(--mantine-spacing-xl) * 1)">
            <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm">
            Contact Us Now
            </JumboTitle>
            <JumboTitle order={2} fz="xxs" ta="center" style={{ textWrap: 'balance' }} mb="sm">
            For a free enquiry with no impact to your credit score
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
                <TextInput
                mt="md"
                required
                placeholder="Your phone Number"
                label="Phone"
                leftSection={<IconHash size={16} stroke={1.5} />}
                {...form.getInputProps('phone')}
                />
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
                    label="I agree to be contacted by a member of Asset Alley"
                    {...form.getInputProps('contact', { type: 'checkbox' })}
                />

                {error && (
                <Text c="red" size="sm" mt="sm">
                    {error}
                </Text>
                )}

                {!noSubmit && (
                <Group justify="center" mt="xl">
                    <Button color="#01E194" type="submit">
                      Submit
                    </Button>
                </Group>
                )}
            </form>
            </Paper>
        </Flex>
    </Container>
  );
}