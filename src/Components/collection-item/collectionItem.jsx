import React from "react";
import "./collectionItem.scss";
import CustomBtn from "../custom-btn/customBtn";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/cartAction";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBtn onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
