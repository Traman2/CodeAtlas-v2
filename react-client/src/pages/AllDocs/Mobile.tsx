
export default function Mobile() {
    return (
        <>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 pt-4 px-6 max-w-70 overflow-y-auto">
                    Tabs 1 Mobile
                </div>

                <div className="flex-1 pt-4 flex justify-center">
                    <div className="min-w-190">
                        Content floating 2
                    </div>
                </div>

                <div className="flex-1 pt-4 max-w-70 overflow-y-auto hidden xl:block">
                    On page 3
                </div>
            </div>
        </>
    )
}