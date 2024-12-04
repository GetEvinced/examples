import React from "react";

export const Breadcrumbs = ({ source, items }) => {
  return (
    <nav data-testid="breadcrumbs" aria-label="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.linkProps.toPage}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
