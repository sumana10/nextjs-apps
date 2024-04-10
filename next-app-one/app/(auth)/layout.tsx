import '../globals.css'

export default function ({children}:{
    children : React.ReactNode
}) {
    return <div>
        <div className="border-b p-1">
            20% off for next 3 days
        </div>
        {children}
    </div>
}