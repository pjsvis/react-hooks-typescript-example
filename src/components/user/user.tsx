import React from "react";
import { Main, Article, Image, Title, SubTitle, Button } from "./user-styles";

// Ref: https://medium.com/@jikkujose/tachyons-styled-components-pure-joy-6173d3888548

interface Props {
  name: string;
  username: string;
  imageURL: string;
  className?: string;
}
const handleClick = (username: string) => {
  console.log(username);
};


// TODO: fix sizing
export function User(props: Props) {
  const { name, username, imageURL } = props;
  return (
    <Main className={props.className}>
      <Article>
        <div className="flex items-center">
          <Image src={imageURL} />
          <div>
            <Title>{name}</Title>
            <SubTitle>{username}</SubTitle>
          </div>
        </div>
        <form>
          <Button onClick={() => handleClick(username)}>+ Follow</Button>
        </form>
      </Article>
    </Main>
  );
}
