import { Fragment } from "react";
import Head from "next/head";
import Icon from "@/public/assets/icons/icon-bulb.png";

const Layout = ({
  children,
  title = "Next JS",
  description = "Generated by create next app with variable system enhanced",
  image = Icon.src,
}) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title}`}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={image} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      {children}
    </Fragment>
  );
}

export default Layout;
