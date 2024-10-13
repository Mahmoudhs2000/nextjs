"use client";

import { createTheme } from "@mantine/core";

const colors = {
    primary: "#815000",
    secondary: "#215000",
}

export const theme = createTheme({
    components: {
        Button: {
            styles: (theme) => ({
                root: {
                    backgroundColor: colors.primary, // Override default button background color
                },
            }),
        },
        Input: {
            styles: (theme) => ({
                input: {
                    outlineColor: colors.primary, // Override default input border color on focus
                    '&:focus': {
                        outline: 'auto', // Override default input border color on focus
                    },
                },
            }),
        },
    },
});