// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h1S53gDFAwan5k4kyk1C1D
// Component: YPyPVZa-z6
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: h1S53gDFAwan5k4kyk1C1D/projectcss
import * as sty from "./PlasmicButton1.module.css"; // plasmic-import: YPyPVZa-z6/css

export const PlasmicButton1__VariantProps = new Array();

export const PlasmicButton1__ArgProps = new Array();

function PlasmicButton1__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.text)}
      >
        {"Mint Pixel Gang Member"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton1__ArgProps,
      internalVariantPropNames: PlasmicButton1__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButton1__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton1";
  } else {
    func.displayName = `PlasmicButton1.${nodeName}`;
  }
  return func;
}

export const PlasmicButton1 = Object.assign(
  // Top-level PlasmicButton1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicButton1
    internalVariantProps: PlasmicButton1__VariantProps,
    internalArgProps: PlasmicButton1__ArgProps
  }
);

export default PlasmicButton1;
/* prettier-ignore-end */