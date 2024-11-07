import './ViewMore.css'

const ViewMore = ({searchYelp, buttonDisplay}) => {

    const handleClick = (event) => {
        event.preventDefault();
        searchYelp()
    }

    return (
        <>
            <div className='viewMoreContainer'>
                <button className={buttonDisplay} onClick={handleClick}>View More</button>
            </div>
        </>
    );
}

export default ViewMore