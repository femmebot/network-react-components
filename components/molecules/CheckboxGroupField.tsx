import React from "react";
import styled from "styled-components";

import {
  FormControl as BaseFormControl,
  MenuItem as MuiMenuItem,
  withStyles
} from "@material-ui/core";
import { MenuItemProps } from "@material-ui/core/MenuItem";
import { ObjectifiableFormOption } from "~shared/data";
import Box from "~shared/components/atoms/Box";
import FieldError from "~shared/components/atoms/FieldError";
import FieldLabel from "~shared/components/atoms/FieldLabel";
import {
  colors,
  sizeStyles,
  spaceStyles,
  typography
} from "~shared/styles/index";
import { SizeProps } from "~shared/styles/props/size";
import { SpaceProps } from "~shared/styles/props/space";
import { pxToRem, styleObjectToTemplate } from "~shared/styles/utils";
import objectifyOptions from "~shared/utils/objectifyOptions";

interface Props extends SpaceProps, SizeProps {
  label?: string;
  className?: string;
  onChange: (value: string[]) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  id: string;
  error?: string;
  disabled?: boolean;
  disableUnderline?: boolean;
  options: ObjectifiableFormOption[];
  name?: string;
  placeholder?: string;
  tallLabel?: boolean;
  value: string[];
}

const selectFontStyle = {
  fontFamily: typography.serif,
  fontSize: pxToRem(16),
  lineHeight: 1.1,
  letterSpacing: pxToRem(0.6),
  textTransform: "inherit",
  fontWeight: "normal"
};

/* need to type as any because textTransform and fontWeight arent typed
 * correctly on material-ui */
const menuItemStyles: any = {
  root: {
    ...selectFontStyle,
    color: colors.grayBoulder,
    "&:hover": {
      color: colors.black,
      background: "none"
    }
  },
  selected: {
    background: `${colors.white} !important`,
    color: colors.black
  }
};

const BaseMenuItem = (props: MenuItemProps) => <MuiMenuItem {...props} />;
const MenuItem = withStyles(menuItemStyles)(BaseMenuItem);

const FormControl = styled(BaseFormControl)`
  ${sizeStyles};
  ${spaceStyles};
  && > div,
  && input {
    ${styleObjectToTemplate(selectFontStyle)};
  }
`;

const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid currentColor;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  margin-right: ${pxToRem(8)};
  ${(props: { checked: boolean }) =>
    props.checked ? "background: currentColor" : `background: ${colors.white}`};
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    padding-left: 0;
  }
`;

const CheckboxGroupField = ({
  label,
  className,
  onChange,
  value,
  id,
  disabled,
  error,
  options,
  onBlur: _onBlur,
  ...styleProps
}: Props) => {
  const objectOptions = objectifyOptions(options);

  return (
    <FormControl
      {...styleProps}
      disabled={disabled}
      error={!!error}
      className={className}
    >
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Box pt={20}>
        {objectOptions.map(option => (
          <StyledMenuItem
            onClick={() =>
              onChange(
                value.includes(option.value)
                  ? value.filter(i => i !== option.value)
                  : value.concat([option.value])
              )
            }
            key={option.value}
            value={option.value}
          >
            <Checkbox checked={value.includes(option.value)} />
            {option.label}
          </StyledMenuItem>
        ))}
      </Box>
      {error && <FieldError>{error}</FieldError>}
    </FormControl>
  );
};

export default CheckboxGroupField;
