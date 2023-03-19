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
  className,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={className}
      aria-label={ariaLabel}
      onClick={action}
      disabled={isDisabled}
    >
      {text}
      {icon}
    </ButtonStyled>
  );
};

export default Button;
