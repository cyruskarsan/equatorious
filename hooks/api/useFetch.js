import { NFTPORT_API_KEY } from '@src/helpers';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * @param {string} url
 * @param {object} options
 * @param {'GET'|'POST'|'PUT'|'PATCH'|'DELETE'} options.method
 * @param {object} options.body
 * @param {boolean} options.run
 * @returns {[{ data: Array<object>, error: object, loading: boolean }, fetchData: () => Promise<void>)]}
 */
const useFetch = (url, { body, method = 'GET', run = true } = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const mountedRef = useRef();

  const fetchData = useCallback(
    async ({ body: newBody, method: newMethod } = {}) => {
      if (!url || !mountedRef.current) return;
      setLoading(true);
      const tempBody = newBody || body;
      const tempMethod = newMethod || method;
      const hasBody = tempBody && method !== 'GET';
      const bodyData = hasBody ? { body: JSON.stringify(tempBody) } : {};
      try {
        const response = await fetch(url, {
          method: tempMethod,
          headers: {
            'Content-Type': 'application/json',
            Authorization: NFTPORT_API_KEY,
          },
          ...bodyData,
        });
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [body, method, url],
  );

  useEffect(() => {
    mountedRef.current = true;
    if (run) fetchData();
    return () => (mountedRef.current = false);
  }, [fetchData, run]);

  return [{ data, error, loading }, fetchData];
};

export default useFetch;
