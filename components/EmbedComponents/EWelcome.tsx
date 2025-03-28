import { Text, Title, Image, Flex, Button, useMantineTheme } from '@mantine/core';
import darkLogo from '../../public/AA_Dark_Logo.svg';
import lightLogo from '../../public/AA_Light_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';

export function Welcome({ darkMode, customLogo }: { darkMode: boolean | null; customLogo: boolean | null }) {
  const theme = useMantineTheme();

  // Determine which logo to use for the first NextImage
  const assetAlleyLogo = darkMode ? darkLogo : lightLogo;

  return (
    <div style={{ backgroundColor: theme.colors.background[0] }}>
      {!customLogo && (
        <Flex justify="center" align="center" direction="row" wrap="nowrap" bg={theme.colors.background[0]}>
        <NextImage
          src={assetAlleyLogo}
          alt="Logo"
          style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
        />
      </Flex>
    )}
      {!customLogo && (
            <JumboTitle c={theme.colors.header[0]} ta="center" fz="xs" maw={580} mx="auto" pt="xl" lh={1.3}>
            Finance your websites and apps
          </JumboTitle>
      )}

      {customLogo && (
      <JumboTitle c={theme.colors.header[0]} ta="center" fz="xs" maw={580} mx="auto" pt="xl" lh={1.3}>
      Finance your websites and apps with 
      {customLogo && (
        <NextImage
          src={assetAlleyLogo}
          alt="Asset Alley Logo"
          style={{ height: '1em', width: 'auto', maxWidth: '60vw', verticalAlign: 'bottom' }}
        />
      )}
    </JumboTitle>
      )}
    </div>
  );
}
