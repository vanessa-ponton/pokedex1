import PropTypes from "prop-types";

function PokemonCard(props) {
    const { pokemonSelected } = props;
    console.log(props);



    return (
        <figure>
            {pokemonSelected.imgSrc ? (<img src={pokemonSelected.imgSrc} />) : (<p>???</p>)}
            <figcaption >{pokemonSelected.name}</figcaption>
        </figure>

    );
}



PokemonCard.propTypes = {
    pokemonSelected: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}
export default PokemonCard;