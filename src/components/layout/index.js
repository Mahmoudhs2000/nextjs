'use client'
import { AppShell, Box, Burger, Container, Grid, Group, Text, UnstyledButton, Select, useDirection } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../theme/style/header.module.css';
import Footer from './footer';
import Cookies from 'js-cookie';
import { Icon } from '@iconify/react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useEffect, useState, useTransition } from 'react';
import { useLocale } from 'next-intl';

export default function AppLayout({children}) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [lng, setLng] = useState(locale);
  const [isPending, startTransition] = useTransition();
  const {setDirection} = useDirection();
  useEffect(() => {
    if(!isPending){
      setTimeout(() => {
        setDirection(locale === 'ar' ? 'rtl' : 'ltr')
      }, 300);
    }
  }, [isPending])
  const handleLanguageChange = (value) => {
    setLng(value)
    Cookies.set('lang', value);
    startTransition(() => {
      router.replace(
        { pathname },
        { locale: value }
      );
    });
  };

  return (<>
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Container size={'lg'}  >
            <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{flex: 1}} >
                <div>Britrip</div>
                <Group ml="xl" gap={0} visibleFrom="sm">
                  <UnstyledButton className={classes.control}>Home</UnstyledButton>
                  <UnstyledButton className={classes.control}>Blog</UnstyledButton>
                  <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
                  <UnstyledButton className={classes.control}>Support</UnstyledButton>
                  <Select
                    mt={2}
                    disabled={isPending}
                    data={[
                      { value: 'en', label: 'English' },
                      { value: 'ar', label: 'Arabic' },
                    ]}
                    value={lng}
                    rightSection={<Icon icon={'tabler:chevron-down'} />}
                    onChange={handleLanguageChange}
                    placeholder="Select language"
                  />
                </Group>
            </Group>
            </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>
    </AppShell>
    <Box mt={60} />
    {children}
    <br/>
    <br/>
    <Footer/>
  </>
  );
}
