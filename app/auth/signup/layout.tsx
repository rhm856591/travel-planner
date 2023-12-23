import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Register - Travel Planner',
    description: 'Register in to Travel Planner',
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