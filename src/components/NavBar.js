import { useState, useEffect, useReducer } from 'react';

import { NavLink } from 'react-router-dom';

import { GoChevronRight, GoChevronDown } from 'react-icons/go';

import useFetch from '../hooks/useFetch';

const initialState = {
  language: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

function NavBar() {
  const [links, setLinks] = useState([]);
  const [expandedLinks, setExpandedLinks] = useState({});

  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading } = useFetch(
    'https://hsbharath.github.io/nav-links/data/home-links.json'
  );

  useEffect(() => {
    if (data) {
      setLinks(data);
      console.log(data);
    }
  }, [data]);

  const toggleSublinks = (linkId) => {
    setExpandedLinks({
      ...expandedLinks,
      [linkId]: !expandedLinks[linkId],
    });
  };

  useEffect(() => {
    console.log(expandedLinks);
  }, [expandedLinks]);

  return (
    <>
      <hgroup className='w-full h-[70px] flex items-center justify-start p-4'>
        <h1 className='text-3xl font-bold'>OnePlace.</h1>
      </hgroup>
      <ul className='w-full flex flex-col items-start justify-start'>
        {!isLoading &&
          links &&
          links.map((link, _) => (
            <li key={link.id} className='w-full text-left px-3'>
              <NavLink
                to={link.link}
                onClick={() => toggleSublinks(link.id)}
                state={state}
                dispatch={dispatch}
                className='w-full flex items-center justify-between p-2'
              >
                <span className='text-black text-md font-medium'>
                  {link.name}
                </span>
                {link?.sublinks && (
                  <span>
                    {!expandedLinks[link.id] ? (
                      <GoChevronRight size={24} fontWeight={'bold'} />
                    ) : (
                      <GoChevronDown size={24} fontWeight={'bold'} />
                    )}
                  </span>
                )}
              </NavLink>
              {expandedLinks[link.id] && link?.sublinks && (
                <ul className='w-full flex flex-col items-start justify-start'>
                  {link.sublinks &&
                    link.sublinks.map((sublink, _) => (
                      <li key={sublink.id} className='w-full px-6 py-2'>
                        <NavLink
                          to={`${link.link}/${sublink.link}`}
                          className='text-md font-medium'
                        >
                          <span>{sublink.name}</span>
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}

export default NavBar;
