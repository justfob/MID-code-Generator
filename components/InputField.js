function InputField({ label, value, onChange, placeholder }) {
    return (
        <div className="mb-4" data-name="input-field-container">
            <label className="block text-sm font-medium text-gray-700 mb-1" data-name="input-label">
                {label}
            </label>
            <input
                type="text"
                className="input-field"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                data-name="input-field"
            />
        </div>
    );
}
