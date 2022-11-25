import { LayoutProps } from './types';

export default function Layout({ children }: LayoutProps) {
    return <div className="w-full flex flex-col bg-cornflower">{children}</div>;
}
