import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px;
`;

const BreadcrumbItem = styled(Link)`
  font-size: 16px;
  color: #666;
  cursor: pointer;

  &:not(:last-child):after {
    content: '>';
    margin: 0 10px;
  }

  &:last-child {
    color: #000;
    /* cursor: default; */
  }
`;

const Breadcrumb = ({ items }) => {
  return (
    <BreadcrumbWrapper>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} to={item.to}>
            {item.name}
          </BreadcrumbItem>
        ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
