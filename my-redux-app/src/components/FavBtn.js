import {useState, useEffect} from 'react';
import { appStorageName } from '../globals/globalVariables';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

function FavBtn ({mov, handleAddMov, handleDeleteMov}) {
    const [btnState, setBtnState] = useState(false);

    function handleAddFav() {
        setBtnState(btnState => !btnState);
        handleAddMov(mov);
    }

    function handleRemoveFav() {
        setBtnState(btnState => !btnState);
        handleDeleteMov(mov);
    }

    useEffect(() => {
        let favsFromStorage = localStorage.getItem(appStorageName);
        favsFromStorage = JSON.parse(favsFromStorage);
        const isFav = favsFromStorage ? favsFromStorage.some((obj) => obj.id === mov.id) : false ;
        if (isFav) {
            setBtnState(true);
        } else {
            setBtnState(false);
        }
    }, [mov.id])

    return (
        <>
        {btnState === false ? (
            <button onClick={handleAddFav} className="fav">
                <img className='heart' src={`${imageFolderPath}neonheartunclicked.png`} alt="Unclicked heart"></img>
            </button>
        ) : (
            <button onClick={handleRemoveFav} className="fav">
                <img className='heart' src={`${imageFolderPath}neonheartclicked.png`} alt="Clicked heart"></img>
            </button>
        )}
        </>
    );
}

export default FavBtn;

