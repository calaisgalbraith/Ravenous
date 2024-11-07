import './ViewMore.css'

const ViewMore = ({searchYelp}) => {

    const handleClick = (event) => {
        event.preventDefault();
        searchYelp()
    }

    return (
        <>
            <div className='viewMoreContainer'>
                <button className="btn" onClick={handleClick}>View More</button>
            </div>
        </>
    );
}

export default ViewMore