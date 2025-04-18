import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
