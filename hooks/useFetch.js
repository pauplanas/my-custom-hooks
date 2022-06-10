import React, {useEffect, useState, useRef} from 'react';

export const useFetch = (url) => {

    const loadingData = {
        data: null,
        loading: true,
        error: null
    };

    const isMounted = useRef(true);

    const [state, setState] = useState(loadingData);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);


    useEffect(() => {

        setState(loadingData);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {

                    if (isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('no fem res... igualment no petava i no sé pq')
                    }

                }, 2000);

            });
    }, [url]);

    return state;

}