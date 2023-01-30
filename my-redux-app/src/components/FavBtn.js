import {useState} from 'react';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

function FavBtn ({remove, handleFavClick}) {
    const [btnState, setBtnState] = useState(false);

    function handleFavBtn() {
        setBtnState(btnState => !btnState);
    }

    return (
        <>
        {btnState === false ? (
            <button onClick={handleFavBtn} className="fav">
                <img className='heart' src={`${imageFolderPath}neonheartunclicked.png`} alt="Unclicked heart"></img>
            </button>
        ) : (
            <button onClick={handleFavBtn} className="fav">
                <img className='heart' src={`${imageFolderPath}neonheartclicked.png`} alt="Clicked heart"></img>
            </button>
        )}
        </>
    );
}

FavBtn.defaultProps = {
    remove: false,
};

export default FavBtn;