import React from "react";
import "./collectionItem.scss";
import CustomBtn from '../custom-btn/customBtn';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/cartAction';

const collectionItem = ({ item, addItem }) => {

  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className='custom-btn'>
        <CustomBtn onClick={() => addItem(item)} inverted >Add to Cart </CustomBtn>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(collectionItem);
