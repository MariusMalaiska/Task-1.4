import React, { useState, useCallback } from "react";


const AdvertContext = React.createContext({});

function AdvertProvider({ children }) {

    const [adverts, setAdverts] = useState([]);
    const [error] = useState(null);


    const getAdverts = useCallback(async () => {


        try {
            let item = await fetch(`https://proxy-api-master.herokuapp.com/proxy?url=https://backend.daviva.lt/API/InformacijaTestui`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!item.ok) throw item.json();
            item = await item.json();
            item.index = 0

            const newAdverts = [...adverts, item];
            setAdverts(newAdverts);

        } catch (e) {
            console.log(await e);
        }
    }, [adverts]);

    return (
        <AdvertContext.Provider
            value={{ adverts, getAdverts, error }}
        >
            {children}
        </AdvertContext.Provider>
    );
}

export { AdvertProvider, AdvertContext };