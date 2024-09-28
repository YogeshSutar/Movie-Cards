import '../CSS/cards.css';

const MCards = ({ data }) => {
  const { Title, Poster, Year, key } = data;

  return (
      <div className="inner-container" key={key}>
        <img src={Poster} alt={Title} />
        <h3>{Title}</h3>
        <p>{Year}</p>
        <button className='watch-btn'>Watch</button>
      </div>
  );
};

export default MCards;
