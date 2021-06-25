import React from "react";

const Item = ({currency}) => {
  return (
    <li>
      <span>{`${currency.id} `}</span>
      <span>{currency.name}</span>
    </li>
  )
};

export default Item;
