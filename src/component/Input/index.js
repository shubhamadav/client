

const Input = ({
    label='',
    name='',
    type='',
    className='',
    isRequired='',
    placeholder='',
    value='',
    onChange = () => {},
}) => {
  return (
    <div>
         <label for={name} className="block text-sm font-medium text-gray-800">{label}</label>
         <input type={type} id={name} className={`bg-gray-50 border border-gry-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5  ${className}`}
         placeholder={placeholder} required={isRequired} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input
