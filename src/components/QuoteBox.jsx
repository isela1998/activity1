const QuoteBox = ({textColor, quote, author}) => {
    return (
      <div className='card-body' style={{color: textColor}}>
        <p><i className="fa-solid fa-quote-left"></i>{quote}</p>
        <span>{author}</span>
      </div>
    );
};
export default QuoteBox;