import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const number = Math.floor(Math.random() * 6) + 1;
const DisplayDiceResult: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p>{number}</p>
         
        </div>
    );
};

export default DisplayDiceResult;