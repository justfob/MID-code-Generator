function ResultDisplay({ midCode }) {
    const [copySuccess, setCopySuccess] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(midCode);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg" data-name="result-display">
            <h2 className="text-lg font-semibold mb-2" data-name="result-title">Generated MID Code:</h2>
            <div className="flex items-center gap-2" data-name="result-container">
                <div className="flex-grow text-2xl font-mono bg-white p-4 rounded border" data-name="mid-code">
                    {midCode || 'Enter details to generate code'}
                </div>
                {midCode && (
                    <button
                        onClick={handleCopy}
                        className="copy-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-2"
                        data-name="copy-button"
                    >
                        <i className={`fas ${copySuccess ? 'fa-check' : 'fa-copy'}`}></i>
                        {copySuccess ? 'Copied!' : 'Copy'}
                    </button>
                )}
            </div>
        </div>
    );
}
