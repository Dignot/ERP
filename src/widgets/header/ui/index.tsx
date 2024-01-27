import { Typography, useTheme } from '@mui/material';

import { useTranslete } from 'providers/hooks/useTranslete';
import * as Styled from './index.styled';
import { LogoIcon } from 'shared/icons/logo';
import { useState } from 'react';
import { ColorPicker } from 'primereact/colorpicker';

export const Header = () => {
  const { t } = useTranslete();

  const [color, setColor] = useState('blue');

  return (
    <Styled.HeaderWrapper {...{ color }}>
      <Styled.HeaderLeftAction>
        <Styled.HeaderLogo>
          <LogoIcon />
        </Styled.HeaderLogo>
      </Styled.HeaderLeftAction>
      <Styled.HeaderRightAction>
        <ColorPicker
          onChange={e => {
            if (e.value) {
              setColor(('#' + e.value) as string);
            }
          }}
        />
        <Typography sx={{ color: '#fff' }}>Фамилия Сотрудник клиент</Typography>
      </Styled.HeaderRightAction>
    </Styled.HeaderWrapper>
  );
};
