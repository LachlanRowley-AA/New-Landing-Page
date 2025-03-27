'use client';

import { useState, useEffect } from 'react';
import { IconAt, IconHash, IconCircleCheckFilled } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Paper,
  Text,
  TextInput,
  Textarea,
  Container,
  Flex,
  useMantineTheme
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { JumboTitle } from '../JumboTitle';
import { createClient } from '@supabase/supabase-js';
import validator from 'validator';

const supabase = createClient("https://hfsysehrdshrbtmjsgcx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmc3lzZWhyZHNocmJ0bWpzZ2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjMyMzIsImV4cCI6MjA1NDk5OTIzMn0.S2q4Oza4s70afQlODHW-G3OUWIGWxOJ2nOxIzZJ8IIk");

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
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contact: false,
      comments: ''
    },
  });

  const [ref, setReferral] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReferral(params.get('aaReferral'));
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
  
    let hasError = false;
    if (form.values.contact === false) {
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
    setSubmitted(true);
  };
  
  async function submitFormAPI() {
    await supabase
      .from('enquiries')
      .insert({
        first_name: form.values.firstName,
        last_name: form.values.lastName,
        phone: form.values.phone,
        email: form.values.email,
        referral: ref,
        comments: form.values.comments
      });
  }

  return (
    <Container size="xs" fluid bg={theme.colors.background[0]}>
    <Container size="xs" px="md">
      <JumboTitle order={2} fz="sm" ta="center" mb="sm" c={ theme.colors.header[0] }>
        Contact Us Now
      </JumboTitle>
      <JumboTitle order={2} fz="xxs" ta="center" mb="sm" c={ theme.colors.secondary[0] }>
        For a free enquiry with no impact to your credit score
      </JumboTitle>
      <Flex justify="center" align="center">
        <Paper
          p={noPadding ? 0 : 'lg'}
          shadow={noShadow ? 'none' : 'sm'}
          style={{
            ...style,
            position: 'relative',
            backgroundColor: theme.colors.background[0],
          }}
        >
          {submitted ? (
            <Flex justify="center" align="center" direction="column" py="xl">
              <IconCircleCheckFilled size={48} color="green" />
              <Text mt="md" size="lg" style={{ color: theme.colors.header[0] }}>
                Thank you.
                We'll be in touch soon!
              </Text>
            </Flex>
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <LoadingOverlay visible={loading} />
              <Group grow>
                <TextInput
                  color={theme.colors.header[0]}
                  data-autofocus
                  required
                  placeholder="Your first name"
                  label="First name"
                  styles = {{
                    input: { color: theme.colors.secondary[0], backgroundColor: theme.colors.unfilledBar[0] },
                    label: { color: theme.colors.secondary[0] },
                    section: { color: theme.colors.secondary[0] },
                  }}
                  {...form.getInputProps('firstName')}
                />

                <TextInput
                  required
                  placeholder="Your last name"
                  label="Last name"
                  styles = {{
                    input: { color: theme.colors.secondary[0], backgroundColor: theme.colors.unfilledBar[0] },
                    label: { color: theme.colors.secondary[0] },
                    section: { color: theme.colors.secondary[0] },
                  }}
                  {...form.getInputProps('lastName')}
                />
              </Group>
              <TextInput
                mt="md"
                required
                placeholder="Your phone Number"
                label="Phone"
                leftSection={<IconHash size={16} stroke={1.5} />}
                styles = {{
                  input: { color: theme.colors.secondary[0], backgroundColor: theme.colors.unfilledBar[0] },
                  label: { color: theme.colors.secondary[0] },
                  section: { color: theme.colors.secondary[0] },
                }}
                {...form.getInputProps('phone')}
              />
              <TextInput
                mt="md"
                required
                placeholder="Your email address"
                label="Email"
                leftSection={<IconAt size={16} stroke={1.5} />}
                styles = {{
                  input: { color: theme.colors.secondary[0], backgroundColor: theme.colors.unfilledBar[0] },
                  label: { color: theme.colors.secondary[0] },
                  section: { color: theme.colors.secondary[0] },
                }}
                {...form.getInputProps('email')}
              />
                <Textarea
                mt="md"
                placeholder="Details about your enquiry"
                label="Comments"
                styles = {{
                  input: { color: theme.colors.secondary[0], backgroundColor: theme.colors.unfilledBar[0] },
                  label: { color: theme.colors.secondary[0] },
                  section: { color: theme.colors.secondary[0] },
                }}
                {...form.getInputProps('comments')}
              />
              <Checkbox
                mt="xl"
                label="I agree to be contacted by a member of Asset Alley"
                color={theme.colors.header[0]}
                style = {
                  { color: theme.colors.secondary[0],
                   }
                }
                styles = {
                  { input: {
                    color: theme.colors.secondary[0],
                    borderColor: theme.colors.secondary[0],
                    },
                  }}
                {...form.getInputProps('contact', { type: 'checkbox' })}
              />

              {error && (
                <Text size="sm" mt="sm" style={{ color: theme.colors.secondary[0] }}>
                  {error}
                </Text>
              )}

              {!noSubmit && (
                <Group justify="center" mt="xl">
                  <Button style={{ backgroundColor: theme.colors.button[0] }} type="submit">
                    Submit
                  </Button>
                </Group>
              )}
            </form>
          )}
        </Paper>
      </Flex>
    </Container>
    </Container>
  );
}
