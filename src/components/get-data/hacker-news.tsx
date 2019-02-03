import React, {useState, useEffect} from 'react';
import axios, { AxiosPromise } from 'axios';
import { useForm, useField } from 'react-final-form-hooks'
import to  from 'await-to';

interface Hits {
  objectID: string;
  url: string;
  title: string;
}

const noop = () => {}

export const  getQueryEx = async (searchTerm: string) => {
  return  await axios(
  `http://hn.algolia.com/api/v1/search?query=${searchTerm}`
);
}



const validate = async (values: any) => {
  // alert(JSON.stringify(values, null, 2))
}

/**
 * Search Hacker News for search term
 */
export const HackerNews = () => {

  let [data, setData] = useState({ hits: [] as Hits[] });

  const getQuery = async (searchTerm: string) => {
    const [err, res] = await to(getQueryEx(searchTerm))
    err ? alert(err) : noop()
    const data = await res.data;
    console.log(data)
    setData(data)
    }


  const onSubmit = async (values: any) => {
    console.log(values)
    getQuery(values.searchTerm)
  }

  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
    validate
  })

  const searchTerm = useField('searchTerm', form)

  useEffect(() => {
    getQuery(searchTerm)
  },[]);

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="mb2"> Search for <input {...searchTerm.input} placeholder="Search for..." /></div>
        <button type="submit" disabled={submitting}>
            Submit
          </button>
                <button
            type="button"
            onClick={() => form.reset()}
            disabled={submitting || pristine}
          >
            Reset
          </button>
    </form>
    <ul className="mt2">
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank">{item.title} <i className="fas fa-fw fa-check"></i></a>
        </li>
      ))}
    </ul>
    </>
  );
}
