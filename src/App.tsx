import "@mantine/core/styles.css";
import { AppShell, Burger, Container, Grid, Group, MantineProvider, NavLink, Skeleton, Stack, Text } from "@mantine/core";
import { theme } from "./theme";
import { useDisclosure } from "@mantine/hooks";
import { IconFingerprint, IconGauge, IconPackage } from "@tabler/icons-react";

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            Header has a burger icon below sm breakpoint
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <NavLink
            href="#required-for-focus-flat"
            // active={index === active}
            label={'First Link'}
            // description={'Description'}
            // rightSection={item.rightSection}
            leftSection={<IconPackage size={16} stroke={1.5} />}
          // onClick={() => setActive(index)}

          />

          <NavLink
            href="#required-for-focus"
            label="First parent link"
            leftSection={<IconFingerprint size={16} stroke={1.5} />}
            childrenOffset={28}
          >
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>

          <NavLink
            href="#required-for-focus"
            label="Second parent link"
            leftSection={<IconGauge size={16} stroke={1.5} />}
            childrenOffset={28}
          >
            <NavLink href="#required-for-focus" label="First child link" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
              <NavLink label="First child link" href="#required-for-focus" />
              <NavLink label="Second child link" href="#required-for-focus" />
              <NavLink label="Third child link" href="#required-for-focus" />
            </NavLink>
          </NavLink>

        </AppShell.Navbar>
        <AppShell.Main>
          <Container fluid my="md">
            <Grid>
              <Grid.Col span={{ base: 12, xs: 4 }}><Skeleton height={140} radius="md" /></Grid.Col>
              <Grid.Col span={{ base: 12, xs: 4 }}><Skeleton height={140} radius="md" /></Grid.Col>
              <Grid.Col span={{ base: 12, xs: 4 }}><Skeleton height={140} radius="md" /></Grid.Col>
              <Grid.Col span={{ base: 12, xs: 9 }}><Skeleton height={140} radius="md" /></Grid.Col>
              <Grid.Col span={{ base: 12, xs: 3 }}><Skeleton height={140} radius="md" /></Grid.Col>
              <Grid.Col span={{ base: 12, xs: 3 }}><Skeleton height={140} radius="md" /></Grid.Col>
              <Grid.Col span={{ base: 12, xs: 9 }}><Skeleton height={140} radius="md" /></Grid.Col>
            </Grid>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
