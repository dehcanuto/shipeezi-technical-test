export interface BaseButtonPropTypes {
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "outlined" | "text";
    color?: "green" | "red";
    loading?: boolean
    click?: () => void;
}