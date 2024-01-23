export default function CustomInput({label, invalid, ...props}){
    let baseLabelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase ";
    let labelClasses = baseLabelClasses + (invalid ? "text-red-400" : "text-stone-300");

    let baseInputClasses = "w-full px-3 py-2 leading-tight border rounded shadow ";
    let inputClasses = baseInputClasses + (invalid ? "text-red-500 bg-red-100 border-red-300" : "text-gray-700 bg-stone-300");

    return <p>
        <label className={labelClasses}>{label}</label>
        <input className={inputClasses} {...props} />
    </p>
}