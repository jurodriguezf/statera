const SearchBar = (props) => {
    return (
        <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"></path>
                    </svg>
                </div>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 font-manrope font-semibold text-gray-900 text-m rounded-lg focus:ring-red-100 focus:outline-wine focus:border-wine block w-full pl-10 p-2.5"
                       placeholder={props.placeholder} required
                       onChange={props.onChange}
                />
            </div>
        </form>
    )
}

export default SearchBar