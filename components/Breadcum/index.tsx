import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const BreadcumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: gray;
`;

const BreadcumItem = styled.span`
  margin-right: 0.5rem;
  cursor: pointer;

  &:not(:first-of-type) {
    border-left: 2px solid gray;
    padding-left: 1rem;
  }
`;

const Breadcum = () => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) return null;

  const path = window.location.pathname;

  const pathItems = path.split("/").filter((item) => item !== "");

  const getPathLink = (index: number) => {
    const path = pathItems.slice(0, index + 1).join("/");
    return `/${path}`;
  };

  const pathLinks = pathItems.map((item, index) => ({
    name: item[0].toUpperCase() + item.slice(1),
    link: getPathLink(index),
  }));

  const breadcumItems = [
    {
      name: "Home",
      link: "/",
    },
    ...pathLinks,
  ];

  return (
    <BreadcumContainer>
      {breadcumItems.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <BreadcumItem>{item.name}</BreadcumItem>
          </Link>
        );
      })}
    </BreadcumContainer>
  );
};

export default Breadcum;
