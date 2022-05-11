import React from "react";

export interface SelectProps {
    value?: string;
    options: {value: string, label: string}[];
    onChange?: (value: React.ChangeEvent<HTMLSelectElement>) => void
}