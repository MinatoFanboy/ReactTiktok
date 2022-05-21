import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [deboundceValue, setDeboundceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboundceValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return deboundceValue;
}

export default useDebounce;
