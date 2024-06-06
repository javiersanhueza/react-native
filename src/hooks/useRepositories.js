import { useEffect, useState } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = async () => {
    setIsLoading(true);

    try {
      const response = await global.fetch('http://192.168.0.66:5000/api/repositories');
      const json = await response.json();
      setRepositories(json.edges.map(edge => edge.node));
    } catch (error) {
      console.error('Error fetching repositories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, isLoading }; // Return both repositories and loading state
};

export default useRepositories;
