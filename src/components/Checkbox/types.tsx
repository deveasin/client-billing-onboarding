import React from "react";

export interface CheckboxProps {
    value?: string;
    checked?: boolean;
    text: string;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}