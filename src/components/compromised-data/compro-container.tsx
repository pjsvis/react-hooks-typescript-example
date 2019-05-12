import * as React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import { CheckboxForm } from "../switch-form/checkbox-form";

interface Props {}

export const ComproContainer = (props: Props) => {
  // populate form
  // save form
  // submit form
  const flexItemBasis = "24%";
  const flexItemClassName = "mr2 mb2";
  return (
    <>
      <div>compro-container</div>
      <div>flex container for compro-sections</div>
      <div>side panel for summary and submit button</div>
      <Flex full inline wrap className="ba br3 b--black-10 pa2">
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>{" "}
        <FlexItem basis={flexItemBasis} className={flexItemClassName}>
          <CheckboxForm />
        </FlexItem>
      </Flex>
    </>
  );
};
