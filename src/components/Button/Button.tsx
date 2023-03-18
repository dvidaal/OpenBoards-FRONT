import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  className?: string;
  ariaLabel?: string;
  action?: () => void;
}

const Button = ({
  text,
  isDisabled,
  icon,
  action,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled aria-label={ariaLabel} onClick={action} disabled={isDisabled}>
      {text}
      {icon}
    </ButtonStyled>
  );
};

export default Button;
