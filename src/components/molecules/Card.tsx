import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { fetchPostById } from '@/lib/constants/apiConstants';

// Define the props for the Card component
type CardProps = {
  id: number;
};

// The Card component fetches and displays data for a post based on the provided 'id'
const Card: React.FC<CardProps> = ({ id }) => {
  // Use the 'useQuery' hook from React Query to fetch post data by ID
  // The query is set to not run automatically on component mount (enabled: false)
  const { data, isError, refetch, isFetching } = useQuery({
    queryKey: ['fetchPostById'],
    queryFn: () => fetchPostById(id),
    enabled: false,
  });

  // Function to trigger data fetching manually
  const handleFetchData = async () => {
    await refetch(); // Calls 'refetch' to execute the query function
  };

  // Dynamically set the content based on query state
  let content;

  if (isFetching) {
    // Display loading state if the query is fetching data
    content = <p>Loading...</p>;
  } else if (isError) {
    // Display error message if the query encountered an error
    content = <p>Error occurred</p>;
  } else if (data) {
    // Display post data if available
    content = (
      <>
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p>{data.body}</p>
      </>
    );
  } else {
    // Fallback content when there is no data
    content = <p>No data</p>;
  }

  return (
    <div className="border p-4 rounded-lg">
      {content}
      {!data && <Button onClick={handleFetchData}>Get data</Button>}{' '}
      {/* Show 'Get data' button when there's no data */}
    </div>
  );
};

export default Card;
