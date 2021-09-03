import { MdSearch } from "react-icons/md"

const SearchBar = ({ handleSearchBar }) => {
    
    const handleChange = (e) => {
        handleSearchBar(e.target.value);
    };
    
    return (
        <div className="search-bar">
            <MdSearch className="search=icon" size="1.3em" />
            <input 
                type="text" 
                placeholder="search..."
                onChange={handleChange}
            />        
        </div>
    );
};

export default SearchBar;