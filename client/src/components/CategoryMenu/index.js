import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
     <h1>A warm welcome to MERN Ski Resort</h1> 
    <p>Taking a ski trip with family, friends or on your own is an excellent way to stay active.  Enjoy being feeling healthier surrounded by all the fresh air and sunshine that you'll find on the top of the mountain. You will also burn a ton of calories while getting in some great runs.</p>
    {/* <img src="https://compassohio.com/wp-content/uploads/2019/01/tamarackclubfromsnoozerslope.jpg" alt=""></img> */}
        <h2>Choose a Ski Package:</h2>
        {categories.map((item) => (
          <button
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
        ))}
        <br></br>
    <p>We also offer ski lessons, delicious take-away meals, heated pool, insurance cover, and transportation at the resort. We also team up with other resort owners and food caterers to secure you the most affordable and best deals for you, your family and friends.  Contact us at 1800 122 122 for more information and our friendly staff would be able to assist you.</p>

    </div>
  

  );
}

export default CategoryMenu;
