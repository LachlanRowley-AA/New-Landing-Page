import { Text, Title, Image, Flex, Button, useMantineTheme } from '@mantine/core';
import darkLogo from '../../public/AA_Dark_Logo.svg';
import lightLogo from '../../public/AA_Light_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';

export function Welcome({ darkMode, customLogo, businessType }: { darkMode: boolean | null; customLogo: boolean | null, businessType: string | null }) {
  const theme = useMantineTheme();
  let text = "Warning Missing Business Type. SET aaBusinessType to website, shopfit or materials"

  // Determine which logo to use for the first NextImage
  const assetAlleyLogo = darkMode ? darkLogo : lightLogo;
  switch (businessType) {
    case 'website':
      text = 'websites and apps'
      break;
    case 'shopfit':
      text = 'shop fitout'
      break;
    case 'materials':
      text = 'building materials'
      break;
  }

  return (
    <div style={{ backgroundColor: theme.colors.background[0] }}>
      {!customLogo && (
        <Flex justify="center" align="center" direction="row" wrap="nowrap" bg={theme.colors.background[0]} pt="md">
        <NextImage
          src={assetAlleyLogo}
          alt="Logo"
          style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
        />
      </Flex>
    )}
      {!customLogo && (
            <JumboTitle c={theme.colors.header[0]} ta="center" fz="xs" maw={580} mx="auto" pt="xl" lh={1.3}>
            Finance your {text}
          </JumboTitle>
      )}

      {customLogo && (
      <JumboTitle c={theme.colors.header[0]} ta="center" fz="xs" maw={580} mx="auto" pt="xl" lh={1.3}>
      Finance your {text} with 
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
