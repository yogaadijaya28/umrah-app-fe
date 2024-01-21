
export default function LoadingComponent() {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center backdrop bg-black bg-opacity-80 z-[9999]" id="loading-image" style={{ display: 'flex' }}>
                <img src="/assets/img/loading.gif" alt="Loading..." className="w-20" />
            </div>
        </>
    )
}