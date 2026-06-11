import dynamic from "next/dynamic"

export default function TargetCursorClient() {
    const TargetCursor = dynamic(
        () => import("@/components/TargetCursor/TargetCursor"),
        { ssr: false }
    )
    return (
        <div>
            <TargetCursor
                spinDuration={4}
                hideDefaultCursor
                parallaxOn
                hoverDuration={0.2}
            />
        </div>
    )
}