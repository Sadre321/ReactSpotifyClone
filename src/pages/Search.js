import React, { useEffect, useRef, useState } from 'react'
import categories from 'data/categories'
import Title from 'Components/Title';
import favoriteCategories from 'data/favorite-categories';
import ScrollContainer from 'react-indiana-drag-scroll'
import { Icon } from 'Icons';
import WideCategoryItem from 'Components/WideCategoryItem';
import CategoryItem from 'Components/CategoryItem';

const Search = () => {

  const favoriteRef = useRef();

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoriteRef.current) {
      favoriteRef.current.addEventListener("scroll", () => {
        // console.log(favoriteRef.current.offsetWidth);
        // console.log(favoriteRef.current.scrollLeft);

        const isEnd = favoriteRef.current.scrollLeft + favoriteRef.current.offsetWidth === favoriteRef.current.scrollWidth;
        const isBegin = favoriteRef.current.scrollLeft === 0;

        setPrev(!isBegin);
        setNext(!isEnd);
      })

      console.log(favoriteRef.current.scrollWidth);
    }
  }, [favoriteRef]);

  const slideFavoritesNext = () => {
    favoriteRef.current.scrollLeft += favoriteRef.current.offsetWidth - 100;
  }

  const slideFavoritesPrev = () => {
    favoriteRef.current.scrollLeft -= favoriteRef.current.offsetWidth - 100;
  }

  return (
    <>
      <section className='mb-8'>
        <Title title={"En çok dinlediğin türler"} />
        <div className='relative'>
          {prev && <button onClick={slideFavoritesPrev} className='w-12 absolute z-10 -left-6 top-1/2 h-12 -translate-y-1/2 rounded-full hover:scale-[1.06] text-black bg-white flex items-center justify-center'>
            <Icon name={"prev"} size={24} />
          </button>}
          {next && <button onClick={slideFavoritesNext} className='w-12 absolute z-10 -right-6 top-1/2 -translate-y-1/2 h-12 rounded-full hover:scale-[1.06] text-black bg-white flex items-center justify-center'>
            <Icon name={"next"} size={24} />
          </button>}
          <ScrollContainer className='flex overflow-x gap-x-6 scrollable' innerRef={favoriteRef}>
            {
              favoriteCategories.map((category, index) => (<WideCategoryItem key={index} category={category} />))
            }
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title={"Hepsine göz at"} />
        <div className='grid grid-cols-5 gap-6'>
          {
            categories.map((category, index) => (<CategoryItem key={index} category={category} />))
          }
        </div>
      </section>
    </>
  )
}

export default Search;