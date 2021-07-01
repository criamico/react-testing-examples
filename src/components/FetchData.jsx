import React, { useEffect, useState } from "react";
import Item from './Item';

const FetchData = () => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        fetch('https://api.coinbase.com/v2/currencies')
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data.data);
          })
          .catch((error) => {
            console.log('Error:', error);
          })
          .finally(setLoading(false));
      }, 3000);
    }, []);

  if (loading ) return 'Loading..';

  return (
    <>
      <h1>
        3. Fetch world currencies
      </h1>
      <ul>
        {data.map((v) => <Item currency={v} key={v.id}/> )}
      </ul>
    </>
  );
};

export default FetchData;
