export interface BaseButtonPropTypes {
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "outlined" | "text";
    loading?: boolean
    click?: () => void;
}