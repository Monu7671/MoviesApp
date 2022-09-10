const url = "http://www.omdbapi.com/?i=tt3896198&apikey=abe6a5bc"

export const fetchMovies = async (title) => {
    try {
        const res = fetch(`${url}&s=${title}`)
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error.response)
    }
};