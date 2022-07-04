const NextButton = ({textColor, changeQuote}) => {

    return (
        <div className='card-footer' style={{color: textColor}}>
            <i onClick={changeQuote} className="fa-solid fa-circle-chevron-right"></i>
        </div>
    );
};
export default NextButton;