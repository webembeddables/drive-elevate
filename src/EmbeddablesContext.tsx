import React, { createContext, useContext, useState } from 'react';

// Define the shape of our context
interface EmbeddablesContextType {
  isInitialized: boolean;
  setIsInitialized: (value: boolean) => void;
}

// Create the context with default values
const EmbeddablesContext = createContext<EmbeddablesContextType>({
  isInitialized: false,
  setIsInitialized: () => {},
});

// Custom hook to use the context easily
export const useEmbeddables = () => {
  const context = useContext(EmbeddablesContext);
  if (!context) {
    throw new Error('useEmbeddables must be used within EmbeddablesProvider');
  }
  return context;
};

// Provider component that wraps your app
export const EmbeddablesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  return (
    <EmbeddablesContext.Provider value={{ isInitialized, setIsInitialized }}>
      {children}
    </EmbeddablesContext.Provider>
  );
};
