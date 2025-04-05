const axios = require('axios');


const index = async (req, res) => {
    try {
        const movies = await axios.get(`${process.env.TMDB_BASE_URL}/movie/now_playing`, {
            params:{
                api_key: process.env.TMDB_API_KEY,
                language: 'es-ES',
                region:'CO'
            }
        });
        return res.status(200).json({
            status:true,
            message:'Peliculas listadas en forma correcta',
            data: movies.data.results
        });
    } catch (error) {
        
    }
}

module.exports = {
    index
}