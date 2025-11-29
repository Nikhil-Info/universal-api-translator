'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const themes = [
    {
        key: 'system',
        icon: Monitor,
        label: 'System theme',
    },
    {
        key: 'light',
        icon: Sun,
        label: 'Light theme',
    },
    {
        key: 'dark',
        icon: Moon,
        label: 'Dark theme',
    },
];

export type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className={cn(
                'relative isolate inline-flex items-center rounded-full border border-gray-500 p-[1px]',
                className
            )}
        >
            {themes.map(({ key, icon: Icon, label }) => {
                const isActive = theme === key;
                return (
                    <button
                        aria-label={label}
                        className={cn(
                            "relative flex h-5 w-5 items-center justify-center rounded-full transition-colors",
                            "hover:text-foreground",
                            "active:bg-gray-500/35 active:text-white"
                        )}
                        key={key}
                        onClick={() => setTheme(key)}
                        type="button"
                    >
                        {isActive && (
                            <motion.div
                                className="absolute inset-0 rounded-full bg-foreground text-background"
                                layoutId="activeTheme"
                                transition={{ type: 'spring', duration: 0.5 }}
                            />
                        )}
                        <Icon
                            className={cn(
                                'relative z-10 h-3.5 w-3.5',
                                isActive ? 'text-background' : 'text-muted-foreground group-hover:text-foreground'
                            )}
                            style={{ width: 14, height: 14 }}
                        />
                    </button>
                );
            })}
        </div>
    );
};
