import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSearchBarText } from "../../state/reducers/searchBarSlice";

import './SearchBar.scss';

const SearchBar = () => {
    
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setSearchBarText(e.target.value));
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