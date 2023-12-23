import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sign in - Travel Planner',
    description: 'Sign in to Travel Planner',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>{children}</div>
    )
}