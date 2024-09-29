// src/components/CallingCode.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query
const CALLING_CODE_QUERY = gql`
  query {
    CallingCode {
      name
      countries {
        name
      }
    }
  }
`;

const CallingCode = () => {
    // Execute the query with useQuery hook
    const { loading, error, data } = useQuery(CALLING_CODE_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Calling Codes</h1>
            <ul>
                {data.CallingCode.map((code) => (
                    <li key={code.name}>
                        {code.name}: {code.countries.map((country) => country.name).join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CallingCode;