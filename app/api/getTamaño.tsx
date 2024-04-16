import axios from 'axios';

async function getTamañoByIds(ids: (string | number)[]) {
    try {
        const responses = await Promise.all(
            ids.map(async (id) => await axios.get(`http://www.xclusivedesigns.somee.com/api/Tamaño/${id}`))
        );
        const data = responses.map(response => response.data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default getTamañoByIds;
