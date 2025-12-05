import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark', // Default to dark mode as per requirements
  setTheme: (theme) => {
    localStorage.setItem('gu-path-theme', theme);
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('gu-path-theme', newTheme);
      return { theme: newTheme };
    }),
  initializeTheme: () => {
    const savedTheme = localStorage.getItem('gu-path-theme') as Theme | null;
    if (savedTheme) {
      set({ theme: savedTheme });
    } else {
      // Default to dark mode
      localStorage.setItem('gu-path-theme', 'dark');
      set({ theme: 'dark' });
    }
  },
}));
