// import {useState} from 'react';

// const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

function FavBtn ({movieObj, remove, handleFavClick}) {
    // const [btnState, setBtnState] = useState(false);

    // function handleFavBtn() {
    //     setBtnState(btnState => !btnState);
    // }
    function handleAddFav() {
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav() {
        handleFavClick(false, movieObj);
    }

    return (
        <>
        {/* {btnState === false ? (
            <button onClick={handleFavBtn} className="fav">
                <img className='heart' src={`${imageFolderPath}neonheartunclicked.png`} alt="Unclicked heart"></img>
            </button>
        ) : (
            <button onClick={handleFavBtn} className="fav">
                <img className='heart' src={`${imageFolderPath}neonheartclicked.png`} alt="Clicked heart"></img>
            </button>
        )} */}
        {remove === false ? (
            <button onClick={handleAddFav}>Add to Favs</button>
        ) : (
            <button onClick={handleRemoveFav}>Remove From Favs</button>
        )}
        </>
    );
}

FavBtn.defaultProps = {
    remove: false,
};

export default FavBtn;

