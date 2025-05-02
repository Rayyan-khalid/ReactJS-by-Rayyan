import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://openexchangerates.org/api/currencies.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data); // Log the fetched data
                setData(data[currency]); // Set the correct data
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
};

export default useCurrencyInfo;