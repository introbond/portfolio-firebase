import axios from 'axios';

const getCertificationList = (async () => {
    const BACKEND_URLS = [
        import.meta.env.VITE_BACKEND_URL1,
        import.meta.env.VITE_BACKEND_URL2,
    ].map(url => url + "/certifications/");

    for (let url of BACKEND_URLS) {
        try {
            const response = await axios.get(url);
            return response.data.sort((a, b) => b.id - a.id);
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    throw new Error('All backend services are unavailable.');
});

export { getCertificationList }
