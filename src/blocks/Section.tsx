export const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl">{title}</h2>
            <div>{children}</div>
        </div>
    )
}