import { useSearchParams } from 'react-router-dom';

interface PropertyFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  propertyType: string;
  features: string[];
  sortBy: string;
}

export const usePropertySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const filters: PropertyFilters = {
    location: searchParams.get('location') || '',
    minPrice: parseInt(searchParams.get('minPrice') || '0'),
    maxPrice: parseInt(searchParams.get('maxPrice') || '1000000'),
    propertyType: searchParams.get('type') || 'all',
    features: searchParams.getAll('features'),
    sortBy: searchParams.get('sort') || 'newest'
  };

  const setFilter = (key: keyof PropertyFilters, value: string | number | string[]) => {
    if (Array.isArray(value)) {
      // Handle array values (features)
      searchParams.delete(key);
      value.forEach(v => searchParams.append(key, v));
    } else {
      // Handle single values
      searchParams.set(key, value.toString());
    }
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const appendFeature = (feature: string) => {
    const currentFeatures = filters.features;
    if (!currentFeatures.includes(feature)) {
      setFilter('features', [...currentFeatures, feature]);
    }
  };

  const removeFeature = (feature: string) => {
    const currentFeatures = filters.features;
    setFilter(
      'features',
      currentFeatures.filter(f => f !== feature)
    );
  };

  return {
    filters,
    setFilter,
    resetFilters,
    appendFeature,
    removeFeature
  };
};