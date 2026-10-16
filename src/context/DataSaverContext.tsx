import React, { createContext, useContext, useState, useEffect } from 'react';

interface DataSaverContextType {
  isDataSaver: boolean;
  toggleDataSaver: () => void;
  savedDataMb: number;
}

const DataSaverContext = createContext<DataSaverContextType>({
  isDataSaver: false,
  toggleDataSaver: () => {},
  savedDataMb: 0
});

export function DataSaverProvider({ children }: { children: React.ReactNode }) {
  const [isDataSaver, setIsDataSaver] = useState<boolean>(() => {
    return localStorage.getItem('ama_data_saver') === 'true';
  });

  const [savedDataMb, setSavedDataMb] = useState<number>(() => {
    return Number(localStorage.getItem('ama_saved_mb') || '14.2');
  });

  useEffect(() => {
    localStorage.setItem('ama_data_saver', String(isDataSaver));
  }, [isDataSaver]);

  const toggleDataSaver = () => {
    setIsDataSaver((prev) => {
      const next = !prev;
      if (next) {
        setSavedDataMb((m) => {
          const updated = Number((m + 2.4).toFixed(1));
          localStorage.setItem('ama_saved_mb', String(updated));
          return updated;
        });
      }
      return next;
    });
  };

  return (
    <DataSaverContext.Provider value={{ isDataSaver, toggleDataSaver, savedDataMb }}>
      {children}
    </DataSaverContext.Provider>
  );
}

export function useDataSaver() {
  return useContext(DataSaverContext);
}
