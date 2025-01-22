"use client";
import React from 'react';
import {useTheme} from "next-themes";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import {SunIcon, MoonIcon, SunMoon} from "lucide-react";
import {Button} from "@/components/ui/button";

const ModeToggle = () => {
    const {theme, setTheme} = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >{theme === 'system' ? (<SunMoon/>) : theme === 'dark' ? (<MoonIcon/>) : (<SunIcon/>)}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem
                    checked={theme === 'system'}
                    onClick={() => setTheme('system')}
                >System</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'light'}
                    onClick={() => setTheme('light')}
                >Light</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'}
                                          onClick={() => setTheme('dark')}>Dark</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;