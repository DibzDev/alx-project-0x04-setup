// Interface for Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Interface for Layout component
export interface LayoutProps {
  children: React.ReactNode;
}

// Interface for Page Routing
export interface PageRouteProps {
  pageRoute: string;
}